import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps } from "react";

import { Separator } from "@/components/ui/pxl/separator";

function DopamineMenu({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      data-slot="dopamine-menu"
      className={cn("flex flex-col gap-8", className)}
      {...props}
    />
  );
}

function DopamineMenuTitle({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      data-slot="dopamine-menu-title"
      className={cn("font-heading text-center text-xl md:text-3xl", className)}
      {...props}
    />
  );
}

function DopamineMenuBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="dopamine-menu-body"
      className={cn("flex flex-col gap-8", className)}
      {...props}
    />
  );
}

function DopamineMenuSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <article
      data-slot="dopamine-menu-section"
      className={cn("group/dopamine-menu-section flex flex-col gap-5", className)}
      {...props}
    />
  );
}

function DopamineMenuSectionHeader({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="dopamine-menu-section-header"
      className={cn(
        "flex flex-col items-center text-center gap-0.5 w-fit mx-auto",
        "has-data-[slot=dopamine-menu-section-media]:inline-grid has-data-[slot=dopamine-menu-section-media]:grid-cols-[auto_max-content] has-data-[slot=dopamine-menu-section-media]:items-center has-data-[slot=dopamine-menu-section-media]:gap-x-3 has-data-[slot=dopamine-menu-section-media]:gap-y-0.5 has-data-[slot=dopamine-menu-section-media]:mx-auto",
        "[&:not(:has([data-slot='dopamine-menu-section-description']))_[data-slot='dopamine-menu-section-title']]:row-span-2",
        className
      )}
      {...props}
    />
  );
}

const dopamineMenuSectionMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 row-span-2 self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function DopamineMenuSectionMedia({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> &
  VariantProps<typeof dopamineMenuSectionMediaVariants>) {
  return (
    <div
      data-slot="dopamine-menu-section-media"
      className={cn(dopamineMenuSectionMediaVariants({ variant }), className)}
      {...props}
    />
  );
}

function DopamineMenuSectionImage({
  alt,
  className,
  ...props
}: ComponentProps<"img">) {
  return (
    <img
      data-slot="dopamine-menu-section-image"
      alt={alt}
      title={alt}
      className={cn("", className)}
      {...props}
    />
  );
}

function DopamineMenuSectionTitle({
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="dopamine-menu-section-title"
      className={cn(
        "font-heading text-sm md:text-lg text-left line-clamp-1 flex w-full items-center gap-2",
        className
      )}
      {...props}
    />
  );
}

function DopamineMenuSectionDescription({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="dopamine-menu-section-description"
      className={cn(
        "font-serif text-2xs md:text-xs text-left text-muted-foreground/60 line-clamp-2 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

function DopamineMenuSectionBody({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="dopamine-menu-section-body"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function DopamineMenuItem({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="dopamine-menu-item"
      className={cn("grid grid-cols-[auto_1fr_auto] items-baseline gap-x-2", className)}
      {...props}
    />
  );
}

function DopamineMenuItemTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="dopamine-menu-item-title"
      className={cn(
        "font-serif leading-snug text-sm md:text-base text-pretty",
        className,
      )}
      {...props}
    />
  );
}

function DopamineMenuItemDescription({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="dopamine-menu-item-description"
      className={cn("font-serif text-muted-foreground/60 text-2xs md:text-xs col-span-full", className)}
      {...props}
    />
  );
}

function DopamineMenuItemTime({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="dopamine-menu-item-time"
      className={cn(
        "font-serif italic leading-snug text-xs md:text-sm text-pretty",
        className,
      )}
      {...props}
    />
  );
}

function DopamineMenuItemLine({
  className,
  ...props
}: ComponentProps<typeof Separator>) {
  return (
    <Separator
      border="dotted"
      size="lg"
      className={cn("w-full flex-1", className)}
      {...props}
    />
  );
}

export {
  DopamineMenu,
  DopamineMenuBody,
  DopamineMenuItem,
  DopamineMenuItemDescription,
  DopamineMenuItemLine,
  DopamineMenuItemTime,
  DopamineMenuItemTitle,
  DopamineMenuSection,
  DopamineMenuSectionBody,
  DopamineMenuSectionDescription,
  DopamineMenuSectionHeader,
  DopamineMenuSectionImage,
  DopamineMenuSectionMedia,
  DopamineMenuSectionTitle,
  DopamineMenuTitle,
};
