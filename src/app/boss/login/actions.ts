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

  if (username !== adminUsername || !verifyPassword(password, adminPasswordHash)) {
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
