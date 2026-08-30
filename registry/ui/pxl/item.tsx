import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/pxl/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/pxl/dropdown-menu";
import { Separator } from "@/ui/pxl/separator";

function ItemGroup({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="item-group"
      className={cn(
        "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
        className,
      )}
      {...props}
    />
  );
}

function ItemSeparator({
  className,
  ...props
}: ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      border="dashed"
      size="md"
      className={cn("my-2", className)}
      {...props}
    />
  );
}

const itemVariants = cva(
  "group/item flex w-full flex-wrap items-center pixel-size-lg pixel-rounded pixel-border text-sm transition-colors duration-100 outline-none [a]:transition-colors [a]:hover:bg-muted",
  {
    variants: {
      variant: {
        default: "pixel-color-[transparent] bg-transparent",
        outline: "pixel-color-border bg-transparent",
        muted:
          "pixel-color-[transparent] bg-[color-mix(in_oklab,var(--muted)_50%,transparent)]",
        primary: "pixel-color-[transparent] bg-primary text-primary-foreground",
        success: "pixel-color-[transparent] bg-success text-success-foreground",
        danger: "pixel-color-[transparent] bg-danger text-danger-foreground",
        warning: "pixel-color-[transparent] bg-warning text-warning-foreground",
        info: "pixel-color-[transparent] bg-info text-info-foreground",
      },
      size: {
        default: "gap-3.5 px-4 py-3.5",
        sm: "gap-2.5 px-3 py-2.5",
        xs: "gap-2 px-2.5 py-2 pixel-size-[3px] in-data-[slot=dropdown-menu-content]:p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Item({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: useRender.ComponentProps<"li"> & VariantProps<typeof itemVariants>) {
  return useRender({
    defaultTagName: "li",
    props: mergeProps<"li">(
      {
        className: cn(itemVariants({ variant, size, className })),
      },
      props,
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  });
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 overflow-hidden px-rounded-sm pixel-size-md group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function ItemMedia({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none",
        className,
      )}
      {...props}
    />
  );
}

const itemTitleVariants = cva(
  "line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug underline-offset-4",
  {
    variants: {
      font: {
        default: "font-heading",
        heading: "font-heading",
        sans: "font-sans",
        mono: "font-mono",
      },
    },
    defaultVariants: {
      font: "default",
    },
  },
);

function ItemTitle({
  className,
  font,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof itemTitleVariants>) {
  return (
    <div
      data-slot="item-title"
      className={cn(itemTitleVariants({ font }), className)}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

function ItemActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function ItemActionsMenu({
  children,
  ...props
}: Omit<ComponentProps<typeof DropdownMenu>, "children"> & PropsWithChildren) {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger
        render={
          <Button size="icon-xs" variant="ghost" title="More">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 23h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm0-4h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2V9h2v2Zm0-4h-2V5h2v2Zm-2-2H9V3h2v2Zm4 0h-2V3h2v2Zm-2-2h-2V1h2v2Z" />
            </svg>
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ItemActionsMenuItem(props: ComponentProps<typeof DropdownMenuItem>) {
  return <DropdownMenuItem {...props} />;
}

function ItemHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}

function ItemFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}

export {
  Item,
  ItemActions,
  ItemActionsMenu,
  ItemActionsMenuItem,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
};
