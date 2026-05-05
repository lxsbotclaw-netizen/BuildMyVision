export type MockupType = "image" | "live";

export interface Mockup {
  slug: string;
  title: string;
  industry: string;
  shortDescription: string;
  longDescription: string;
  techTags: readonly string[];
  features: readonly string[];
  /** "image" = statisches Vorschau-Bild, "live" = interaktive Demo-Komponente */
  type: MockupType;
  /** Pfad zur Vorschau (für image und live als Card-Preview genutzt) */
  previewImage: string;
  /** Hex-/OKLch-String für sanfte Hintergrundfarbe der Karte */
  accentColor: string;
}

export const MOCKUPS: readonly Mockup[] = [
  {
    slug: "startup-mvp",
    title: "Startup-MVP-Landing",
    industry: "B2B-SaaS",
    shortDescription:
      "Hero, Features, Pricing, Waitlist — alles was ein junges SaaS für Investor-Pitches und erste Nutzer braucht.",
    longDescription:
      "Schnell zur ersten Conversion: klare Wertversprechen, soziale Beweise, einfacher Pricing-Vergleich und ein knackiger Waitlist-Funnel. Geeignet für YC-Anwendungen, Pre-Seed-Pitches und erste Lead-Sammlung.",
    techTags: ["Next.js", "Tailwind", "Stripe", "Resend"],
    features: [
      "Hero mit klarer Value-Proposition",
      "Feature-Vergleich",
      "Pricing-Tabelle",
      "Testimonials-Sektion",
      "Waitlist-Formular",
    ],
    type: "live",
    previewImage: "/mockups/startup-mvp.svg",
    accentColor: "oklch(0.52 0.22 270)",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS-Dashboard",
    industry: "Software / Analytics",
    shortDescription:
      "Mehrspaltiges Dashboard mit KPI-Karten, Charts und Tabellen — Grundlage für jedes interne Tool.",
    longDescription:
      "Reaktives Layout mit Sidebar, KPI-Übersicht, Diagrammen und Datentabelle. Einsetzbar für Admin-Bereiche, Analytics-Tools, Reporting-Plattformen und SaaS-Frontends.",
    techTags: ["Next.js", "Recharts", "Drizzle", "Postgres"],
    features: [
      "Persistente Sidebar-Navigation",
      "KPI-Karten mit Vergleichswerten",
      "Linien-/Balken-Charts",
      "Sortierbare Datentabelle",
      "Filter- und Suchleiste",
    ],
    type: "live",
    previewImage: "/mockups/saas-dashboard.svg",
    accentColor: "oklch(0.62 0.2 290)",
  },
  {
    slug: "ecommerce-shop",
    title: "E-Commerce-Shop",
    industry: "Mode &amp; Lifestyle",
    shortDescription:
      "Produkt-Listing, Detailseite, Warenkorb-Drawer und Checkout — kuratiertes Storefront mit Stripe.",
    longDescription:
      "Schlanker Shop mit Filter-Logik, Variantenwahl, Wishlist und Stripe-Integration. Ideal für Direct-to-Consumer-Marken im Lifestyle-Bereich.",
    techTags: ["Next.js", "Stripe", "Drizzle", "Algolia"],
    features: [
      "Hero-Carousel mit Editorial-Look",
      "Produktkarten mit Hover-Variants",
      "Detailseite mit Galerie",
      "Warenkorb-Drawer",
      "Stripe-Checkout",
    ],
    type: "image",
    previewImage: "/mockups/ecommerce-shop.svg",
    accentColor: "oklch(0.78 0.16 70)",
  },
  {
    slug: "creator-portfolio",
    title: "Creator-Portfolio",
    industry: "Influencer / Personal Brand",
    shortDescription:
      "Bold-Hero, Werke-Grid, Kollaborationen, Newsletter — Schaufenster für Creator und Künstler.",
    longDescription:
      "Bühne für Persönlichkeit und Werk: kuratierte Galerie, Pressestimmen, Linktree-Alternative und Newsletter-Integration mit Buttondown oder Beehiiv.",
    techTags: ["Next.js", "MDX", "Sanity", "Buttondown"],
    features: [
      "Editorial-Hero mit Mood-Bild",
      "Werke-Grid mit Lightbox",
      "Pressestimmen-Sektion",
      "Linktree-Alternative",
      "Newsletter-Anmeldung",
    ],
    type: "image",
    previewImage: "/mockups/creator-portfolio.svg",
    accentColor: "oklch(0.7 0.18 30)",
  },
  {
    slug: "restaurant",
    title: "Restaurant mit Reservierung",
    industry: "Gastronomie",
    shortDescription:
      "Atmosphärischer Hero, Menü, Online-Reservierung und Lieferdienst-Integration.",
    longDescription:
      "Restaurants brauchen schnelle Information und einfache Reservierung. Wir liefern Menü-Karte, OpenTable/Resmio-Integration und Take-Away-Bestellung in einem fokussierten Layout.",
    techTags: ["Next.js", "Resmio API", "Tailwind"],
    features: [
      "Atmosphärischer Hero mit Foto-Galerie",
      "Tagesmenü und Wochenkarte",
      "Reservierungs-Widget",
      "Take-Away-Bestellung",
      "Google-Maps-Anfahrt",
    ],
    type: "image",
    previewImage: "/mockups/restaurant.svg",
    accentColor: "oklch(0.55 0.18 35)",
  },
  {
    slug: "coaching-landing",
    title: "Coaching- &amp; Beratungs-Landing",
    industry: "Service / Coaching",
    shortDescription:
      "Storyselling-Hero, Methoden-Sektion, Kunden-Cases, Buchungs-Funnel mit Cal.com.",
    longDescription:
      "Hochwertige Landing für Coaches, Berater und Trainer. Fokus auf Vertrauen, Methodik und einfache Buchung. Cal.com-Integration für 1-Click-Termine.",
    techTags: ["Next.js", "Cal.com", "Resend"],
    features: [
      "Story-driven Hero",
      "Methoden- und Werte-Sektion",
      "Case-Studies mit Resultaten",
      "Cal.com-Buchungs-Widget",
      "FAQ und Trust-Block",
    ],
    type: "image",
    previewImage: "/mockups/coaching-landing.svg",
    accentColor: "oklch(0.5 0.16 165)",
  },
  {
    slug: "ki-chat",
    title: "KI-Chat-Interface",
    industry: "AI / Productivity",
    shortDescription:
      "Streaming-Chat mit Tool-Calls, Verlauf, Anhängen und Vercel AI Gateway.",
    longDescription:
      "Modernes Chat-Frontend mit Streaming-Antworten, Tool-Aufrufen, Datei-Anhängen und Verlauf. Backend über Vercel AI Gateway für Multi-Provider-Routing.",
    techTags: ["Next.js", "AI SDK", "AI Gateway", "Vercel"],
    features: [
      "Streaming-Antworten",
      "Tool-Calls mit Statusanzeige",
      "Datei-Anhänge",
      "Konversations-Verlauf",
      "Multi-Provider via AI Gateway",
    ],
    type: "image",
    previewImage: "/mockups/ki-chat.svg",
    accentColor: "oklch(0.62 0.2 290)",
  },
  {
    slug: "marketplace",
    title: "Marketplace-Plattform",
    industry: "Marketplace / Two-Sided",
    shortDescription:
      "Anbieter-Profile, Such- &amp; Filter-Logik, Buchung und Stripe-Connect-Auszahlungen.",
    longDescription:
      "Zweiseitige Plattform mit Käufer- und Anbieter-Sicht. Anbieter-Onboarding, Such-Index, Buchungslogik und Stripe-Connect für Auszahlungen — alles serverless skalierbar.",
    techTags: ["Next.js", "Stripe Connect", "Algolia", "Drizzle"],
    features: [
      "Anbieter-Onboarding",
      "Such- und Filter-Index",
      "Buchungslogik",
      "Stripe-Connect-Auszahlungen",
      "Bewertungssystem",
    ],
    type: "image",
    previewImage: "/mockups/marketplace.svg",
    accentColor: "oklch(0.55 0.18 220)",
  },
] as const;

export function getMockup(slug: string): Mockup | undefined {
  return MOCKUPS.find((m) => m.slug === slug);
}
