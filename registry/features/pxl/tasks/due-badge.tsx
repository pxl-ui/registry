import type { ComponentProps } from "react";

import { Badge } from "@/components/ui/pxl/badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

const dueVariants: Record<
  "default" | "incoming" | "expired", 
  NonNullable<ComponentProps<typeof Badge>["variant"]>
> = {
  default: "muted",
  incoming: "warning",
  expired: "danger"
}

function formatDue(date: string | Date | number, locale?: string): string {
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

function getDueVariant(
  date: string | Date | number,
): ComponentProps<typeof Badge>["variant"] {
  const scheduled = new Date(date).getTime();
  const now = Date.now();

  if (Number.isNaN(scheduled)) {
    return dueVariants.default;
  }

  if (scheduled < now) {
    return dueVariants.expired;
  }

  const threeDays = 3 * 24 * 60 * 60 * 1000;

  if (scheduled <= now + threeDays) {
    return dueVariants.incoming;
  }

  return dueVariants.default;
}

function DueBadge({
  locale,
  value,
  ...props
}: ComponentProps<typeof Badge> & {
  locale?: string;
  value: string | Date | number;
}) {
  return (
    <Badge variant={getDueVariant(value)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-3 mr-1"
      >
        <path d="M13 22H5v-2h8v2Zm6 0h-2v-2h2v2ZM5 8h14V6h2v4H5v10H3V6h2v2Zm12 12h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 14H7v-2h2v2Zm4 0h-2v-2h2v2Zm6 0h-2v-2h2v2ZM9 4h6V2h2v2h2v2H5V4h2V2h2v2Z"></path>
      </svg>
      {formatDue(value, locale)}
    </Badge>
  );
}

function TaskNotesDueBadge({
  task,
  ...props
}: ComponentProps<typeof DueBadge> & {
  task: TaskNotes.Task;
}) {
  return task.due && <DueBadge {...props} value={task.due} />;
}
DueBadge.TaskNotes = TaskNotesDueBadge;

export { DueBadge };
