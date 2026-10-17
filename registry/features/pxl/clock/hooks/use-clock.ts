import { useEffect, useState } from "react";

export function useClock({
  value,
  timeZone,
}: {
  /** Fixed instant for previews. Omit to show the current time. */
  value?: Date | number | string;
  /** IANA time zone; defaults to the browser's local time zone. */
  timeZone?: string;
}) {
  // The initial placeholder is deterministic on both the server and client.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    if (value !== undefined) return;
    const update = () => setNow(Date.now());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [value]);

  const date =
    value === undefined
      ? now === null
        ? null
        : new Date(now)
      : new Date(value);
  const valid = date !== null && Number.isFinite(date.getTime());
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  const parts = valid ? formatter.formatToParts(date) : [];
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value ?? 0);
  const hours = part("hour"),
    minutes = part("minute"),
    seconds = part("second");
  const description = valid ? formatter.format(date) : "--:--:--";

  return {
    date,
    description,
    hours,
    minutes,
    seconds,
    valid,
  };
}
