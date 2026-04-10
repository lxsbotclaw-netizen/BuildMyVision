import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getEntryBySlug,
  CATEGORY_LABELS,
} from "@/data/lexikon";
import { LexikonRelated } from "@/components/lexikon/lexikon-related";
import { LexikonCta } from "@/components/lexikon/lexikon-cta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return {};

  return {
    title: `${entry.term} — einfach erklärt | BuildMyVision`,
    description: entry.shortDefinition,
    alternates: { canonical: `/lexikon/${entry.slug}` },
  };
}

export default async function LexikonEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.term,
    description: entry.shortDefinition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "BuildMyVision Digital-Lexikon",
      url: "/lexikon",
    },
  };

  return (
    <article className="px-4 py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Startseite
          </Link>
          <span>/</span>
          <Link
            href="/lexikon"
            className="transition-colors hover:text-foreground"
          >
            Lexikon
          </Link>
          <span>/</span>
          <span className="text-foreground">{entry.term}</span>
        </nav>

        {/* Kategorie-Badge */}
        <div className="mb-4 inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          {CATEGORY_LABELS[entry.category]}
        </div>

        {/* Titel */}
        <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          Was ist {entry.term}?
        </h1>

        {/* Kurzdefinition */}
        <div className="mb-8 rounded-lg border border-border bg-muted/30 p-4 text-base leading-relaxed md:p-6">
          {entry.shortDefinition}
        </div>

        {/* Ausführliche Definition */}
        <div className="prose-custom mb-8">
          {entry.content.definition.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 text-base leading-relaxed text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Praxisbeispiele */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold tracking-tight">
            Praxisbeispiele
          </h2>
          <ul className="space-y-3">
            {entry.content.examples.map((example, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-foreground/90"
              >
                <span className="mt-0.5 shrink-0 text-muted-foreground">
                  →
                </span>
                {example}
              </li>
            ))}
          </ul>
        </section>

        {/* Relevanz für Unternehmen */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold tracking-tight">
            Warum ist das relevant?
          </h2>
          <p className="text-base leading-relaxed text-foreground/90">
            {entry.content.relevance}
          </p>
        </section>

        {/* BuildMyVision Connection */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold tracking-tight">
            Wie BuildMyVision hilft
          </h2>
          <p className="text-base leading-relaxed text-foreground/90">
            {entry.content.buildMyVisionConnection}
          </p>
        </section>

        {/* Verwandte Begriffe */}
        <LexikonRelated slugs={entry.relatedSlugs} />

        {/* CTA */}
        <LexikonCta />
      </div>
    </article>
  );
}
