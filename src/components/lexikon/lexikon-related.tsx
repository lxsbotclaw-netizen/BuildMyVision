import Link from "next/link";
import { getRelatedEntries } from "@/data/lexikon";

interface LexikonRelatedProps {
  slugs: string[];
}

export function LexikonRelated({ slugs }: LexikonRelatedProps) {
  const related = getRelatedEntries(slugs);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="mb-4 text-xl font-bold tracking-tight">
        Verwandte Begriffe
      </h2>
      <div className="flex flex-wrap gap-2">
        {related.map((entry) => (
          <Link
            key={entry.slug}
            href={`/lexikon/${entry.slug}`}
            className="inline-flex items-center rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            {entry.term}
          </Link>
        ))}
      </div>
    </section>
  );
}
