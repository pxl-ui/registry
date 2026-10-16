"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import {
  type ComponentProps,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/ui/pxl/button";

const DIAL_MARKS = Array.from({ length: 60 }, (_, index) => index * 6);

const analogPomodoroVariants = cva(
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
        sm: "w-38 **:data-[slot=clock-pusher]:w-4 **:data-[slot=clock-pusher]:h-1.5 **:data-[slot=clock-controls]:gap-1.5",
        default:
          "w-60 **:data-[slot=clock-pusher]:w-6 **:data-[slot=clock-pusher]:h-2 **:data-[slot=clock-controls]:gap-2",
        md: "w-60 **:data-[slot=clock-pusher]:w-6 **:data-[slot=clock-pusher]:h-2 **:data-[slot=clock-controls]:gap-2",
        lg: "w-72 **:data-[slot=clock-pusher]:w-8 **:data-[slot=clock-pusher]:h-3 **:data-[slot=clock-controls]:gap-2",
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

type PomodoroPhase = "focus" | "short-break" | "long-break";

function AnalogPomodoro({
  className,
  variant = "default",
  size = "default",
  border = "solid",
  autoStart = false,
  disabled = false,
  focusDuration = 1500,
  shortBreakDuration = 300,
  longBreakDuration = 900,
  sessionsBeforeLongBreak = 4,
  autoAdvance = false,
  onPhaseChange,
  ...props
}: Omit<ComponentProps<"div">, "children"> &
  VariantProps<typeof analogPomodoroVariants> & {
    autoStart?: boolean;
    disabled?: boolean;
    /** All durations are in seconds and are captured on mount. */
    focusDuration?: number;
    shortBreakDuration?: number;
    longBreakDuration?: number;
    sessionsBeforeLongBreak?: number;
    /** Start the next phase automatically. Otherwise it waits for Start. */
    autoAdvance?: boolean;
    onPhaseChange?: (phase: PomodoroPhase, completedSessions: number) => void;
  }) {
  const labels = {
    start: "Start",
    pause: "Pause",
    reset: "Reset",
    skip: "Skip",
  };
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(autoStart);
  const accumulated = useRef(0);
  const anchor = useRef<number | null>(null);
  const [durations] = useState(() => {
    const safe = (value: number) =>
      Number.isFinite(value) ? Math.max(1, value) : 1;
    return {
      focus: safe(focusDuration),
      "short-break": safe(shortBreakDuration),
      "long-break": safe(longBreakDuration),
    };
  });
  const [sessionLimit] = useState(() =>
    Number.isFinite(sessionsBeforeLongBreak)
      ? Math.max(1, Math.floor(sessionsBeforeLongBreak))
      : 4,
  );
  const [phase, setPhase] = useState<PomodoroPhase>("focus");
  const [sessions, setSessions] = useState(0);
  const total = durations[phase];

  function advance() {
    const count = phase === "focus" ? sessions + 1 : sessions;
    const next: PomodoroPhase =
      phase === "focus"
        ? count % sessionLimit === 0
          ? "long-break"
          : "short-break"
        : "focus";
    accumulated.current = 0;
    anchor.current = null;
    setElapsed(0);
    setSessions(count);
    setPhase(next);
    setRunning(autoAdvance);
    onPhaseChange?.(next, count);
  }

  const complete = useEffectEvent(advance);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Equal-duration phases must restart the timer too.
  useEffect(() => {
    if (!running || disabled) return;
    anchor.current ??= Date.now();
    const tick = () => {
      const next =
        accumulated.current +
        (Date.now() - (anchor.current ?? Date.now())) / 1000;
      if (next >= total) {
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
  }, [running, disabled, total, phase]);

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
    anchor.current = null;
    accumulated.current = 0;
    setElapsed(0);
    setRunning(false);
    setPhase("focus");
    setSessions(0);
    onPhaseChange?.("focus", 0);
  }

  const phaseName = {
    focus: "Focus",
    "short-break": "Short break",
    "long-break": "Long break",
  }[phase];
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
      data-slot="analog-pomodoro"
      data-variant={variant}
      data-size={size}
      data-border={border}
      data-state={disabled ? "disabled" : running ? "running" : "paused"}
      data-phase={phase}
      className={cn(
        analogPomodoroVariants({ variant, size, border }),
        className,
      )}
      {...props}
    >
      <div
        data-slot="clock-controls"
        className="absolute inset-x-0 top-[3%] flex -translate-y-full items-end justify-center gap-2"
      >
        <Button
          type="button"
          size="xs"
          border="none"
          data-slot="clock-pusher"
          className="relative h-2 w-5 p-0 shadow-[inset_0_2px_0_var(--background),inset_-2px_0_0_var(--border)] before:absolute before:-inset-x-1 before:-inset-y-2 focus-visible:ring-2 active:translate-y-0.5"
          variant="secondary"
          disabled={disabled}
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
          className="relative h-2 w-5 p-0 shadow-[inset_0_2px_0_var(--background),inset_-2px_0_0_var(--border)] before:absolute before:-inset-x-1 before:-inset-y-2 focus-visible:ring-2 active:translate-y-0.5"
          variant="secondary"
          disabled={disabled}
          onClick={reset}
          aria-label={labels.reset}
          title={labels.reset}
        >
          <span className="sr-only">{labels.reset}</span>
        </Button>
        <Button
          type="button"
          size="xs"
          border="none"
          data-slot="clock-pusher"
          className="relative h-2 w-5 p-0 shadow-[inset_0_2px_0_var(--background),inset_-2px_0_0_var(--border)] before:absolute before:-inset-x-1 before:-inset-y-2 focus-visible:ring-2 active:translate-y-0.5"
          variant="secondary"
          disabled={disabled}
          onClick={advance}
          aria-label={labels.skip}
          title={labels.skip}
        >
          <span className="sr-only">{labels.skip}</span>
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
      <span data-slot="clock-phase" role="status" className="sr-only">
        {phaseName} · {sessions} sessions
      </span>
    </div>
  );
}

export { AnalogPomodoro };
