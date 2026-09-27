import type { ComponentProps } from "react";

import {
  TaskDescription as BaseTaskDescription,
  TaskStatus as BaseTaskStatus,
  TaskTitle as BaseTaskTitle,
} from "@/components/features/pxl/taskboard/task";
import {
  DueBadge as TaskDue,
  EstimateBadge as TaskEstimate,
  IdBadge as TaskId,
  ProjectBadge as TaskProject,
  ScheduledBadge as TaskScheduled,
} from "@/components/features/pxl/taskboard/tasknotes/task-badge";
import { Markdown } from "@/components/ui/pxl/markdown";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

function TaskTitle({
  task,
  ...props
}: ComponentProps<typeof BaseTaskTitle> & {
  task: TaskNotes.Task;
}) {
  return (
    <BaseTaskTitle
      status={task.status === "none" ? "open" : task.status}
      {...props}
    >
      {task.title}
    </BaseTaskTitle>
  );
}

function TaskDescription({
  task,
  ...props
}: ComponentProps<typeof BaseTaskDescription> & { task: TaskNotes.Task }) {
  return (
    task.description && (
      <BaseTaskDescription {...props}>
        <Markdown>{task.description}</Markdown>
      </BaseTaskDescription>
    )
  );
}

function TaskStatus({
  task,
  ...props
}: Omit<ComponentProps<typeof BaseTaskStatus>, "value"> & {
  task: TaskNotes.Task;
}) {
  return (
    <BaseTaskStatus
      {...props}
      value={task.status === "none" ? "open" : task.status}
    />
  );
}

export {
  TaskDescription,
  TaskDue,
  TaskEstimate,
  TaskId,
  TaskProject,
  TaskScheduled,
  TaskStatus,
  TaskTitle,
};
