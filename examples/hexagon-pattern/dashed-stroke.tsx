"use client"

import { HexagonPattern } from "@/components/backgrounds/pxl/hexagon-pattern"

export default function HexagonPatternDashed() {
  return (
    <HexagonPattern radius={40} x={-1} y={-1} strokeDasharray="4 2" />
  )
}
