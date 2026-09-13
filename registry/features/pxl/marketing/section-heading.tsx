import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { ComponentProps } from "react";

import { Tagline } from "@/components/features/pxl/marketing/tagline";
import { cn } from "@/lib/utils";

function SectionHeading({
  alignment = "left",
  size = "lg",
  className,
  ...props
}: ComponentProps<"div"> & {
  alignment?: "left" | "center" | "right";
  size?: "sm" | "lg";
}) {
  return (
    <div
      data-slot="section-heading"
      data-alignment={alignment}
      data-size={size}
      className={cn(
        "group/section-heading flex max-w-3xl flex-col gap-2.5",
        alignment === "left" && "items-start text-left",
        alignment === "right" && "items-end text-right",
        alignment === "center" && "mx-auto items-center text-center",
        className,
      )}
      {...props}
    />
  );
}

function SectionHeadingTagline({ ...props }: ComponentProps<typeof Tagline>) {
  return <Tagline variant="default" {...props} />;
}

function SectionHeadingTitle({
  children,
  className,
  render,
  ...props
}: useRender.ComponentProps<"h2">) {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        "data-slot": "section-heading-title",
        className: cn(
          "cn-font-heading scroll-m-20 text-4xl font-medium tracking-tight text-balance group-data-[size=sm]/section-heading:text-3xl lg:text-5xl lg:group-data-[size=sm]/section-heading:text-4xl",
          className,
        ),
        children,
      },
      props,
    ),
  });
}

function SectionHeadingBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="section-heading-body"
      className={cn(
        "max-w-2xl text-base text-pretty text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function SectionHeadingActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="section-heading-actions"
      className={cn(
        "flex w-full flex-col gap-1.5 sm:w-fit sm:flex-row",
        className,
      )}
      {...props}
    />
  );
}

export {
  SectionHeading,
  SectionHeadingActions,
  SectionHeadingBody,
  SectionHeadingTagline,
  SectionHeadingTitle,
};
