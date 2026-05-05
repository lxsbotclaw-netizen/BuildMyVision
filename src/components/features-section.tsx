import { Briefcase, Palette, Rocket, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Audience {
  title: string;
  description: string;
  Icon: LucideIcon;
  points: readonly string[];
}

const audiences: readonly Audience[] = [
  {
    title: "Startups & Gründer",
    description: "Von der Idee zum funktionierenden Produkt",
    Icon: Rocket,
    points: [
      "MVP schnell launchen und validieren",
      "Skalierbare Architektur von Tag 1",
      "Pitch-ready Produkt für Investoren",
    ],
  },
  {
    title: "Unternehmen",
    description: "Digitale Prozesse und Präsenz optimieren",
    Icon: Briefcase,
    points: [
      "Professionelle Web-Präsenz",
      "KI-Integration in bestehende Workflows",
      "Individuelle Plattformen und Tools",
    ],
  },
  {
    title: "Creator & Influencer",
    description: "Deine Marke, deine Plattform",
    Icon: Palette,
    points: [
      "Portfolio und persönliche Marke",
      "Monetarisierung: Kurse, Produkte, Membership",
      "Landing Pages für Kampagnen",
    ],
  },
  {
    title: "Privatpersonen",
    description: "Dein Projekt, professionell umgesetzt",
    Icon: Sparkles,
    points: [
      "Persönliche Webseite oder Blog",
      "Nebenprojekte digital umsetzen",
      "Einfach und bezahlbar",
    ],
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Zielgruppen
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Für wen wir bauen
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Egal ob Startup mit einer Idee oder Unternehmen mit klarem Auftrag —
            wir finden die passende Lösung für dein Vorhaben.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ title, description, Icon, points }) => (
            <article
              key={title}
              className="lift-on-hover group flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
