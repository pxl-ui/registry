import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group/card @container/card flex flex-col text-card-foreground pixel-color-border pixel-border pixel-size-(--card-border) p-(--card-border)",
  {
    variants: {
      size: {
        default: "[--card-border:--spacing(1)] [--card-spacing:--spacing(2)]",
        sm: "[--card-border:--spacing(0.5)] [--card-spacing:--spacing(1)]",
        md: "[--card-border:--spacing(1)] [--card-spacing:--spacing(2)]",
        lg: "[--card-border:--spacing(1.5)] [--card-spacing:--spacing(1.5)]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Card({
  className,
  size,
  ...props
}: {
  asChild?: boolean;
} & VariantProps<typeof cardVariants> &
  React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cardVariants({
        size,
        className,
      })}
      {...props}
    ></div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header bg-card pt-(--card-spacing) px-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading italic leading-4 text-base @7xs/card:text-lg @4xs/card:text-xl",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  scrollable,
  children,
  ...props
}: {
  scrollable?: boolean;
} & React.ComponentProps<"div">) {
  if (!scrollable) {
    return (
      <div
        data-slot="card-content"
        className={cn("bg-card p-(--card-spacing) size-full", className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <ScrollAreaPrimitive.Root
      data-slot="card-content"
      className={cn("bg-card p-(--card-spacing) size-full relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        data-slot="scroll-area-scrollbar"
        data-orientation={"vertical"}
        orientation={"vertical"}
        className={cn(
          "-right-(--card-spacing)! flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
          className,
        )}
        {...props}
      >
        <ScrollAreaPrimitive.Thumb
          data-slot="scroll-area-thumb"
          className="relative flex-1 rounded-none bg-ring ml-[calc(var(--pixel-size)*0.5)]"
        />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

export { Card, CardContent, CardHeader, CardTitle };
