"use client";

import { GridPattern } from "@/components/backgrounds/pxl/grid-pattern";
import { cn } from "@/lib/utils";

export default function GridPatternDashed() {
  return (
    <GridPattern
      width={30}
      height={30}
      x={-1}
      y={-1}
      strokeDasharray={"4 2"}
      className={cn(
        "mask-[radial-gradient(300px_circle_at_center,white,transparent)]",
      )}
    />
  );
}
