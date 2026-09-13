import {
  animate,
  type MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import type { ComponentProps, ComponentPropsWithoutRef, JSX } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const SlideToUnlockContext = createContext<{
  x: MotionValue<number>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  isDragging: boolean;
  handleWidth: number;
  textOpacity: MotionValue<number>;
  onDragStart: () => void;
  onDragEnd: () => void;
} | null>(null);

function useSlideToUnlock() {
  const context = useContext(SlideToUnlockContext);
  if (!context) {
    throw new Error(
      `SlideToUnlock components must be used within SlideToUnlock`,
    );
  }
  return context;
}

function SlideToUnlock({
  className,
  handleWidth = 56,
  children,
  onUnlock,
  ...props
}: ComponentProps<"div"> & {
  /**
   * Width of the drag handle in pixels.
   * @defaultValue 56
   * */
  handleWidth?: number;
  /** Called when the handle is dragged fully to the end. */
  onUnlock?: () => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  const fadeDistance = handleWidth;
  const textOpacity = useTransform(x, [0, fadeDistance], [1, 0]);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);

    const trackWidth = trackRef.current?.offsetWidth || 0;
    const maxX = trackWidth - handleWidth;

    if (x.get() >= maxX) {
      onUnlock?.();
    } else {
      animate(x, 0, { type: "spring", bounce: 0, duration: 0.25 });
    }
  }, [x, onUnlock, handleWidth]);

  return (
    <SlideToUnlockContext.Provider
      value={{
        x,
        trackRef,
        isDragging,
        handleWidth,
        textOpacity,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
      }}
    >
      <div
        data-slot="slide-to-unlock"
        className={cn(
          "w-54 pixel-border pixel-size-lg pixel-color-border p-(--pixel-size)  bg-muted",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </SlideToUnlockContext.Provider>
  );
}

function SlideToUnlockTrack({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  const { trackRef } = useSlideToUnlock();

  return (
    <div
      ref={trackRef}
      data-slot="track"
      className={cn(
        "relative flex h-10 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function SlideToUnlockText({
  className,
  children,
  style,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
  /**
   * Accepts a render function as `children` to react to the dragging state.
   *
   * @example
   * ```tsx
   * <SlideToUnlockText>
   *   {({ isDragging }) => <span>{isDragging ? "Release..." : "Slide to unlock"}</span>}
   * </SlideToUnlockText>
   * ```
   */
  children: JSX.Element | ((props: { isDragging: boolean }) => JSX.Element) | string;
}) {
  const { handleWidth, textOpacity, isDragging } = useSlideToUnlock();

  return (
    <motion.div
      data-slot="text"
      data-dragging={isDragging}
      className={cn("pl-1 text-muted-foreground text-sm font-medium inline-flex shimmer", className)}
      style={{ marginLeft: handleWidth, opacity: textOpacity, ...style }}
      {...props}
    >
      {typeof children === "function" ? children({ isDragging }) : children}
    </motion.div>
  );
}

function SlideToUnlockHandle({
  className,
  children,
  style,
  ...props
}: ComponentPropsWithoutRef<typeof motion.div>) {
  const {
    x,
    trackRef,
    onDragStart,
    onDragEnd,
    handleWidth: width,
  } = useSlideToUnlock();

  return (
    <motion.div
      data-slot="handle"
      className={cn(
        "absolute top-0 left-0 flex h-10 cursor-grab items-center justify-center rounded-lg bg-white text-ring pixel-rounded pixel-size-lg active:cursor-grabbing",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-6",
        className,
      )}
      style={{ width, x, ...style }}
      drag="x"
      dragConstraints={trackRef}
      dragElastic={0}
      dragMomentum={false}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      {...props}
    >
      {children ?? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          className="rotate-90">
          <path d="M13 3h2v2h2v2h2v2h2v4h-5v14H8v-14H3V9h2V7h2V5h2V3h2V1h2v2Z"></path>
        </svg>
      )}
    </motion.div>
  );
}

export {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
};
