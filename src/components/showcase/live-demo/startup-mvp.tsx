import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";

/** Statische Live-Demo: Startup-MVP-Landing — wird in /showcase/[slug] eingebettet */
export function StartupMvpDemo() {
  return (
    <div className="font-sans text-foreground">
      {/* Demo-Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-indigo-50 via-background to-amber-50 px-6 py-16 dark:from-indigo-950/40 dark:via-background dark:to-amber-950/30">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3 w-3 text-brand" />
            Now in Public Beta
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            The fastest way to{" "}
            <span className="text-gradient-brand">ship your MVP</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Pre-built infrastructure, payments, auth and emails — so you can
            focus on what actually matters: your product.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button className="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex h-10 items-center rounded-md border border-border bg-background px-5 text-sm font-semibold">
              Live demo
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            7-day free trial · No credit card required
          </p>
        </div>
      </section>

      {/* Feature-Block */}
      <section className="border-b border-border px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Everything you need on day one
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Auth &amp; Billing",
                desc: "Stripe + magic-link auth, ready to go.",
                Icon: Zap,
              },
              {
                title: "Emails &amp; Notifications",
                desc: "Resend templates pre-wired for every event.",
                Icon: Sparkles,
              },
              {
                title: "Analytics built-in",
                desc: "First-party events, no cookie banners.",
                Icon: Check,
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <f.Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold">{f.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b border-border bg-muted/30 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Simple, scaling pricing
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "Starter", price: "29", features: ["1 project", "1 user", "Basic support"] },
              {
                name: "Pro",
                price: "79",
                features: ["10 projects", "5 users", "Priority support"],
                featured: true,
              },
              {
                name: "Team",
                price: "199",
                features: ["Unlimited", "Unlimited users", "SLA + DPA"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-xl border p-6 ${
                  p.featured
                    ? "border-brand bg-card shadow-elevated"
                    : "border-border bg-card"
                }`}
              >
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="mt-3 text-3xl font-bold">
                  €{p.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /mo
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <Check className="h-3.5 w-3.5 text-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-5 inline-flex h-9 w-full items-center justify-center rounded-md text-xs font-semibold ${
                    p.featured
                      ? "bg-brand text-brand-foreground"
                      : "border border-border bg-background"
                  }`}
                >
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-lg font-medium leading-relaxed">
            &bdquo;We launched in 4 days instead of 4 weeks. The auth and
            billing alone saved us a sprint.&ldquo;
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            — Founder, Series-A SaaS
          </p>
          <button className="mt-6 inline-flex h-10 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground">
            Start free trial <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
