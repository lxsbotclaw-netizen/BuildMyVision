import { notFound } from "next/navigation";
import { timingSafeEqual } from "node:crypto";
import { getDb } from "@/db";
import { admins } from "@/db/schema";
import { SetupForm } from "./setup-form";

interface PageProps {
  searchParams: Promise<{ token?: string; reset?: string }>;
}

/**
 * Vergleicht Token timing-safe gegen `process.env.ADMIN_SETUP_TOKEN`.
 * Schlägt fehl falls die Env-Var nicht gesetzt ist.
 */
function tokenIsValid(input: string | undefined): boolean {
  const expected = process.env.ADMIN_SETUP_TOKEN;
  if (!expected || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export default async function SetupPage({ searchParams }: PageProps) {
  const params = await searchParams;

  if (!tokenIsValid(params.token)) notFound();

  const db = getDb();
  const existing = await db.select({ id: admins.id }).from(admins).limit(1);
  const isReset = params.reset === "true";

  // Wenn schon ein Admin existiert UND nicht explizit Reset → 404
  if (existing.length > 0 && !isReset) notFound();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center text-2xl font-bold tracking-tight">
          {isReset ? "Admin-Zugang zurücksetzen" : "Admin-Zugang einrichten"}
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          {isReset
            ? "Bestehender Admin wird gelöscht und durch diesen neuen Account ersetzt."
            : "Lege deinen Admin-Account für /boss an."}
        </p>
        <SetupForm token={params.token!} reset={isReset} />
      </div>
    </div>
  );
}
