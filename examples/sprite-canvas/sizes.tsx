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
                  "0.png": {
                    frame: { x: 0, y: 0, w: 16, h: 16 },
                    rotated: false,
                    trimmed: false,
                    spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },
                    sourceSize: { w: 16, h: 16 },
                    duration: 100,
                  },
                  "1.png": {
                    frame: { x: 16, y: 0, w: 16, h: 16 },
                    rotated: false,
                    trimmed: false,
                    spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },
                    sourceSize: { w: 16, h: 16 },
                    duration: 100,
                  },
                  "2.png": {
                    frame: { x: 32, y: 0, w: 16, h: 16 },
                    rotated: false,
                    trimmed: false,
                    spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },
                    sourceSize: { w: 16, h: 16 },
                    duration: 100,
                  },
                  "3.png": {
                    frame: { x: 48, y: 0, w: 16, h: 16 },
                    rotated: false,
                    trimmed: false,
                    spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },
                    sourceSize: { w: 16, h: 16 },
                    duration: 100,
                  },
                },
                meta: {
                  app: "https://www.aseprite.org/",
                  version: "1.3.18.1-x64",
                  format: "RGBA8888",
                  size: { w: 64, h: 16 },
                  scale: "1",
                  frameTags: [
                    {
                      name: "Idle",
                      from: 0,
                      to: 3,
                      direction: "forward",
                      color: "#000000ff",
                    },
                    {
                      name: "Action",
                      from: 0,
                      to: 3,
                      direction: "forward",
                      color: "#000000ff",
                    },
                    {
                      name: "Hurt",
                      from: 0,
                      to: 3,
                      direction: "forward",
                      color: "#000000ff",
                    },
                  ],
                  layers: [
                    { name: "Sprite Sheet", opacity: 255, blendMode: "normal" },
                  ],
                  slices: [],
                },
              }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
