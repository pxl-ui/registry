"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import { Button } from "@/components/ui/pxl/button";

const DIAL_MARKS = Array.from({ length: 60 }, (_, index) => index * 6);

const analogCountdownVariants = cva(
  "relative inline-flex aspect-square max-w-full shrink-0 text-foreground tabular-nums **:data-[slot=clock-bezel]:fill-(--clock-case-color) **:data-[slot=clock-bezel]:text-(--clock-bezel-color) **:data-[slot=clock-hand]:text-(--clock-hand-color) **:data-[slot=clock-hand-axis]:text-(--clock-hand-axis-color) **:data-[slot=clock-pusher]:bg-(--clock-pusher-color) **:data-[slot=clock-progress-track]:text-(--clock-progress-track-color) **:data-[slot=clock-progress-indicator]:text-(--clock-progress-indicator-color)",
  {
    variants: {
      variant: {
        default:
          "[--clock-progress-track-color:var(--input)] [--clock-progress-indicator-color:var(--input)] [--clock-pusher-color:var(--border)] [--clock-hand-color:var(--destructive)] [--clock-hand.axis-color:var(--foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--background)] [--clock-bezel-color:var(--border)]",
        primary:
          "[--clock-progress-track-color:var(--primary-foreground)] [--clock-progress-indicator-color:var(--primary-foreground)] [--clock-pusher-color:var(--primary-foreground)] [--clock-hand-color:var(--primary-foreground)] [--clock-hand-axis-color:var(--primary-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--primary)] [--clock-bezel-color:var(--primary-foreground)]",
        secondary:
          "[--clock-progress-track-color:var(--secondary-foreground)] [--clock-progress-indicator-color:var(--secondary-foreground)] [--clock-pusher-color:var(--secondary-foreground)] [--clock-hand-color:var(--secondary-foreground)] [--clock-hand-axis-color:var(--secondary-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--secondary)] [--clock-bezel-color:var(--secondary-foreground)]",
        info: "[--clock-progress-track-color:var(--info-foreground)] [--clock-progress-indicator-color:var(--info-foreground)] [--clock-pusher-color:var(--info-foreground)] [--clock-hand-color:var(--info-foreground)] [--clock-hand-axis-color:var(--info-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--info)] [--clock-bezel-color:var(--info-foreground)]",
        success:
          "[--clock-progress-track-color:var(--success-foreground)] [--clock-progress-indicator-color:var(--success-foreground)] [--clock-pusher-color:var(--success-foreground)] [--clock-hand-color:var(--success-foreground)] [--clock-hand-axis-color:var(--success-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--success)] [--clock-bezel-color:var(--success-foreground)]",
        warning:
          "[--clock-progress-track-color:var(--warning-foreground)] [--clock-progress-indicator-color:var(--warning-foreground)] [--clock-pusher-color:var(--warning-foreground)] [--clock-hand-color:var(--warning-foreground)] [--clock-hand-axis-color:var(--warning-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--warning)] [--clock-bezel-color:var(--warning-foreground)]",
        danger:
          "[--clock-progress-track-color:var(--danger-foreground)] [--clock-progress-indicator-color:var(--danger-foreground)] [--clock-pusher-color:var(--danger-foreground)] [--clock-hand-color:var(--danger-foreground)] [--clock-hand-axis-color:var(--danger-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--danger)] [--clock-bezel-color:var(--danger-foreground)]",
      },
      size: {
        sm: "w-38 **:data-[slot=clock-pusher]:w-5 **:data-[slot=clock-pusher]:h-1.5 **:data-[slot=clock-controls]:gap-1.5",
        default:
          "w-60 **:data-[slot=clock-pusher]:w-7 **:data-[slot=clock-pusher]:h-2 **:data-[slot=clock-controls]:gap-2",
        md: "w-60 **:data-[slot=clock-pusher]:w-7 **:data-[slot=clock-pusher]:h-2 **:data-[slot=clock-controls]:gap-2",
        lg: "w-72 **:data-[slot=clock-pusher]:w-10 **:data-[slot=clock-pusher]:h-3 **:data-[slot=clock-controls]:gap-2",
      },
      border: {
        solid: "",
        rounded: "[--clock-bezel-color:var(--clock-case-color)]",
        none: "**:data-[slot=clock-bezel]:hidden bg-(--clock-case-color)",
      },
      font: {
        heading: "font-heading",
        sans: "font-sans",
        serif: "font-serif",
        mono: "font-mono",
      },
    },
    defaultVariants: {
      font: "serif",
      variant: "default",
      size: "default",
      border: "solid",
    },
  },
);

function AnalogCountdown({
  className,
  font = "serif",
  variant = "default",
  size = "default",
  border = "solid",
  autoStart = false,
  disabled = false,
  duration = 300,
  onComplete,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> &
  VariantProps<typeof analogCountdownVariants> & {
    autoStart?: boolean;
    disabled?: boolean;
    /** Duration in seconds. Change the component key to start a new duration. */
    duration?: number;
    onComplete?: () => void;
  }) {
  const labels = {
    start: "Start",
    pause: "Pause",
    reset: "Reset",
  };
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(autoStart);
  const accumulated = useRef(0);
  const anchor = useRef<number | null>(null);
  const [total] = useState(() =>
    Number.isFinite(duration) ? Math.max(0, duration) : 0,
  );
  const completed = useRef(false);
  const complete = useEffectEvent(() => onComplete?.());
  useEffect(() => {
    if (!running || disabled || completed.current) return;
    anchor.current ??= Date.now();
    const tick = () => {
      const next =
        accumulated.current +
        (Date.now() - (anchor.current ?? Date.now())) / 1000;
      if (next >= total) {
        completed.current = true;
        accumulated.current = total;
        anchor.current = null;
        setElapsed(total);
        setRunning(false);
        complete();
        return;
      }
      setElapsed(next);
    };
    tick();
    const interval = window.setInterval(tick, 100);
    return () => {
      window.clearInterval(interval);
      if (anchor.current !== null) {
        accumulated.current += (Date.now() - anchor.current) / 1000;
        anchor.current = null;
      }
    };
  }, [running, disabled, total]);

  function toggle() {
    if (running) {
      if (anchor.current !== null)
        accumulated.current += (Date.now() - anchor.current) / 1000;
      anchor.current = null;
      setElapsed(accumulated.current);
    }
    setRunning(!running);
  }
  function reset() {
    completed.current = false;
    anchor.current = null;
    accumulated.current = 0;
    setElapsed(0);
    setRunning(false);
  }
  const seconds = Math.ceil(Math.max(0, total - elapsed));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const display = [hours, minutes, seconds % 60]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
  const progress = total > 0 ? Math.max(0, 1 - elapsed / total) : 0;
  const angle = progress * 360;
  return (
    <div
      data-slot="analog-countdown"
      data-variant={variant}
      data-size={size}
      data-border={border}
      data-state={
        disabled
          ? "disabled"
          : elapsed >= total
            ? "complete"
            : running
              ? "running"
              : "paused"
      }
      className={cn(
        analogCountdownVariants({ font, variant, size, border }),
        className,
      )}
      {...props}
    >
      <div
        data-slot="clock-controls"
        className="absolute inset-x-0 top-[3%] flex -translate-y-full items-end justify-center"
      >
        <Button
          type="button"
          size="xs"
          border="none"
          data-slot="clock-pusher"
          className="relative p-0 active:translate-y-0.5 aria-pressed:translate-y-0.5"
          variant="secondary"
          disabled={disabled || elapsed >= total}
          aria-pressed={running}
          onClick={toggle}
          aria-label={running ? labels.pause : labels.start}
          title={running ? labels.pause : labels.start}
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
          className="relative p-0 active:translate-y-0.5 aria-pressed:translate-y-0.5"
          variant="secondary"
          disabled={disabled}
          onClick={reset}
          aria-label={labels.reset}
          title={labels.reset}
        >
          <span className="sr-only">{labels.reset}</span>
        </Button>
      </div>
      <svg
        data-slot="clock-dial"
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="block size-full"
      >
        <path
          data-slot="clock-bezel"
          d="M30 3H70V6H82V10H90V18H94V30H97V70H94V82H90V90H82V94H70V97H30V94H18V90H10V82H6V70H3V30H6V18H10V10H18V6H30Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        {DIAL_MARKS.map((angle) => (
          <rect
            key={angle}
            x={angle % 30 === 0 ? 49 : 49.5}
            y="8"
            width={angle % 30 === 0 ? 2 : 1}
            height={angle % 30 === 0 ? 5 : 2}
            fill="currentColor"
            opacity={angle % 30 === 0 ? 1 : 0.35}
            transform={`rotate(${angle},50,50)`}
          />
        ))}
        <g fill="currentColor" fontSize="7" textAnchor="middle">
          <text x="50" y="27">
            0
          </text>
          <text x="75" y="53">
            15
          </text>
          <text x="50" y="77">
            30
          </text>
          <text x="25" y="53">
            45
          </text>
        </g>
        <circle
          data-slot="clock-progress-track"
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          opacity="0.12"
        />
        <circle
          data-slot="clock-progress-indicator"
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          pathLength="100"
          strokeDasharray={`${progress * 100} 100`}
          transform="rotate(-90 50 50)"
        />
        <rect
          data-slot="clock-hand"
          x="49"
          y="17"
          width="2"
          height="38"
          fill="currentColor"
          transform={`rotate(${angle},50,50)`}
        />
        <rect
          data-slot="clock-hand-axis"
          x="47"
          y="47"
          width="6"
          height="6"
          fill="currentColor"
        />
      </svg>
      <span
        data-slot="clock-time"
        className="sr-only"
        role="timer"
        aria-live="off"
        aria-label={display}
      >
        {display}
      </span>
      <span role="status" className="sr-only">
        {elapsed >= total ? "Countdown complete" : ""}
      </span>
    </div>
  );
}

export { AnalogCountdown, analogCountdownVariants };
