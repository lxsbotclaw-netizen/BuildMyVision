import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | BuildMyVision",
  description: "Impressum und Angaben gemäß §5 DDG.",
};

export default function ImpressumPage() {
  return (
    <article className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Startseite
          </Link>
          <span>/</span>
          <span className="text-foreground">Impressum</span>
        </nav>

        <h1 className="mb-8 text-3xl font-bold tracking-tight">Impressum</h1>

        <div className="space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="mb-3 text-xl font-bold">
              Angaben gemäß §5 DDG
            </h2>
            {/* TODO: Mit echten Daten ersetzen */}
            <p>
              [Vor- und Nachname / Firmenname]
              <br />
              [Rechtsform, z.B. Einzelunternehmen]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ Ort]
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Kontakt</h2>
            <p>
              Telefon: [Telefonnummer]
              <br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a
              Umsatzsteuergesetz:
              <br />
              [USt-IdNr. oder „Nicht vorhanden / Kleinunternehmerregelung"]
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">
              Verantwortlich für den Inhalt nach §18 Abs. 2 MStV
            </h2>
            <p>
              [Vor- und Nachname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ Ort]
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß §7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte auch keine Gewähr übernehmen. Für
              die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
