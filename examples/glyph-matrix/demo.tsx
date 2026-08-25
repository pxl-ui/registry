"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { GlyphMatrix } from "@/components/backgrounds/pxl/glyph-matrix";

export default function GlyphMatrixDemo() {
  const { resolvedTheme } = useTheme();
  // Start neutral so the first frame is visible in both themes, then adopt
  // the resolved theme color once it's known.
  const [color, setColor] = useState("#6B7280");

  useEffect(() => {
    if (!resolvedTheme) return;
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <GlyphMatrix
      glyphs="01·•+*/\<>="
      cellSize={14}
      mutationRate={0.04}
      interval={90}
      fadeBottom={0.6}
      color={color}
    />
  );
}
