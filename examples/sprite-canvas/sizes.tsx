import { Fragment } from "react";

import { SpriteCanvas } from "@/components/ui/pxl/sprite-canvas";
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
            <SpriteCanvas
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
              animation="Idle"
              size={size as SpriteSize}
              atlas={{
                frames: {
                  "0": { frame: { x:  0, y: 0, w: 16, h: 16 }, },
                  "1": { frame: { x: 16, y: 0, w: 16, h: 16 }, },
                  "2": { frame: { x: 32, y: 0, w: 16, h: 16 }, },
                  "3": { frame: { x: 48, y: 0, w: 16, h: 16 }, },
                },
                meta: { frameTags: [ { name: "Idle", from: 0, to: 3, }, ], },
              }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
