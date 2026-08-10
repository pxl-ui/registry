import { useCallback, useRef, useState } from "react";

import { Button } from "@/components/ui/pxl/button";
import {
  SpriteCanvas,
  type SpriteCanvasHandle,
} from "@/components/ui/pxl/sprite-canvas";
import { transitionEffect } from "@/lib/pxl/sprite-animations/transition";

const sprites = [
  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png",
  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/clucking_chicken.png",
];

export default function TransitionExample() {

  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<SpriteCanvasHandle>(null);

  const play = useCallback((direction: 1 | -1) => {
    if (!ref.current) {
      return;
    }

    const nextIndex = activeIndex === 0 ? 1 : 0;

    ref.current.play("Transition", undefined, () => console.log("end"), {
      src: sprites[nextIndex],
      direction,
    });

    setActiveIndex(nextIndex);

  }, [activeIndex])

  return (
    <div className="flex flex-col items-center gap-4">
      <SpriteCanvas
        ref={ref}
        src={sprites[0]}
        size="lg"
        effects={[transitionEffect]}
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
            layers: [{ name: "Sprite Sheet", opacity: 255, blendMode: "normal" }],
            slices: [],
          },
        }}
        animation="Idle"
      />
      <div className="flex flex-row gap-6">
        <Button size="sm" onClick={() => play(1)}>PREV</Button>
        <Button size="sm" onClick={() => play(-1)}>NEXT</Button>
      </div>
    </div>
  );
}
