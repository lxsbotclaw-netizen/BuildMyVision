"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSession, verifyPassword } from "@/lib/auth";
import { SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from "@/lib/auth-constants";

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string }> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Benutzername und Passwort sind erforderlich." };
  }

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminUsername || !adminPasswordHash) {
    return { error: "Admin-Zugangsdaten sind nicht konfiguriert." };
  }

  // TEMP-DEBUG: Diagnose-Logging (keine Klartext-Werte) — vor Commit entfernen
  const usernameMatch = username === adminUsername;
  const passwordMatch = verifyPassword(password, adminPasswordHash);
  console.log("[login-debug]", {
    inputUsernameLen: username.length,
    envUsernameLen: adminUsername.length,
    inputUsernameTrimEqualsEnv: username.trim() === adminUsername.trim(),
    usernameMatch,
    inputPasswordLen: password.length,
    hashFormatHasColon: adminPasswordHash.includes(":"),
    hashLen: adminPasswordHash.length,
    passwordMatch,
  });

  if (!usernameMatch || !passwordMatch) {
    return { error: "Ungültige Anmeldedaten." };
  }

  const token = await createSession();
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  redirect("/boss");
}
