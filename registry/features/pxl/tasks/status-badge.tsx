import type { ComponentProps, SVGProps } from "react";

import { Badge } from "@/components/ui/pxl/badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";

type Status = "open" | "in-progress" | "done";

const statusVariants: Record<
  Status,
  NonNullable<ComponentProps<typeof Badge>["variant"]>
> = {
  open: "muted",
  done: "success",
  "in-progress": "primary",
};

const statusLabels: Record<
  Status,
  string
> = {
  open: "Open",
  done: "Done",
  "in-progress": "In Progress"
};



const StatusIcon = {
  Open(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
        {...props}><path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"/></svg>
    )
  },
  InProgress(props: SVGProps<SVGSVGElement>) {
    return (
     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
      {...props}><path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-5-1h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2h-2V6h2v7ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"/></svg>
    );
  },
  Done(props: SVGProps<SVGSVGElement>) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" viewBox="0 0 24 24"
        {...props}>
        <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z"/>
      </svg>
    );
  },
};

function StatusBadge({
  labels = statusLabels,
  showLabel = true,
  value,
  ...props
}: ComponentProps<typeof Badge> & {
  labels?: Record<Status, string>;
  showLabel?: boolean;
  value: Status;
}) {
  return (
    <Badge variant={statusVariants[value]} {...props}>
      {value === "open" && <StatusIcon.Open className="size-3 mr-1" />}
      {value === "in-progress" && (<StatusIcon.InProgress className="size-3 mr-1" />)}
      {value === "done" && <StatusIcon.Done className="size-3 mr-1" />}
      {showLabel && labels[value]}
    </Badge>
  );
}

function TaskNotesStatusBadge({
  task,
  ...props
}: ComponentProps<typeof StatusBadge> & {
  task: TaskNotes.Task;
}) {
  return <StatusBadge {...props} value={task.status === "none" ? "open" : task.status} />;
}
StatusBadge.TaskNotes = TaskNotesStatusBadge;

export { StatusBadge };
