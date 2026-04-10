import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight transition-colors hover:text-foreground/80"
        >
          BuildMyVision
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/lexikon"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Lexikon
          </Link>
          <Link
            href="/#warteliste"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Platz sichern
          </Link>
        </nav>
      </div>
    </header>
  );
}
