import { SpriteCanvas } from "@/components/ui/pxl/sprite-canvas";

export default function MultiLayer() {
  return (
    <div className="w-full min-h-23 flex items-center justify-center">
      <SpriteCanvas
        src={[
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/bodies/human/male/ivory/Universal.png",
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/bodyParts/hair/male/long/blonde2/Universal.png",
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/bodyParts/eyes/male/blue/Universal.png",
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/bodyParts/facialHair/male/beard/blonde2/Universal.png",
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/clothes/torso/male/shirt/formal/white/Universal.png",
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/clothes/legs/male/pants/pants/blue/Universal.png",
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/clothes/belt/male/leather/leather/Universal.png",
          "https://raw.githubusercontent.com/central-factory/Universal-LPC-spritesheet/refs/heads/new-api/assets2/characters/humanoids/clothes/feet/male/shoes/brown/Universal.png"
        ]}
        size="lg"
        animation="Idle_Down"
        atlas={{
          frames: {
            "Idle_Down_0": { frame: { x: 0, y: 640, w: 64, h: 64 } },
            "Idle_Down_1": { frame: { x: 64, y: 640, w: 64, h: 64 } },
            "Idle_Down_2": { frame: { x: 128, y: 640, w: 64, h: 64 } },
            "Idle_Down_3": { frame: { x: 192, y: 640, w: 64, h: 64 } },
            "Idle_Down_4": { frame: { x: 256, y: 640, w: 64, h: 64 } },
            "Idle_Down_5": { frame: { x: 320, y: 640, w: 64, h: 64 } },
            "Idle_Down_6": { frame: { x: 384, y: 640, w: 64, h: 64 } },
            "Idle_Down_7": { frame: { x: 448, y: 640, w: 64, h: 64 } },
            "Idle_Down_8": { frame: { x: 512, y: 640, w: 64, h: 64 } },
          },
          meta: { frameTags: [{ name: "Idle_Down", from: 0, to: 8 }] },
        }}
      />
    </div>
  );
}
