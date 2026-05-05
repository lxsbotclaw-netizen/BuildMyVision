import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { MOCKUPS, getMockup } from "@/data/mockups";
import { MockupFrame } from "@/components/showcase/mockup-frame";
import { StartupMvpDemo } from "@/components/showcase/live-demo/startup-mvp";
import { SaasDashboardDemo } from "@/components/showcase/live-demo/saas-dashboard";
import { Footer } from "@/components/footer";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return MOCKUPS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mockup = getMockup(slug);
  if (!mockup) return {};
  return {
    title: `${mockup.title} | Showcase`,
    description: mockup.shortDescription,
  };
}

function LiveDemoFor({ slug }: { slug: string }) {
  if (slug === "startup-mvp") return <StartupMvpDemo />;
  if (slug === "saas-dashboard") return <SaasDashboardDemo />;
  return null;
}

export default async function ShowcaseDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const mockup = getMockup(slug);
  if (!mockup) notFound();

  const otherMockups = MOCKUPS.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/showcase"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Zurück zur Übersicht
          </Link>

          <header className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {mockup.industry}
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              {mockup.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {mockup.longDescription}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {mockup.techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <MockupFrame
            url={`${mockup.slug}.example.com`}
            className="mb-12"
          >
            {mockup.type === "live" ? (
              <LiveDemoFor slug={mockup.slug} />
            ) : (
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={mockup.previewImage}
                  alt={mockup.title}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </MockupFrame>

          <div className="grid gap-10 md:grid-cols-2">
            <section>
              <h2 className="mb-4 text-xl font-bold tracking-tight">
                Enthaltene Module
              </h2>
              <ul className="space-y-2.5">
                {mockup.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold tracking-tight">
                Interesse an dieser Lösung?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Wir passen jedes Mockup an deine Marke und Anforderungen an.
                Beschreib&apos; dein Vorhaben in der Warteliste — wir melden
                uns persönlich.
              </p>
              <Link
                href="/#warteliste"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-sm transition-opacity hover:opacity-95"
              >
                Auf die Warteliste
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>

          <section className="mt-16 border-t border-border pt-12">
            <h2 className="mb-6 text-xl font-bold tracking-tight">
              Weitere Mockups
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {otherMockups.map((other) => (
                <Link
                  key={other.slug}
                  href={`/showcase/${other.slug}`}
                  className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-brand">
                    {other.industry}
                  </p>
                  <p className="mt-1 font-semibold transition-colors group-hover:text-brand">
                    {other.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}
