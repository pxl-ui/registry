import type { ComponentProps } from "react";

import {
  DueBadge as BaseDueBadge,
  EstimateBadge as BaseEstimateBadge,
  IdBadge as BaseIdBadge,
  PriorityBadge as BasePriorityBadge,
  ProjectBadge as BaseProjectBadge,
  ScheduledBadge as BaseScheduledBadge,
  StatusBadge as BaseStatusBadge,
} from "@/components/features/pxl/taskboard/task-badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

function DueBadge({
  task,
  ...props
}: Omit<ComponentProps<typeof BaseDueBadge>, "value"> & {
  locale?: string;
  task: TaskNotes.Task;
}) {
  return task.due && <BaseDueBadge {...props} value={task.due} />;
}

function EstimateBadge({
  task,
  ...props
}: Omit<ComponentProps<typeof BaseEstimateBadge>, "value"> & {
  showLabel?: boolean;
  task: TaskNotes.Task;
}) {
  const value = (task.timeEstimate ?? 0) * 60; // Estimate is in minutes, we need to transform it to seconds.
  return <BaseEstimateBadge {...props} value={value} />;
}

function IdBadge({
  task,
  ...props
}: ComponentProps<typeof BaseIdBadge> & {
  task: TaskNotes.Task;
}) {
  return <BaseIdBadge {...props}>{task.id}</BaseIdBadge>;
}

function PriorityBadge({
  task,
  ...props
}: Omit<ComponentProps<typeof BasePriorityBadge>, "value"> & {
  task: TaskNotes.Task;
}) {
  return (
    <BasePriorityBadge
      {...props}
      value={task.priority === "none" ? "low" : task.priority}
    />
  );
}

function ProjectBadge({
  task,
  ...props
}: ComponentProps<typeof BaseProjectBadge> & {
  task: TaskNotes.Task;
}) {
  if (!task.projects || task.projects.length === 0) {
    return null;
  }
  return (
    <BaseProjectBadge {...props}>{task.projects.join(", ")}</BaseProjectBadge>
  );
}

function ScheduledBadge({
  task,
  ...props
}: Omit<ComponentProps<typeof BaseScheduledBadge>, "value"> & {
  task: TaskNotes.Task;
}) {
  return (
    task.scheduled && <BaseScheduledBadge {...props} value={task.scheduled} />
  );
}

function StatusBadge({
  task,
  ...props
}: Omit<ComponentProps<typeof BaseStatusBadge>, "value"> & {
  task: TaskNotes.Task;
}) {
  return (
    <BaseStatusBadge
      {...props}
      value={task.status === "none" ? "open" : task.status}
    />
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
