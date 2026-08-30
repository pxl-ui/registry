import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sliderVariants = cva("data-horizontal:w-full data-vertical:h-full", {
  variants: {
    variant: {
      default:  "**:data-[slot=slider-range]:bg-foreground          **:data-[slot=slider-thumb]:bg-background **:data-[slot=slider-thumb]:pixel-color-input   **:data-[slot=slider-thumb]:hover:pixel-color-ring                **:data-[slot=slider-thumb]:focus-visible:pixel-color-ring                **:data-[slot=slider-thumb]:active:pixel-color-ring",
      primary:  "**:data-[slot=slider-range]:bg-primary-foreground  **:data-[slot=slider-thumb]:bg-background **:data-[slot=slider-thumb]:pixel-color-primary **:data-[slot=slider-thumb]:hover:pixel-color-primary-foreground  **:data-[slot=slider-thumb]:focus-visible:pixel-color-primary-foreground  **:data-[slot=slider-thumb]:active:pixel-color-primary-foreground",
      success:  "**:data-[slot=slider-range]:bg-success-foreground  **:data-[slot=slider-thumb]:bg-background **:data-[slot=slider-thumb]:pixel-color-success **:data-[slot=slider-thumb]:hover:pixel-color-success-foreground  **:data-[slot=slider-thumb]:focus-visible:pixel-color-success-foreground  **:data-[slot=slider-thumb]:active:pixel-color-success-foreground",
      danger:   "**:data-[slot=slider-range]:bg-danger-foreground   **:data-[slot=slider-thumb]:bg-background **:data-[slot=slider-thumb]:pixel-color-danger  **:data-[slot=slider-thumb]:hover:pixel-color-danger-foreground   **:data-[slot=slider-thumb]:focus-visible:pixel-color-danger-foreground   **:data-[slot=slider-thumb]:active:pixel-color-danger-foreground",
      warning:  "**:data-[slot=slider-range]:bg-warning-foreground  **:data-[slot=slider-thumb]:bg-background **:data-[slot=slider-thumb]:pixel-color-warning **:data-[slot=slider-thumb]:hover:pixel-color-warning-foreground  **:data-[slot=slider-thumb]:focus-visible:pixel-color-warning-foreground  **:data-[slot=slider-thumb]:active:pixel-color-warning-foreground",
      info:     "**:data-[slot=slider-range]:bg-info-foreground     **:data-[slot=slider-thumb]:bg-background **:data-[slot=slider-thumb]:pixel-color-info    **:data-[slot=slider-thumb]:hover:pixel-color-info-foreground     **:data-[slot=slider-thumb]:focus-visible:pixel-color-info-foreground     **:data-[slot=slider-thumb]:active:pixel-color-info-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Slider({
  className,
  defaultValue,
  value,
  variant = "default",
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props & VariantProps<typeof sliderVariants>) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max];

  return (
    <SliderPrimitive.Root
      className={cn(sliderVariants({ variant }), className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden pixel-rounded pixel-size-sm bg-muted select-none data-horizontal:h-1.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-1.5"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index.toString()}
            className="block size-3.5 shrink-0 pixel-border pixel-size-md shadow-xs transition-colors select-none focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
