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

const digitalPomodoroVariants = cva(
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

type PomodoroPhase = "focus" | "short-break" | "long-break";

function DigitalPomodoro({
  className,
  font = "mono",
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
  VariantProps<typeof digitalPomodoroVariants> & {
    autoStart?: boolean;
    disabled?: boolean;
    /** All durations are in seconds and are captured on mount. */
    focusDuration?: number;
    shortBreakDuration?: number;
    longBreakDuration?: number;
    sessionsBeforeLongBreak?: number;
    /** Start the next phase automatically. Otherwise it waits for Start. */
    autoAdvance?: boolean;
    phaseLabels?: Partial<Record<PomodoroPhase, string>>;
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
  return (
    <div
      data-slot="digital-pomodoro"
      data-variant={variant}
      data-size={size}
      data-border={border}
      data-state={disabled ? "disabled" : running ? "running" : "paused"}
      data-phase={phase}
      className={cn(
        digitalPomodoroVariants({ font, variant, size, border }),
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
        <Button
          type="button"
          size="xs"
          border="none"
          data-slot="clock-pusher"
          className="relative h-2 w-5 p-0 shadow-[inset_0_2px_0_var(--clock-pusher-background),inset_-2px_0_0_var(--clock-pusher-border)] before:absolute before:-inset-x-1 before:-inset-y-2 focus-visible:ring-2 active:translate-y-0.5 aria-pressed:translate-y-0.5"
          variant="secondary"
          disabled={disabled}
          aria-label={labels.skip}
          title={labels.skip}
          onClick={advance}
        >
          <span className="sr-only">{labels.skip}</span>
        </Button>
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
      <span data-slot="clock-phase" role="status" className="sr-only">
        {phaseName} · {sessions} sessions
      </span>
    </div>
  );
}

export { DigitalPomodoro, digitalPomodoroVariants, type PomodoroPhase };
