"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { setupAction } from "./actions";

export function SetupForm({ token, reset }: { token: string; reset: boolean }) {
  const [state, formAction, isPending] = useActionState(setupAction, null);

  return (
    <Card>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-4">
          <input type="hidden" name="token" value={token} />
          <input type="hidden" name="reset" value={reset ? "true" : "false"} />

          <div className="space-y-2">
            <Label htmlFor="username">Benutzername</Label>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              required
              minLength={3}
              maxLength={60}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Passwort</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={12}
            />
            <p className="text-xs text-muted-foreground">
              Mindestens 12 Zeichen.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="passwordConfirm">Passwort bestätigen</Label>
            <Input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              autoComplete="new-password"
              required
              minLength={12}
            />
          </div>

          {state?.error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {state.error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Speichere…" : "Account anlegen & einloggen"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
