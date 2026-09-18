import { Button } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, SVGProps } from "react";

import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";
import { cn } from "@/lib/utils";

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

const ToggleIcon = {
  InProgress(props: SVGProps<SVGSVGElement>) {
    return (
      <svg fill="currentColor" viewBox="0 0 24 24"
        {...props}>
        <path d="M14 16h-4v-2h4v2Zm-4-2H8v-4h2v4Zm6 0h-2v-4h2v4Zm-2-4h-4V8h4v2Z" />
      </svg>
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

function StatusToggle({
  size = "icon",
  value = "open",
  ...props
}: Button.Props &
  VariantProps<typeof statusToggleVariants> & {
    value: "open" | "in-progress" | "done";
  }) {
  return (
    <Button
      type="button"
      data-slot="button"
      data-size={size}
      className={cn(statusToggleVariants({ size }))}
      {...props}
    >
      {value === "in-progress" && (<ToggleIcon.InProgress className="size-full" />)}
      {value === "done" && <ToggleIcon.Done className="size-full" />}
    </Button>
  );
}

function TaskNotesStatusToggle({
  task,
  ...props
}: VariantProps<typeof statusToggleVariants> & {
  task: TaskNotes.Task;
}) {
  return (
    <StatusToggle
      {...props}
      value={task.status === "none" ? "open" : task.status}
    />
  );
}
StatusToggle.TaskNotes = TaskNotesStatusToggle;

export { StatusToggle };
