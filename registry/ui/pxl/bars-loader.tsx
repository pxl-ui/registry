import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const barsLoaderVariants = cva("flex size-full box-border", {
  variants: {
    border: {
      default: "pixel-border p-[calc(var(--pixel-size)*2)]",
      none: "",
    },
    variant: {
      default:
        "bg-background pixel-color-foreground *:data-[slot=bar]:bg-foreground",
      primary:
        "bg-primary pixel-color-primary-foreground *:data-[slot=bar]:bg-primary-foreground",
      secondary:
        "bg-secondary pixel-color-secondary-foreground *:data-[slot=bar]:bg-secondary-foreground",
      info: "bg-info pixel-color-info-foreground *:data-[slot=bar]:bg-info-foreground",
      danger:
        "bg-danger pixel-color-danger-foreground *:data-[slot=bar]:bg-danger-foreground",
      warning:
        "bg-warning pixel-color-warning-foreground *:data-[slot=bar]:bg-warning-foreground",
      success:
        "bg-success pixel-color-success-foreground *:data-[slot=bar]:bg-success-foreground",
      muted:
        "bg-muted pixel-color-muted-foreground *:data-[slot=bar]:bg-muted-foreground",
    },
    size: {
      default: "h-8 gap-1",
      "4xs": "h-2.5 gap-0.5",
      "3xs": "h-3 gap-0.5",
      "2xs": "h-4 gap-0.5",
      xs: "h-6 gap-1",
      sm: "h-7 gap-1",
      md: "h-8 gap-1",
      lg: "h-9 gap-1.5",
    },
  },
  defaultVariants: {
    border: "default",
    size: "default",
    variant: "default",
  },
});

function BarsLoader({
  bars = 9,
  border = "default",
  className,
  size = "default",
  variant = "default",
  ...props
}: ComponentProps<"div"> &
  VariantProps<typeof barsLoaderVariants> & {
    /** Number of bars. Default 9 */
    bars?: number;
  }) {
  return (
    <div
      className={cn(barsLoaderVariants({ border, size, variant }), className)}
      {...props}
    >
      <style>{`@keyframes bars-fill {
        0%, 100% {
          opacity: 0.2;
        }

        50% {
          opacity: 1;
        }
      }`}</style>
      {Array.from({ length: bars }).map((_, index) => (
        <div
          data-slot="bar"
          key={index.toString()}
          className="min-w-0 flex-1 basis-0 animate-[bars-fill_1s_ease-in-out_infinite]"
          style={{ animationDelay: `${index * 0.08}s` }}
        />
      ))}
    </div>
  );
}

export { BarsLoader };
