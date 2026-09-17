import type { ComponentProps } from "react";

import { Badge } from "@/components/ui/pxl/badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

type Priority = "low" | "high" | "normal";

const priorityVariants: Record<
  Priority,
  NonNullable<ComponentProps<typeof Badge>["variant"]>
> = {
  low: "muted",
  high: "danger",
  normal: "primary",
};

const priorityLabels: Record<
  Priority,
  string
> = {
  low: "Low",
  high: "High",
  normal: "Normal"
}

function PriorityBadge({
  labels = priorityLabels,
  showLabel = true,
  value,
  ...props
}: ComponentProps<typeof Badge> & {
  labels?: Record<Priority, string>;
  showLabel?: boolean;
  value: Priority;
}) {
  return (
    <Badge variant={priorityVariants[value]} {...props}>
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

function TaskNotesPriorityBadge({
  task,
  ...props
}: ComponentProps<typeof PriorityBadge> & {
  task: TaskNotes.Task;
}) {
  return <PriorityBadge {...props} value={task.priority === "none" ? "low" : task.priority} />;
}
PriorityBadge.TaskNotes = TaskNotesPriorityBadge;

export { PriorityBadge };
