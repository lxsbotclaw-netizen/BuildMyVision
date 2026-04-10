import { NextResponse } from "next/server";
import { eq, and, or } from "drizzle-orm";
import { getDb } from "@/db";
import { waitlistEntries } from "@/db/schema";
import { waitlistSchema } from "@/validations/waitlist";
import { generateConfirmationToken, getTokenExpiryDate } from "@/lib/tokens";
import { getResend } from "@/lib/resend";
import { getBaseUrl } from "@/lib/constants";
import { ConfirmationEmail } from "@/emails/confirmation-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validierungsfehler", details: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      phone,
      address,
      contactTypes,
      projectDescription,
      wizardSelections,
    } = parsed.data;
    const db = getDb();

    // Duplikat-Check: E-Mail bereits bestätigt oder pending?
    const existing = await db
      .select({ id: waitlistEntries.id, status: waitlistEntries.status })
      .from(waitlistEntries)
      .where(
        and(
          eq(waitlistEntries.email, email.toLowerCase()),
          or(
            eq(waitlistEntries.status, "confirmed"),
            eq(waitlistEntries.status, "pending"),
          ),
        ),
      )
      .limit(1);

    if (existing.length > 0) {
      if (existing[0].status === "confirmed") {
        return NextResponse.json(
          { error: "Diese E-Mail-Adresse ist bereits auf der Warteliste." },
          { status: 409 },
        );
      }
      // Bereits pending — Hinweis auf Bestätigungsmail
      return NextResponse.json(
        { error: "Eine Bestätigungsmail wurde bereits gesendet. Bitte prüfe dein Postfach." },
        { status: 409 },
      );
    }

    const token = generateConfirmationToken();
    const tokenExpiresAt = getTokenExpiryDate();
    const baseUrl = getBaseUrl();
    const confirmUrl = `${baseUrl}/api/confirm?token=${token}`;

    // Bestätigungsmail zuerst senden — DB-Eintrag nur bei Erfolg
    const resend = getResend();
    const emailResult = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email.toLowerCase(),
      subject: "Bitte bestätige deine Anfrage bei BuildMyVision",
      react: ConfirmationEmail({ name, confirmUrl }),
    });

    if (emailResult.error) {
      console.error("Resend-Fehler:", emailResult.error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut." },
        { status: 502 },
      );
    }

    // E-Mail erfolgreich — jetzt DB-Eintrag speichern
    await db.insert(waitlistEntries).values({
      name,
      email: email.toLowerCase(),
      phone: phone || null,
      address: address || null,
      contactTypes: contactTypes.join(","),
      projectDescription: projectDescription || null,
      wizardSelections: wizardSelections || null,
      privacyAccepted: new Date(),
      confirmationToken: token,
      tokenExpiresAt,
    });

    return NextResponse.json(
      { message: "Wir haben dir eine Bestätigungsmail gesendet. Bitte prüfe dein Postfach." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Waitlist POST Fehler:", error);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später erneut." },
      { status: 500 },
    );
  }
}
