import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { waitlistEntries } from "@/db/schema";
import { waitlistSchema } from "@/validations/waitlist";

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

    // Duplikat-Check
    const existing = await db
      .select({ id: waitlistEntries.id })
      .from(waitlistEntries)
      .where(eq(waitlistEntries.email, email.toLowerCase()))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Diese E-Mail-Adresse ist bereits auf der Warteliste." },
        { status: 409 },
      );
    }

    await db.insert(waitlistEntries).values({
      name,
      email: email.toLowerCase(),
      phone: phone || null,
      address: address || null,
      contactTypes: contactTypes.join(","),
      projectDescription: projectDescription || null,
      wizardSelections: wizardSelections || null,
      privacyAccepted: new Date(),
    });

    return NextResponse.json(
      { message: "Deine Anfrage wurde erfolgreich gespeichert. Wir melden uns bei dir!" },
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
