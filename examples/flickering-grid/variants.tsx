"use client";

import { FlickeringGrid } from "@/components/backgrounds/pxl/flickering-grid";

export default function FlickeringGridVariants() {
  return (
    <div className="flex flex-wrap size-full items-center justify-center gap-2">
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <FlickeringGrid
          variant="muted"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <FlickeringGrid
          variant="primary"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <FlickeringGrid
          variant="info"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <FlickeringGrid
          variant="success"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <FlickeringGrid
          variant="warning"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <FlickeringGrid
          variant="danger"
        />
      </div>
    </div>
  );
}
