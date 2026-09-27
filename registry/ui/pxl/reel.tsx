"use client";

import { cn } from "cn";
import { AnimatePresence, motion } from "motion/react";
import type {
  ComponentProps,
  MouseEventHandler,
  ReactNode
} from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/ui/pxl/button";
import { Progress } from "@/components/ui/pxl/progress";
import { useControllableState } from "@/hooks/pxl/use-controllable-state";

// Explicit type for reel items
export type ReelItem = {
  id: string | number;
  type: "video" | "image";
  src: string;
  duration: number; // Duration in seconds for both video and image
  alt?: string;
  title?: string;
  description?: string;
};

const ReelContext = createContext<{
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  progress: number;
  setProgress: (progress: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  data: ReelItem[];
  currentItem: ReelItem;
  isNavigating: boolean;
  setIsNavigating: (navigating: boolean) => void;
  isTransitioning: boolean;
  setIsTransitioning: (transitioning: boolean) => void;
} | undefined>(undefined);

const useReelContext = () => {
  const context = useContext(ReelContext);
  if (!context) {
    throw new Error("useReelContext must be used within a Reel");
  }
  return context;
};

function Reel({
  className,
  data,
  defaultIndex = 0,
  index: controlledIndex,
  onIndexChange: controlledOnIndexChange,
  defaultPlaying,
  playing: controlledPlaying,
  onPlayingChange: controlledOnPlayingChange,
  defaultMuted = true,
  muted: controlledMuted,
  onMutedChange: controlledOnMutedChange,
  autoPlay = true,
  ...props
}: ComponentProps<"div"> & {
  data: ReelItem[];
  defaultIndex?: number;
  index?: number;
  onIndexChange?: (index: number) => void;
  defaultPlaying?: boolean;
  playing?: boolean;
  onPlayingChange?: (playing: boolean) => void;
  defaultMuted?: boolean;
  muted?: boolean;
  onMutedChange?: (muted: boolean) => void;
  autoPlay?: boolean;
}) {
  const [currentIndex, setCurrentIndexState] = useControllableState({
    defaultProp: defaultIndex,
    prop: controlledIndex,
    onChange: controlledOnIndexChange,
  });

  const [isPlaying, setIsPlaying] = useControllableState({
    defaultProp: defaultPlaying ?? autoPlay,
    prop: controlledPlaying,
    onChange: controlledOnPlayingChange,
  });

  const [isMuted, setIsMuted] = useControllableState({
    defaultProp: defaultMuted,
    prop: controlledMuted,
    onChange: controlledOnMutedChange,
  });

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setCurrentIndex = useCallback(
    (index: number) => {
      setIsTransitioning(true);
      setProgress(0); // Reset progress immediately to prevent showing 100% during transition
      setCurrentIndexState(index);
    },
    [setCurrentIndexState],
  );

  const currentItem = data[currentIndex];

  return (
    <ReelContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
        progress,
        setProgress,
        duration,
        setDuration,
        data,
        currentItem,
        isNavigating,
        setIsNavigating,
        isTransitioning,
        setIsTransitioning,
      }}
    >
      <div
        className={cn(
          "relative isolate h-full w-auto overflow-hidden bg-black",
          "aspect-9/16",
          className,
        )}
        {...props}
      />
    </ReelContext.Provider>
  );
};

function ReelContent({
  className,
  children,
  ...props
}:  Omit<
  ComponentProps<"div">,
  "children"
> & {
  children: (item: ReelItem, index: number) => ReactNode;
}) {
  const { currentIndex, currentItem, setIsTransitioning } = useReelContext();

  const renderContent = () => {
    if (typeof children === "function") {
      return children(currentItem, currentIndex);
    }
    const childrenArray = Array.isArray(children) ? children : [children];
    return childrenArray[currentIndex];
  };

  return (
    <div
      className={cn("relative size-full", className)}
      data-reel-content
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1 }}
          className="absolute inset-0"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          key={currentIndex}
          onAnimationComplete={() => {
            // Mark transition as complete when fade-in completes
            setIsTransitioning(false);
          }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function ReelItem({ className, ...props }: ComponentProps<"div">) {
  return  (
    <div
      className={cn("relative size-full overflow-hidden", className)}
      data-reel-item
      {...props}
    />
  );
}

const MS_TO_SECONDS = 1000;
const PERCENTAGE = 100;

function ReelVideo({ className, ...props }: ComponentProps<"video">) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    isPlaying,
    isMuted,
    setDuration,
    setProgress,
    currentIndex,
    setCurrentIndex,
    data,
    progress,
    currentItem,
    isTransitioning,
  } = useReelContext();
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const pausedProgressRef = useRef<number>(0);
  const duration = currentItem.duration;

  // Set duration when component mounts or currentIndex changes
  useEffect(() => {
    setDuration(duration);
    // Don't reset progress here anymore - it's handled in ReelContent after transition
    if (!isTransitioning) {
      pausedProgressRef.current = 0;
    }
  }, [duration, setDuration, isTransitioning]);

  // Handle muting
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = isMuted;
  }, [isMuted]);

  // Store progress when pausing
  useEffect(() => {
    if (!isPlaying) {
      pausedProgressRef.current = progress;
    }
  }, [isPlaying, progress]);

  // Handle play/pause with duration-based progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isPlaying && !isTransitioning) {
      video.play().catch(() => {
        // Ignore autoplay errors
      });

      // Start progress animation only when not transitioning
      const elapsedTime = (pausedProgressRef.current * duration) / PERCENTAGE;
      startTimeRef.current = performance.now() - elapsedTime * MS_TO_SECONDS;

      const updateProgress = (currentTime: number) => {
        const elapsed =
          (currentTime - (startTimeRef.current || 0)) / MS_TO_SECONDS;
        const newProgress = (elapsed / duration) * PERCENTAGE;

        if (newProgress >= PERCENTAGE) {
          const totalItems = data?.length || 0;
          if (currentIndex < totalItems - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            setCurrentIndex(0);
          }
        } else {
          setProgress(newProgress);
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else if (!isTransitioning) {
      video.pause();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isPlaying,
    duration,
    currentIndex,
    setProgress,
    setCurrentIndex,
    data,
    isTransitioning,
  ]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset video when index changes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
    }
  }, [currentIndex]);

  return (
    <video
      className={cn("absolute inset-0 size-full object-cover", className)}
      loop
      muted={isMuted}
      playsInline
      ref={videoRef}
      {...props}
    />
  );
}

const DEFAULT_IMAGE_DURATION = 5;

function ReelImage({
  className,
  alt,
  duration = DEFAULT_IMAGE_DURATION,
  width,
  height,
  ...props
}: Omit<ComponentProps<"img">, "alt"> & {
  alt: string;
  duration?: number;
  width?: number | string;
  height?: number | string;
}) {
  const {
    isPlaying,
    setDuration,
    setProgress,
    currentIndex,
    setCurrentIndex,
    data,
    progress,
    isTransitioning,
  } = useReelContext();
  const animationFrameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const pausedProgressRef = useRef<number>(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset progress when index changes
  useEffect(() => {
    setDuration(duration);
    // Don't reset progress here anymore - it's handled in ReelContent after transition
    if (!isTransitioning) {
      pausedProgressRef.current = 0;
    }
  }, [currentIndex, duration, setDuration, isTransitioning]);

  // Handle play/pause
  useEffect(() => {
    if (isPlaying && !isTransitioning) {
      const elapsedTime = (pausedProgressRef.current * duration) / PERCENTAGE;
      startTimeRef.current = performance.now() - elapsedTime * MS_TO_SECONDS;

      const updateProgress = (currentTime: number) => {
        const elapsed =
          (currentTime - (startTimeRef.current || 0)) / MS_TO_SECONDS;
        const newProgress = (elapsed / duration) * PERCENTAGE;

        if (newProgress >= PERCENTAGE) {
          const totalItems = data?.length || 0;

          if (currentIndex < totalItems - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            setCurrentIndex(0);
          }
        } else {
          setProgress(newProgress);
          pausedProgressRef.current = newProgress;
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateProgress);
    } else if (!isTransitioning) {
      pausedProgressRef.current = progress;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isPlaying,
    duration,
    currentIndex,
    setProgress,
    setCurrentIndex,
    data,
    progress,
    isTransitioning,
  ]);

  return (
    // biome-ignore lint/performance/noImgElement: "Reel is framework-agnostic"
    <img
      alt={alt}
      className={cn("absolute inset-0 size-full object-cover", className)}
      height={height}
      width={width}
      {...props}
    />
  );
}

function ReelProgress({
  className,
  children,
  ...props
}: ComponentProps<"div"> & {
  children?: (
    item: ReelItem,
    index: number,
    isActive: boolean,
    progress: number,
  ) => ReactNode;
}) {
  const { progress, currentIndex, data } = useReelContext();
  const FULL_PROGRESS = 100;

  const calculateProgress = (index: number) => {
    if (index < currentIndex) {
      return FULL_PROGRESS;
    }
    if (index === currentIndex) {
      return progress;
    }

    return 0;
  };

  if (typeof children === "function") {
    return (
      <div
        className={cn(
          "absolute top-0 right-0 left-0 z-40 flex gap-1 p-2",
          className,
        )}
        {...props}
      >
        {data.map((item, index) => (
          <div className="relative flex-1" key={`${item.id}-progress`}>
            {children(
              item,
              index,
              index === currentIndex,
              calculateProgress(index),
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute top-0 right-0 left-0 z-40 flex gap-1 p-2",
        className,
      )}
      {...props}
    >
      {data.map((item, index) => (
        <Progress
          className="h-0.5 flex-1 **:data-[slot=progress-indicator]:bg-background  **:data-[slot=progress-track]:bg-white/30"
          key={`${item.id}-progress`}
          value={calculateProgress(index)}
        />
      ))}
    </div>
  );
}

function ReelControls({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute right-0 bottom-0 left-0 z-20 flex items-center justify-between p-4",
        "bg-linear-to-t from-black/60 to-transparent",
        className,
      )}
      {...props}
    />
  );
}

function ReelPreviousButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  const { currentIndex, setCurrentIndex, setIsNavigating } = useReelContext();
  const NAVIGATION_RESET_DELAY = 50;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsNavigating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
    }
  };

  return (
    <Button
      aria-label="Previous"
      border="rounded"
      className={cn(
        "text-white hover:bg-white/10  hover:text-white",
        className,
      )}
      disabled={currentIndex === 0}
      onClick={handlePrevious}
      size="icon"
      type="button"
      variant="ghost"
      {...props}
    >
      {children || <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M8 13v-2h2v2H8Zm2-2V9h2v2h-2Zm0 4v-2h2v2h-2Zm2-6V7h2v2h-2Zm0 8v-2h2v2h-2Zm2-10V5h2v2h-2Zm0 12v-2h2v2h-2Z"/></svg>}
    </Button>
  );
}

function ReelNextButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  const { currentIndex, setCurrentIndex, data, setIsNavigating } =
    useReelContext();
  const totalItems = data?.length || 0;
  const NAVIGATION_RESET_DELAY = 50;

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setIsNavigating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
    }
  };

  return (
    <Button
      aria-label="Next"
      border="rounded"
      className={cn(
        "text-white hover:bg-white/10  hover:text-white",
        className,
      )}
      disabled={currentIndex === totalItems - 1}
      onClick={handleNext}
      size="icon"
      type="button"
      variant="ghost"
      {...props}
    >
      {children || <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M16 13v-2h-2v2h2Zm-2-2V9h-2v2h2Zm0 4v-2h-2v2h2Zm-2-6V7h-2v2h2Zm0 8v-2h-2v2h2ZM10 7V5H8v2h2Zm0 12v-2H8v2h2Z"/></svg>}
    </Button>
  );
}

function ReelPlayButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  const { isPlaying, setIsPlaying } = useReelContext();

  return (
    <Button
      aria-label={isPlaying ? "Pause" : "Play"}
      border="rounded"
      className={cn(
        "text-white hover:bg-white/10  hover:text-white",
        className,
      )}
      onClick={() => setIsPlaying(!isPlaying)}
      size="icon"
      variant="ghost"
      {...props}
    >
      {children ||
        (isPlaying ? (
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 20H4V4h6v16Zm8-16v16h-6V4h6Zm-4 2v12h2V6h-2ZM6 18h2V6H6v12Z" />
          </svg>
        ) : (
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 5h2v2H9v10h2v2H9v2H7V3h2v2Zm4 12h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-2-2h-2V9h2v2Zm-2-2h-2V7h2v2Z" />
          </svg>
        ))}
    </Button>
  );
}

function ReelMuteButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  const { isMuted, setIsMuted } = useReelContext();

  return (
    <Button
      aria-label={isMuted ? "Unmute" : "Mute"}
      border="rounded"
      className={cn(
        "text-white hover:bg-white/10  hover:text-white",
        className,
      )}
      onClick={() => setIsMuted(!isMuted)}
      size="icon"
      variant="ghost"
      {...props}
    >
      {children ||
        (isMuted ? (
          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13 22h-2v-2H9v-2h2V6H9V4h2V2h2v20Zm-4-4H7v-2h2v2Zm-2-8H5v4h2v2H3V8h4v2Zm10.001 5.224h-2v-2H17v-2h-1.999v-2h2v2H19v2h-1.999v2Zm3.999 0h-2v-2h2v2Zm0-4h-2v-2h2v2ZM9 8H7V6h2v2Z"/></svg>
        ) : (
          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13 22h-2v-2H9v-2h2V6H9V4h2V2h2v20Zm-4-4H7v-2h2v2Zm10 0h-4v-2h4v2ZM7 10H5v4h2v2H3V8h4v2Zm14 6h-2V8h2v8Zm-4-2h-2v-4h2v4ZM9 8H7V6h2v2Zm10 0h-4V6h4v2Z"/></svg>
        ))}
    </Button>
  );
}

function ReelNavigation({
  className,
  ...props
}: ComponentProps<"button">) {
  const { setCurrentIndex, currentIndex, data, setIsNavigating } =
    useReelContext();
  const totalItems = data?.length || 0;
  const NAVIGATION_RESET_DELAY = 50;
  const HALF_WIDTH_DIVISOR = 2;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / HALF_WIDTH_DIVISOR) {
      if (currentIndex > 0) {
        setIsNavigating(true);
        setCurrentIndex(currentIndex - 1);
        setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
      }
    } else if (currentIndex < totalItems - 1) {
      setIsNavigating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsNavigating(false), NAVIGATION_RESET_DELAY);
    }
  };

  return (
    <button
      className={cn("absolute inset-0 z-10 flex", className)}
      onClick={handleClick}
      type="button"
      {...props}
    >
      <div className="flex-1 cursor-pointer" />
      <div className="flex-1 cursor-pointer" />
    </button>
  );
}

function ReelOverlay({ className, ...props }: ComponentProps<"div">) {
  return (
  <div
    className={cn("pointer-events-none absolute inset-0 z-30", className)}
    {...props}
  />
)
}

function ReelHeader({ className, ...props }: ComponentProps<"div">) {
  return (
  <div
    className={cn(
      "absolute top-0 right-0 left-0 z-20 p-4 pt-6",
      "bg-linear-to-b from-black/60 to-transparent",
      className,
    )}
    {...props}
  />
)
}

function ReelFooter({ className, ...props }: ComponentProps<"div">) {
  return (
  <div
    className={cn(
      "absolute right-0 bottom-0 left-0 z-20 p-4",
      "bg-linear-to-t from-black/60 to-transparent",
      className,
    )}
    {...props}
  />
)
}

export {
  Reel,
  ReelContent,
  ReelControls,
  ReelFooter,
  ReelHeader,
  ReelImage,
  ReelItem,
  ReelMuteButton,
  ReelNavigation,
  ReelNextButton,
  ReelOverlay,
  ReelPlayButton,
  ReelPreviousButton,
  ReelProgress,
  ReelVideo
};
