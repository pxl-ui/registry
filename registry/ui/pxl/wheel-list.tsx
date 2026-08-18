"use client";

import { cva } from "class-variance-authority";
import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Children,
  type ComponentProps,
  type CSSProperties,
  isValidElement,
  type KeyboardEvent,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

// Inertial wheel list - the iOS picker drum, rebuilt on one principle: the
// SCROLL POSITION IS THE STATE. Nothing is scroll-jacked and no library fakes
// the physics: the scroller is a plain overflow-y list, so the browser (and a
// thumb on a phone) owns momentum, and `scroll-snap-type: y mandatory` +
// `scroll-snap-align: center` land every fling on an item. The selection is
// DERIVED from scrollTop - round(scrollTop / itemHeight) - never stored beside
// it, so the two can't disagree.
//
// Options are declared as children, `<WheelList.Option value="...">`, the same
// pattern as a native <select>. WheelList doesn't render those elements - it
// reads their `value`/`children` props out of the React tree once (memoized on
// the `children` prop) and drives the drum from that derived array. Content per
// option can be any ReactNode, not just a string.
//
// The drum look is paint, not layout: motion's `useScroll` tracks the scroller
// and every item derives `rotateX(±38° · t) scale(1.14 → 0.80)` and opacity from
// its distance to the viewport's centre via `useTransform` - motion values
// update outside the React render loop, GPU-composited, no per-frame setState.
// The edge fade is a `mask-image` gradient on the scroller, so items dissolve at
// the rim instead of clipping.
//
// Settling: `scrollend` fires when the snap lands, but not in every engine, so
// a 140ms quiet-timer fallback commits the same selection. Keyboard follows the
// listbox pattern - the scroller is the single tab stop, arrows/Home/End scroll
// to the neighbour (which updates selection because selection IS scroll) and
// aria-activedescendant tracks the centre item. Honours prefers-reduced-motion:
// transforms stay flat, programmatic scrolls jump.
//
// Geometry is measured, not prop-driven. The root wrapper fills whatever box
// its parent gives it (`w-full h-full`, with a min-height fallback) and is
// tracked with a ResizeObserver. Row height (`--wheel-item`) is that measured
// height divided by `visibleCount`, optionally clamped between
// `minItemHeight`/`maxItemHeight`.
//
// IMPORTANT CSS gotcha this file works around: vertical padding expressed as
// a percentage (`padding-top/bottom: N%`) always resolves against the
// containing block's WIDTH, never its height - even though it looks like a
// vertical value. That's why the list's centring padding uses an explicit
// pixel custom property (`--wheel-h`, set from the measured box height) and
// never `100%`. The whole "scrollTop = index * itemH exactly centers item
// `index`" identity depends on padding-top being exactly
// `(--wheel-h - itemH) / 2` in real pixels; feed it a width-relative
// percentage instead and `scrollToIndex` silently drifts from where the
// snap points actually are, since `metrics.centers` (measured from the real
// DOM) and `index * itemH` (what scrollToIndex computes) stop agreeing.

export type WheelEvent = {
  value: string;
  index: number;
  count: number;
  settled: boolean;
};

// Marker component. WheelList never mounts this - it only reads its props off
// the React element tree. Rendering it directly is a no-op by design.
function WheelOption(
  _props: { className?: string; value: string } & PropsWithChildren,
) {
  return null;
}
WheelOption.displayName = "WheelList.Option";

type ResolvedOption = {
  value: string;
  className?: string;
  content: ReactNode;
};

type Metrics = {
  itemH: number;
  centers: number[];
  half: number;
};

// Derives centres/half from the *same* box height + item height used for
// `--wheel-item` / `--wheel-h`, mirroring the real padding-centred layout.
// Used only until the real DOM measure lands, so the very first paint (and
// the initial scrollTop) never disagrees with the values that arrive a
// frame later.
function fallbackMetrics(count: number, boxH: number, itemH: number): Metrics {
  const padding = Math.max(0, (boxH - itemH) / 2);
  return {
    itemH,
    centers: Array.from(
      { length: count },
      (_, i) => padding + itemH * i + itemH / 2,
    ),
    half: boxH / 2,
  };
}

// Pulls the `<WheelList.Option>` children out of the React tree into a plain
// array. Anything that isn't a WheelOption is ignored (with a dev warning) so
// stray whitespace/fragments from JSX don't break indexing.
function resolveOptions(children: ReactNode): ResolvedOption[] {
  const resolved: ResolvedOption[] = [];
  for (const child of Children.toArray(children)) {
    if (
      !isValidElement<ComponentProps<typeof WheelOption>>(child)
    ) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "WheelList: ignoring child that isn't a <WheelList.Option>.",
          child,
        );
      }
      continue;
    }
    resolved.push({
      className: child.props.className,
      value: child.props.value,
      content: child.props.children,
    });
  }
  return resolved;
}

const optionVariants = cva("", {
  variants: {
    align: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    }
  },
  defaultVariants: {
    align: "center",
  },
});

// One drum row. `t` is the item's signed distance from the viewport centre in
// half-viewport units - the centre item is biggest (scale 1.14) and the rim
// dissolves, by continuous function rather than a styled selected class. All
// four styles are motion values derived from the scroll: no React re-render,
// no layout read, GPU-composited.
function DrumOption({
  align,
  id,
  children,
  className,
  selected,
  scrollY,
  center,
  half,
  drum,
  flat,
  onClick,
}: {
  align?: "start" | "center" | "end";
  id: string;
  children: ReactNode;
  className?: string;
  selected: boolean;
  scrollY: MotionValue<number>;
  center: number;
  half: number;
  drum: boolean;
  flat: boolean;
  onClick: () => void;
}) {
  const t = useTransform(scrollY, (v) =>
    Math.max(-1, Math.min(1, (center - (v + half)) / half)),
  );
  const rotateX = useTransform(t, (tv) => (flat || !drum ? 0 : -38 * tv));
  const scale = useTransform(t, (tv) =>
    flat || align !== "center" ? 1 : 1.14 - 0.34 * Math.abs(tv),
  );
  const translateX = useTransform(t, (tv) => {
    if (flat || align === "center") {
      return 0;
    }

    const val = 6 - 2 * Math.abs(tv);

    if (align === "end") {
      return val * -1;
    }

    return val;
  });
  const opacity = useTransform(t, (tv) => (flat ? 1 : 1 - 0.55 * Math.abs(tv)));

  return (
    <motion.li
      id={id}
      role="option"
      aria-selected={selected}
      className={cn(
        "h-(--wheel-item) flex items-center snap-center tabular-nums cursor-pointer select-none text-xs",
        optionVariants({
          align,
        }),
        className,
      )}
      style={{ rotateX, scale, translateX, opacity }}
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
}

function WheelList({
  align = "center",
  children,
  label = "Pick a value",
  defaultValue = undefined,
  drum = true,
  onChange,
  onSelect,
  visibleCount = 5,
  minItemHeight,
  maxItemHeight,
}: {
  align?: "start" | "center" | "end";
  children: ReactNode;
  label?: string;
  defaultValue?: string;
  drum?: boolean;
  onChange?: (state: WheelEvent) => void;
  onSelect?: (value: string) => void;
  /**
   * How many rows should be visible in the drum at once. Row height
   * (`--wheel-item`) is derived from the measured container height divided
   * by this number, so keep it odd if you want a single row centred exactly
   * on the lens.
   */
  visibleCount?: number;
  /** Floor for the derived row height, in px. No floor if omitted. */
  minItemHeight?: number;
  /** Ceiling for the derived row height, in px. No ceiling if omitted. */
  maxItemHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const settleTimer = useRef(0);
  const didInitialScrollRef = useRef(false);
  const idBase = useId();
  const reduced = useReducedMotion();

  const options = useMemo(() => resolveOptions(children), [children]);
  const defaultIndex = defaultValue
    ? options.findIndex((opt) => opt.value === defaultValue)
    : 0;

  // Container box, read via ResizeObserver - this is what replaces the old
  // width/height/itemHeight props.
  const [box, setBox] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const fallbackItemH = 40;
  const fallbackBoxH = fallbackItemH * visibleCount;
  const boxH = box.h > 0 ? box.h : fallbackBoxH;
  const rawItemH = box.h > 0 ? box.h / visibleCount : fallbackItemH;
  const derivedItemH = Math.min(
    maxItemHeight ?? Number.POSITIVE_INFINITY,
    Math.max(minItemHeight ?? 0, rawItemH),
  );

  const [metrics, setMetrics] = useState<Metrics>(() =>
    fallbackMetrics(options.length, boxH, derivedItemH),
  );
  const [index, setIndex] = useState<number>(defaultIndex);
  const [settled, setSettled] = useState(true);
  const indexRef = useRef(defaultIndex);
  const metricsRef = useRef(metrics);
  metricsRef.current = metrics;
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const { scrollY } = useScroll({ container: scrollerRef });

  const clampIndex = useCallback(
    (i: number) => Math.min(Math.max(i, 0), optionsRef.current.length - 1),
    [],
  );

  function handleScroll() {
    // Selection derives from the scroll on every frame; it commits when the
    // snap lands (scrollend where the engine has it, the quiet-timer elsewhere).
    const scroller = scrollerRef.current;
    if (scroller) {
      const next = clampIndex(
        Math.round(scroller.scrollTop / metricsRef.current.itemH),
      );
      if (next !== indexRef.current) {
        indexRef.current = next;
        setIndex(next);
      }
    }
    setSettled(false);
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => setSettled(true), 140);
  }

  function handleScrollEnd() {
    window.clearTimeout(settleTimer.current);
    setSettled(true);
  }

  // Scrolls to `i` using the real, currently-measured item height. This
  // identity (`i * itemH` = scrollTop that centers item i) only holds
  // because the list's padding-top is exactly `(boxH - itemH) / 2` in real
  // pixels - see --wheel-h below.
  function scrollToIndex(i: number, smooth = true) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({
      top: clampIndex(i) * metricsRef.current.itemH,
      behavior: smooth && !reduced ? "smooth" : "auto",
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      onSelect?.(options[index].value);
      return;
    }

    const steps: Record<string, number> = {
      ArrowUp: -1,
      ArrowDown: 1,
      PageUp: -5,
      PageDown: 5,
    };
    let target: number;
    if (event.key in steps) target = indexRef.current + steps[event.key];
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = options.length - 1;
    else return;
    event.preventDefault();
    scrollToIndex(target);
  }

  function handleClick(idx: number) {
    if (index === idx) {
      onSelect?.(options[idx].value);
    } else {
      scrollToIndex(idx);
    }
  }

  // Measure the wrapper against its parent's box - this is what geometry now
  // derives from instead of width/height/itemHeight props.
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const measureBox = () => {
      const rect = container.getBoundingClientRect();
      setBox((prev) =>
        prev.w === rect.width && prev.h === rect.height
          ? prev
          : { w: rect.width, h: rect.height },
      );
    };
    measureBox();
    if (typeof ResizeObserver === "undefined") return undefined;
    const boxObserver = new ResizeObserver(measureBox);
    boxObserver.observe(container);
    return () => boxObserver.disconnect();
  }, []);

  // Measure real row metrics (and, the very first time this succeeds, land on
  // defaultIndex). Landing lives *inside* this effect so it always uses the
  // itemH that was just measured, never a fallback guess.
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;
    const measure = () => {
      const opts = scroller.querySelectorAll<HTMLElement>('[role="option"]');
      if (!opts.length) return;
      const itemH = opts[0].offsetHeight;
      setMetrics({
        itemH,
        centers: Array.from(opts, (el) => el.offsetTop + el.offsetHeight / 2),
        half: scroller.clientHeight / 2,
      });
      if (!didInitialScrollRef.current) {
        didInitialScrollRef.current = true;
        scroller.scrollTop = clampIndex(defaultIndex) * itemH;
      }
    };
    measure();
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;
    observer?.observe(scroller);
    return () => observer?.disconnect();
  }, [options, derivedItemH]);

  useEffect(() => () => window.clearTimeout(settleTimer.current), []);

  useEffect(() => {
    if (!options.length) return;
    onChange?.({
      value: options[index]?.value ?? options[0].value,
      index,
      count: options.length,
      settled,
    });
  }, [options, index, settled, onChange]);

  const optionId = (i: number) => `${idBase}-opt-${i}`;
  const current = options[index];

  return (
    <div
      ref={containerRef}
      className="relative size-full"
      style={
        {
          "--wheel-item": `${derivedItemH}px`,
          // Explicit pixel height, NOT a percentage: vertical padding percentages
          // resolve against the containing block's *width*, not its height, so
          // "100%" here would silently break the centring math. See file header.
          "--wheel-h": `${boxH}px`,
        } as CSSProperties
      }
    >
      <div className="relative h-full">
        <span
          className="absolute left-0 right-0 top-1/2 h-(--wheel-item) -translate-y-1/2 pixel-border pixel-size-md bg-muted pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="relative h-full overflow-y-auto overscroll-contain [scroll-snap-type:y_mandatory] perspective-[44rem] scrollbar-none [&::-webkit-scrollbar]:hidden mask-[linear-gradient(to_bottom,transparent_0,#000_30%,#000_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,#000_30%,#000_70%,transparent_100%)] focus-visible:outline-none"
          ref={scrollerRef}
          role="listbox"
          aria-label={label}
          aria-activedescendant={current ? optionId(index) : undefined}
          tabIndex={0}
          data-drum={drum ? "true" : "false"}
          onScroll={handleScroll}
          onScrollEnd={handleScrollEnd}
          onKeyDown={handleKeyDown}
        >
          <ul className="py-[calc((var(--wheel-h)-var(--wheel-item))/2)]">
            {options.map((option, i) => (
              <DrumOption
                className={option.className}
                align={align}
                key={option.value}
                id={optionId(i)}
                selected={i === index}
                scrollY={scrollY}
                center={
                  metrics.centers[i] ??
                  fallbackMetrics(options.length, boxH, derivedItemH).centers[i]
                }
                half={metrics.half || boxH / 2}
                drum={drum}
                flat={Boolean(reduced)}
                onClick={() => handleClick(i)}
              >
                {option.content}
              </DrumOption>
            ))}
          </ul>
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {settled ? `Selected ${current?.value ?? ""}` : "Scrolling"}
      </p>
    </div>
  );
}

const WheelListWithOption = Object.assign(WheelList, { Option: WheelOption });

export { WheelListWithOption as WheelList, WheelOption };
