"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeEqual } from "node:crypto";
import { getDb } from "@/db";
import { admins } from "@/db/schema";
import { createPasswordHash, createSession } from "@/lib/auth";
import {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
} from "@/lib/auth-constants";

const MIN_PASSWORD_LENGTH = 12;
const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 60;

function tokenIsValid(input: string | undefined): boolean {
  const expected = process.env.ADMIN_SETUP_TOKEN;
  if (!expected || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function setupAction(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string }> {
  const token = formData.get("token") as string;
  const reset = formData.get("reset") === "true";
  const username = ((formData.get("username") as string) ?? "").trim();
  const password = (formData.get("password") as string) ?? "";
  const passwordConfirm = (formData.get("passwordConfirm") as string) ?? "";

  if (!tokenIsValid(token)) {
    return { error: "Setup-Token ungültig oder abgelaufen." };
  }

  if (
    username.length < MIN_USERNAME_LENGTH ||
    username.length > MAX_USERNAME_LENGTH
  ) {
    return {
      error: `Benutzername muss zwischen ${MIN_USERNAME_LENGTH} und ${MAX_USERNAME_LENGTH} Zeichen lang sein.`,
    };
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return {
      error: `Passwort muss mindestens ${MIN_PASSWORD_LENGTH} Zeichen lang sein.`,
    };
  }

  if (password !== passwordConfirm) {
    return { error: "Die beiden Passwort-Eingaben stimmen nicht überein." };
  }

  const db = getDb();

  if (reset) {
    // Alle bestehenden Admins entfernen — User kommt aus Recovery-Flow
    await db.delete(admins);
  } else {
    // Im Erst-Setup: keine bestehenden Admins erlaubt
    const existing = await db.select({ id: admins.id }).from(admins).limit(1);
    if (existing.length > 0) {
      return { error: "Es existiert bereits ein Admin-Account." };
    }
  }

  const passwordHash = createPasswordHash(password);
  await db.insert(admins).values({ username, passwordHash });

  const sessionToken = await createSession();
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  redirect("/boss");
}
