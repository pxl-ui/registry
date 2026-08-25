"use client";

import { HexagonPattern } from "@/components/backgrounds/pxl/hexagon-pattern";
import { cn } from "@/lib/utils";

export default function HexagonPatternLinearGradient() {
  return (
    <HexagonPattern
      radius={40}
      x={-1}
      y={-1}
      className={cn(
        "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]",
      )}
    />
  );
}
