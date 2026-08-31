import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "group/alert relative grid w-full gap-0.5 rounded-none text-card-foreground px-2.5 py-2 text-left text-xs has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0 *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      border: {
        solid: "pixel-border pixel-size-lg",
        rounded: "pixel-rounded pixel-size-lg",
        none: "",
      },
      variant: {
        default:
          "bg-card     pixel-color-border             *:data-[slot=alert-title]:text-card-foreground    *:data-[slot=alert-description]:text-muted-foreground *:[svg]:text-card-foreground",
        primary:
          "bg-primary  pixel-color-primary-foreground *:data-[slot=alert-title]:text-primary-foreground *:data-[slot=alert-description]:text-foreground       *:[svg]:text-primary-foreground",
        success:
          "bg-success  pixel-color-success-foreground *:data-[slot=alert-title]:text-success-foreground *:data-[slot=alert-description]:text-foreground       *:[svg]:text-success-foreground",
        danger:
          "bg-danger   pixel-color-danger-foreground  *:data-[slot=alert-title]:text-danger-foreground  *:data-[slot=alert-description]:text-foreground       *:[svg]:text-danger-foreground",
        warning:
          "bg-warning  pixel-color-warning-foreground *:data-[slot=alert-title]:text-warning-foreground *:data-[slot=alert-description]:text-foreground       *:[svg]:text-warning-foreground",
        info: "bg-info     pixel-color-info-foreground    *:data-[slot=alert-title]:text-info-foreground    *:data-[slot=alert-description]:text-foreground       *:[svg]:text-info-foreground",
        muted:
          "bg-muted     pixel-color-muted-foreground    *:data-[slot=alert-title]:text-muted-foreground    *:data-[slot=alert-description]:text-foreground       *:[svg]:text-muted-foreground",
        destructive:
          "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
      },
    },
    defaultVariants: {
      border: "solid",
      variant: "default",
    },
    compoundVariants: [
      {
        border: "rounded",
        variant: "default",
        className: "bg-border/30 dark:bg-card",
      },
    ],
  },
);

function Alert({
  border,
  children,
  className,
  variant,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({
          border,
          variant,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-xs/relaxed text-balance md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-2",
        className,
      )}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2.5", className)}
      {...props}
    />
  );
}

export { Alert, AlertAction, AlertDescription, AlertTitle, alertVariants };
