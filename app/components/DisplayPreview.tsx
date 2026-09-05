import type { CSSProperties } from "react";

import { Card, CardContent } from "@/components/ui/pxl/card";
import { cn } from "@/lib/utils";
import { displays } from "~/lib/displays";

export default function DisplayPreview({
  display: displayName,
}: {
  display: string;
}) {
  const display = displays.get(displayName);

  if (!display) {
    return null;
  }

  return (
    <div className={cn("mt-0 not-content")}>
      <Card className="size-full pixel-color-border!">
        <CardContent className="px-12 py-8 flex flex-col gap-2 items-center">
          <div
            className="display bg-ring pixel-border pixel-size-xl"
            style={
              {
                aspectRatio: display.aspectRatio,
                "--display-width": display.width,
                "--display-height": display.height,
              } as CSSProperties
            }
          >
          </div>
          <div className="flex flex-col text-lg">
            <p>Aspect Ratio: <span className="text-muted-foreground">{display.aspectRatio}</span></p>
            <p>Width: <span className="text-muted-foreground">{display.width}</span></p>
            <p>Height: <span className="text-muted-foreground">{display.height}</span></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
