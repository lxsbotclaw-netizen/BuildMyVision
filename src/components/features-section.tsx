import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const audiences = [
  {
    title: "Startups & Gründer",
    description: "Von der Idee zum funktionierenden Produkt",
    points: [
      "MVP schnell launchen und validieren",
      "Skalierbare Architektur von Tag 1",
      "Pitch-ready Produkt für Investoren",
    ],
  },
  {
    title: "Unternehmen",
    description: "Digitale Prozesse und Präsenz optimieren",
    points: [
      "Professionelle Web-Präsenz",
      "KI-Integration in bestehende Workflows",
      "Individuelle Plattformen und Tools",
    ],
  },
  {
    title: "Creator & Influencer",
    description: "Deine Marke, deine Plattform",
    points: [
      "Portfolio und persönliche Marke",
      "Monetarisierung: Kurse, Produkte, Membership",
      "Landing Pages für Kampagnen",
    ],
  },
  {
    title: "Privatpersonen",
    description: "Dein Projekt, professionell umgesetzt",
    points: [
      "Persönliche Webseite oder Blog",
      "Nebenprojekte digital umsetzen",
      "Einfach und bezahlbar",
    ],
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          Für wen wir bauen
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Egal ob Startup mit einer Idee oder Unternehmen mit klarem Auftrag —
          wir finden die passende Lösung für dein Vorhaben.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <Card key={audience.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{audience.title}</CardTitle>
                <CardDescription>{audience.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 shrink-0">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
