import type { Metadata } from "next";
import { getAllEntries, CATEGORY_LABELS, type LexikonCategory } from "@/data/lexikon";
import { LexikonCard } from "@/components/lexikon/lexikon-card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital-Lexikon | BuildMyVision",
  description:
    "KI, Web-Entwicklung & Digital-Begriffe einfach erklärt. Das Lexikon für Gründer und Unternehmer, die digitale Produkte verstehen wollen.",
};

const categories: LexikonCategory[] = ["ki", "digital", "tech"];

export default function LexikonPage() {
  const allEntries = getAllEntries();

  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 px-4 py-16 text-center md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
        >
          &larr; Zurück zur Startseite
        </Link>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Digital-Lexikon
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {allEntries.length} Begriffe aus KI, Web-Entwicklung und digitaler
          Technologie — einfach und verständlich erklärt.
        </p>
      </section>

      {/* Begriffe nach Kategorie */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          {categories.map((category) => {
            const categoryEntries = allEntries.filter(
              (e) => e.category === category
            );

            return (
              <div key={category} className="mb-12 last:mb-0">
                <h2 className="mb-6 text-2xl font-bold tracking-tight">
                  {CATEGORY_LABELS[category]}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryEntries.map((entry) => (
                    <LexikonCard key={entry.slug} entry={entry} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
