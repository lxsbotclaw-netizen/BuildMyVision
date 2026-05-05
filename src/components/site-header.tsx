"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          aria-label="BuildMyVision Startseite"
        >
          <Image
            src="/brand/mark.svg"
            alt=""
            width={28}
            height={28}
            priority
          />
          <span className="text-base font-bold tracking-tight">
            buildmyvision
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/showcase"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Inspiration
          </Link>
          <Link
            href="/lexikon"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Lexikon
          </Link>
          <Link
            href="/#warteliste"
            className="inline-flex h-9 items-center rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-elevated"
          >
            Platz sichern
          </Link>
        </nav>
      </div>
    </header>
  );
}
