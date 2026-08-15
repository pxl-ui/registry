import { SpriteBackground } from "@/components/ui/pxl/sprite-background";

export default function SpriteBackgroundPreview() {
  return (
    <div className="w-full min-h-23 flex items-center justify-center">
      <SpriteBackground
        src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
        columns={4}
        rows={1}
        animation="Idle"
      />
    </div>
  );
}
