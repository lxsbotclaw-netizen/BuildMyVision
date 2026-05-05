"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateSettingsAction } from "./actions";

interface SettingsState {
  error?: string;
  success?: string;
}

export function SettingsForm({ currentUsername }: { currentUsername: string }) {
  const [state, formAction, isPending] = useActionState<SettingsState | null, FormData>(
    updateSettingsAction,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label htmlFor="currentPassword">Aktuelles Passwort</Label>
        <Input
          id="currentPassword"
          name="currentPassword"
          type="password"
          autoComplete="current-password"
          required
        />
        <p className="text-xs text-muted-foreground">
          Zur Bestätigung — auch wenn du nur den Benutzernamen änderst.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">Benutzername</Label>
        <Input
          id="username"
          name="username"
          defaultValue={currentUsername}
          autoComplete="username"
          required
          minLength={3}
          maxLength={60}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">Neues Passwort (optional)</Label>
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          autoComplete="new-password"
          minLength={12}
        />
        <p className="text-xs text-muted-foreground">
          Leer lassen, falls das Passwort gleich bleiben soll.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPasswordConfirm">Neues Passwort bestätigen</Label>
        <Input
          id="newPasswordConfirm"
          name="newPasswordConfirm"
          type="password"
          autoComplete="new-password"
          minLength={12}
        />
      </div>

      {state?.error && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="rounded-md bg-emerald-50 p-3 text-sm text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
          {state.success}
        </div>
      )}

      <Button type="submit" className="w-fit" disabled={isPending}>
        {isPending ? "Speichere…" : "Speichern"}
      </Button>
    </form>
  );
}
