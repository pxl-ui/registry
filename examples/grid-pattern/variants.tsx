"use client";

import { GridPattern } from "@/components/backgrounds/pxl/grid-pattern";
import { cn } from "@/lib/utils";

export default function FlickeringGridVariants() {
  return (
    <div className="flex flex-wrap size-full items-center justify-center gap-2">
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <GridPattern
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
        <GridPattern
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
        <GridPattern
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
        <GridPattern
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
        <GridPattern
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
        <GridPattern
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
