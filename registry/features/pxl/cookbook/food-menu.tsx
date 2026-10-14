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
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  );
}

function FoodMenuSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <article
      data-slot="food-menu-section"
      className={cn("flex flex-col gap-4", className)}
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

function FoodMenuSectionMedia({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="food-menu-section-media"
      className={cn("", className)}
      {...props}
    />
  );
}

function FoodMenuSectionImage({ alt, className, ...props }: ComponentProps<"img">) {
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
        "font-heading text-sm md:text-lg text-muted-foreground text-center",
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
      className={cn("", className)}
      {...props}
    />
  );
}

function FoodMenuItem({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="food-menu-item"
      className={cn("flex justify-between items-baseline gap-2", className)}
      {...props}
    />
  );
}

function FoodMenuItemTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="food-menu-item-title"
      className={cn(
        "font-serif font-bold leading-snug text-sm md:text-base text-pretty",
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
      className={cn("", className)}
      {...props}
    />
  );
}

function FoodMenuItemPrice({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="food-menu-item-price"
      className={cn(
        "font-serif font-bold leading-snug text-sm md:text-base text-pretty",
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
      className={cn("w-fit flex-1", className)}
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
  FoodMenuSectionImage,
  FoodMenuSectionMedia,
  FoodMenuSectionTitle,
  FoodMenuTitle,
};
