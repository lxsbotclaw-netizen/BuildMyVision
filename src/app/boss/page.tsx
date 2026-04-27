import { connection } from "next/server";
import { getDb } from "@/db";
import { waitlistEntries } from "@/db/schema";
import { desc } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/** Kontakttyp-Labels für die Anzeige */
const CONTACT_TYPE_LABELS: Record<string, string> = {
  privatperson: "Privatperson",
  startup: "Startup / Gründer",
  unternehmen: "Unternehmen",
  creator: "Creator / Influencer",
};

/** Wizard-Auswahl aus JSON-String lesbar machen */
function formatWizardSelections(raw: string | null): string | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null) {
      return Object.entries(parsed)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
    }
    return raw;
  } catch {
    return raw;
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
        <>
          {/* Desktop-Tabelle */}
          <Card className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>E-Mail</TableHead>
                  <TableHead>Telefon</TableHead>
                  <TableHead>Typ</TableHead>
                  <TableHead>Erstellt am</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">{entry.name}</TableCell>
                    <TableCell>{entry.email}</TableCell>
                    <TableCell>{entry.phone || "–"}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {entry.contactTypes.split(",").map((type) => (
                          <Badge key={type} variant="secondary">
                            {CONTACT_TYPE_LABELS[type] || type}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {formatDate(entry.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Mobile-Karten */}
          <div className="flex flex-col gap-4 md:hidden">
            {entries.map((entry) => (
              <Card key={entry.id}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{entry.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{entry.email}</p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {entry.phone && (
                    <p><span className="font-medium">Telefon:</span> {entry.phone}</p>
                  )}
                  {entry.address && (
                    <p><span className="font-medium">Anschrift:</span> {entry.address}</p>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {entry.contactTypes.split(",").map((type) => (
                      <Badge key={type} variant="secondary">
                        {CONTACT_TYPE_LABELS[type] || type}
                      </Badge>
                    ))}
                  </div>
                  {formatWizardSelections(entry.wizardSelections) && (
                    <p><span className="font-medium">Wizard:</span> {formatWizardSelections(entry.wizardSelections)}</p>
                  )}
                  {entry.projectDescription && (
                    <p><span className="font-medium">Beschreibung:</span> {entry.projectDescription}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Erstellt: {formatDate(entry.createdAt)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detail-Bereich Desktop: Projektbeschreibung + Wizard unter der Tabelle */}
          <div className="hidden flex-col gap-4 md:flex">
            {entries
              .filter((e) => e.projectDescription || e.wizardSelections || e.address)
              .map((entry) => (
                <Card key={entry.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">
                      {entry.name} — Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    {entry.address && (
                      <p><span className="font-medium">Anschrift:</span> {entry.address}</p>
                    )}
                    {formatWizardSelections(entry.wizardSelections) && (
                      <p><span className="font-medium">Wizard-Auswahl:</span> {formatWizardSelections(entry.wizardSelections)}</p>
                    )}
                    {entry.projectDescription && (
                      <div>
                        <p className="font-medium">Projektbeschreibung:</p>
                        <p className="mt-1 whitespace-pre-wrap text-muted-foreground">
                          {entry.projectDescription}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
