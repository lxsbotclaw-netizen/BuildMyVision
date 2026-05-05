import Link from "next/link";
import { LogoutButton } from "./logout-button";

export default function BossLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-semibold">BuildMyVision Admin</span>
            <nav className="flex items-center gap-4 text-sm">
              <Link
                href="/boss"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Anfragen
              </Link>
              <Link
                href="/boss/settings"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Einstellungen
              </Link>
            </nav>
          </div>
          <LogoutButton />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        {children}
      </main>
    </div>
  );
}
