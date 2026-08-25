"use client";

import { GridPattern } from "@/components/backgrounds/pxl/grid-pattern";
import { cn } from "@/lib/utils";

export default function GridPatternLinearGradient() {
  return (
    <GridPattern
      width={20}
      height={20}
      x={-1}
      y={-1}
      className={cn(
        "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]",
      )}
    />
  );
}
