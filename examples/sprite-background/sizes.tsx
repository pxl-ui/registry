import { Fragment } from "react";

import { SpriteBackground } from "@/components/ui/pxl/sprite-background";
import type { SpriteSize } from "@/lib/pxl/sprite";

export default function Sizes() {
  const sizes: Record<SpriteSize, string> = {
    xs: "ExtraSmall",
    sm: "Small",
    md: "Medium",
    lg: "Large",
    xl: "ExtraLarge",
  };

  return (
    <div className="w-full min-h-92 flex flex-col gap-2.5 items-start justify-center">
      <div>
        {Object.entries(sizes).map(([size, label]) => (
          <Fragment key={size}>
            <h2>{label}</h2>
            <SpriteBackground
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
              animation="Idle"
              size={size as SpriteSize}
              columns={4}
              rows={1}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
