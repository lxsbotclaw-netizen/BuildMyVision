"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { admins } from "@/db/schema";
import { createSession, verifyPassword } from "@/lib/auth";
import { SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from "@/lib/auth-constants";

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string }> {
  const username = (formData.get("username") as string)?.trim() ?? "";
  const password = (formData.get("password") as string) ?? "";

  if (!username || !password) {
    return { error: "Benutzername und Passwort sind erforderlich." };
  }

  const db = getDb();
  const [admin] = await db
    .select()
    .from(admins)
    .where(eq(admins.username, username))
    .limit(1);

  if (!admin || !verifyPassword(password, admin.passwordHash)) {
    return { error: "Ungültige Anmeldedaten." };
  }

  await db
    .update(admins)
    .set({ lastLoginAt: new Date() })
    .where(eq(admins.id, admin.id));

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
