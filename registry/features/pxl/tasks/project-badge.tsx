import type { ComponentProps } from "react";

import { Badge } from "@/components/ui/pxl/badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

function ProjectBadge({
  children,
  ...props
}: ComponentProps<typeof Badge>) {
  return (
    <Badge variant="muted" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
        className="size-3 mr-0.5"><path d="M20 20H4v-2h16v2ZM4 18H2V6h2v12Zm18 0h-2V8h2v10ZM20 8H10V6H4V4h8v2h8v2Z"/></svg>
      {children}
    </Badge>
  );
}

function TaskNotesProjectBadge({
  task,
  ...props
}: ComponentProps<typeof ProjectBadge> & {
  task: TaskNotes.Task;
}) {
  if (!task.projects || task.projects.length === 0) {
    return null;
  }
  return <ProjectBadge {...props}>{task.projects.join(", ")}</ProjectBadge>;
}
ProjectBadge.TaskNotes = TaskNotesProjectBadge;

export { ProjectBadge };
