import { lazy, Suspense } from "react";

import examples from "~/lib/examples";

export default function ExampleRenderer({ src }: { src: string }) {
  const importer = examples.components.get(src);

  if (!importer) {
    return (
      <div className="text-sm text-destructive">No example found at {src}</div>
    );
  }

  const Example = lazy(importer);

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
