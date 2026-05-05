import { connection } from "next/server";
import { getDb } from "@/db";
import { waitlistEntries } from "@/db/schema";
import { desc } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/** Kontakttyp-Labels für die Anzeige */
const CONTACT_TYPE_LABELS: Record<string, string> = {
  privatperson: "Privatperson",
  startup: "Startup / Gründer",
  unternehmen: "Unternehmen",
  creator: "Creator / Influencer",
};

/** Wizard-Feld-Keys → Anzeige-Label im Admin (Reihenfolge wird beibehalten) */
const WIZARD_FIELD_LABELS: Record<string, string> = {
  projectType: "Projekttyp",
  purpose: "Zweck",
  status: "Status",
};

type WizardItem = { label: string; value: string };

/** Liest Wizard-Auswahl aus JSON-String und liefert nur menschlich lesbare Stichpunkte */
function getWizardItems(raw: string | null): WizardItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return Object.entries(WIZARD_FIELD_LABELS).flatMap(([key, label]) => {
      const value = parsed[`${key}Label`] ?? parsed[key];
      return value ? [{ label, value: String(value) }] : [];
    });
  } catch {
    return [];
  }
}

/** Datum formatieren (deutsch) */
function formatDate(date: Date | null): string {
  if (!date) return "–";
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default async function BossPage() {
  await connection();
  const db = getDb();
  const entries = await db
    .select()
    .from(waitlistEntries)
    .orderBy(desc(waitlistEntries.createdAt));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Anfragen</h1>
        <span className="text-sm text-muted-foreground">
          {entries.length} {entries.length === 1 ? "Eintrag" : "Einträge"}
        </span>
      </div>

      {entries.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Noch keine Anfragen vorhanden.
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {entries.map((entry) => {
            const wizardItems = getWizardItems(entry.wizardSelections);
            return (
              <Card key={entry.id}>
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{entry.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">
                        Eingegangen am {formatDate(entry.createdAt)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {entry.contactTypes.split(",").map((type) => (
                        <Badge key={type} variant="secondary">
                          {CONTACT_TYPE_LABELS[type] || type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  <dl className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-muted-foreground">E-Mail</dt>
                      <dd className="font-medium break-all">{entry.email}</dd>
                    </div>
                    {entry.phone && (
                      <div>
                        <dt className="text-muted-foreground">Telefon</dt>
                        <dd className="font-medium">{entry.phone}</dd>
                      </div>
                    )}
                    {entry.address && (
                      <div className="sm:col-span-2">
                        <dt className="text-muted-foreground">Adresse</dt>
                        <dd className="font-medium whitespace-pre-wrap">{entry.address}</dd>
                      </div>
                    )}
                  </dl>

                  {wizardItems.length > 0 && (
                    <div className="border-t pt-4">
                      <h3 className="mb-2 text-sm font-semibold">Wizard-Auswahl</h3>
                      <ul className="space-y-1 text-sm">
                        {wizardItems.map((item) => (
                          <li key={item.label} className="flex gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span>
                              <span className="text-muted-foreground">{item.label}:</span>{" "}
                              <span className="font-medium">{item.value}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {entry.projectDescription && (
                    <div className="border-t pt-4">
                      <h3 className="mb-2 text-sm font-semibold">Projektbeschreibung</h3>
                      <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                        {entry.projectDescription}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
