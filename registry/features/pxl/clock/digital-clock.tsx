"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { type ComponentProps, useEffect, useState } from "react";

const digitalClockVariants = cva(
  "relative inline-flex max-w-full shrink-0 flex-col items-center gap-3 p-4 text-sm tabular-nums",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground pixel-color-border",
        primary: "bg-primary text-primary-foreground pixel-color-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground pixel-color-secondary-foreground",
        info: "bg-info text-info-foreground pixel-color-info-foreground",
        success: "bg-success text-success-foreground pixel-color-success-foreground",
        warning: "bg-warning text-warning-foreground pixel-color-warning-foreground",
        danger: "bg-danger text-info-foreground pixel-color-info-foreground",
      },
      size: {
        sm: "w-38 text-xs [--clock-digit:1.5rem]",
        default: "w-60 [--clock-digit:2.25rem]",
        md: "w-60 [--clock-digit:2.25rem]",
        lg: "w-72 text-base [--clock-digit:3rem]",
      },
      border: {
        solid: "pixel-border pixel-size-lg",
        rounded: "pixel-rounded pixel-size-lg",
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

function DigitalClock({
  className,
  font = "mono",
  variant = "default",
  size = "default",
  border = "solid",
  value,
  timeZone,
  showSeconds = true,
  hour12 = false,
  ...props
}: Omit<ComponentProps<"div">, "children"> &
  VariantProps<typeof digitalClockVariants> & {
    /** Fixed instant for previews. Omit to show the current time. */
    value?: Date | number | string;
    /** IANA time zone; defaults to the browser's local time zone. */
    timeZone?: string;
    showSeconds?: boolean;
    hour12?: boolean;
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
  const description = valid ? formatter.format(date) : "--:--:--";
  const display = valid
    ? new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        ...(showSeconds ? { second: "2-digit" } : {}),
        hour12,
      }).format(date)
    : showSeconds
      ? "--:--:--"
      : "--:--";

  return (
    <div
      data-slot="digital-clock"
      data-variant={variant}
      data-size={size}
      data-border={border}
      className={cn(
        digitalClockVariants({ font, variant, size, border }),
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_3px,currentColor_4px)] opacity-[0.04]"
      />
      <span className="relative leading-none tracking-wider text-(length:--clock-digit)">
        {display}
      </span>
      <time
        data-slot="clock-time"
        dateTime={valid ? date.toISOString() : undefined}
        className="sr-only"
      >
        {description}
      </time>
    </div>
  );
}

export { DigitalClock };
