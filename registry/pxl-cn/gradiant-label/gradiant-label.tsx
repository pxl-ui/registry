import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const gradiantLabelVariants = cva(
  "font-mono font-bold whitespace-nowrap pixel-drop-black bg-clip-text text-transparent",
  {
    variants: {
      variant: {
        white: "bg-background",
        default:
          "bg-[linear-gradient(to_bottom,white,var(--color-yellow-300),var(--color-orange-400),var(--color-yellow-700))]",
        fire: "bg-linear-to-b from-yellow-300 via-orange-500 to-red-600",
        cryo: "bg-linear-to-b from-white via-cyan-300 to-blue-600",
        plasma: "bg-linear-to-br from-fuchsia-500 via-purple-600 to-cyan-400",
        loot: "bg-[linear-gradient(to_bottom,white,var(--color-yellow-300),var(--color-orange-400),var(--color-yellow-700))]",
        toxic: "bg-linear-to-br from-green-200 via-green-400 to-green-800",
        shadow: "bg-linear-to-br from-purple-300 via-purple-700 to-purple-950",
        synthwave:
          "bg-[linear-gradient(to_bottom,var(--color-pink-300),var(--color-pink-500),var(--color-orange-400),var(--color-yellow-300))]",
        chrome: "bg-linear-to-b from-white via-gray-400 to-gray-300",
      },
      size: {
        default: "text-4xl pixel-size-md",
        xs: "text-base pixel-size-sm",
        sm: "text-lg pixel-size-sm",
        md: "text-2xl pixel-size-md",
        lg: "text-4xl pixel-size-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type Props<T extends ElementType> = {
  as?: T;
} & VariantProps<typeof gradiantLabelVariants> &
  ComponentPropsWithoutRef<T>;

export function GradiantLabel<T extends ElementType = "span">({
  as,
  children,
  className,
  variant = "default",
  size = "default",
  ...rest
}: Props<T>) {
  const Component = as || "span";
  return (
    <Component
      className={cn(
        gradiantLabelVariants({
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
