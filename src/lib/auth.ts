import { scryptSync, randomBytes, timingSafeEqual } from "node:crypto";
import { SESSION_MAX_AGE_SECONDS } from "./auth-constants";

const SCRYPT_KEY_LENGTH = 64;

/**
 * Prüft ein Klartext-Passwort gegen einen gespeicherten Hash (salt:hash Format).
 * Nur in Server Actions / Route Handlers verwenden (node:crypto nicht in Middleware verfügbar).
 */
export function verifyPassword(input: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;

  const inputHash = scryptSync(input, salt, SCRYPT_KEY_LENGTH);
  const storedBuffer = Buffer.from(hash, "hex");

  if (inputHash.length !== storedBuffer.length) return false;
  return timingSafeEqual(inputHash, storedBuffer);
}

/**
 * Erzeugt einen Hash im Format salt:hash für die Env-Variable ADMIN_PASSWORD_HASH.
 * Einmalig aufrufen, z.B. via `node -e "import('./src/lib/auth.js').then(m => console.log(m.createPasswordHash('dein-passwort')))"`.
 */
export function createPasswordHash(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, SCRYPT_KEY_LENGTH).toString("hex");
  return `${salt}:${hash}`;
}

/**
 * Erstellt ein signiertes Session-Token (HMAC-SHA256 via Web Crypto API).
 * Kompatibel mit Middleware und Server-Kontext.
 */
export async function createSession(): Promise<string> {
  const payload = {
    sub: "admin",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS,
  };

  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const secret = new TextEncoder().encode(process.env.SESSION_SECRET!);
  const key = await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  const signatureStr = Buffer.from(signature).toString("base64url");

  return `${data}.${signatureStr}`;
}

/**
 * Prüft ein Session-Token auf gültige Signatur und Ablaufzeit.
 * Nutzt nur Web Crypto API — kompatibel mit Middleware.
 */
export async function verifySession(token: string): Promise<boolean> {
  try {
    const [data, signature] = token.split(".");
    if (!data || !signature) return false;

    const secret = new TextEncoder().encode(process.env.SESSION_SECRET!);
    const key = await crypto.subtle.importKey(
      "raw",
      secret,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );

    const signatureBuffer = Buffer.from(signature, "base64url");
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBuffer,
      new TextEncoder().encode(data),
    );
    if (!valid) return false;

    const payload = JSON.parse(Buffer.from(data, "base64url").toString());
    return payload.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}
