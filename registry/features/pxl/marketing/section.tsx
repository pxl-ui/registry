import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { Tagline } from "@/components/features/pxl/marketing/tagline";
import { cn } from "@/lib/utils";

function Section({ children, className, ...props }: ComponentProps<"section">) {
  return (
    <section
      data-slot="page-section"
      className={cn(
        "py-32 not-content max-w-(--sl-content-width) mx-auto px-(--sl-content-pad-x) lg:px-0",
        className,
      )}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  );
}

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
SectionHeading.Tagline = SectionHeadingTagline;

const sectionHeadingTitleVariants = cva(
  "scroll-m-20 text-4xl font-medium tracking-tight text-balance group-data-[size=sm]/section-heading:text-3xl lg:text-5xl lg:group-data-[size=sm]/section-heading:text-4xl",
  {
    defaultVariants: {
      font: "sans",
    },
    variants: {
      font: {
        heading: "font-heading",
        sans: "font-sans",
        serif: "font-serif",
      },
    },
  },
);

function SectionHeadingTitle({
  children,
  className,
  font = "sans",
  render,
  ...props
}: useRender.ComponentProps<"h2"> &
  VariantProps<typeof sectionHeadingTitleVariants>) {
  const defaultProps = {
    "data-slot": "section-heading-title",
    className: cn(sectionHeadingTitleVariants({ font }), className),
    children,
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}
SectionHeading.Title = SectionHeadingTitle;

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
SectionHeading.Body = SectionHeadingBody;

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
SectionHeading.Actions = SectionHeadingActions;

function SectionContent({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="section-content"
      className={cn("relative w-full md:py-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Section,
  SectionContent,
  SectionHeading,
  SectionHeadingActions,
  SectionHeadingBody,
  SectionHeadingTagline,
  SectionHeadingTitle,
};
