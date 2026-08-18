import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none bg-clip-padding text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='fill-'])]:fill-current [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      border: "default",
      variant: "default",
      size: "default",
    },
    variants: {
      border: {
        default: "pixel-border pixel-rounded pixel-size-md pixel-color-[transparent]",
        none: "",
        outline: "pixel-border pixel-rounded pixel-size-md",
      },
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/80",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "pixel-color-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:pixel-color-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "pixel-color-[transparent] hover:bg-muted hover:pixel-color-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:pixel-color-muted aria-expanded:text-foreground dark:hover:bg-muted/50 dark:hover:pixel-color-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "pixel-color-[transparent] text-primary-foreground underline-offset-4 hover:underline",
        info: "bg-info text-info-foreground fill-info-foreground hover:bg-info/80",
        success: "bg-success text-success-foreground fill-success-foreground hover:bg-success/80",
        warning: "bg-warning text-warning-foreground fill-warning-foreground hover:bg-warning/80",
        danger: "bg-danger text-danger-foreground fill-danger-foreground hover:bg-danger/80",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        "2xs":
          "h-4 gap-0.5 rounded-none px-1 text-2xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-none px-2.5 text-sm has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        md:
          "h-8 gap-1.5 px-2.5 text-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-9 gap-1.5 px-2.5 text-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-none",
        "icon-lg": "size-9",
      },
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
        className: "pixel-color-primary-foreground hover:pixel-color-primary-foreground/80",
      },
      {
        border: "outline",
        variant: "secondary",
        className: "pixel-color-secondary-foreground  hover:pixel-color-[color-mix(in_oklch,var(--secondary-foreground),var(--foreground)_5%)] aria-expanded:pixel-color-secondary-foreground",
      },
      {
        border: "outline",
        variant: "info",
        className: "pixel-color-info-foreground hover:pixel-color-info-foreground/80",
      },
      {
        border: "outline",
        variant: "success",
        className: "pixel-color-success-foreground hover:pixel-color-success-foreground/80",
      },
      {
        border: "outline",
        variant: "danger",
        className: "pixel-color-danger-foreground hover:pixel-color-danger-foreground/80",
      },
      {
        border: "outline",
        variant: "warning",
        className: "pixel-color-warning-foreground hover:pixel-color-warning-foreground/80",
      }
    ]
  },
);

type Props<T extends ElementType> = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    as?: T;
    asChild?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
  };

function Button<T extends ElementType = "button">({
  as,
  children,
  asChild,
  ...props
}: Props<T>) {
  const { border = "default", variant, size, className } = props;

  return (
    <ButtonPrimitive
      {...props}
      className={cn(
        buttonVariants({ border, variant, size }),
        "rounded-none active:translate-y-1 transition-transform relative inline-flex items-center justify-center border-none",
        size === "icon" && "mx-1 my-0",
        className,
      )}
      data-slot="button"
      data-variant={variant}
      data-size={size}
    >
      {asChild ? (
        <span className="relative inline-flex items-center justify-center gap-1.5">
          {children}
        </span>
      ) : (
        children
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
