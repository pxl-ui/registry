import { SpriteImage } from "@/registry/pxl-ui/sprite-image/sprite-image";

export default function BasicSpriteImageExample() {
  return (
    <div className="w-full max-w-xs space-y-4">
      <SpriteImage src="/sprites/sheep_eat.png" />
    </div>
  );
}
