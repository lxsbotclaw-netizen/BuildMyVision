export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 px-4 py-24 text-center md:py-32">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
        Warteliste jetzt offen
      </div>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        Von der Idee zur{" "}
        <span className="text-primary">digitalen Realität</span>
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
        Du hast eine Idee für eine Webseite, Plattform oder digitales Produkt?
        Wir setzen sie um. Sichere dir jetzt deinen Platz auf unserer Warteliste.
      </p>
      <a
        href="#warteliste"
        className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Platz sichern
      </a>
    </section>
  );
}
