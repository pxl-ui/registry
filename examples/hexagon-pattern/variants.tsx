"use client";

import { HexagonPattern } from "@/components/backgrounds/pxl/hexagon-pattern";
import { cn } from "@/lib/utils";

export default function HexagonPatternVariants() {
  return (
    <div className="flex flex-wrap size-full items-center justify-center gap-2">
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <HexagonPattern
          variant="muted"
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
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <HexagonPattern
          variant="primary"
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
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <HexagonPattern
          variant="info"
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
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <HexagonPattern
          variant="success"
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
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <HexagonPattern
          variant="warning"
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
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <HexagonPattern
          variant="danger"
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
      </div>
    </div>
  );
}
