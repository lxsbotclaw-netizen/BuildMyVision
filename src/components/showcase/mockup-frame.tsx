import type { ReactNode } from "react";

interface MockupFrameProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

/** Browser-Chrome-Wrapper: simulierte Adressleiste, Tabs und Punkte. */
export function MockupFrame({
  url = "buildmyvision.de",
  children,
  className = "",
}: MockupFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-background shadow-elevated ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="ml-2 flex h-6 flex-1 items-center justify-center rounded-md bg-background px-3 text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      <div className="bg-background">{children}</div>
    </div>
  );
}
