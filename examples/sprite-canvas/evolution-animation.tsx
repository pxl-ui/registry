import { useRef } from "react";

import { Button } from "@/components/ui/pxl/button";
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
    <div className="flex flex-col gap-4 items-center">
      <SpriteCanvas
        animation="Idle"
        ref={ref}
        src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
        size="lg"
        effects={[evolutionEffect]}
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
      <Button onClick={evolve}>Play</Button>
    </div>
  );
}
