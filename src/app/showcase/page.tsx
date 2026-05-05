import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCKUPS } from "@/data/mockups";
import { MockupCard } from "@/components/showcase/mockup-card";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Mockups & Showcase | BuildMyVision",
  description:
    "Beispiel-Designs und Lösungs-Templates für Startups, Unternehmen und Creator. Von Landing Pages bis zu SaaS-Dashboards.",
};

export default function ShowcasePage() {
  return (
    <>
      <section className="border-b border-border px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Showcase
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Greifbare Beispiele.{" "}
            <span className="text-gradient-brand">Echte Lösungen.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">
            Acht Mockup-Konzepte für die häufigsten Use-Cases — vom
            Startup-MVP bis zur Marketplace-Plattform. Zwei davon sind
            interaktiv begehbar.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOCKUPS.map((mockup) => (
              <MockupCard key={mockup.slug} mockup={mockup} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Dein Use-Case ist nicht dabei?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Wir bauen für jeden Bedarf — von individuellen Plattformen bis zu
            KI-Integrationen. Beschreib&apos; dein Vorhaben in der Warteliste,
            wir melden uns persönlich.
          </p>
          <Link
            href="/#warteliste"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-brand px-6 text-sm font-semibold text-brand-foreground shadow-elevated transition-opacity hover:opacity-95"
          >
            Auf die Warteliste
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
