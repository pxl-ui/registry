import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const stickyColors = {
  "acid-lime": { className: "bg-[#E3EF58]", foreground: "dark" },
  "aqua-splash": { className: "bg-[#6CD9E6]", foreground: "dark" },
  "black-onyx": { className: "bg-[#231F20]", foreground: "light" },
  "blue-paradise": { className: "bg-[#68D5F8]", foreground: "dark" },
  "canary-yellow": { className: "bg-[#FBF4AB]", foreground: "dark" },
  "candy-apple-red": { className: "bg-[#F05366]", foreground: "dark" },
  citron: { className: "bg-[#EFDE53]", foreground: "dark" },
  "fresh-mint": { className: "bg-[#B5E2DF]", foreground: "dark" },
  "fresh-snow": { className: "bg-[#F2F3F5]", foreground: "dark" },
  guava: { className: "bg-[#FF8B96]", foreground: "dark" },
  "iris-infusion": { className: "bg-[#C29AD4]", foreground: "dark" },
  limeade: { className: "bg-[#9DD459]", foreground: "dark" },
  "lucky-green": { className: "bg-[#64C788]", foreground: "dark" },
  moonstone: { className: "bg-[#91A0E3]", foreground: "dark" },
  "papaya-fizz": { className: "bg-[#FFAA98]", foreground: "dark" },
  "pebble-gray": { className: "bg-[#BFB7B7]", foreground: "dark" },
  "pink-salt": { className: "bg-[#F2D4E1]", foreground: "dark" },
  "positively-pink": { className: "bg-[#FFBBD4]", foreground: "dark" },
  "power-pink": { className: "bg-[#F46DA8]", foreground: "dark" },
  "orchid-frost": { className: "bg-[#E6DCEF]", foreground: "dark" },
  "sea-glass": { className: "bg-[#3FAABF]", foreground: "dark" },
  sunnyside: { className: "bg-[#FFD033]", foreground: "dark" },
  "tropical-pink": { className: "bg-[#FAA6EB]", foreground: "dark" },
  "vital-orange": { className: "bg-[#FFAD62]", foreground: "dark" },
  "washed-denim": { className: "bg-[#9CC7FD]", foreground: "dark" },
};
type StickyColor = keyof typeof stickyColors;

const getStickyVariant = (color: StickyColor) => {
  const { className, foreground } = stickyColors[color];

  return cn(className, 
    foreground === "light"
      ? "*:data-[slot=sticky-title]:bg-white/5 *:data-[slot=sticky-title]:text-white/60 *:data-[slot=sticky-content]:**:text-white/40"
      : "*:data-[slot=sticky-title]:bg-black/5 *:data-[slot=sticky-title]:text-black/60 *:data-[slot=sticky-content]:**:text-black/40"
  );
};

const stickyVariants = cva(
  "relative flex aspect-square flex-col pixel-rounded shadow-md pb-(--sticky-spacing)",
  {
    defaultVariants: {
      size: "md",
      variant: "default",
      rotate: "none",
    },
    variants: {
      size: {
        sm: "pixel-size-md [--sticky-spacing:--spacing(2)] *:data-[slot=sticky-title]:text-xs  *:data-[slot=sticky-content]:**:text-2xs",
        md: "pixel-size-lg [--sticky-spacing:--spacing(3)] *:data-[slot=sticky-title]:text-sm *:data-[slot=sticky-content]:**:text-xs",
        lg: "pixel-size-lg [--sticky-spacing:--spacing(4)] *:data-[slot=sticky-title]:text-base *:data-[slot=sticky-content]:**:text-sm",
      },
      variant: {
        default: "pixel-border p-(--pixel-size) *:data-[slot=sticky-title]:bg-border",
        "acid-lime": getStickyVariant("acid-lime"),
        "aqua-splash": getStickyVariant("aqua-splash"),
        "black-onyx": getStickyVariant("black-onyx"),
        "blue-paradise": getStickyVariant("blue-paradise"),
        "canary-yellow": getStickyVariant("canary-yellow"),
        "candy-apple-red": getStickyVariant("candy-apple-red"),
        citron: getStickyVariant("citron"),
        "fresh-mint": getStickyVariant("fresh-mint"),
        "fresh-snow": getStickyVariant("fresh-snow"),
        guava: getStickyVariant("guava"),
        "iris-infusion": getStickyVariant("iris-infusion"),
        limeade: getStickyVariant("limeade"),
        "lucky-green": getStickyVariant("lucky-green"),
        moonstone: getStickyVariant("moonstone"),
        "papaya-fizz": getStickyVariant("papaya-fizz"),
        "pebble-gray": getStickyVariant("pebble-gray"),
        "pink-salt": getStickyVariant("pink-salt"),
        "positively-pink": getStickyVariant("positively-pink"),
        "power-pink": getStickyVariant("power-pink"),
        "orchid-frost": getStickyVariant("orchid-frost"),
        "sea-glass": getStickyVariant("sea-glass"),
        sunnyside: getStickyVariant("sunnyside"),
        "tropical-pink": getStickyVariant("tropical-pink"),
        "vital-orange": getStickyVariant("vital-orange"),
        "washed-denim": getStickyVariant("washed-denim"),
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

export type { StickyColor };
export { Sticky, StickyContent, StickyTitle, stickyColors };
