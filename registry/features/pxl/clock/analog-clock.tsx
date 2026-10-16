"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { type ComponentProps, useEffect, useState } from "react";

const DIAL_MARKS = Array.from({ length: 60 }, (_, index) => index * 6);

const analogClockVariants = cva(
  "relative inline-flex max-w-full shrink-0 text-(--clock-markers-color) **:data-[slot=clock-bezel]:fill-(--clock-case-color) **:data-[slot=clock-bezel]:text-(--clock-bezel-color) **:data-[slot=clock-hand]:text-(--clock-hand-color) **:data-[slot=clock-second-hand]:text-(--clock-second-hand-color)",
  {
    variants: {
      variant: {
        default:
          "[--clock-hand-color:var(--foreground)] [--clock-second-hand-color:var(--destructive)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--background)] [--clock-bezel-color:var(--border)]",
        primary:
          "[--clock-hand-color:var(--foreground)] [--clock-second-hand-color:var(--primary-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--primary)] [--clock-bezel-color:var(--primary-foreground)]",
        secondary:
          "[--clock-hand-color:var(--foreground)] [--clock-second-hand-color:var(--secondary-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--secondary)] [--clock-bezel-color:var(--secondary-foreground)]",
        info: "[--clock-hand-color:var(--foreground)] [--clock-second-hand-color:var(--info-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--info)] [--clock-bezel-color:var(--info-foreground)]",
        success:
          "[--clock-hand-color:var(--foreground)] [--clock-second-hand-color:var(--success-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--success)] [--clock-bezel-color:var(--success-foreground)]",
        warning:
          "[--clock-hand-color:var(--foreground)] [--clock-second-hand-color:var(--warning-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--warning)] [--clock-bezel-color:var(--warning-foreground)]",
        danger:
          "[--clock-hand-color:var(--foreground)] [--clock-second-hand-color:var(--danger-foreground)] [--clock-markers-color:var(--foreground)] [--clock-case-color:var(--danger)] [--clock-bezel-color:var(--danger-foreground)]",
      },
      size: {
        sm: "w-38 text-xs [--clock-digit:1.5rem]",
        default: "w-60 [--clock-digit:2.25rem]",
        md: "w-60 [--clock-digit:2.25rem]",
        lg: "w-72 text-base [--clock-digit:3rem]",
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

function AnalogClock({
  className,
  font = "serif",
  variant = "default",
  size = "default",
  border = "solid",
  value,
  timeZone,
  showSeconds = true,
  ...props
}: Omit<ComponentProps<"div">, "children"> &
  VariantProps<typeof analogClockVariants> & {
    /** Fixed instant for previews. Omit to show the current time. */
    value?: Date | number | string;
    /** IANA time zone; defaults to the browser's local time zone. */
    timeZone?: string;
    showSeconds?: boolean;
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

  return (
    <div
      data-slot="analog-clock"
      data-variant={variant}
      data-size={size}
      data-border={border}
      className={cn(analogClockVariants({ font, variant, size, border }), className)}
      {...props}
    >
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
        <g
          fill="currentColor"
          fontSize="7"
          textAnchor="middle"
        >
          <text x="50" y="23">
            12
          </text>
          <text x="79" y="53">
            3
          </text>
          <text x="50" y="83">
            6
          </text>
          <text x="21" y="53">
            9
          </text>
        </g>
        <rect
          data-slot="clock-hand"
          x="48"
          y="29"
          width="4"
          height="25"
          fill="currentColor"
          transform={`rotate(${hours * 30 + minutes / 2},50,50)`}
        />
        <rect
          data-slot="clock-hand"
          x="49"
          y="17"
          width="2"
          height="38"
          fill="currentColor"
          transform={`rotate(${minutes * 6 + seconds / 10},50,50)`}
        />
        {showSeconds ? (
          <rect
            data-slot="clock-second-hand"
            x="49.5"
            y="12"
            width="1"
            height="44"
            fill="currentColor"
            transform={`rotate(${seconds * 6},50,50)`}
          />
        ) : null}
        <rect x="47" y="47" width="6" height="6" fill="currentColor" />
      </svg>
    </div>
  );
}

export { AnalogClock };
