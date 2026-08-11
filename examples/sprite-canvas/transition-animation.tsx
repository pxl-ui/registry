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
            "0": { frame: { x:  0, y: 0, w: 16, h: 16 }, },
            "1": { frame: { x: 16, y: 0, w: 16, h: 16 }, },
            "2": { frame: { x: 32, y: 0, w: 16, h: 16 }, },
            "3": { frame: { x: 48, y: 0, w: 16, h: 16 }, },
          },
          meta: { frameTags: [ { name: "Idle", from: 0, to: 3, }, ], },
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
