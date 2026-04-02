import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Webseiten",
    description:
      "Moderne, responsive Webseiten die auf allen Geraeten perfekt aussehen.",
  },
  {
    title: "Plattformen",
    description:
      "Individuelle Web-Plattformen mit Nutzerverwaltung, Dashboards und mehr.",
  },
  {
    title: "Web-Apps",
    description:
      "Interaktive Anwendungen die komplexe Geschaeftsprozesse digitalisieren.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          Was wir umsetzen
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Egal ob einfache Landingpage oder komplexe Plattform — wir finden die
          passende Loesung fuer dein Vorhaben.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
