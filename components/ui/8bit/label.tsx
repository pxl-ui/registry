"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { Label as LabelPrimitive } from "radix-ui";
import type * as React from "react";

import { Label as ShadcnLabel } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const labelVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface BitLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  asChild?: boolean;
}

function Label({ className, size, ...props }: BitLabelProps) {
  return (
    <ShadcnLabel
      className={cn(
        labelVariants({
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Label };
