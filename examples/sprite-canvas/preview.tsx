import { SpriteCanvas } from "@/components/ui/pxl/sprite-canvas";

export default function SpriteCanvasPreview() {
  return (
    <div className="w-full min-h-23 flex items-center justify-center">
      <SpriteCanvas
        src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
        animation="Idle"
        size="lg"
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
    </div>
  );
}
