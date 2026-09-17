import type { ComponentProps } from "react";

import { Badge } from "@/components/ui/pxl/badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

const scheduledVariants: Record<
  "default" | "incoming" | "expired", 
  NonNullable<ComponentProps<typeof Badge>["variant"]>
> = {
  default: "muted",
  incoming: "warning",
  expired: "danger"
}

function formatScheduled(date: string | Date | number, locale?: string): string {
  if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] = date.split("-").map(Number);

    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(year, month - 1, day));
  }

  const value = new Date(date);

  if (Number.isNaN(value.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}

function getScheduledVariant(
  date: string | Date | number,
): ComponentProps<typeof Badge>["variant"] {
  const scheduled = new Date(date).getTime();
  const now = Date.now();

  if (Number.isNaN(scheduled)) {
    return scheduledVariants.default;
  }

  if (scheduled < now) {
    return scheduledVariants.expired;
  }

  const threeDays = 3 * 24 * 60 * 60 * 1000;

  if (scheduled <= now + threeDays) {
    return scheduledVariants.incoming;
  }

  return scheduledVariants.default;
}

function ScheduledBadge({
  locale,
  value,
  ...props
}: ComponentProps<typeof Badge> & {
  locale?: string;
  value: string | Date | number;
}) {
  return (
    <Badge variant={getScheduledVariant(value)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-3 mr-1"
      >
        <path d="M21 23h-8v-2h8v2ZM9 21H3v-2h6v2Zm4 0h-2v-8h2v8Zm10 0h-2v-8h2v8ZM3 7h14V5h2v4H3v10H1V5h2v2Zm15 10h2v2h-2v-1h-2v-4h2v3Zm3-4h-8v-2h8v2ZM7 3h6V1h2v2h2v2H3V3h2V1h2v2Z" />
      </svg>
      {formatScheduled(value, locale)}
    </Badge>
  );
}

function TaskNotesScheduledBadge({
  task,
  ...props
}: ComponentProps<typeof ScheduledBadge> & {
  task: TaskNotes.Task;
}) {
  return task.scheduled && <ScheduledBadge {...props} value={task.scheduled} />;
}
ScheduledBadge.TaskNotes = TaskNotesScheduledBadge;

export { ScheduledBadge };
