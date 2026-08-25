"use client";

import { HexagonPattern } from "@/components/backgrounds/pxl/hexagon-pattern";
import { cn } from "@/lib/utils";

export default function HexagonPatternDemo() {
  return (
    <HexagonPattern
      hexagons={[
        [1, 1],
        [4, 4],
        [2, 2],
        [3, 4],
        [5, 4],
        [8, 2],
        [6, 3],
        [8, 5],
        [10, 10],
      ]}
      className={cn(
        "mask-[radial-gradient(420px_circle_at_center,white,transparent)]",
        "inset-0 skew-y-6",
      )}
    />
  );
}
