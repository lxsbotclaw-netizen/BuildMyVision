import { randomUUID } from "crypto";
import { TOKEN_EXPIRY_HOURS } from "./constants";

/** Generiert einen kryptographisch sicheren Bestaetigungstoken */
export function generateConfirmationToken(): string {
  return randomUUID();
}

/** Berechnet den Ablaufzeitpunkt basierend auf TOKEN_EXPIRY_HOURS */
export function getTokenExpiryDate(): Date {
  const expiry = new Date();
  expiry.setHours(expiry.getHours() + TOKEN_EXPIRY_HOURS);
  return expiry;
}

/** Prueft ob ein Token abgelaufen ist */
export function isTokenExpired(expiresAt: Date): boolean {
  return new Date() > expiresAt;
}
