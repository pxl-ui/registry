"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps } from "react";

import { useStopwatch } from "@/components/features/pxl/clock/hooks/use-stopwatch";
import { Button } from "@/components/ui/pxl/button";

const digitalStopwatchVariants = cva(
  "relative inline-flex max-w-full shrink-0 text-sm tabular-nums",
  {
    variants: {
      variant: {
        default:
          "**:data-[slot=clock-display]:bg-muted text-foreground pixel-color-border [--clock-pusher-background:var(--background)] [--clock-pusher-border:var(--border)]",
        primary:
          "**:data-[slot=clock-display]:bg-primary text-primary-foreground pixel-color-primary-foreground [--clock-pusher-background:var(--primary)] [--clock-pusher-border:var(--primary-foreground)]",
        secondary:
          "**:data-[slot=clock-display]:bg-secondary text-secondary-foreground pixel-color-secondary-foreground [--clock-pusher-background:var(--secondary)] [--clock-pusher-border:var(--secondary-foreground)]",
        info: "**:data-[slot=clock-display]:bg-info text-info-foreground pixel-color-info-foreground [--clock-pusher-background:var(--info)] [--clock-pusher-border:var(--info-foreground)]",
        success:
          "**:data-[slot=clock-display]:bg-success text-success-foreground pixel-color-success-foreground [--clock-pusher-background:var(--success)] [--clock-pusher-border:var(--success-foreground)]",
        warning:
          "**:data-[slot=clock-display]:bg-warning text-warning-foreground pixel-color-warning-foreground [--clock-pusher-background:var(--warning)] [--clock-pusher-border:var(--warning-foreground)]",
        danger:
          "**:data-[slot=clock-display]:bg-danger text-danger-foreground pixel-color-danger-foreground [--clock-pusher-background:var(--danger)] [--clock-pusher-border:var(--danger-foreground)]",
      },
      size: {
        sm: "w-38 text-xs [--clock-digit:1.25rem] **:data-[slot=clock-display]:h-13 **:data-[slot=clock-pusher]:w-4",
        default:
          "w-60 [--clock-digit:2.25rem] **:data-[slot=clock-display]:h-17 **:data-[slot=clock-pusher]:w-6",
        md: "w-60 [--clock-digit:2.25rem] **:data-[slot=clock-display]:h-17  **:data-[slot=clock-pusher]:w-6",
        lg: "w-72 text-base [--clock-digit:2.5rem] **:data-[slot=clock-display]:h-20 **:data-[slot=clock-pusher]:w-8",
      },
      border: {
        solid:
          "**:data-[slot=clock-display]:pixel-border **:data-[slot=clock-display]:pixel-size-lg",
        rounded:
          "**:data-[slot=clock-display]:pixel-rounded **:data-[slot=clock-display]:pixel-size-lg",
        none: "",
      },
      font: {
        heading: "font-heading",
        mono: "font-mono",
        sans: "font-sans",
        serif: "font-serif",
      },
    },
    defaultVariants: {
      font: "mono",
      variant: "default",
      size: "default",
      border: "solid",
    },
  },
);

function DigitalStopwatch({
  className,
  font = "mono",
  variant = "default",
  size = "default",
  border = "solid",
  autoStart = false,
  disabled = false,
  onLap,
  ...props
}: Omit<ComponentProps<"div">, "children"> &
  VariantProps<typeof digitalStopwatchVariants> & {
    autoStart?: boolean;
    disabled?: boolean;
    onLap?: (elapsedSeconds: number) => void;
  }) {
  const labels = {
    lap: "Lap",
    start: "Start",
    pause: "Pause",
    reset: "Reset",
  };

  const { accumulated, anchor, display, reset, running, toggle } = useStopwatch({
    autoStart,
    disabled,
  });

  return (
    <div
      data-slot="digital-stopwatch"
      data-variant={variant}
      data-size={size}
      data-border={border}
      data-state={disabled ? "disabled" : running ? "running" : "paused"}
      className={cn(
        digitalStopwatchVariants({ font, variant, size, border }),
        className,
      )}
      {...props}
    >
      <div
        data-slot="clock-controls"
        className="absolute inset-x-0 -top-2 flex items-end justify-center gap-2"
      >
        <Button
          type="button"
          size="xs"
          border="none"
          data-slot="clock-pusher"
          className="relative h-2 w-5 p-0 shadow-[inset_0_2px_0_var(--clock-pusher-background),inset_-2px_0_0_var(--clock-pusher-border)] before:absolute before:-inset-x-1 before:-inset-y-2 focus-visible:ring-2 active:translate-y-0.5 aria-pressed:translate-y-0.5"
          variant="secondary"
          disabled={disabled}
          aria-pressed={running}
          aria-label={running ? labels.pause : labels.start}
          title={running ? labels.pause : labels.start}
          onClick={toggle}
        >
          <span className="sr-only">
            {running ? labels.pause : labels.start}
          </span>
        </Button>
        <Button
          type="button"
          size="xs"
          border="none"
          data-slot="clock-pusher"
          className="relative h-2 w-5 p-0 shadow-[inset_0_2px_0_var(--clock-pusher-background),inset_-2px_0_0_var(--clock-pusher-border)] before:absolute before:-inset-x-1 before:-inset-y-2 focus-visible:ring-2 active:translate-y-0.5 aria-pressed:translate-y-0.5"
          variant="secondary"
          disabled={disabled}
          aria-label={labels.reset}
          title={labels.reset}
          onClick={reset}
        >
          <span className="sr-only">{labels.reset}</span>
        </Button>
        {onLap ? (
          <Button
            type="button"
            size="xs"
            border="none"
            data-slot="clock-pusher"
            className="relative h-2 w-5 p-0 shadow-[inset_0_2px_0_var(--clock-pusher-background),inset_-2px_0_0_var(--clock-pusher-border)] before:absolute before:-inset-x-1 before:-inset-y-2 focus-visible:ring-2 active:translate-y-0.5 aria-pressed:translate-y-0.5"
            variant="secondary"
            disabled={disabled || !running}
            aria-label={labels.lap}
            title={labels.lap}
            onClick={() =>
              onLap?.(
                accumulated.current +
                  (anchor.current === null
                    ? 0
                    : (Date.now() - anchor.current) / 1000),
              )
            }
          >
            <span className="sr-only">{labels.lap}</span>
          </Button>
        ) : null}
      </div>
      <div
        data-slot="clock-display"
        className="relative w-full overflow-hidden p-4 text-center"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,currentColor_4px)] opacity-[0.04]"
        />
        <span className="relative leading-none tracking-wider text-(length:--clock-digit)">
          {display}
        </span>
      </div>
      <span
        data-slot="clock-time"
        role="timer"
        aria-live="off"
        aria-label={display}
        className="sr-only"
      >
        {display}
      </span>
    </div>
  );
}

export { DigitalStopwatch };
