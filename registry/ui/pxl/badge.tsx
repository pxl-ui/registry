import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge inline-flex items-center leading-3 truncate",
  {
    variants: {
      border: {
        default: "pixel-border pixel-rounded pixel-size-md pixel-color-[transparent] px-1",
        none: "px-1",
        notch: "pixel-notch italic px-4",
        outline: "pixel-border pixel-rounded pixel-size-md px-1",
      },
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
        destructive:
          "bg-[color-mix(in_oklab,var(--destructive)_10%,transparent)]",
        outline:
          "pixel-color-border bg-background text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "pixel-color-[transparent] hover:bg-muted hover:text-foreground dark:hover:bg-muted/50  dark:hover:pixel-color-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground",
        danger: "bg-danger text-danger-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground",
      },
      size: {
        default: "h-4 text-2xs pixel-size-[6px]",
        xs: "h-3 text-2xs",
        sm: "h-4 text-2xs pixel-size-[6px]",
        md: "h-5 text-xs pixel-size-[8px]",
        lg: "h-6 text-base pixel-size-[10px]",
      },
    },
    defaultVariants: {
      border: "default",
      font: "default",
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        border: "outline",
        variant: "default",
        className: "pixel-color-border hover:pixel-color-border/80",
      },
      {
        border: "outline",
        variant: "destructive",
        className: "pixel-color-destructive hover:pixel-color-destructive/80",
      },
      {
        border: "outline",
        variant: "primary",
        className:
          "pixel-color-primary-foreground hover:pixel-color-primary-foreground/80",
      },
      {
        border: "outline",
        variant: "secondary",
        className:
          "pixel-color-secondary-foreground  hover:pixel-color-[color-mix(in_oklch,var(--secondary-foreground),var(--foreground)_5%)] aria-expanded:pixel-color-secondary-foreground",
      },
      {
        border: "outline",
        variant: "info",
        className:
          "pixel-color-info-foreground hover:pixel-color-info-foreground/80",
      },
      {
        border: "outline",
        variant: "success",
        className:
          "pixel-color-success-foreground hover:pixel-color-success-foreground/80",
      },
      {
        border: "outline",
        variant: "danger",
        className:
          "pixel-color-danger-foreground hover:pixel-color-danger-foreground/80",
      },
      {
        border: "outline",
        variant: "warning",
        className:
          "pixel-color-warning-foreground hover:pixel-color-warning-foreground/80",
      },
    ],
  },
);

function Badge({
  className,
  border = "default",
  font = "default",
  size = "default",
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ 
          border,
          font,
          size,
          variant 
        }), className),
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
