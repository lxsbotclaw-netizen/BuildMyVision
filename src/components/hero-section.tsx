import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-mesh absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-50" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--background) 95%)",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-7 px-4 py-24 text-center md:py-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          Für Startups, Unternehmen &amp; Creator
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Von der Idee zur{" "}
          <span className="text-gradient-brand">digitalen Realität</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Ob MVP für dein Startup, Webseite für dein Unternehmen oder Plattform
          für deinen Content — wir bauen digitale Produkte, die funktionieren.
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="#warteliste"
            className="group inline-flex h-12 items-center gap-2 rounded-md bg-brand px-7 text-sm font-semibold text-brand-foreground shadow-elevated transition-all hover:opacity-95 hover:shadow-lg"
          >
            Platz sichern
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/showcase"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-brand/50 hover:bg-background"
          >
            Inspiration holen
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          Warteliste jetzt offen — kostenlos &amp; unverbindlich
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
          {[
            { label: "Startups", icon: "🚀" },
            { label: "Unternehmen", icon: "💼" },
            { label: "Creator", icon: "🎨" },
            { label: "Privatpersonen", icon: "✨" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span aria-hidden>{item.icon}</span>
              <dt>{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
