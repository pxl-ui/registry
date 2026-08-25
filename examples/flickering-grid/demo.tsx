import { FlickeringGrid } from "@/components/backgrounds/pxl/flickering-grid";

export default function FlickeringGridDemo() {
  return (
    <FlickeringGrid
      className="absolute inset-0 z-0 size-full"
      squareSize={4}
      gridGap={6}
      color="#6B7280"
      maxOpacity={0.5}
      flickerChance={0.1}
      height={800}
      width={800}
    />
  );
}
