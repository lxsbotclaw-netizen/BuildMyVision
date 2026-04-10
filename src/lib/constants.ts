/** Standard-Gültigkeitsdauer für Bestätigungstoken in Stunden */
export const TOKEN_EXPIRY_HOURS = Number(process.env.TOKEN_EXPIRY_HOURS) || 24;

/** Maximale Laenge der Projektbeschreibung in Zeichen */
export const MAX_DESCRIPTION_LENGTH = 2000;

/** Basis-URL der Anwendung (mit Fallback für Vercel Preview Deployments) */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
