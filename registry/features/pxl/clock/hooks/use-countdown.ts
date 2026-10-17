import { useEffect, useEffectEvent, useRef, useState } from "react";

export function useCountdown({
  autoStart = false,
  disabled = false,
  duration = 300,
  onComplete,
}: {
  autoStart?: boolean;
  disabled?: boolean;
  /** Duration in seconds. Change the component key to start a new duration. */
  duration?: number;
  onComplete?: () => void;
}) {
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

  return {
    elapsed,
    total,
    toggle,
    reset,
    running,
    seconds,
    hours,
    minutes,
    display,
  };
}
