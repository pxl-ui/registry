import { lazy, Suspense } from "react";

// Vite resolves this glob at build time into a static map of
// path -> dynamic import function. New files matching the glob
// are picked up automatically — no manual registration.
const modules = import.meta.glob<{ default: React.ComponentType }>(
  "/registry/**/**/examples/*.tsx",
);

type Props = {
  filePath: string;
};

export function RegistryPreview({ filePath }: Props) {
  const importer = modules[filePath];

  if (!importer) {
    return (
      <div className="text-sm text-destructive">
        No example found at {filePath}
      </div>
    );
  }

  const Example = lazy(
    importer as () => Promise<{ default: React.ComponentType }>,
  );

  return (
    <Suspense
      fallback={
        <div className="animate-pulse w-full h-full bg-muted pixel-color-muted-foreground pixel-border" />
      }
    >
      <Example />
    </Suspense>
  );
}
