import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import {
  type ComponentProps,
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from "react";

import { DueBadge } from "@/components/features/pxl/tasks/due-badge";
import { EstimateBadge } from "@/components/features/pxl/tasks/estimate-badge";
import { IdBadge } from "@/components/features/pxl/tasks/id-badge";
import { ProjectBadge } from "@/components/features/pxl/tasks/project-badge";
import { ScheduledBadge } from "@/components/features/pxl/tasks/scheduled-badge";
import { StatusToggle } from "@/components/features/pxl/tasks/status-toggle";
import { Button } from "@/components/ui/pxl/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/pxl/dropdown-menu";
import { Markdown } from "@/components/ui/pxl/markdown";
import { Separator } from "@/components/ui/pxl/separator";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";
import { cn } from "@/lib/utils";

const TaskCollapseContext = createContext<{
  open: boolean;
  toggle: () => void;
} | null>(null);

function TaskGroup({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="task-group"
      className={cn(
        "group/task-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
        className,
      )}
      {...props}
    />
  );
}

function TaskSeparator({
  className,
  ...props
}: ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="task-separator"
      orientation="horizontal"
      border="dashed"
      size="md"
      className={cn("my-2", className)}
      {...props}
    />
  );
}

const taskVariants = cva("group/task w-full", {
  variants: {
    size: {
      default: "gap-3.5 px-4 py-3.5",
      sm: "gap-2.5 px-3 py-2.5",
      xs: "gap-2 px-2.5 py-2",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function Task({
  collapsible,
  defaultOpen = false,
  className,
  size = "xs",
  render,
  ...props
}: useRender.ComponentProps<"li"> &
  VariantProps<typeof taskVariants> & {
    collapsible?: boolean;
    defaultOpen?: boolean;
  }) {
  const [open, setOpen] = useState(defaultOpen);

  const item = useRender({
    defaultTagName: "li",
    props: mergeProps<"li">(
      {
        className: cn(taskVariants({ size, className })),
      },
      props,
    ),
    render,
    state: {
      slot: "item",
      size,
    },
  });

  if (!collapsible) return item;

  return (
    <TaskCollapseContext.Provider
      value={{ open, toggle: () => setOpen((o) => !o) }}
    >
      {item}
    </TaskCollapseContext.Provider>
  );
}

function TaskHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="task-header"
      className={cn("flex w-full items-center flex-wrap gap-2", className)}
      {...props}
    />
  );
}

const taskMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        status: "[&_svg:not([class*='size-'])]:size-4",
        badge: "[&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TaskMedia({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof taskMediaVariants>) {
  return (
    <div
      data-slot="task-media"
      data-variant={variant}
      className={cn(taskMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

function TaskContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="task-content"
      className={cn(
        "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=task-content]]:flex-none",
        className,
      )}
      {...props}
    />
  );
}

function TaskTitle({
  className,
  status,
  ...props
}: ComponentProps<"div"> & {
  status?: "open" | "in-progress" | "done";
}) {
  const ctx = useContext(TaskCollapseContext);
  return (
    <div
      data-slot="task-title"
      data-state={ctx ? (ctx.open ? "open" : "closed") : undefined}
      onClick={ctx?.toggle}
      className={cn(
        "flex-1 line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug underline-offset-4",
        status === "done" && "line-through text-muted-foreground",
        ctx && "cursor-pointer select-none hover:underline",
        className,
      )}
      {...props}
    />
  );
}

function TaskDescription({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  const ctx = useContext(TaskCollapseContext);

  if (!ctx) {
    return (
      <div data-slot="task-description" className={cn(className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div
      data-slot="task-description"
      data-state={ctx.open ? "open" : "closed"}
      className={cn(
        "grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out",
        "data-[state=open]:grid-rows-[1fr]",
        className,
      )}
      {...props}
    >
      <div className="overflow-hidden min-h-0">{children}</div>
    </div>
  );
}

function TaskActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="task-actions"
      className={cn(
        "flex shrink-0 items-center justify-center gap-2 [&_svg]:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function TaskActionsMenu({
  children,
  ...props
}: Omit<ComponentProps<typeof DropdownMenu>, "children"> & PropsWithChildren) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger
        render={
          <Button size="icon-xs" variant="ghost" title="More">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 23h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm0-4h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2V9h2v2Zm0-4h-2V5h2v2Zm-2-2H9V3h2v2Zm4 0h-2V3h2v2Zm-2-2h-2V1h2v2Z" />
            </svg>
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function TaskActionsMenuItem(props: ComponentProps<typeof DropdownMenuItem>) {
  return <DropdownMenuItem {...props} />;
}

function TaskNotesTaskTitle({
  task,
  ...props
}: ComponentProps<typeof TaskTitle> & {
  task: TaskNotes.Task;
}) {
  return (
    <TaskTitle
      status={task.status === "none" ? "open" : task.status}
      {...props}
    >
      {task.title}
    </TaskTitle>
  );
}
TaskTitle.TaskNotes = TaskNotesTaskTitle;

function TaskNotesTaskDescription({
  task,
  ...props
}: ComponentProps<typeof TaskDescription> & { task: TaskNotes.Task }) {
  return (
    task.description && (
      <TaskDescription {...props}>
        <Markdown>{task.description}</Markdown>
      </TaskDescription>
    )
  );
}
TaskDescription.TaskNotes = TaskNotesTaskDescription;

export {
  DueBadge as TaskDue,
  EstimateBadge as TaskEstimate,
  IdBadge as TaskId,
  ProjectBadge as TaskProject,
  ScheduledBadge as TaskScheduled,
  StatusToggle as TaskStatus,
  Task,
  TaskActions,
  TaskActionsMenu,
  TaskActionsMenuItem,
  TaskContent,
  TaskDescription,
  TaskGroup,
  TaskHeader,
  TaskMedia,
  TaskSeparator,
  TaskTitle,
};
