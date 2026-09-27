import { cn } from "cn";
import {
  type ComponentProps,
  type ComponentType,
  type SVGProps,
  useMemo,
  useState,
} from "react";

import { Badge } from "@/components/ui/pxl/badge";

type BadgeVariant = NonNullable<ComponentProps<typeof Badge>["variant"]>;

function DueBadge({
  locale,
  value,
  variants = {
    default: "muted",
    incoming: "warning",
    expired: "danger",
  },
  ...props
}: ComponentProps<typeof Badge> & {
  locale?: string;
  value: string | Date | number;
  variants?: Record<"default" | "incoming" | "expired", BadgeVariant>;
}) {
  const formatted = useMemo(
    function formatDue() {
      if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [year, month, day] = value.split("-").map(Number);

        return new Intl.DateTimeFormat(locale, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(year, month - 1, day));
      }

      const date = new Date(value);

      if (Number.isNaN(date.getTime())) {
        return "";
      }

      return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    },
    [value, locale],
  );

  const variant = useMemo(
    function getDueVariant() {
      const due = new Date(value).getTime();
      const now = Date.now();

      if (Number.isNaN(due)) {
        return variants.default;
      }

      if (due < now) {
        return variants.expired;
      }

      const threeDays = 3 * 24 * 60 * 60 * 1000;

      if (due <= now + threeDays) {
        return variants.incoming;
      }

      return variants.default;
    },
    [value, variants],
  );

  return (
    <Badge variant={variant} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-3 mr-1"
      >
        <path d="M13 22H5v-2h8v2Zm6 0h-2v-2h2v2ZM5 8h14V6h2v4H5v10H3V6h2v2Zm12 12h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 14H7v-2h2v2Zm4 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM9 4h6V2h2v2h2v2H5V4h2V2h2v2Z"></path>
      </svg>
      {formatted}
    </Badge>
  );
}

function EstimateBadge({
  className,
  value,
  onClick,
  ...props
}: ComponentProps<typeof Badge> & {
  showLabel?: boolean;
  value: number;
}) {
  const [isFlipping, setIsFlipping] = useState(false);

  function formatEstimate(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  const handleClick = () => {
    console.log("isFlipping");
    setIsFlipping(true);
  };

  const handleAnimationEnd = () => {
    setIsFlipping(false);
    onClick?.(new MouseEvent("click") as never);
  };

  return (
    <Badge
      className={cn(className, "perspective-normal")}
      variant="muted"
      {...props}
      onClick={handleClick}
    >
      <span
        onAnimationEnd={handleAnimationEnd}
        className={isFlipping ? "animate-flip" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-3 mr-0.5"
        >
          <path d="M13 18h3v-2h2v4h-2v2H8v-2H6v-4h2v2h3v-4h-1v-4H8V8h8v2h-2v4h-1v4Zm-3-2H8v-2h2v2Zm6 0h-2v-2h2v2ZM8 8H6V4h2v4Zm10 0h-2V4h2v4Zm-2-4H8V2h8v2Z"></path>
        </svg>
      </span>
      {formatEstimate(value)}
    </Badge>
  );
}

function IdBadge({ children, ...props }: ComponentProps<typeof Badge>) {
  return (
    <Badge variant="muted" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-3 mr-0.5"
      >
        <path d="M14 14v-4h-4v4h4Zm7 2h-6v5h-2v-5H9v5H7v-5H3v-2h5v-4H3V8h6V3h2v5h4V3h2v5h4v2h-5v4h5v2Z" />
      </svg>
      {children}
    </Badge>
  );
}

type Priority = "low" | "high" | "normal";
function PriorityBadge({
  showLabel = true,
  value,
  labels = {
    low: "Low",
    high: "High",
    normal: "Normal",
  },
  variants = {
    low: "muted",
    high: "danger",
    normal: "primary",
  },
  ...props
}: ComponentProps<typeof Badge> & {
  labels?: Record<Priority, string>;
  showLabel?: boolean;
  value: Priority;
  variants?: Record<Priority, BadgeVariant>;
}) {
  return (
    <Badge variant={variants[value]} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-3 mr-0.5"
      >
        <path d="M6 4h14v2h-2v2h-2V6H6v6h10v-2h2v2h2v2H6v8H4V2h2v2Zm10 6h-2V8h2v2Z" />
      </svg>
      {showLabel && labels[value]}
    </Badge>
  );
}

function ProjectBadge({ children, ...props }: ComponentProps<typeof Badge>) {
  return (
    <Badge variant="muted" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-3 mr-0.5"
      >
        <path d="M20 20H4v-2h16v2ZM4 18H2V6h2v12Zm18 0h-2V8h2v10ZM20 8H10V6H4V4h8v2h8v2Z" />
      </svg>
      {children}
    </Badge>
  );
}

type ScheduleStatus = "default" | "incoming" | "expired";
function ScheduledBadge({
  locale,
  value,
  variants = {
    default: "muted",
    incoming: "warning",
    expired: "danger",
  },
  ...props
}: ComponentProps<typeof Badge> & {
  locale?: string;
  value: string | Date | number;
  variants?: Record<ScheduleStatus, BadgeVariant>;
}) {
  const formatted = useMemo(
    function formatScheduled() {
      if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [year, month, day] = value.split("-").map(Number);

        return new Intl.DateTimeFormat(locale, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(year, month - 1, day));
      }

      const date = new Date(value);

      if (Number.isNaN(date.getTime())) {
        return "";
      }

      return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    },
    [value, locale],
  );

  const variant = useMemo(
    function getScheduledVariant() {
      const scheduled = new Date(value).getTime();
      const now = Date.now();

      if (Number.isNaN(scheduled)) {
        return variants.default;
      }

      if (scheduled < now) {
        return variants.expired;
      }

      const threeDays = 3 * 24 * 60 * 60 * 1000;

      if (scheduled <= now + threeDays) {
        return variants.incoming;
      }

      return variants.default;
    },
    [value, variants],
  );

  return (
    <Badge variant={variant} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-3 mr-1"
      >
        <path d="M21 23h-8v-2h8v2ZM9 21H3v-2h6v2Zm4 0h-2v-8h2v8Zm10 0h-2v-8h2v8ZM3 7h14V5h2v4H3v10H1V5h2v2Zm15 10h2v2h-2v-1h-2v-4h2v3Zm3-4h-8v-2h8v2ZM7 3h6V1h2v2h2v2H3V3h2V1h2v2Z" />
      </svg>
      {formatted}
    </Badge>
  );
}

type Status = "open" | "in-progress" | "done";
function StatusBadge({
  labels = {
    open: "Open",
    done: "Done",
    "in-progress": "In Progress",
  },
  showLabel = true,
  value,
  icons = {
    open(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z" />
        </svg>
      );
    },
    "in-progress"(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-5-1h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2h-2V6h2v7ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z" />
        </svg>
      );
    },
    done(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z" />
        </svg>
      );
    },
  },
  variants = {
    open: "muted",
    done: "success",
    "in-progress": "primary",
  },
  ...props
}: ComponentProps<typeof Badge> & {
  labels?: Record<Status, string>;
  showLabel?: boolean;
  value: Status;
  icons?: Record<Status, ComponentType<SVGProps<SVGSVGElement>>>;
  variants?: Record<Status, BadgeVariant>;
}) {
  const Icon = icons[value];
  const label = showLabel ? labels[value] : undefined;
  const variant = variants[value];

  return (
    <Badge variant={variant} {...props}>
      <Icon className="size-3 mr-1" />
      {label}
    </Badge>
  );
}

export {
  DueBadge,
  EstimateBadge,
  IdBadge,
  PriorityBadge,
  ProjectBadge,
  ScheduledBadge,
  StatusBadge,
};
