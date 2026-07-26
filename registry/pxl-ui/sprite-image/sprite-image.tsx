import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const spriteVariants = cva("pixelated bg-no-repeat origin-center", {
  variants: {
    size: {
      base: "size-6 bg-size-[--spacing(12)] scale-[2.5]",
      "2xs": "size-4",
      xs: "size-2 bg-size-[--spacing(4)] scale-[2.5]",
      sm: "size-4.5 bg-size-[--spacing(9)] scale-[2.5]",
      lg: "size-8 bg-size-[--spacing(16)] scale-[2.5]",
    },
    seen: {
      true: "",
      false: "brightness-0",
    },
  },
  defaultVariants: {
    seen: true,
    size: "sm",
  },
});

const spriteShellVariants = cva(
  "grid place-items-center overflow-hidden relative",
  {
    variants: {
      size: {
        base: "size-14",
        "2xs": "size-4",
        xs: "size-5 [&>div]:mt-2",
        sm: "size-9.5 [&>div]:mt-4",
        lg: "size-36",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

export function SpriteImage({
  className,
  seen,
  size,
  src,
}: VariantProps<typeof spriteVariants> &
  ComponentProps<"div"> & {
    src: string;
  }) {
  return (
    <div
      className={cn(spriteVariants({ seen, size }), className)}
      style={{
        backgroundImage: `url("${src}")`,
      }}
    />
  );
}

export default function SpriteShell({
  children,
  className,
  size,
}: VariantProps<typeof spriteShellVariants> & ComponentProps<"div">) {
  return (
    <div className={cn(spriteShellVariants({ size }), className)}>
      {children}
    </div>
  );
}
