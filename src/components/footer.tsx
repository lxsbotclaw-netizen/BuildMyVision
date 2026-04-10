import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-sm text-muted-foreground">
        <div className="flex gap-4">
          <Link
            href="/impressum"
            className="transition-colors hover:text-foreground"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="transition-colors hover:text-foreground"
          >
            Datenschutz
          </Link>
        </div>
        <p>&copy; {year} BuildMyVision. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
