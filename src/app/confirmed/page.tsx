import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface ConfirmedPageProps {
  searchParams: Promise<{ status?: string }>;
}

const statusMessages: Record<string, { title: string; description: string }> = {
  success: {
    title: "E-Mail bestätigt!",
    description:
      "Vielen Dank! Deine Anfrage ist bei uns eingegangen. Wir melden uns in Kürze bei dir.",
  },
  already: {
    title: "Bereits bestätigt",
    description:
      "Deine E-Mail-Adresse wurde bereits bestätigt. Wir haben deine Anfrage erhalten.",
  },
  expired: {
    title: "Link abgelaufen",
    description:
      "Dieser Bestätigungslink ist leider abgelaufen. Bitte trage dich erneut ein.",
  },
  invalid: {
    title: "Ungültiger Link",
    description:
      "Dieser Bestätigungslink ist ungültig. Bitte prüfe den Link aus deiner E-Mail.",
  },
  error: {
    title: "Fehler aufgetreten",
    description:
      "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
  },
};

const fallbackMessage = statusMessages.error;

export default async function ConfirmedPage({ searchParams }: ConfirmedPageProps) {
  const { status } = await searchParams;
  const message = statusMessages[status ?? ""] ?? fallbackMessage;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">{message.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{message.description}</p>
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Zurück zur Startseite
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
