import { Hammer, MessageCircle, Rocket, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const steps: readonly Step[] = [
  {
    number: "01",
    title: "Anfrage stellen",
    Icon: Send,
    description:
      "Füll unser kurzes Formular aus oder nutze den Projekt-Wizard — in unter 2 Minuten wissen wir, was du brauchst.",
  },
  {
    number: "02",
    title: "Gespräch",
    Icon: MessageCircle,
    description:
      "Wir melden uns bei dir und besprechen dein Vorhaben im Detail. Kostenlos und unverbindlich.",
  },
  {
    number: "03",
    title: "Umsetzung",
    Icon: Hammer,
    description:
      "Wir bauen dein Produkt — transparent, iterativ und mit regelmäßigem Feedback.",
  },
  {
    number: "04",
    title: "Launch",
    Icon: Rocket,
    description:
      "Dein digitales Produkt geht live. Wir unterstützen dich auch danach bei Betrieb und Weiterentwicklung.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="bg-muted/30 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Ablauf
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
            So läuft&apos;s ab
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Von der ersten Idee bis zum fertigen Produkt — in vier Schritten.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, Icon }, i) => (
            <li
              key={number}
              className="lift-on-hover relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-brand">
                  SCHRITT {number}
                </span>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </div>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
