import { useEffect, useRef, useState } from "react";

export function useStopwatch({
  autoStart,
  disabled,
}: {
  autoStart?: boolean;
  disabled?: boolean;
}) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(autoStart);
  const accumulated = useRef(0);
  const anchor = useRef<number | null>(null);

  useEffect(() => {
    if (!running || disabled) return;
    anchor.current ??= Date.now();
    const tick = () => {
      const next =
        accumulated.current +
        (Date.now() - (anchor.current ?? Date.now())) / 1000;

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
  }, [running, disabled]);

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
  }

  const seconds = Math.floor(elapsed);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const display = [hours, minutes, seconds % 60]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");

  return {
    accumulated,
    anchor,
    elapsed,
    toggle,
    reset,
    running,
    seconds,
    hours,
    minutes,
    display,
  };
}
