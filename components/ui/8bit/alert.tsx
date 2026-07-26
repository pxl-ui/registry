import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import {
  Alert as ShadcnAlert,
  AlertDescription as ShadcnAlertDescription,
  AlertTitle as ShadcnAlertTitle,
} from "@/components/ui/alert";
import { CloseIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export const alertVariants = cva("", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive:
        "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BitAlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

function Alert({ children, className, variant, ...props }: BitAlertProps) {
  return (
    <ShadcnAlert
      {...props}
      variant={variant}
      className={cn(
        "relative rounded-none border-none bg-background",
        className,
      )}
    >
      {children}

      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1.5 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1.5 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1.5 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </ShadcnAlert>
  );
}

function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ShadcnAlertTitle
      className={cn("line-clamp-1 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function AlertClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className="absolute top-0.5 right-1 size-4.5 flex justify-center items-center"
      {...props}
    >
      <CloseIcon className="size-3.5 stroke-2 stroke-foreground" />
    </button>
  );
}

const AlertDescription = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }: React.HTMLAttributes<HTMLDivElement>, ref) => {
  return (
    <ShadcnAlertDescription
      className={cn(
        "text-foreground grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertClose, AlertDescription, AlertTitle };
