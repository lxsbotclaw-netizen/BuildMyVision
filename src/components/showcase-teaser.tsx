import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCKUPS } from "@/data/mockups";
import { MockupCard } from "@/components/showcase/mockup-card";

const TEASER_SLUGS = ["startup-mvp", "saas-dashboard", "creator-portfolio"] as const;

export function ShowcaseTeaser() {
  const teaserMockups = TEASER_SLUGS.map((slug) =>
    MOCKUPS.find((m) => m.slug === slug),
  ).filter((m): m is (typeof MOCKUPS)[number] => Boolean(m));

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Showcase
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
              Was wir für dich bauen können
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Acht Mockup-Konzepte für die häufigsten Use-Cases. Zwei davon
              sind als interaktive Demo begehbar.
            </p>
          </div>
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:border-brand/50 hover:bg-card"
          >
            Alle Mockups
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teaserMockups.map((mockup) => (
            <MockupCard key={mockup.slug} mockup={mockup} />
          ))}
        </div>
      </div>
    </section>
  );
}
