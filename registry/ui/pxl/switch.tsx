"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const switchVariants = cva("peer group/switch relative inline-flex shrink-0 items-center pixel-rounded pixel-size-lg shadow-xs transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:pixel-color-destructive dark:aria-invalid:pixel-color-[color-mix(in_oklab,var(--destructive)_50%,transparent)]", {
  variants: {
    variant: {
      default: "*:data-[slot=switch-thumb]:bg-background data-unchecked:bg-input data-checked:bg-foreground dark:data-unchecked:bg-input/80 dark:data-unchecked:*:data-[slot=switch-thumb]:bg-foreground dark:data-checked:*:data-[slot=switch-thumb]:bg-background",
      primary:
        "*:data-[slot=switch-thumb]:bg-background data-unchecked:bg-primary data-checked:bg-primary-foreground data-checked:*:data-[slot=switch-thumb]:bg-primary dark:data-unchecked:bg-primary/60 dark:data-unchecked:*:data-[slot=switch-thumb]:bg-foreground",
      success:
        "*:data-[slot=switch-thumb]:bg-background data-unchecked:bg-success data-checked:bg-success-foreground data-checked:*:data-[slot=switch-thumb]:bg-success dark:data-unchecked:bg-success/60 dark:data-unchecked:*:data-[slot=switch-thumb]:bg-foreground",    
      danger:
        "*:data-[slot=switch-thumb]:bg-background data-unchecked:bg-danger data-checked:bg-danger-foreground data-checked:*:data-[slot=switch-thumb]:bg-danger dark:data-unchecked:bg-danger/60 dark:data-unchecked:*:data-[slot=switch-thumb]:bg-foreground",    
      warning:
        "*:data-[slot=switch-thumb]:bg-background data-unchecked:bg-warning data-checked:bg-warning-foreground data-checked:*:data-[slot=switch-thumb]:bg-warning dark:data-unchecked:bg-warning/60 dark:data-unchecked:*:data-[slot=switch-thumb]:bg-foreground",    
      info:
        "*:data-[slot=switch-thumb]:bg-background data-unchecked:bg-info data-checked:bg-info-foreground data-checked:*:data-[slot=switch-thumb]:bg-info dark:data-unchecked:bg-info/60 dark:data-unchecked:*:data-[slot=switch-thumb]:bg-foreground",    
    },
    size: {
      sm: "h-3.5 w-6 pixel-size-sm *:data-[slot=switch-thumb]:size-2.5 *:data-[slot=switch-thumb]:pixel-size-xs data-unchecked:*:data-[slot=switch-thumb]:translate-x-0.5 data-checked:*:data-[slot=switch-thumb]:translate-x-[calc(100%+2px)]",
      md: "h-[18.4px] w-8 pixel-size-md *:data-[slot=switch-thumb]:size-3.5 *:data-[slot=switch-thumb]:pixel-size-sm data-unchecked:*:data-[slot=switch-thumb]:translate-x-0.5 data-checked:*:data-[slot=switch-thumb]:translate-x-[calc(100%+2px)]",
      default: "h-[18.4px] w-8 pixel-size-md *:data-[slot=switch-thumb]:size-3.5 *:data-[slot=switch-thumb]:pixel-size-sm data-unchecked:*:data-[slot=switch-thumb]:translate-x-0.5 data-checked:*:data-[slot=switch-thumb]:translate-x-[calc(100%+2px)]",
    }
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

function Switch({
  className,
  size = "default",
  variant = "default",
  ...props
}: SwitchPrimitive.Root.Props &
  VariantProps<typeof switchVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        switchVariants({ size, variant }),
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block pixel-rounded ring-0 transition-transform"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
