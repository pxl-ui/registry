"use client";

import {
  motion,
  type SpringOptions,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import * as React from "react";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

const PROGRESS_SPRING: SpringOptions = {
  stiffness: 120,
  damping: 30,
  mass: 0.4,
};

const RING_SIZE = 52;
const RING_STROKE = 4;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function ScrollProgress({
  variant = "bar",
  container,
  sections = [],
  className,
}: {
  variant?: "bar" | "ring" | "dots";
  container?: React.RefObject<HTMLElement | null>;
  sections?: {
    id: string;
    label?: string;
  }[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ container });
  const smooth = useSpring(scrollYProgress, PROGRESS_SPRING);
  const progress = reducedMotion ? scrollYProgress : smooth;

  const [percent, setPercent] = React.useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    const next = Math.round(clamp01(v) * 100);
    setPercent((prev) => (prev === next ? prev : next));
  });

  const strokeDashoffset = useTransform(
    progress,
    [0, 1],
    [RING_CIRCUMFERENCE, 0],
  );

  const useOverlay = container != null;
  const [box, setBox] = React.useState({ width: 0, height: 0 });
  React.useEffect(() => {
    const el = container?.current;
    if (!el) return;
    const update = () =>
      setBox({ width: el.clientWidth, height: el.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [container]);

  const layoutId = React.useId();
  const sectionKey = sections.map((s) => s.id).join("|");
  const [activeId, setActiveId] = React.useState<string | null>(
    sections[0]?.id ?? null,
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (variant !== "dots") return;
    if (typeof IntersectionObserver === "undefined") return;
    if (sections.length === 0) return;
    const root = container?.current ?? null;
    const ratios = new Map<string, number>();
    const idByEl = new Map<Element, string>();

    const update = () => {
      let best: string | null = null;
      let bestRatio = -1;
      for (const section of sections) {
        const ratio = ratios.get(section.id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = section.id;
        }
      }
      if (best) setActiveId(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = idByEl.get(entry.target);
          if (!id) continue;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        update();
      },
      { root, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        idByEl.set(el, section.id);
        observer.observe(el);
      }
    }
    return () => observer.disconnect();
  }, [variant, sectionKey, container]);

  const dotTransition = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 500, damping: 34, mass: 0.8 };

  const scrollToSection = React.useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    },
    [reducedMotion],
  );

  const ready = !useOverlay || box.height > 0;

  const content = !ready ? null : variant === "bar" ? (
    <div
      role="progressbar"
      aria-label="Reading Progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className="absolute inset-x-0 top-0 h-0.75 bg-neutral-200/60 dark:bg-neutral-800/60"
    >
      <motion.div
        aria-hidden
        className="h-full w-full origin-left bg-neutral-900 will-change-transform dark:bg-neutral-100"
        style={{ scaleX: progress }}
      />
    </div>
  ) : variant === "ring" ? (
    <div
      role="progressbar"
      aria-label="Reading Progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className="pointer-events-auto absolute right-4 bottom-4 grid place-items-center rounded-full bg-white/85 p-1 shadow-md ring-1 ring-neutral-200 backdrop-blur dark:bg-neutral-950/85 dark:ring-neutral-800"
    >
      <svg
        width={RING_SIZE}
        height={RING_SIZE}
        viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
        className="-rotate-90"
        aria-hidden
      >
        <circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          strokeWidth={RING_STROKE}
          className="stroke-neutral-200 dark:stroke-neutral-800"
        />
        <motion.circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          strokeWidth={RING_STROKE}
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          className="stroke-neutral-900 will-change-[stroke-dashoffset] dark:stroke-neutral-100"
          style={{ strokeDashoffset }}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[11px] font-medium tabular-nums text-neutral-700 dark:text-neutral-200">
        {percent}%
      </span>
    </div>
  ) : (
    <nav
      aria-label="Chapter Progress"
      className="pointer-events-auto absolute top-1/2 right-3 flex -translate-y-1/2 flex-col items-end gap-3"
    >
      {sections.map((section) => {
        const active = section.id === activeId;
        const label = section.label ?? section.id;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            aria-current={active ? "true" : undefined}
            aria-label={label}
            className="group flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
          >
            {/* <AnimatePresence initial={false}>
              {active && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  transition={dotTransition}
                  className="rounded-md bg-neutral-900 px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap text-white dark:bg-neutral-100 dark:text-neutral-900"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence> */}
            <span className="relative grid h-4 w-4 place-items-center">
              {active && (
                <motion.span
                  layoutId={layoutId}
                  aria-hidden
                  transition={dotTransition}
                  className="absolute inset-0 pixel-size-lg pixel-rounded  bg-foreground ring-2 ring-neutral-900 dark:ring-neutral-100"
                />
              )}
              <motion.span
                aria-hidden
                animate={{ scale: 1 }}
                transition={dotTransition}
                className={cn(
                  "h-2 w-2 pixel-rounded",
                  active
                    ? "bg-background"
                    : "bg-neutral-300 group-hover:bg-neutral-400 dark:bg-neutral-600 dark:group-hover:bg-neutral-500",
                )}
              />
            </span>
          </button>
        );
      })}
    </nav>
  );

  if (variant === "dots" && sections.length === 0) return null;

  if (useOverlay) {
    return (
      <div
        className={cn(
          "pointer-events-none sticky top-0 left-0 z-30 h-0 w-full",
          className,
        )}
      >
        <div
          className="absolute top-0 left-0 w-full"
          style={{ height: box.height }}
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none fixed inset-0 z-30", className)}>
      {content}
    </div>
  );
}

export { ScrollProgress }
