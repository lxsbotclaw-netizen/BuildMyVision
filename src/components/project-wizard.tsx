"use client";

import { useState } from "react";

/** Wizard-Konfiguration: Schritte und Optionen */
const PROJECT_TYPES = [
  { value: "webseite", label: "Webseite" },
  { value: "ecommerce", label: "Online-Shop / E-Commerce" },
  { value: "plattform", label: "Web-Plattform / Portal" },
  { value: "webapp", label: "Web-App / Software" },
  { value: "ki", label: "KI-Lösung / Automatisierung" },
  { value: "sonstiges", label: "Sonstiges" },
] as const;

const PURPOSE_OPTIONS: Record<string, { value: string; label: string }[]> = {
  webseite: [
    { value: "firmenwebseite", label: "Unternehmens-/Firmenwebseite" },
    { value: "portfolio", label: "Portfolio / Kreativ-Webseite" },
    { value: "landingpage", label: "Landing Page / Kampagnenseite" },
    { value: "blog", label: "Blog / Magazin" },
    { value: "leadgen", label: "Lead-Generierung" },
  ],
  ecommerce: [
    { value: "onlineshop", label: "Eigener Online-Shop" },
    { value: "digitalprodukte", label: "Digitale Produkte / Downloads" },
    { value: "marktplatz", label: "Marktplatz (mehrere Anbieter)" },
    { value: "buchung", label: "Buchungs-/Reservierungssystem" },
  ],
  plattform: [
    { value: "kundenportal", label: "Kundenportal / Dashboard" },
    { value: "community", label: "Community / Forum" },
    { value: "lernplattform", label: "Lernplattform / Kurse" },
    { value: "vermittlung", label: "Vermittlungsplattform (Matching)" },
  ],
  webapp: [
    { value: "saas", label: "SaaS-Produkt" },
    { value: "internestool", label: "Internes Tool / Verwaltung" },
    { value: "crm", label: "CRM / Projektmanagement" },
    { value: "datenanalyse", label: "Datenanalyse / Reporting" },
  ],
  ki: [
    { value: "chatbot", label: "Chatbot / KI-Assistent" },
    { value: "workflow", label: "Workflow-Automatisierung" },
    { value: "datenverarbeitung", label: "Datenverarbeitung / Analyse" },
    { value: "contentgen", label: "Content-Generierung" },
  ],
};

const STATUS_OPTIONS = [
  { value: "neu", label: "Komplett neu (Greenfield)" },
  { value: "redesign", label: "Bestehende Webseite/App erneuern" },
  { value: "erweiterung", label: "Bestehendes erweitern/ausbauen" },
] as const;

interface ProjectWizardProps {
  value: string;
  onChange: (value: string) => void;
}

type WizardStep = "type" | "purpose" | "status" | "done";

interface WizardState {
  projectType: string;
  projectTypeLabel: string;
  purpose: string;
  purposeLabel: string;
  status: string;
  statusLabel: string;
}

export function ProjectWizard({ value, onChange }: ProjectWizardProps) {
  const [step, setStep] = useState<WizardStep>(value ? "done" : "type");
  const [selections, setSelections] = useState<WizardState>(() =>
    parseWizardValue(value),
  );

  function parseWizardValue(val: string): WizardState {
    if (!val) {
      return {
        projectType: "",
        projectTypeLabel: "",
        purpose: "",
        purposeLabel: "",
        status: "",
        statusLabel: "",
      };
    }
    // Versuche gespeicherten Wert zu parsen
    try {
      return JSON.parse(val);
    } catch {
      return {
        projectType: "",
        projectTypeLabel: "",
        purpose: "",
        purposeLabel: "",
        status: "",
        statusLabel: "",
      };
    }
  }

  function selectType(typeValue: string, typeLabel: string) {
    const next: WizardState = {
      ...selections,
      projectType: typeValue,
      projectTypeLabel: typeLabel,
      purpose: "",
      purposeLabel: "",
    };
    setSelections(next);

    // "Sonstiges" überspringt den Zweck-Schritt
    if (typeValue === "sonstiges") {
      setStep("status");
    } else {
      setStep("purpose");
    }
  }

  function selectPurpose(purposeValue: string, purposeLabel: string) {
    const next: WizardState = {
      ...selections,
      purpose: purposeValue,
      purposeLabel: purposeLabel,
    };
    setSelections(next);
    setStep("status");
  }

  function selectStatus(statusValue: string, statusLabel: string) {
    const next: WizardState = {
      ...selections,
      status: statusValue,
      statusLabel: statusLabel,
    };
    setSelections(next);
    setStep("done");

    // Wizard-Ergebnis als JSON-String speichern
    onChange(JSON.stringify(next));
  }

  function goBack() {
    if (step === "purpose") setStep("type");
    else if (step === "status") {
      if (selections.projectType === "sonstiges") {
        setStep("type");
      } else {
        setStep("purpose");
      }
    } else if (step === "done") setStep("status");
  }

  function reset() {
    setSelections({
      projectType: "",
      projectTypeLabel: "",
      purpose: "",
      purposeLabel: "",
      status: "",
      statusLabel: "",
    });
    setStep("type");
    onChange("");
  }

  // Zusammenfassung anzeigen wenn fertig
  if (step === "done" && selections.projectType) {
    const summary = [
      selections.projectTypeLabel,
      selections.purposeLabel,
      selections.statusLabel,
    ]
      .filter(Boolean)
      .join(" → ");

    return (
      <div className="rounded-lg border border-border bg-muted/30 p-4">
        <div className="mb-2 text-xs font-medium text-muted-foreground">
          Deine Auswahl
        </div>
        <p className="mb-3 text-sm">{summary}</p>
        <button
          type="button"
          onClick={reset}
          className="text-xs text-muted-foreground underline transition-colors hover:text-foreground"
        >
          Auswahl ändern
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border p-4">
      {/* Schritt-Anzeige */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          {step === "type" && "Schritt 1/3 — Was möchtest du umsetzen?"}
          {step === "purpose" && "Schritt 2/3 — Welcher Zweck?"}
          {step === "status" && "Schritt 3/3 — Gibt es schon etwas?"}
        </span>
        {step !== "type" && (
          <button
            type="button"
            onClick={goBack}
            className="text-xs text-muted-foreground underline transition-colors hover:text-foreground"
          >
            ← Zurück
          </button>
        )}
      </div>

      {/* Optionen */}
      <div className="grid gap-2 sm:grid-cols-2">
        {step === "type" &&
          PROJECT_TYPES.map((type) => (
            <WizardOption
              key={type.value}
              label={type.label}
              onClick={() => selectType(type.value, type.label)}
            />
          ))}

        {step === "purpose" &&
          PURPOSE_OPTIONS[selections.projectType]?.map((option) => (
            <WizardOption
              key={option.value}
              label={option.label}
              onClick={() => selectPurpose(option.value, option.label)}
            />
          ))}

        {step === "status" &&
          STATUS_OPTIONS.map((option) => (
            <WizardOption
              key={option.value}
              label={option.label}
              onClick={() => selectStatus(option.value, option.label)}
            />
          ))}
      </div>
    </div>
  );
}

function WizardOption({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md border border-border bg-background px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted"
    >
      {label}
    </button>
  );
}
