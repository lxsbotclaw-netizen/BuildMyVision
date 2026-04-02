export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-4 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
        <p>&copy; {year} BuildMyVision. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
