// Setup-Page nicht prerendern: Token-Check und DB-Lookup müssen pro Request laufen.
export const dynamic = "force-dynamic";

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
