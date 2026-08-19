import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const textStrokeVariants = cva(
  "font-bold whitespace-nowrap bg-clip-text text-transparent",
  {
    variants: {
      effect: {
        default: "pixel-drop-foreground",
        filterDrop: "pixel-drop-foreground",
        textShadow: "pixel-title-foreground",
      },
      variant: {
        background: "bg-background",
        default:
          "bg-background",
        fire: "bg-fire",
        cryo: "bg-cryo",
        plasma: "bg-plasma",
        loot: "bg-loot",
        toxic: "bg-toxic",
        shadow: "bg-shadow",
        synthwave:
          "bg-synthwave",
        chrome: "bg-chrome",
      },
      size: {
        default: "text-md pixel-size-sm",
        "4xs": "text-4xs pixel-size-sm",
        "3xs": "text-3xs pixel-size-sm",
        "2xs": "text-2xs pixel-size-sm",
        xs: "text-xs pixel-size-sm",
        sm: "text-sm pixel-size-sm",
        md: "text-md pixel-size-sm",
        lg: "text-lg pixel-size-md",
        xl: "text-xl pixel-size-md",
        "2xl": "text-2xl pixel-size-md",
        "3xl": "text-3xl pixel-size-md",
        "4xl": "text-4xl pixel-size-md",
      },
      font: {
        default: "font-mono",
        heading: "font-heading",
        sans: "font-sans",
        mono: "font-mono"
      }
    },
    defaultVariants: {
      effect: "default",
      variant: "default",
      size: "default",
      font: "default"
    },
  },
);

type Props<T extends ElementType> = {
  as?: T;
} & VariantProps<typeof textStrokeVariants> &
  ComponentPropsWithoutRef<T>;

export function TextStroke<T extends ElementType = "span">({
  as,
  children,
  className,
  effect = "default",
  font = "default",
  variant = "default",
  size = "default",
  ...rest
}: Props<T>) {
  const Component = as || "span";
  return (
    <Component
      className={cn(
        textStrokeVariants({
          effect,
          font,
          variant,
          size,
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
