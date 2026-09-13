import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const taglineVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 font-medium whitespace-nowrap [&_svg]:shrink-0 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "text-base text-foreground",
        primary:
          "pixel-rounded pixel-size-lg bg-primary px-[calc(var(--pixel-size-lg)+(--spacing(2)))] py-[calc(var(--pixel-size-lg)+(--spacing(0.5)))] text-xs text-primary-foreground [a&]:hover:bg-primary/80",
        secondary:
          "pixel-rounded pixel-size-lg bg-secondary px-[calc(var(--pixel-size-lg)+(--spacing(2)))] py-[calc(var(--pixel-size-lg)+(--spacing(0.5)))] text-xs text-secondary-foreground [a&]:hover:bg-secondary/80",
        badge:
          "pixel-border pixel-size-lg bg-background px-[calc(var(--pixel-size-lg)+(--spacing(2)))] py-[calc(var(--pixel-size-lg)+(--spacing(0.5)))] text-xs [a&]:hover:bg-muted [a&]:hover:text-muted-foreground",
        outline:
          "pixel-border pixel-size-lg bg-transparent px-[calc(var(--pixel-size-lg)+(--spacing(2)))] py-[calc(var(--pixel-size-lg)+(--spacing(0.5)))] text-xs [a&]:hover:bg-muted [a&]:hover:text-muted-foreground",
        ghost:
          "bg-transparent text-xs text-muted-foreground hover:bg-muted hover:text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Tagline({
  children,
  className,
  render,
  variant,
  ...props
}: useRender.ComponentProps<"div"> & VariantProps<typeof taglineVariants>) {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        "data-slot": "tagline",
        "data-variant": variant,
        className: cn(taglineVariants({ variant }), className),
        children,
      },
      props,
    ),
  });
}

export { Tagline, taglineVariants };
