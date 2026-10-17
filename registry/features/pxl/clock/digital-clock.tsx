"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps } from "react";

import { useClock } from "@/components/features/pxl/clock/hooks/use-clock";

const digitalClockVariants = cva(
  "relative inline-flex max-w-full shrink-0 flex-col items-center gap-3 p-4 text-sm tabular-nums",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground pixel-color-border",
        primary:
          "bg-primary text-primary-foreground pixel-color-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground pixel-color-secondary-foreground",
        info: "bg-info text-info-foreground pixel-color-info-foreground",
        success:
          "bg-success text-success-foreground pixel-color-success-foreground",
        warning:
          "bg-warning text-warning-foreground pixel-color-warning-foreground",
        danger: "bg-danger text-info-foreground pixel-color-info-foreground",
      },
      size: {
        sm: "w-38 h-13 text-xs [--clock-digit:1.25rem]",
        default: "w-60 h-17 [--clock-digit:2.25rem]",
        md: "w-60 h-17 [--clock-digit:2.25rem]",
        lg: "w-72 h-20 text-base [--clock-digit:2.5rem]",
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
  const { date, description, valid } = useClock({ value, timeZone });

  const display = valid
    ? new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        ...(showSeconds ? { second: "2-digit" } : {}),
        hour12,
      }).format(date as Date)
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
        dateTime={valid ? date?.toISOString() : undefined}
        className="sr-only"
      >
        {description}
      </time>
    </div>
  );
}

export { DigitalClock };
