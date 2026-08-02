import { SpriteCanvas } from "@/registry/pxl-ui/sprite-canvas/sprite-canvas";

import type { Atlas } from "../utils";

const ATLAS: Atlas = {
  frames: {
    "tiny_chick 0.png": {
      frame: { x: 0, y: 0, w: 16, h: 16 },
      rotated: false,
      trimmed: false,
      spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },
      sourceSize: { w: 16, h: 16 },
      duration: 100,
    },
    "tiny_chick 1.png": {
      frame: { x: 16, y: 0, w: 16, h: 16 },
      rotated: false,
      trimmed: false,
      spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },
      sourceSize: { w: 16, h: 16 },
      duration: 100,
    },
    "tiny_chick 2.png": {
      frame: { x: 32, y: 0, w: 16, h: 16 },
      rotated: false,
      trimmed: false,
      spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },
      sourceSize: { w: 16, h: 16 },
      duration: 100,
    },
    "tiny_chick 3.png": {
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
    layers: [{ name: "Sprite Sheet", opacity: 255, blendMode: "normal" }],
    slices: [],
  },
};

export default function Preview() {
  return (
    <div className="w-full min-h-92 flex items-center justify-center">
      <SpriteCanvas
        src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
        animation="Idle"
        size="lg"
        atlas={ATLAS}
      />
    </div>
  );
}
