import { cn } from "cn";
import type { ComponentProps } from "react";

import { Separator } from "@/components/ui/pxl/separator";

function DopamineMenu({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      data-slot="Dopamine-menu"
      className={cn("flex flex-col gap-8", className)}
      {...props}
    />
  );
}

function DopamineMenuTitle({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      data-slot="Dopamine-menu-title"
      className={cn("font-heading text-center text-xl md:text-3xl", className)}
      {...props}
    />
  );
}

function DopamineMenuBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="Dopamine-menu-body"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  );
}

function DopamineMenuSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <article
      data-slot="Dopamine-menu-section"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function DopamineMenuSectionBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="Dopamine-menu-section-body"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function DopamineMenuSectionMedia({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="Dopamine-menu-section-media"
      className={cn("", className)}
      {...props}
    />
  );
}

function DopamineMenuSectionImage({ alt, className, ...props }: ComponentProps<"img">) {
  return (
    <img
      data-slot="Dopamine-menu-section-image"
      alt={alt}
      title={alt}
      className={cn("", className)}
      {...props}
    />
  );
}

function DopamineMenuSectionTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="Dopamine-menu-section-title"
      className={cn(
        "font-heading text-sm md:text-lg text-muted-foreground text-center",
        className,
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
      data-slot="Dopamine-menu-section-description"
      className={cn("", className)}
      {...props}
    />
  );
}

function DopamineMenuItem({ className, ...props }: ComponentProps<"div">) {
  return (
    <article
      data-slot="Dopamine-menu-item"
      className={cn("flex justify-between items-baseline gap-2", className)}
      {...props}
    />
  );
}

function DopamineMenuItemTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="Dopamine-menu-item-title"
      className={cn(
        "font-serif font-bold leading-snug text-sm md:text-base text-pretty",
        className,
      )}
      {...props}
    />
  );
}

function DopamineMenuItemDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="Dopamine-menu-item-description"
      className={cn("", className)}
      {...props}
    />
  );
}

function DopamineMenuItemTime({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="Dopamine-menu-item-time"
      className={cn(
        "font-serif font-bold leading-snug text-sm md:text-base text-pretty",
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
      className={cn("w-fit flex-1", className)}
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
  DopamineMenuSectionImage,
  DopamineMenuSectionMedia,
  DopamineMenuSectionTitle,
  DopamineMenuTitle,
};
