// Login-Page nicht prerendern: Server-Action-Refs in der gerenderten HTML
// müssen mit dem aktiven Deploy synchron bleiben — sonst meldet ein gecachter
// Browser nach Login eine nicht-existente Action und es entsteht ein 404.
export const dynamic = "force-dynamic";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
