"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  AnimatePresence,
  motion,
  type Transition,
  useReducedMotion,
} from "motion/react";
import {
  type PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const revealVariants = cva("block", {
  variants: {
    pattern: {
      default: "",
      diagonal: "",
      radial: "",
      random: ""
    },
    size: {
      default: "",
      sm: "",
      md: "",
      lg: ""
    },
    variant: {
      default: "bg-background",
      card: "bg-card",
      popover: "bg-popover",
      muted: "bg-muted",
      primary: "bg-primary",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info",
      foreground: "bg-foreground",
      primaryForeground: "bg-primary-foreground",
      successForeground: "bg-success-foreground",
      dangerForeground: "bg-danger-foreground",
      warningForeground: "bg-warning-foreground",
      infoForeground: "bg-info-foreground",
    },
  },
  defaultVariants: {
    pattern: "default",
    size: "default",
    variant: "default",
  },
});

  /**
   * Sweep order:
   * - "radial": from the center outwards (iris, RPG dialogue box look)
   * - "diagonal": from one corner to the other
   * - "random": cluttered, more "static"
   */
export type RevealPattern = NonNullable<VariantProps<typeof revealVariants>["pattern"]>;

/**
 * Calculate, for a grid of cols x rows, a delay per cell by combining
 * an ordered pattern (radial/diagonal) with a small random jitter.
 */
function useCellDelays(
  cols: number,
  rows: number,
  maxDelay: number,
  pattern: RevealPattern,
  jitter: number,
) {
  return useMemo(() => {
    const count = cols * rows;
    if (count === 0) return [];

    const centerCol = (cols - 1) / 2;
    const centerRow = (rows - 1) / 2;
    const maxDist =
      pattern === "radial"
        ? Math.hypot(
            Math.max(centerCol, cols - 1 - centerCol),
            Math.max(centerRow, rows - 1 - centerRow),
          ) || 1
        : cols - 1 + (rows - 1) || 1;

    const values: number[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const order =
          pattern === "radial"
            ? Math.hypot(col - centerCol, row - centerRow) / maxDist
            : (pattern === "diagonal" || pattern === "default")
              ? (col + row) / maxDist
              : Math.random();
        const noise = (Math.random() - 0.5) * jitter;
        values.push(Math.min(1, Math.max(0, order + noise)) * maxDelay);
      }
    }
    return values;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cols, rows, maxDelay, pattern, jitter]);
}

/**
 * The sizes for the pixels
 */
const PIXEL_SIZES : Record<NonNullable<VariantProps<typeof revealVariants>["size"]>, number> = {
  "default": 2,
  "sm": 1,
  "md": 2,
  "lg": 4,
};

export function Reveal({
  show,
  children,
  className,
  contentClassName,
  duration = 0.55,
  jitter = 0.15,
  maxCells = 400,
  onExitComplete,
  pattern = "default",
  size = "default",
  variant = "default",
}: {
  /** Controls whether the content is visible or not */
  show: boolean;
  className?: string;
  contentClassName?: string;
  /** Total duration of the transition, in seconds */
  duration?: number;
  /** how much noise/jitter is mixed in on top of the ordered pattern (0 = perfect, 1 = chaotic) */
  jitter?: number;
  /** Maximum number of rendered blocks (for performance and to avoid a "salt & pepper" look) */
  maxCells?: number;
  onExitComplete?: () => void;
} & VariantProps<typeof revealVariants> &
  PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;

      let cols = Math.max(1, Math.round(width / PIXEL_SIZES[size ?? "default"]));
      let rows = Math.max(1, Math.round(height / PIXEL_SIZES[size ?? "default"]));

      if (cols * rows > maxCells) {
        const scale = Math.sqrt((cols * rows) / maxCells);
        cols = Math.max(1, Math.round(cols / scale));
        rows = Math.max(1, Math.round(rows / scale));
      }
      setGrid((prev) =>
        prev.cols === cols && prev.rows === rows ? prev : { cols, rows },
      );
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [size, maxCells]);

  const cellDuration = Math.max(0.12, duration * 0.5);
  const maxDelay = Math.max(0, duration - cellDuration);
  const delays = useCellDelays(grid.cols, grid.rows, maxDelay, pattern ?? "default", jitter);

  const contentTransition: Transition = reducedMotion
    ? { duration: 0.15, ease: "easeOut" }
    : { duration: duration * 0.8, ease: [0.16, 1, 0.3, 1] };

  const cellEase = [0.4, 0, 0.2, 1] as const;

  return (
    <div
      ref={containerRef}
      className={cn("relative isolate size-full", className)}
    >
      <AnimatePresence onExitComplete={onExitComplete}>
        {show && (
          <motion.div
            key="pixel-reveal-content"
            className={cn("relative", contentClassName)}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.985 }}
            transition={contentTransition}
          >
            {children}

            {!reducedMotion && delays.length > 0 && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 grid overflow-hidden"
                style={{
                  gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
                  gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
                }}
              >
                {delays.map((delay, i) => (
                  <motion.span
                    key={i.toString()}
                    className={revealVariants({
                      variant,
                    })}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                      opacity: 0,
                      scale: 0.6,
                      transition: {
                        duration: cellDuration,
                        delay,
                        ease: cellEase,
                      },
                    }}
                    exit={{
                      opacity: 1,
                      scale: 1,
                      // Reversed order: the last block to disappear upon opening is the first to reappear upon closing.
                      transition: {
                        duration: cellDuration,
                        delay: maxDelay - delay,
                        ease: cellEase,
                      },
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
