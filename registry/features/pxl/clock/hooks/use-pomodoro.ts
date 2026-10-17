import { useEffect, useEffectEvent, useRef, useState } from "react";

export type PomodoroPhase = "focus" | "short-break" | "long-break";

export function usePomodoro({
  autoStart = false,
  disabled = false,
  focusDuration = 1500,
  shortBreakDuration = 300,
  longBreakDuration = 900,
  sessionsBeforeLongBreak = 4,
  autoAdvance = false,
  onPhaseChange,
}: {
  autoStart?: boolean;
  disabled?: boolean;
  /** All durations are in seconds and are captured on mount. */
  focusDuration?: number;
  shortBreakDuration?: number;
  longBreakDuration?: number;
  sessionsBeforeLongBreak?: number;
  autoAdvance?: boolean;
  onPhaseChange?: (phase: PomodoroPhase, completedSessions: number) => void;
}) {

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
  
  return {
    advance,
    elapsed,
    running,
    total,
    toggle,
    reset,
    seconds,
    hours,
    minutes,
    display,
    phaseName,
    phase,
    sessions,
  }
  
}