import { SpriteCanvas } from "@/components/ui/pxl/sprite-canvas";

export default function SpriteCanvasPreview() {
  return (
    <div className="w-full min-h-92 flex items-center justify-center">
      <SpriteCanvas
        src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
        animation="Idle"
        size="lg"
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
    </div>
  );
}
