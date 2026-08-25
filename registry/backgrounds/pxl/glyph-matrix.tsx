"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const glyphMatrixVariants = cva("absolute inset-0 z-0 size-full", {
  variants: {
    font: {
      default: "font-mono",
      mono: "font-mono",
      heading: "font-heading",
      sans: "font-sans",
    },
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
    size: {
      default: "text-sm",
      "4xs": "text-4xs",
      "3xs": "text-3xs",
      "2xs": "text-2xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    }
  },
});

function GlyphMatrix({
  className,
  font = "default",
  glyphs = "01·•+*/\\<>=",
  mutationRate = 0.04,
  interval = 90,
  fadeBottom = 0.6,
  size = "default",
  variant = "default",
  ...props
}: HTMLAttributes<HTMLCanvasElement> & VariantProps<typeof glyphMatrixVariants> & {
  /** Characters to randomly pick from */
  glyphs?: string;
  /** Probability (0-1) a cell mutates each tick */
  mutationRate?: number;
  /** Tick interval in ms */
  interval?: number;
  /** Fade out toward bottom (0 = no fade) */
  fadeBottom?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stylesRef = useRef({
  // Current glyph color as RGBA (a in 0-1). Kept in a ref so a color change
  // (e.g. theme toggle) recolors the next frame without restarting the
  // animation. Defaults to #6B7280.
    color: { r: 107, g: 114, b: 128, a: 1 },
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: 14,
  });

  const [computedColor, setComputedColor] = useState("rgba(107, 114, 128, 1)");

  // biome-ignore lint/correctness/useExhaustiveDependencies: computed styles might change on font and variant changes
  useLayoutEffect(function resolveComputedStyles() {
    if (!containerRef.current) return;

    const computedStyle = getComputedStyle(containerRef.current);
    stylesRef.current.fontFamily = computedStyle.fontFamily;
    stylesRef.current.fontSize = Number.parseFloat(computedStyle.fontSize);

    setComputedColor(computedStyle.color);
  }, [font, size, variant]);

  // Resolve the CSS color string to RGBA (handles hex, rgb, hsl, oklch, ...).
  useEffect(function resolveRGBATextColor() {
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
    stylesRef.current.color = { r, g, b, a: a / 255 };
  }, [computedColor]);

  useEffect(function renderGlyphs() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let cells: string[] = [];
    let alphas: number[] = [];
    let raf = 0;
    let last = 0;
    let stopped = false;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth: w, clientHeight: h } = canvas;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / stylesRef.current.fontSize);
      rows = Math.ceil(h / stylesRef.current.fontSize);

      cells = new Array(cols * rows)
        .fill(0)
        .map(() => glyphs[Math.floor(Math.random() * glyphs.length)]);
      alphas = new Array(cols * rows)
        .fill(0)
        .map(() => 0.05 + Math.random() * 0.35);
    };

    const draw = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      ctx.font = `${stylesRef.current.fontSize - 2}px ${stylesRef.current.fontFamily}`;
      ctx.textBaseline = "top";

      const { r, g, b, a: colorAlpha } = stylesRef.current.color;
      for (let y = 0; y < rows; y++) {
        const fade = fadeBottom > 0 ? 1 - (y / rows) * fadeBottom : 1;
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const a = alphas[i] * fade * colorAlpha;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
          ctx.fillText(cells[i], x * stylesRef.current.fontSize, y * stylesRef.current.fontSize);
        }
      }
    };

    const tick = (t: number) => {
      if (stopped) return;

      if (t - last >= interval) {
        last = t;

        const total = cols * rows;
        const mutations = Math.max(1, Math.floor(total * mutationRate));

        for (let n = 0; n < mutations; n++) {
          const i = Math.floor(Math.random() * total);
          cells[i] = glyphs[Math.floor(Math.random() * glyphs.length)];
          alphas[i] = 0.05 + Math.random() * 0.45;
        }

        draw();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    draw();
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [glyphs, mutationRate, interval, fadeBottom]);

  return (
    <div className={cn(glyphMatrixVariants({ font, size, variant, }), className)} ref={containerRef}>
      {/** biome-ignore lint/a11y/noAriaHiddenOnFocusable: background canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none w-full h-full block"
        aria-hidden="true"
        {...props}
      />
    </div>
  );
}

export { GlyphMatrix };
