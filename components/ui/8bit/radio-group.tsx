"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import type * as React from "react";

import { CheckboxFilledIcon, CheckboxIcon } from "@/components/ui/icons";
import { RadioGroup as ShadcnRadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export const radioGroupItemVariants = cva("", {
  variants: {
    size: {
      sm: "w-3.5",
      md: "w-4.5",
      lg: "w-6.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

function RadioGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnRadioGroup>) {
  return <ShadcnRadioGroup className={cn("", className)} {...props} />;
}

function RadioGroupItem({
  className,
  ref,
  size = "md",
  ...props
}: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<typeof RadioGroupPrimitive.Item>>;
} & VariantProps<typeof radioGroupItemVariants>) {
  return (
    <div className={cn("relative", className)}>
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-none border-none peer border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 size-4 shrink-0 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <CheckboxIcon
          className={cn(
            radioGroupItemVariants({
              size,
            }),
          )}
        />
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className={cn("absolute flex items-center justify-center")}
        >
          <CheckboxFilledIcon
            className={cn(
              radioGroupItemVariants({
                size,
              }),
            )}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    </div>
  );
}

export { RadioGroup, RadioGroupItem };
