import { useRef } from "react";

import { Button } from "@/components/ui/8bit/button";
import {
  SpriteCanvas,
  type SpriteCanvasHandle,
} from "@/components/ui/pxl/sprite-canvas";
import { evolutionEffect } from "@/lib/pxl/sprite-animations/evolution";

export default function EvolutionExample() {
  const ref = useRef<SpriteCanvasHandle>(null);
  function evolve() {
    if (!ref.current) {
      return;
    }

    ref.current.play("Evolution", undefined, () => console.log("end"), {
      src: "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/clucking_chicken.png",
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <SpriteCanvas
        animation="Idle"
        ref={ref}
        src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
        size="lg"
        effects={[evolutionEffect]}
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
      <Button onClick={evolve}>Play</Button>
    </div>
  );
}
