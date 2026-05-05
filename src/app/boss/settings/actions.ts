"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { admins } from "@/db/schema";
import { createPasswordHash, verifyPassword } from "@/lib/auth";

const MIN_PASSWORD_LENGTH = 12;
const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 60;

interface SettingsState {
  error?: string;
  success?: string;
}

export async function updateSettingsAction(
  _prevState: SettingsState | null,
  formData: FormData,
): Promise<SettingsState> {
  const currentPassword = (formData.get("currentPassword") as string) ?? "";
  const username = ((formData.get("username") as string) ?? "").trim();
  const newPassword = (formData.get("newPassword") as string) ?? "";
  const newPasswordConfirm = (formData.get("newPasswordConfirm") as string) ?? "";

  if (!currentPassword) {
    return { error: "Aktuelles Passwort ist erforderlich." };
  }
  if (
    username.length < MIN_USERNAME_LENGTH ||
    username.length > MAX_USERNAME_LENGTH
  ) {
    return {
      error: `Benutzername muss zwischen ${MIN_USERNAME_LENGTH} und ${MAX_USERNAME_LENGTH} Zeichen lang sein.`,
    };
  }

  // Wenn ein neues Passwort gesetzt wird, muss es mindestens 12 Zeichen sein
  // und mit der Bestätigung übereinstimmen.
  const wantsPasswordChange = newPassword.length > 0 || newPasswordConfirm.length > 0;
  if (wantsPasswordChange) {
    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      return {
        error: `Neues Passwort muss mindestens ${MIN_PASSWORD_LENGTH} Zeichen lang sein.`,
      };
    }
    if (newPassword !== newPasswordConfirm) {
      return { error: "Die beiden neuen Passwort-Eingaben stimmen nicht überein." };
    }
  }

  const db = getDb();
  const [admin] = await db.select().from(admins).limit(1);
  if (!admin) {
    return { error: "Kein Admin-Account gefunden." };
  }

  if (!verifyPassword(currentPassword, admin.passwordHash)) {
    return { error: "Aktuelles Passwort ist falsch." };
  }

  const updates: Partial<typeof admins.$inferInsert> = { username };
  if (wantsPasswordChange) {
    updates.passwordHash = createPasswordHash(newPassword);
  }

  await db.update(admins).set(updates).where(eq(admins.id, admin.id));
  revalidatePath("/boss/settings");

  return {
    success: wantsPasswordChange
      ? "Benutzername und Passwort aktualisiert."
      : "Benutzername aktualisiert.",
  };
}
