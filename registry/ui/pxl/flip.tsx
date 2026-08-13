"use client";

import {
  animate,
  motion,
  type PanInfo,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  createContext,
  forwardRef,
  type HTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

/**
 * A handle for programmatically controlling the Flip.
 */
export type FlipRef = {
  /**
   * Programmatically flips the card to a specific state or toggles it.
   * @param flipped The target state. If undefined, the card will toggle.
   */
  flip: (flipped?: boolean) => void;
  /**
   * Toggles the current flipped state of the card.
   */
  toggle: () => void;
};

type FlipContextValue = {
  isFlipped: boolean;
  toggle: () => void;
  setFlipped: (flipped: boolean) => void;
  flipDirection: "horizontal" | "vertical";
  manualFlip: boolean;
  duration: number;
  easing: string;
  parallaxEnabled: boolean;
};

const FlipContext = createContext<FlipContextValue | null>(null);

const useFlip = () => {
  const context = useContext(FlipContext);
  if (!context) {
    throw new Error("useFlip must be used within a <Flip> component.");
  }
  return context;
};

type Props = HTMLAttributes<HTMLDivElement> & {
  /** The direction the card should flip. */
  flipDirection?: "horizontal" | "vertical";
  /** The duration of the CSS flip animation in milliseconds. */
  duration?: number;
  /** The CSS timing function for the CSS flip animation. */
  easing?: string;
  /** Enables a 3D parallax tilt effect on mouse move. */
  parallaxEnabled?: boolean;
  /** Controls the intensity of the parallax effect. Higher numbers mean more tilt. */
  parallaxIntensity?: number;
  /** Enables manual, gesture-based flipping instead of CSS-based interactions. */
  manualFlip?: boolean;
  /** A controlled state for whether the card is flipped. */
  isFlipped?: boolean;
  /** Callback function when the flip state changes, for use with controlled state. */
  onFlip?: (isFlipped: boolean) => void;
};

const Flip = forwardRef<FlipRef, Props>(
  (
    {
      flipDirection = "horizontal",
      duration = 600,
      easing = "ease-in-out",
      parallaxEnabled = false,
      parallaxIntensity = 10,
      manualFlip = false,
      isFlipped: isFlippedProp,
      onFlip,
      className,
      style,
      children,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const isControlled = isFlippedProp !== undefined;
    const [internalFlipped, setInternalFlipped] = useState(false);
    const isFlipped = isControlled ? !!isFlippedProp : internalFlipped;

    const setFlipped = useCallback(
      (next: boolean) => {
        if (!isControlled) setInternalFlipped(next);
        onFlip?.(next);
      },
      [isControlled, onFlip],
    );

    const toggle = useCallback(() => {
      setFlipped(!isFlipped);
    }, [isFlipped, setFlipped]);

    const flip = useCallback(
      (flipped?: boolean) => {
        if (flipped === undefined) {
          toggle();
          return;
        }
        setFlipped(flipped);
      },
      [toggle, setFlipped],
    );

    useImperativeHandle(ref, () => ({ flip, toggle }), [flip, toggle]);

    // --- Parallax tilt ---------------------------------------------------
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
      onMouseMove?.(event);
      if (!parallaxEnabled) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(px * parallaxIntensity * 2);
      rotateX.set(-py * parallaxIntensity * 2);
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
      onMouseLeave?.(event);
      if (!parallaxEnabled) return;
      rotateX.set(0);
      rotateY.set(0);
    }

    const contextValue = useMemo<FlipContextValue>(
      () => ({
        isFlipped,
        toggle,
        setFlipped,
        flipDirection,
        manualFlip,
        duration,
        easing,
        parallaxEnabled,
      }),
      [
        isFlipped,
        toggle,
        setFlipped,
        flipDirection,
        manualFlip,
        duration,
        easing,
        parallaxEnabled,
      ],
    );

    return (
      <FlipContext.Provider value={contextValue}>
        <div
          {...props}
          data-flipped={isFlipped}
          data-flip-direction={flipDirection}
          className={cn("relative", className)}
          style={{ perspective: 1200, ...style }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
              rotateX: parallaxEnabled ? springRotateX : 0,
              rotateY: parallaxEnabled ? springRotateY : 0,
            }}
          >
            {children}
          </motion.div>
        </div>
      </FlipContext.Provider>
    );
  },
);
Flip.displayName = "Flip";

const VELOCITY_THRESHOLD = 500;
const ROTATE_MIDPOINT = 90;
const ROTATE_MIN = -30;
const ROTATE_MAX = 210;

const FlipTrigger = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, children, onClick, onKeyDown, ...props }, ref) => {
    const {
      isFlipped,
      toggle,
      setFlipped,
      flipDirection,
      manualFlip,
      duration,
      easing,
    } = useFlip();

    const target = isFlipped ? 180 : 0;
    const rotate = useMotionValue(target);
    const isDragging = useRef(false);
    const dragStartRotate = useRef(target);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    // Keep the motion value in sync with isFlipped for the manual/gesture mode.
    // biome-ignore lint/correctness/useExhaustiveDependencies: target
    useEffect(() => {
      if (!manualFlip || isDragging.current) return;
      const controls = animate(rotate, target, {
        type: "spring",
        stiffness: 300,
        damping: 32,
      });
      return () => controls.stop();
    }, [manualFlip, target]);

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
      onClick?.(event);
      if (manualFlip) return;
      toggle();
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
      onKeyDown?.(event);
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    }

    function handleDragStart() {
      isDragging.current = true;
      dragStartRotate.current = rotate.get();
    }

    function handleDrag(
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) {
      const el = containerRef.current;
      if (!el) return;
      const size =
        flipDirection === "horizontal" ? el.offsetWidth : el.offsetHeight;
      const delta =
        flipDirection === "horizontal" ? info.offset.x : info.offset.y;
      const deltaRotate = size > 0 ? (delta / size) * 180 : 0;
      const next = Math.min(
        ROTATE_MAX,
        Math.max(ROTATE_MIN, dragStartRotate.current + deltaRotate),
      );
      rotate.set(next);
    }

    function handleDragEnd(
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) {
      isDragging.current = false;
      const velocity =
        flipDirection === "horizontal" ? info.velocity.x : info.velocity.y;
      const current = rotate.get();

      let nextFlipped: boolean;
      if (Math.abs(velocity) > VELOCITY_THRESHOLD) {
        nextFlipped = velocity > 0;
      } else {
        nextFlipped = current > ROTATE_MIDPOINT;
      }

      animate(rotate, nextFlipped ? 180 : 0, {
        type: "spring",
        stiffness: 300,
        damping: 32,
      });

      if (nextFlipped !== isFlipped) {
        setFlipped(nextFlipped);
      }
    }

    const rotateStyle =
      flipDirection === "horizontal"
        ? { rotateY: rotate }
        : { rotateX: rotate };

    const dragAxis = flipDirection === "horizontal" ? "x" : "y";

    return (
      // biome-ignore lint/a11y/useSemanticElements: trigger
      <div
        {...props}
        ref={containerRef}
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "relative h-full w-full select-none",
          manualFlip ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
          className,
        )}
        style={{ transformStyle: "preserve-3d", ...style }}
      >
        {manualFlip ? (
          <motion.div
            className="relative h-full w-full"
            style={{ transformStyle: "preserve-3d", ...rotateStyle }}
            drag={dragAxis}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {children}
          </motion.div>
        ) : (
          <div
            className="relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
              transform:
                flipDirection === "horizontal"
                  ? `rotateY(${target}deg)`
                  : `rotateX(${target}deg)`,
              transition: `transform ${duration}ms ${easing}`,
            }}
          >
            {children}
          </div>
        )}
      </div>
    );
  },
);
FlipTrigger.displayName = "FlipTrigger";

const FlipFront = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn("absolute inset-0", className)}
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          ...style,
        }}
      />
    );
  },
);
FlipFront.displayName = "FlipFront";

const FlipBack = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => {
    const { flipDirection } = useFlip();
    return (
      <div
        {...props}
        ref={ref}
        className={cn("absolute inset-0", className)}
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform:
            flipDirection === "horizontal"
              ? "rotateY(180deg)"
              : "rotateX(180deg)",
          ...style,
        }}
      />
    );
  },
);
FlipBack.displayName = "FlipBack";

export type { FlipContextValue, Props };
export { Flip, FlipBack, FlipContext, FlipFront, FlipTrigger, useFlip };
