import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import type { Mockup } from "@/data/mockups";

export function MockupCard({ mockup }: { mockup: Mockup }) {
  const isLive = mockup.type === "live";

  return (
    <Link
      href={`/showcase/${mockup.slug}`}
      className="lift-on-hover group block overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden"
        style={{
          backgroundColor: `color-mix(in oklch, ${mockup.accentColor} 12%, var(--muted))`,
        }}
      >
        <Image
          src={mockup.previewImage}
          alt={mockup.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isLive && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-foreground shadow-sm">
            <Play className="h-2.5 w-2.5" fill="currentColor" />
            Live-Demo
          </span>
        )}
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-brand">
              {mockup.industry}
            </p>
            <h3 className="mt-1 text-lg font-bold tracking-tight">
              {mockup.title}
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">
          {mockup.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {mockup.techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
