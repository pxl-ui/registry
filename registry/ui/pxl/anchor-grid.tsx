import { type ComponentType, useMemo } from "react";

import { cn } from "@/lib/utils";

export type Widget = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  anchorX: "left" | "right";
  anchorY: "top" | "bottom";
  className?: string;
  render: ComponentType;
};

export function computeCellSize(
  containerWidth: number,
  containerHeight: number,
  cols: number,
  rows: number,
  gap: number,
) {
  const sizeByWidth = (containerWidth - gap * (cols - 1)) / cols;
  const sizeByHeight = (containerHeight - gap * (rows - 1)) / rows;
  return Math.max(0, Math.floor(Math.min(sizeByWidth, sizeByHeight)));
}

export function resolveWidgetPlacement(
  { x, y, w = 1, h = 1, anchorX = "left", anchorY = "top" }: Widget,
  cols: number,
  rows: number,
) {
  const colStart = anchorX === "right" ? cols - x - w + 1 : x + 1;
  const rowStart = anchorY === "bottom" ? rows - y - h + 1 : y + 1;
  return {
    gridColumn: `${colStart} / ${colStart + w}`,
    gridRow: `${rowStart} / ${rowStart + h}`,
  };
}

type Props = {
  containerHeight: number;
  containerWidth: number;
  cols: number;
  rows: number;
  gap?: number;
  gridAnchorX?: "center" | "left" | "right";
  gridAnchorY?: "center" | "top" | "bottom";
  widgets: Widget[];
  showGridLines?: boolean;
};

export function AnchorGrid({
  containerWidth,
  containerHeight,
  cols,
  rows,
  gap = 12,
  gridAnchorX = "left",
  gridAnchorY = "top",
  widgets = [],
  showGridLines = false,
}: Props) {
  const cellSize = useMemo(
    () => computeCellSize(containerWidth, containerHeight, cols, rows, gap),
    [containerWidth, containerHeight, cols, rows, gap]
  );

  const gridPixelWidth = cellSize * cols + gap * (cols - 1);
  const gridPixelHeight = cellSize * rows + gap * (rows - 1);

  const justifyMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };
  const alignMap = { top: "flex-start", center: "center", bottom: "flex-end" };

  return (
    <div
      className={"flex relative overflow-hidden"}
      style={{
        width: containerWidth,
        height: containerHeight,
        justifyContent: justifyMap[gridAnchorX],
        alignItems: alignMap[gridAnchorY],
      }}
    >
      <div
        className="relative"
        style={{
          border: showGridLines ? "1px solid rgba(0,0,0,0.16)" : "none",
          width: gridPixelWidth,
          height: gridPixelHeight,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          gap: `${gap}px`,
          backgroundImage:
            showGridLines && gap === 0
              ? `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`
              : "none",
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      >
        {widgets.map((widget) => {
          const placement = resolveWidgetPlacement(widget, cols, rows);
          const Render = widget.render;

          return (
            <div
              key={widget.id}
              className={cn(
                "group/widget @container/widget flex w-full h-full items-center justify-center overflow-hidden",
                widget.className,
              )}
              style={placement}
            >
              <Render />
            </div>
          );
        })}
      </div>
    </div>
  );
}
