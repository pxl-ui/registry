import { FlickeringGrid } from "@/components/backgrounds/pxl/flickering-grid";

export default function FlickeringGridRoundedDemo() {
  return (
    <FlickeringGrid
      className="absolute inset-0 z-0 size-full mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
      squareSize={4}
      gridGap={6}
      color="#60A5FA"
      maxOpacity={0.5}
      flickerChance={0.1}
      height={800}
      width={800}
    />
  );
}
