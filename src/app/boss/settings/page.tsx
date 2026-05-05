import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getDb } from "@/db";
import { admins } from "@/db/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SettingsForm } from "./settings-form";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  await connection();
  const db = getDb();
  const [admin] = await db.select().from(admins).limit(1);

  if (!admin) redirect("/boss/login");

  const formattedCreated = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(admin.createdAt);
  const formattedLastLogin = admin.lastLoginAt
    ? new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(admin.lastLoginAt)
    : "noch nie";

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Einstellungen</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Aktueller Account</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted-foreground">Benutzername</dt>
              <dd className="font-medium">{admin.username}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Erstellt</dt>
              <dd className="font-medium">{formattedCreated}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Letzter Login</dt>
              <dd className="font-medium">{formattedLastLogin}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Account aktualisieren</CardTitle>
        </CardHeader>
        <CardContent>
          <SettingsForm currentUsername={admin.username} />
        </CardContent>
      </Card>
    </div>
  );
}
