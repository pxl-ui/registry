"use client";

import { AnimatedGridPattern } from "@/components/backgrounds/pxl/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function FlickeringGridVariants() {
  return (
    <div className="flex flex-wrap size-full items-center justify-center gap-2">
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <AnimatedGridPattern
          variant="muted"
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <AnimatedGridPattern
          variant="primary"
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <AnimatedGridPattern
          variant="info"
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <AnimatedGridPattern
          variant="success"
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <AnimatedGridPattern
          variant="warning"
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <AnimatedGridPattern
          variant="danger"
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    </div>
  );
}
