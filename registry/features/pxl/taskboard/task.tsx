import { Button as BaseButton } from "@base-ui/react/button";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import {
  type ComponentProps,
  type ComponentType,
  createContext,
  type PropsWithChildren,
  type SVGProps,
  useContext,
  useState,
} from "react";

import {
  DueBadge as TaskDue,
  EstimateBadge as TaskEstimate,
  IdBadge as TaskId,
  ProjectBadge as TaskProject,
  ScheduledBadge as TaskScheduled,
} from "@/components/features/pxl/taskboard/task-badge";
import { Button } from "@/components/ui/pxl/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/pxl/dropdown-menu";
import { Separator } from "@/components/ui/pxl/separator";

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

const statusToggleVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center bg-clip-padding font-medium whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='fill-'])]:fill-current pixel-border pixel-color-foreground pixel-size-md transition-all animation-duration-1000 hover:animate-pulse",
  {
    defaultVariants: {
      size: "icon",
    },
    variants: {
      size: {
        icon: "size-4",
        "icon-xs": "size-3",
        "icon-sm": "size-3.5",
        "icon-md": "size-4",
        "icon-lg": "size-4.5",
      },
    },
  },
);

type Status = "open" | "in-progress" | "done";
function TaskStatus({
  size = "icon",
  value = "open",
  icons = {
    "in-progress"(props: SVGProps<SVGSVGElement>) {
      return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M14 16h-4v-2h4v2Zm-4-2H8v-4h2v4Zm6 0h-2v-4h2v4Zm-2-4h-4V8h4v2Z" />
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
  ...props
}: Omit<BaseButton.Props, "value"> &
  VariantProps<typeof statusToggleVariants> & {
    value: Status;
    icons?: Partial<Record<Status, ComponentType<SVGProps<SVGSVGElement>>>>;
  }) {
  const Icon = icons[value];
  return (
    <BaseButton
      type="button"
      data-slot="button"
      data-size={size}
      className={cn(statusToggleVariants({ size }))}
      {...props}
    >
      {Icon && <Icon className="size-full" />}
    </BaseButton>
  );
}

export {
  Task,
  TaskActions,
  TaskActionsMenu,
  TaskActionsMenuItem,
  TaskContent,
  TaskDescription,
  TaskDue,
  TaskEstimate,
  TaskGroup,
  TaskHeader,
  TaskId,
  TaskMedia,
  TaskProject,
  TaskScheduled,
  TaskSeparator,
  TaskStatus,
  TaskTitle,
};
