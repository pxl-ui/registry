"use client";

import { GlyphMatrix } from "@/components/backgrounds/pxl/glyph-matrix";

export default function GlyphMatrixVariants() {
  return (
    <div className="flex flex-wrap size-full items-center justify-center gap-2">
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <GlyphMatrix
          glyphs="muted"
          variant="muted"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <GlyphMatrix
          glyphs="primary"
          variant="primary"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <GlyphMatrix
          glyphs="info"
          variant="info"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <GlyphMatrix
          glyphs="success"
          variant="success"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <GlyphMatrix
          glyphs="warning"
          variant="warning"
        />
      </div>
      <div className="relative w-max h-32 aspect-video pixel-rounded pixel-size-lg">
        <GlyphMatrix
          glyphs="danger"
          variant="danger"
        />
      </div>
    </div>
  );
}
