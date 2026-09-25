import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const stickyVariants = cva(
  "relative flex aspect-square flex-col pixel-rounded pixel-size-lg shadow-md pb-(--sticky-spacing)",
  {
    defaultVariants: {
      size: "md",
      variant: "default",
      rotate: "none",
    },
    variants: {
      size: {
        sm: "[--sticky-spacing:--spacing(2)] *:data-[slot=sticky-title]:text-xs  *:data-[slot=sticky-content]:**:text-2xs",
        md: "[--sticky-spacing:--spacing(3)] *:data-[slot=sticky-title]:text-sm *:data-[slot=sticky-content]:**:text-xs",
        lg: "[--sticky-spacing:--spacing(4)] *:data-[slot=sticky-title]:text-base *:data-[slot=sticky-content]:**:text-sm",
      },
      variant: {
        default: "pixel-border p-(--pixel-size) *:data-[slot=sticky-title]:bg-border",
        // From Post-it® Sweet Sprinkles
        "acid-lime": "bg-[#E3EF58] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "aqua-splash": "bg-[#6CD9E6] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "black-onyx": "bg-[#231F20] *:data-[slot=sticky-title]:bg-white/5  *:data-[slot=sticky-title]:text-white/60 *:data-[slot=sticky-content]:**:text-white/40",
        "blue-paradise": "bg-[#68D5F8] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "canary-yellow": "bg-[#FBF4AB] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "candy-apple-red": "bg-[#F05366] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "citron": "bg-[#EFDE53] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "fresh-mint": "bg-[#B5E2DF] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "fresh-snow": "bg-[#F2F3F5] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "guava": "bg-[#FF8B96] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "iris-infusion": "bg-[#C29AD4] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        limeade: "bg-[#9DD459] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "lucky-green": "bg-[#64C788] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "moonstone": "bg-[#91A0E3] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "papaya-fizz": "bg-[#FFAA98] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "pebble-gray": "bg-[#BFB7B7] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "pink-salt": "bg-[#F2D4E1] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "positively-pink": "bg-[#FFBBD4] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "power-pink": "bg-[#F46DA8] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "orchid-frost": "bg-[#E6DCEF] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "sea-glass": "bg-[#3FAABF] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "sunnyside": "bg-[#FFD033] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "tropical-pink": "bg-[#FAA6EB] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "vital-orange": "bg-[#FFAD62] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
        "washed-denim": "bg-[#9CC7FD] *:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40",
      },
      rotate: {
        none: "",
        left: "transition-transform -rotate-2 hover:rotate-0 hover:-translate-y-0.5",
        right:
          "transition-transform rotate-2 hover:rotate-0 hover:translate-y-0.5",
      },
    },
  },
);

function Sticky({
  className,
  rotate = "none",
  size = "md",
  variant = "default",
  ...props
}: ComponentProps<"article"> & VariantProps<typeof stickyVariants>) {
  return (
    <article
      data-slot="sticky"
      className={cn(stickyVariants({ rotate, size, variant }), className)}
      {...props}
    />
  );
}

function StickyTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="sticky-title"
      className={cn(
        "font-serif font-semibold leading-tight p-(--sticky-spacing)",
        className,
      )}
      {...props}
    />
  );
}

function StickyContent({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="sticky-content"
      className={cn(
        "px-(--sticky-spacing) pt-(--sticky-spacing) min-h-0 flex-1 overflow-y-auto scrollbar-thin",
        className,
      )}
      {...props}
    >
      <div className="font-serif leading-snug">{children}</div>
    </div>
  );
}

export { Sticky, StickyContent, StickyTitle };
