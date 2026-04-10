import Link from "next/link";
import { getAllEntries } from "@/data/lexikon";
import { LexikonCard } from "@/components/lexikon/lexikon-card";

/** Ausgewählte Begriffe für den Teaser auf der Startseite */
const FEATURED_SLUGS = [
  "ki-agent",
  "suchmaschinenoptimierung",
  "mvp-minimum-viable-product",
  "landing-page",
  "automatisierung",
  "saas",
];

export function LexikonTeaser() {
  const allEntries = getAllEntries();
  const featured = FEATURED_SLUGS.map((slug) =>
    allEntries.find((e) => e.slug === slug)
  ).filter((e) => e !== undefined);

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          Digital-Lexikon
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          KI, Web-Entwicklung und digitale Technologie — verständlich erklärt
          für Gründer und Unternehmer.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry) => (
            <LexikonCard key={entry.slug} entry={entry} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/lexikon"
            className="inline-flex h-11 items-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
          >
            Alle {allEntries.length} Begriffe ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
