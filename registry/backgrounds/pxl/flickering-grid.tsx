"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  type HTMLAttributes,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const flickeringGridVariants = cva("absolute inset-0 z-0 size-full", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      info: "bg-info text-info-foreground",
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
      danger: "bg-danger text-danger-foreground",
      muted: "bg-muted text-muted-foreground",
    },
  },
});

const flickeringGridSquareSizes = {
  default: 4,
  "4xs": 0.6,
  "3xs": 0.8,
  "2xs": 1,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  "2xl": 14,
  "3xl": 20,
} as const;

function FlickeringGrid({
  className,
  flickerChance = 0.3,
  gridGap = 6,
  height,
  maxOpacity = 0.3,
  size = "default",
  variant = "default",
  width,
  ...props
}: HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof flickeringGridVariants> & {
    flickerChance?: number;
    gridGap?: number;
    height?: number;
    maxOpacity?: number;
    width?: number;
    size?: keyof typeof flickeringGridSquareSizes;
  }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [isInView, setIsInView] = useState(false);
  const rgbaRef = useRef({ r: 107, g: 114, b: 128, a: 1 });
  const [computedColor, setComputedColor] = useState("rgba(107, 114, 128, 1)");
  const squareSize = flickeringGridSquareSizes[size];

  // biome-ignore lint/correctness/useExhaustiveDependencies: computed styles might change on font and variant changes
  useLayoutEffect(
    function resolveComputedStyles() {
      if (!containerRef.current) return;

      const computedStyle = getComputedStyle(containerRef.current);
      setComputedColor(computedStyle.color);
    },
    [variant],
  );

  // Resolve the CSS color string to RGBA (handles hex, rgb, hsl, oklch, ...).
  useEffect(
    function resolveRGBATextColor() {
      const probe = document.createElement("canvas");
      probe.width = 1;
      probe.height = 1;
      const probeCtx = probe.getContext("2d");
      if (!probeCtx) return;
      // Seed with the default so an invalid color falls back to it: the 2d
      // context keeps the previous fillStyle when assigned an invalid value
      // instead of silently turning black.
      probeCtx.fillStyle = "#6B7280";
      probeCtx.fillStyle = computedColor;
      probeCtx.fillRect(0, 0, 1, 1);
      const [r, g, b, a] = probeCtx.getImageData(0, 0, 1, 1).data;
      rgbaRef.current = { r, g, b, a: a / 255 };
    },
    [computedColor],
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.ceil(width / (squareSize + gridGap));
      const rows = Math.ceil(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, width, height);

      const { r, g, b } = rgbaRef.current;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr,
          );
        }
      }
    },
    [squareSize, gridGap],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext("2d") ?? null;
    let animationFrameId: number | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let gridParams: ReturnType<typeof setupCanvas> | null = null;

    if (canvas && container && ctx) {
      const updateCanvasSize = () => {
        const newWidth = width || container.clientWidth;
        const newHeight = height || container.clientHeight;
        setCanvasSize({ width: newWidth, height: newHeight });
        gridParams = setupCanvas(canvas, newWidth, newHeight);
      };

      updateCanvasSize();

      let lastTime = 0;
      const animate = (time: number) => {
        if (!isInView || !gridParams) return;

        const deltaTime = (time - lastTime) / 1000;
        lastTime = time;

        updateSquares(gridParams.squares, deltaTime);
        drawGrid(
          ctx,
          canvas.width,
          canvas.height,
          gridParams.cols,
          gridParams.rows,
          gridParams.squares,
          gridParams.dpr,
        );
        animationFrameId = requestAnimationFrame(animate);
      };

      resizeObserver = new ResizeObserver(() => {
        updateCanvasSize();
      });
      resizeObserver.observe(container);

      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0 },
      );
      intersectionObserver.observe(canvas);

      if (isInView) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(flickeringGridVariants({ variant }), className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
}

export { FlickeringGrid };
