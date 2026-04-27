"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectWizard } from "@/components/project-wizard";
import { MAX_DESCRIPTION_LENGTH } from "@/lib/constants";
import type { ContactType } from "@/db/schema";

const CONTACT_OPTIONS: { value: ContactType; label: string }[] = [
  { value: "privatperson", label: "Privatperson" },
  { value: "startup", label: "Startup / Gründer" },
  { value: "unternehmen", label: "Unternehmen" },
  { value: "creator", label: "Creator / Influencer" },
];

interface FieldErrors {
  name?: string[];
  email?: string[];
  phone?: string[];
  address?: string[];
  contactTypes?: string[];
  projectDescription?: string[];
  wizardSelections?: string[];
  privacyAccepted?: string[];
}

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [selectedTypes, setSelectedTypes] = useState<ContactType[]>([]);
  const [wizardValue, setWizardValue] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  function toggleContactType(type: ContactType) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      address: (formData.get("address") as string) || "",
      contactTypes: selectedTypes,
      projectDescription:
        (formData.get("projectDescription") as string) || "",
      wizardSelections: wizardValue,
      privacyAccepted,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = await response.json();

      if (!response.ok) {
        if (body.details) {
          setFieldErrors(body.details);
        }
        setResult({
          type: "error",
          message: body.error || "Ein Fehler ist aufgetreten.",
        });
        return;
      }

      setResult({ type: "success", message: body.message });
      (event.target as HTMLFormElement).reset();
      setSelectedTypes([]);
      setWizardValue("");
      setPrivacyAccepted(false);
    } catch {
      setResult({
        type: "error",
        message: "Verbindungsfehler. Bitte versuche es erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="warteliste" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Platz auf der Warteliste sichern
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result?.type === "success" ? (
              <div className="rounded-md bg-green-50 p-4 text-center text-green-800 dark:bg-green-950 dark:text-green-200">
                <p className="font-medium">{result.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name (Pflicht) */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Max Mustermann"
                    required
                  />
                  {fieldErrors.name && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.name[0]}
                    </p>
                  )}
                </div>

                {/* E-Mail (Pflicht) */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-Mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    required
                  />
                  {fieldErrors.email && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.email[0]}
                    </p>
                  )}
                </div>

                {/* Telefon (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+49 123 456789"
                  />
                  {fieldErrors.phone && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.phone[0]}
                    </p>
                  )}
                </div>

                {/* Anschrift (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="address">Anschrift</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Musterstr. 1, 10115 Berlin"
                  />
                  {fieldErrors.address && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.address[0]}
                    </p>
                  )}
                </div>

                {/* Kontakttyp — Mehrfachauswahl */}
                <div className="space-y-2">
                  <Label>
                    Ich bin... <span className="text-destructive">*</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {CONTACT_OPTIONS.map((option) => {
                      const isSelected = selectedTypes.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleContactType(option.value)}
                          className={`flex items-center gap-2 rounded-md border px-3 py-2.5 text-left text-sm transition-colors ${
                            isSelected
                              ? "border-primary bg-primary/5 text-foreground"
                              : "border-border bg-background text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border text-xs ${
                              isSelected
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border"
                            }`}
                          >
                            {isSelected && "✓"}
                          </span>
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                  {fieldErrors.contactTypes && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.contactTypes[0]}
                    </p>
                  )}
                </div>

                {/* Projekt-Wizard */}
                <div className="space-y-2">
                  <Label>Projekt-Wizard</Label>
                  <p className="text-xs text-muted-foreground">
                    Klicke dich durch und beschreibe dein Vorhaben in wenigen
                    Schritten.
                  </p>
                  <ProjectWizard
                    value={wizardValue}
                    onChange={setWizardValue}
                  />
                </div>

                {/* Freitext (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">
                    Freitext-Beschreibung
                  </Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Beschreibe dein Vorhaben in eigenen Worten..."
                    rows={4}
                    maxLength={MAX_DESCRIPTION_LENGTH}
                  />
                  <p className="text-xs text-muted-foreground">
                    Wizard oder Freitext — mindestens eines muss ausgefüllt
                    sein.
                  </p>
                  {fieldErrors.projectDescription && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.projectDescription[0]}
                    </p>
                  )}
                </div>

                {/* Datenschutz-Checkbox */}
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border"
                    />
                    <span className="text-sm text-muted-foreground">
                      Ich habe die{" "}
                      <Link
                        href="/datenschutz"
                        className="underline hover:text-foreground"
                        target="_blank"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                      <span className="text-destructive">*</span>
                    </span>
                  </label>
                  {fieldErrors.privacyAccepted && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.privacyAccepted[0]}
                    </p>
                  )}
                </div>

                {/* Fehler-Anzeige */}
                {result?.type === "error" && (
                  <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    {result.message}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Jetzt eintragen"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Deine Daten werden vertraulich behandelt.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
