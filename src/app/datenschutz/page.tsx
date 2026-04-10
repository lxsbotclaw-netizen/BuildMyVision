import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | BuildMyVision",
  description:
    "Datenschutzerklärung von BuildMyVision — Informationen zur Erhebung und Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <article className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Startseite
          </Link>
          <span>/</span>
          <span className="text-foreground">Datenschutz</span>
        </nav>

        <h1 className="mb-8 text-3xl font-bold tracking-tight">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-base leading-relaxed text-foreground/90">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO):
            </p>
            {/* TODO: Mit echten Daten ersetzen */}
            <p className="mt-2">
              [Vor- und Nachname / Firmenname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ Ort]
              <br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          {/* 2. Erhobene Daten */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              2. Welche Daten wir erheben
            </h2>
            <p>
              Über unser Wartelisten-Formular erheben wir folgende Daten:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Name (Pflichtangabe)</li>
              <li>E-Mail-Adresse (Pflichtangabe)</li>
              <li>Telefonnummer (freiwillig)</li>
              <li>Anschrift (freiwillig)</li>
              <li>Kontakttyp: Privatperson, Startup, Unternehmen, Creator (Pflichtangabe)</li>
              <li>Projektbeschreibung und/oder Wizard-Auswahl (mindestens eines erforderlich)</li>
            </ul>
            <p className="mt-2">
              Zusätzlich speichern wir den Zeitpunkt der Registrierung, der
              E-Mail-Bestätigung und die IP-Adresse des Zugriffs (über
              Server-Logs des Hosting-Anbieters).
            </p>
          </section>

          {/* 3. Rechtsgrundlage */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              3. Rechtsgrundlage
            </h2>
            <p>
              Die Verarbeitung deiner Daten erfolgt auf Grundlage deiner
              Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Du erteilst
              diese Einwilligung durch Aktivieren der Datenschutz-Checkbox
              im Formular. Die Einwilligung kann jederzeit widerrufen
              werden (siehe Abschnitt 7).
            </p>
          </section>

          {/* 4. Zweck der Verarbeitung */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              4. Zweck der Verarbeitung
            </h2>
            <p>
              Wir verarbeiten deine Daten ausschließlich, um:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Deine Anfrage auf der Warteliste zu erfassen</li>
              <li>Deine E-Mail-Adresse per Double-Opt-In zu verifizieren</li>
              <li>Dich bezüglich deines Projekts zu kontaktieren</li>
            </ul>
            <p className="mt-2">
              Deine Daten werden nicht für Werbezwecke verwendet und nicht
              an Dritte zu Marketingzwecken weitergegeben.
            </p>
          </section>

          {/* 5. Auftragsverarbeiter */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              5. Auftragsverarbeiter und Drittlandtransfer
            </h2>
            <p>
              Wir setzen folgende Dienstleister ein, die in unserem Auftrag
              personenbezogene Daten verarbeiten:
            </p>

            <h3 className="mt-4 mb-2 font-bold">
              Vercel Inc. (Hosting)
            </h3>
            <p>
              Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              Unsere Webseite wird auf Servern von Vercel gehostet. Beim
              Besuch der Webseite werden Server-Logs erfasst (IP-Adresse,
              Zeitpunkt, aufgerufene Seite). Rechtsgrundlage: berechtigtes
              Interesse (Art. 6 Abs. 1 lit. f DSGVO). Drittlandtransfer in
              die USA auf Basis von EU-Standardvertragsklauseln.
            </p>

            <h3 className="mt-4 mb-2 font-bold">
              Neon Inc. (Datenbank)
            </h3>
            <p>
              Neon Inc., 548 Market St #78972, San Francisco, CA 94104,
              USA. Deine Formulardaten werden in einer PostgreSQL-Datenbank
              bei Neon gespeichert. Drittlandtransfer in die USA auf Basis
              von EU-Standardvertragsklauseln.
            </p>

            <h3 className="mt-4 mb-2 font-bold">
              Resend Inc. (E-Mail-Versand)
            </h3>
            <p>
              Resend Inc., 2261 Market Street #4943, San Francisco, CA
              94114, USA. Für den Versand der Bestätigungsmail und der
              Benachrichtigungsmail nutzen wir Resend. Dabei werden Name
              und E-Mail-Adresse übermittelt. Drittlandtransfer in die USA
              auf Basis von EU-Standardvertragsklauseln.
            </p>
          </section>

          {/* 6. Speicherdauer */}
          <section>
            <h2 className="mb-3 text-xl font-bold">6. Speicherdauer</h2>
            <p>
              Deine Daten werden gespeichert, solange dein
              Wartelisteneintrag aktiv ist. Nicht bestätigte Einträge
              (ausstehende E-Mail-Verifizierung) werden nach 30 Tagen
              automatisch gelöscht. Bei Widerruf deiner Einwilligung werden
              deine Daten unverzüglich gelöscht.
            </p>
          </section>

          {/* 7. Rechte */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              7. Deine Rechte
            </h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                <strong>Auskunft</strong> (Art. 15 DSGVO) — Welche Daten
                wir über dich gespeichert haben
              </li>
              <li>
                <strong>Berichtigung</strong> (Art. 16 DSGVO) — Korrektur
                unrichtiger Daten
              </li>
              <li>
                <strong>Löschung</strong> (Art. 17 DSGVO) — Löschung
                deiner Daten
              </li>
              <li>
                <strong>Einschränkung</strong> (Art. 18 DSGVO) —
                Einschränkung der Verarbeitung
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) —
                Export deiner Daten in einem maschinenlesbaren Format
              </li>
              <li>
                <strong>Widerruf</strong> (Art. 7 Abs. 3 DSGVO) —
                Widerruf deiner Einwilligung mit Wirkung für die Zukunft
              </li>
              <li>
                <strong>Beschwerde</strong> (Art. 77 DSGVO) — Beschwerde
                bei der zuständigen Aufsichtsbehörde
              </li>
            </ul>
            <p className="mt-2">
              Zur Ausübung deiner Rechte schreibe eine E-Mail an:{" "}
              <strong>[E-Mail-Adresse]</strong>
            </p>
          </section>

          {/* 8. Cookies */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              8. Cookies und Tracking
            </h2>
            <p>
              Unsere Webseite verwendet <strong>keine</strong>{" "}
              Tracking-Cookies, keine Analytics-Tools und kein
              Nutzer-Tracking. Es werden ausschließlich technisch
              notwendige Cookies eingesetzt, sofern diese vom
              Webserver-Framework (Next.js) automatisch gesetzt werden.
            </p>
          </section>

          {/* 9. Änderungen */}
          <section>
            <h2 className="mb-3 text-xl font-bold">
              9. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
              um sie an geänderte Rechtslagen oder Änderungen des Dienstes
              anzupassen. Die aktuelle Fassung findest du stets auf dieser
              Seite.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Stand: April 2026
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
