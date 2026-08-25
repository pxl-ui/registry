"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const animatedGridPatternVariants = cva("pointer-events-none absolute inset-0 h-full w-full", {
  variants: {
    variant: {
      default: "bg-background fill-border stroke-border text-border",
      primary: "bg-primary fill-primary-foreground/30 stroke-primary-foreground/30 text-primary-foreground/30",
      secondary: "bg-secondary fill-secondary-foreground/30 stroke-secondary-foreground/30 text-secondary-foreground/30",
      muted: "bg-muted fill-muted-foreground/30 stroke-muted-foreground/30 text-muted-foreground/30",
      info: "bg-info fill-info-foreground/30 stroke-info-foreground/30 text-info-foreground/30",
      success: "bg-success fill-success-foreground/30 stroke-success-foreground/30 text-success-foreground/30",
      warning: "bg-warning fill-warning-foreground/30 stroke-warning-foreground/30 text-warning-foreground/30",
      danger: "bg-danger fill-danger-foreground/30 stroke-danger-foreground/30 text-danger-foreground/30",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Square = {
  id: number;
  pos: [number, number];
  iteration: number;
};

function AnimatedGridPattern({
  className,
  duration = 4,
  height = 40,
  maxOpacity = 0.5,
  numSquares = 50,
  repeatDelay = 0.5,
  strokeDasharray = 0,
  variant = "default",
  width = 40,
  x = -1,
  y = -1,
  ...props
}: ComponentPropsWithoutRef<"svg"> &
  VariantProps<typeof animatedGridPatternVariants> & {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: number;
    numSquares?: number;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
  }) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Array<Square>>([]);

  const getPos = useCallback((): [number, number] => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }, [dimensions.height, dimensions.width, height, width]);

  const generateSquares = useCallback(
    (count: number) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
        iteration: 0,
      }));
    },
    [getPos],
  );

  const updateSquarePosition = useCallback(
    (squareId: number) => {
      setSquares((currentSquares) => {
        const current = currentSquares[squareId];
        if (!current || current.id !== squareId) return currentSquares;

        const nextSquares = currentSquares.slice();
        nextSquares[squareId] = {
          ...current,
          pos: getPos(),
          iteration: current.iteration + 1,
        };

        return nextSquares;
      });
    },
    [getPos],
  );

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions.width, dimensions.height, generateSquares, numSquares]);

  useEffect(() => {
    const element = containerRef.current;
    let resizeObserver: ResizeObserver | null = null;

    if (element) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setDimensions((currentDimensions) => {
            const nextWidth = entry.contentRect.width;
            const nextHeight = entry.contentRect.height;
            if (
              currentDimensions.width === nextWidth &&
              currentDimensions.height === nextHeight
            ) {
              return currentDimensions;
            }
            return { width: nextWidth, height: nextHeight };
          });
        }
      });

      resizeObserver.observe(element);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(animatedGridPatternVariants({ variant }), className)}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [squareX, squareY], id, iteration }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
              repeatDelay,
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${id}-${iteration}`}
            width={width - 1}
            height={height - 1}
            x={squareX * width + 1}
            y={squareY * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}

export { AnimatedGridPattern };
