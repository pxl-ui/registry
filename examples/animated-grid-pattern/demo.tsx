import { AnimatedGridPattern } from "@/components/backgrounds/pxl/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function AnimatedGridPatternDemo() {
  return (
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
  );
}
