import type { ComponentProps } from "react";

import { Badge } from "@/components/ui/pxl/badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

function IdBadge({
  children,
  ...props
}: ComponentProps<typeof Badge>) {
  return (
    <Badge variant="muted" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
        className="size-3 mr-0.5"><path d="M14 14v-4h-4v4h4Zm7 2h-6v5h-2v-5H9v5H7v-5H3v-2h5v-4H3V8h6V3h2v5h4V3h2v5h4v2h-5v4h5v2Z"/></svg>
      {children}
    </Badge>
  );
}

function TaskNotesIdBadge({
  task,
  ...props
}: ComponentProps<typeof IdBadge> & {
  task: TaskNotes.Task;
}) {
  return <IdBadge {...props}>{task.id}</IdBadge>;
}
IdBadge.TaskNotes = TaskNotesIdBadge;

export { IdBadge };
