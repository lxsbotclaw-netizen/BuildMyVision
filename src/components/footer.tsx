import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-muted/20 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground"
            aria-label="BuildMyVision Startseite"
          >
            <Image src="/brand/mark.svg" alt="" width={28} height={28} />
            <span className="text-base font-bold tracking-tight">
              buildmyvision
            </span>
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            Wir bauen digitale Produkte für Startups, Unternehmen und Creator.
            Webseiten, Plattformen, Web-Apps und KI-Lösungen.
          </p>
        </div>

        <nav
          aria-label="Footer-Navigation"
          className="grid grid-cols-2 gap-6 text-sm md:col-span-2 md:grid-cols-3"
        >
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Entdecken</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/showcase"
                  className="transition-colors hover:text-foreground"
                >
                  Mockups
                </Link>
              </li>
              <li>
                <Link
                  href="/lexikon"
                  className="transition-colors hover:text-foreground"
                >
                  Lexikon
                </Link>
              </li>
              <li>
                <Link
                  href="/#warteliste"
                  className="transition-colors hover:text-foreground"
                >
                  Warteliste
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Rechtliches</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/impressum"
                  className="transition-colors hover:text-foreground"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="transition-colors hover:text-foreground"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Über die Warteliste</li>
              <li className="text-xs">Antwort innerhalb 48 Std.</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>&copy; {year} BuildMyVision. Alle Rechte vorbehalten.</p>
        <p>Built with care in Germany.</p>
      </div>
    </footer>
  );
}
