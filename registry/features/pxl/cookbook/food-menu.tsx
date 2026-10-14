import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps } from "react";

import { Separator } from "@/components/ui/pxl/separator";

function FoodMenu({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      data-slot="food-menu"
      className={cn("flex flex-col gap-8", className)}
      {...props}
    />
  );
}

function FoodMenuTitle({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      data-slot="food-menu-title"
      className={cn("font-heading text-center text-xl md:text-3xl", className)}
      {...props}
    />
  );
}

function FoodMenuBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="food-menu-body"
      className={cn("flex flex-col gap-8", className)}
      {...props}
    />
  );
}

function FoodMenuSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <article
      data-slot="food-menu-section"
      className={cn("group/food-menu-section flex flex-col gap-5", className)}
      {...props}
    />
  );
}

function FoodMenuSectionHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="food-menu-section-header"
      className={cn(
        "flex flex-col items-center text-center gap-0.5 w-fit mx-auto",
        "has-data-[slot=food-menu-section-media]:inline-grid has-data-[slot=food-menu-section-media]:grid-cols-[auto_max-content] has-data-[slot=food-menu-section-media]:items-center has-data-[slot=food-menu-section-media]:gap-x-3 has-data-[slot=food-menu-section-media]:gap-y-0.5 has-data-[slot=food-menu-section-media]:mx-auto",
        "[&:not(:has([data-slot='food-menu-section-description']))_[data-slot='food-menu-section-title']]:row-span-2",
        className,
      )}
      {...props}
    />
  );
}

const foodMenuSectionMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 row-span-2 self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function FoodMenuSectionMedia({
  className,
  variant,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof foodMenuSectionMediaVariants>) {
  return (
    <div
      data-slot="food-menu-section-media"
      className={cn(foodMenuSectionMediaVariants({ variant }), className)}
      {...props}
    />
  );
}

function FoodMenuSectionImage({
  alt,
  className,
  ...props
}: ComponentProps<"img">) {
  return (
    <img
      data-slot="food-menu-section-image"
      alt={alt}
      title={alt}
      className={cn("", className)}
      {...props}
    />
  );
}

function FoodMenuSectionTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="food-menu-section-title"
      className={cn(
        "font-heading text-sm md:text-lg text-left line-clamp-1 flex w-full items-center gap-2",
        className,
      )}
      {...props}
    />
  );
}

function FoodMenuSectionDescription({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="food-menu-section-description"
      className={cn(
        "font-serif text-2xs md:text-xs text-left text-muted-foreground/60 line-clamp-2 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

function FoodMenuSectionBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="food-menu-section-body"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function FoodMenuItem({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="food-menu-item"
      className={cn(
        "grid grid-cols-[auto_1fr_auto] items-baseline gap-x-2",
        className,
      )}
      {...props}
    />
  );
}

function FoodMenuItemTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="food-menu-item-title"
      className={cn(
        "font-serif leading-snug text-sm md:text-base text-pretty",
        className,
      )}
      {...props}
    />
  );
}

function FoodMenuItemDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="food-menu-item-description"
      className={cn(
        "font-serif text-muted-foreground/60 text-2xs md:text-xs col-span-full",
        className,
      )}
      {...props}
    />
  );
}

function FoodMenuItemPrice({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="food-menu-item-price"
      className={cn(
        "font-serif italic leading-snug text-xs md:text-sm text-pretty",
        className,
      )}
      {...props}
    />
  );
}

function FoodMenuItemLine({
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
  FoodMenu,
  FoodMenuBody,
  FoodMenuItem,
  FoodMenuItemDescription,
  FoodMenuItemLine,
  FoodMenuItemPrice,
  FoodMenuItemTitle,
  FoodMenuSection,
  FoodMenuSectionBody,
  FoodMenuSectionDescription,
  FoodMenuSectionHeader,
  FoodMenuSectionImage,
  FoodMenuSectionMedia,
  FoodMenuSectionTitle,
  FoodMenuTitle,
};
