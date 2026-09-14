import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, useMemo } from "react";

import type { Atom } from "@/lib/schemas/pxl/atom";
import type { Rdf } from "@/lib/schemas/pxl/rdf";
import type { Rss } from "@/lib/schemas/pxl/rss";
import { cn } from "@/lib/utils";

const teaserVariants = cva(
  "group/teaser flex w-full flex-wrap items-center text-sm transition-colors duration-100 outline-none [a]:transition-colors [a]:hover:bg-muted",
  {
    variants: {
      size: {
        default: "gap-3.5",
        sm: "gap-2.5",
        xs: "gap-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Teaser({
  className,
  size = "default",
  ...props
}: ComponentProps<"li"> & VariantProps<typeof teaserVariants>) {
  return (
    <li
      className={cn(teaserVariants({ size }))}
      data-slot="teaser"
      data-size={size}
      {...props}
    />
  );
}

function TeaserContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-content"
      className={cn(
        "flex flex-1 flex-col gap-1",
        "@container inline-block max-w-[-webkit-fill-available]",
        className,
      )}
      {...props}
    />
  );
}

function TeaserTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-title"
      className={cn(
        "line-clamp-1 flex w-fit items-center gap-2 leading-snug underline-offset-4 px-px",
        "font-serif font-bold text-xs @5xs:text-sm @md:text-base",
        className,
      )}
      {...props}
    />
  );
}

function TeaserDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-description"
      className={cn(
        "relative px-px",
        "max-h-20 overflow-y-auto scrollbar-gutter-stable scrollbar-thin",
        "scrollbar-thumb-transparent group-hover/teaser:scrollbar-thumb-border",
        "font-serif font-normal text-left text-muted-foreground",
        "text-2xs leading-normal @5xs:text-xs @md:text-sm",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

function AtomTeaserTitle({
  entry,
  ...props
}: ComponentProps<typeof TeaserTitle> & { entry: Atom.Entry }) {
  const title = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.title?.value);

    return group?.title?.value ?? entry.title;
  }, [entry]);

  return <TeaserTitle {...props}>{title}</TeaserTitle>;
}
TeaserTitle.Atom = AtomTeaserTitle;

function AtomTeaserDescription({
  entry,
  ...props
}: ComponentProps<typeof TeaserDescription> & { entry: Atom.Entry }) {
  const description = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.description?.value);

    return group?.description?.value ?? entry.content;
  }, [entry]);

  if (!description) {
    return null;
  }

  return (
    <TeaserDescription
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}
TeaserDescription.Atom = AtomTeaserDescription;

function RdfTeaserTitle({
  item,
  ...props
}: ComponentProps<typeof TeaserTitle> & { item: Rdf.Item }) {
  const title = useMemo(() => {
    return item.title ?? "";
  }, [item]);

  return <TeaserTitle {...props}>{title}</TeaserTitle>;
}
TeaserTitle.Rdf = RdfTeaserTitle;

function RdfTeaserDescription({
  item,
  ...props
}: ComponentProps<typeof TeaserDescription> & { item: Rdf.Item }) {
  const description = useMemo(() => {
    return item.content?.encoded ?? item.description;
  }, [item]);

  return (
    description && (
      <TeaserDescription
        {...props}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    )
  );
}
TeaserDescription.Rdf = RdfTeaserDescription;

function RssTeaserTitle({
  item,
  ...props
}: ComponentProps<typeof TeaserTitle> & { item: Rss.Item }) {
  const title = useMemo(() => {
    return item.title ?? "";
  }, [item]);

  return <TeaserTitle {...props}>{title}</TeaserTitle>;
}
TeaserTitle.Rss = RssTeaserTitle;

function RssTeaserDescription({
  item,
  ...props
}: ComponentProps<typeof TeaserDescription> & { item: Rss.Item }) {
  const description = useMemo(() => {
    return item.itunes?.summary ?? item.description;
  }, [item]);

  if (!description) {
    return null;
  }

  return (
    <TeaserDescription
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}
TeaserDescription.Rss = RssTeaserDescription;

export {
  Teaser,
  TeaserContent,
  TeaserDescription,
  TeaserTitle,
};
