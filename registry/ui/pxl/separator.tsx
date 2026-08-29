"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const separatorProps = cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-(--pixel-size) w-full",
      vertical: "h-full w-(--pixel-size) self-stretch",
    },
    size: {
      default: "pixel-size-md [--dash-size:12px] [--dash-gap:4px]",
      sm: "pixel-size-sm [--dash-size:12px] [--dash-gap:4px]",
      md: "pixel-size-md [--dash-size:12px] [--dash-gap:4px]",
      lg: "pixel-size-lg [--dash-size:24px] [--dash-gap:8px]",
    },
    border: {
      solid: "bg-current",
      dashed: "",
    },
    variant: {
      default: "text-border",
      muted: "text-muted-foreground/30",
      primary: "text-primary-foreground/30",
      success: "text-success-foreground/30",
      danger: "text-danger-foreground/30",
      warning: "text-warning-foreground/30",
      info: "text-info-foreground/30",
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    size: "default",
    border: "solid",
    variant: "default",
  },
  compoundVariants: [
    {
      border: "dashed",
      orientation: "horizontal",
      className:
        "bg-[repeating-linear-gradient(to_right,currentColor_0,currentColor_var(--dash-size),transparent_var(--dash-size),transparent_calc(var(--dash-size)+var(--dash-gap)))]",
    },
    {
      border: "dashed",
      orientation: "vertical",
      className:
        "bg-[repeating-linear-gradient(to_bottom,currentColor_0,currentColor_var(--dash-size),transparent_var(--dash-size),transparent_calc(var(--dash-size)+var(--dash-gap)))]",
    },
  ],
});

function Separator({
  className,
  orientation = "horizontal",
  size = "default",
  border = "solid",
  variant = "default",
  ...props
}: SeparatorPrimitive.Props & VariantProps<typeof separatorProps>) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(separatorProps({ border, orientation, size, variant }), className)}
      {...props}
    />
  );
}

export { Separator };
