import { type ComponentProps, useMemo } from "react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/pxl/item";
import type { Atom, Rss } from "@/lib/schemas/pxl/feeds";
import { cn } from "@/lib/utils";

function FeedGrid({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4",
        className,
      )}
      {...props}
    />
  );
}

function FeedGridItem({ className, ...props }: ComponentProps<typeof Item>) {
  return <Item className={cn("p-0", className)} {...props} />;
}

function FeedGridItemContent({
  className,
  ...props
}: ComponentProps<typeof ItemContent>) {
  return (
    <ItemContent
      className={cn(
        "@container inline-block max-w-[-webkit-fill-available]",
        className,
      )}
      {...props}
    />
  );
}

function FeedGridItemTitle({
  className,
  ...props
}: ComponentProps<typeof ItemTitle>) {
  return (
    <ItemTitle
      className={cn("font-serif font-bold text-xs @5xs:text-sm @md:text-base", className)}
      {...props}
    />
  );
}

function FeedGridItemDescription({
  className,
  ...props
}: ComponentProps<typeof ItemDescription>) {
  return (
    <ItemDescription
      className={cn(
        "font-serif text-2xs @5xs:text-xs @md:text-sm line-clamp-none max-h-20 overflow-hidden relative group-hover/item:overflow-auto group-hover/item:scrollbar-thin scrollbar-stable",
        className,
      )}
      {...props}
    />
  );
}

function AtomFeedGridItemTitle({
  entry,
  ...props
}: ComponentProps<typeof ItemTitle> & { entry: Atom.Entry }) {
  const title = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.title?.value);

    return group?.title?.value ?? entry.title;
  }, [entry]);

  return <FeedGridItemTitle {...props}>{title}</FeedGridItemTitle>;
}
FeedGridItemTitle.Atom = AtomFeedGridItemTitle;

function AtomFeedGridItemDescription({
  entry,
  ...props
}: ComponentProps<typeof ItemTitle> & { entry: Atom.Entry }) {
  const description = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.description?.value);

    return group?.description?.value ?? entry.content;
  }, [entry]);

  if (!description) {
    return null;
  }

  return (
    <FeedGridItemDescription
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}
FeedGridItemDescription.Atom = AtomFeedGridItemDescription;

function RssFeedGridItemTitle({
  item,
  ...props
}: ComponentProps<typeof ItemTitle> & { item: Rss.Item }) {
  const title = useMemo(() => {
    return item.title ?? "";
  }, [item]);

  return <FeedGridItemTitle {...props}>{title}</FeedGridItemTitle>;
}
FeedGridItemTitle.Rss = RssFeedGridItemTitle;

function RssFeedGridItemDescription({
  item,
  ...props
}: ComponentProps<typeof ItemTitle> & { item: Rss.Item }) {
  const description = useMemo(() => {
    return item.itunes?.summary ?? item.description;
  }, [item]);

  if (!description) {
    return null;
  }

  return (
    <FeedGridItemDescription
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}
FeedGridItemDescription.Rss = RssFeedGridItemDescription;

export {
  FeedGrid,
  FeedGridItem,
  FeedGridItemContent,
  FeedGridItemDescription,
  FeedGridItemTitle,
};
