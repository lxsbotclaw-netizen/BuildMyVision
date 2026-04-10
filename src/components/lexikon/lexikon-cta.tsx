import Link from "next/link";

export function LexikonCta() {
  return (
    <section className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center md:p-8">
      <h2 className="mb-2 text-xl font-bold tracking-tight">
        Projekt im Kopf?
      </h2>
      <p className="mx-auto mb-6 max-w-md text-sm text-muted-foreground">
        Ob Webseite, Plattform oder KI-Integration — wir setzen deine Idee um.
        Sichere dir jetzt deinen Platz auf unserer Warteliste.
      </p>
      <Link
        href="/#warteliste"
        className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Platz sichern
      </Link>
    </section>
  );
}
