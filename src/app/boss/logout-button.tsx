"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/boss/logout", { method: "POST" });
    router.push("/boss/login");
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout}>
      Abmelden
    </Button>
  );
}
