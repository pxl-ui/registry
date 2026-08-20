import { lazy, Suspense } from "react";

import { components } from "~/lib/examples";

export default function ComponentRenderer({ src }: { src: string }) {
  const importer = components.get(src);

  if (!importer) {
    return (
      <div className="text-sm text-destructive">No component found at {src}</div>
    );
  }

  const Component = lazy(importer);

  return (
    <Suspense
      fallback={
        <div className="animate-pulse w-full h-full bg-muted pixel-color-muted-foreground pixel-border" />
      }
    >
      <Component />
    </Suspense>
  );
}
