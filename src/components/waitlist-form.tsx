"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MAX_DESCRIPTION_LENGTH } from "@/lib/constants";

interface FieldErrors {
  name?: string[];
  email?: string[];
  address?: string[];
  contactType?: string[];
  projectDescription?: string[];
}

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      contactType: formData.get("contactType") as string,
      projectDescription: formData.get("projectDescription") as string,
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Max Mustermann"
                    required
                  />
                  {fieldErrors.name && (
                    <p className="text-sm text-destructive">{fieldErrors.name[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    required
                  />
                  {fieldErrors.email && (
                    <p className="text-sm text-destructive">{fieldErrors.email[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Anschrift</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Musterstr. 1, 10115 Berlin"
                    required
                  />
                  {fieldErrors.address && (
                    <p className="text-sm text-destructive">{fieldErrors.address[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactType">Ich bin...</Label>
                  <Select name="contactType" required>
                    <SelectTrigger id="contactType">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unternehmen">Unternehmen</SelectItem>
                      <SelectItem value="privatperson">Privatperson</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldErrors.contactType && (
                    <p className="text-sm text-destructive">{fieldErrors.contactType[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDescription">
                    Projektwünsche & Beschreibung
                  </Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Beschreibe kurz dein Vorhaben..."
                    rows={5}
                    maxLength={MAX_DESCRIPTION_LENGTH}
                    required
                  />
                  {fieldErrors.projectDescription && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.projectDescription[0]}
                    </p>
                  )}
                </div>

                {result?.type === "error" && (
                  <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    {result.message}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Jetzt eintragen"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Du erhältst eine Bestätigungsmail. Deine Daten werden
                  vertraulich behandelt.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
