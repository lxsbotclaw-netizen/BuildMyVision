import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { waitlistEntries } from "@/db/schema";
import { isTokenExpired } from "@/lib/tokens";
import { getResend } from "@/lib/resend";
import { getBaseUrl } from "@/lib/constants";
import { NotificationEmail } from "@/emails/notification-email";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Kein Token angegeben." },
        { status: 400 },
      );
    }

    const db = getDb();
    const entries = await db
      .select()
      .from(waitlistEntries)
      .where(eq(waitlistEntries.confirmationToken, token))
      .limit(1);

    if (entries.length === 0) {
      return NextResponse.redirect(
        `${getBaseUrl()}/confirmed?status=invalid`,
      );
    }

    const entry = entries[0];

    // Bereits bestaetigt — trotzdem zur Erfolgsseite weiterleiten
    if (entry.status === "confirmed") {
      return NextResponse.redirect(
        `${getBaseUrl()}/confirmed?status=already`,
      );
    }

    // Token abgelaufen?
    if (isTokenExpired(entry.tokenExpiresAt)) {
      return NextResponse.redirect(
        `${getBaseUrl()}/confirmed?status=expired`,
      );
    }

    // Status auf confirmed setzen
    await db
      .update(waitlistEntries)
      .set({
        status: "confirmed",
        confirmedAt: new Date(),
      })
      .where(eq(waitlistEntries.id, entry.id));

    // Benachrichtigungsmail an CONTACT_EMAIL senden
    const resend = getResend();
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.CONTACT_EMAIL!,
      subject: `Neue bestaetigte Anfrage: ${entry.name}`,
      react: NotificationEmail({
        name: entry.name,
        email: entry.email,
        address: entry.address,
        contactType: entry.contactType,
        projectDescription: entry.projectDescription,
        createdAt: entry.createdAt,
        confirmedAt: new Date(),
      }),
    });

    return NextResponse.redirect(
      `${getBaseUrl()}/confirmed?status=success`,
    );
  } catch (error) {
    console.error("Confirm GET Fehler:", error);
    return NextResponse.redirect(
      `${getBaseUrl()}/confirmed?status=error`,
    );
  }
}
