import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge pixel-notch inline-flex h-4 items-center px-4 leading-3 font-bold italic truncate",
  {
    variants: {
      font: {
        default: "font-heading",
        heading: "font-heading",
        sans: "font-sans",
        mono: "font-mono",
      },
      variant: {
        default: "bg-foreground text-background",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-muted-foreground",
        accent: "bg-accent text-accent-foreground",
        success: "bg-success text-success-foreground",
        danger: "bg-danger text-danger-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground",
      },
      size: {
        default: "text-2xs",
        sm: "text-2xs",
        md: "text-2xs",
        lg: "text-2xs",
      }
    },
    defaultVariants: {
      font: "default",
      variant: "default",
      size: "default",
    }
  },
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
