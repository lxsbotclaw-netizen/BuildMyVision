const steps = [
  {
    number: "01",
    title: "Anfrage stellen",
    description:
      "Füll unser kurzes Formular aus oder nutze den Projekt-Wizard — in unter 2 Minuten wissen wir, was du brauchst.",
  },
  {
    number: "02",
    title: "Gespräch",
    description:
      "Wir melden uns bei dir und besprechen dein Vorhaben im Detail. Kostenlos und unverbindlich.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Wir bauen dein Produkt — transparent, iterativ und mit regelmäßigem Feedback.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Dein digitales Produkt geht live. Wir unterstützen dich auch danach bei Betrieb und Weiterentwicklung.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
          So läuft's ab
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Von der ersten Idee bis zum fertigen Produkt — in vier Schritten.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="text-3xl font-bold text-muted-foreground/30">
                {step.number}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
