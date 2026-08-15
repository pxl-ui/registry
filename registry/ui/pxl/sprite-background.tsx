import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const spriteBackgroundVariants = cva("sprite-sheet", {
  variants: {
    size: {
      default: "size-24",
      xs: "size-8",
      sm: "size-12",
      md: "size-16",
      lg: "size-24",
      xl: "size-32",
    },
    columns: {
      default: "sprite-cols-4",
      2: "sprite-cols-2",
      4: "sprite-cols-4"
    },
    rows: {
      default: "sprite-rows-1",
      1: "sprite-rows-1",
      2: "sprite-rows-2"
    },
    animation: {
      default: "",
      Idle: "",
      Action: "",
      Sleep: "",
    },
  },
  defaultVariants: {
    size: "default",
    columns: "default",
    rows: "default",
    animation: "default",
  },
  compoundVariants: [
    {
      columns: 4,
      rows: 1,
      animation: "Idle",
      className: "sprite-animate-[0,1,2,3] sprite-duration-[500ms]"
    },
    {
      columns: 2,
      rows: 2,
      animation: "Idle",
      className: "sprite-animate-[0,1] sprite-duration-[1000ms]"
    }
  ]
});

export function SpriteBackground({
  animation,
  className,
  columns,
  rows,
  size,
  src,
}: VariantProps<typeof spriteBackgroundVariants> &
  ComponentProps<"div"> & {
    src: string;
  }) {
  return (
    <div
      className={cn(spriteBackgroundVariants({ 
        animation,
        columns,
        rows,
        size 
      }), className)}
      style={{
        backgroundImage: `url("${src}")`,
      }}
    />
  );
}
