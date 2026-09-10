import { type ComponentProps, useMemo } from "react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/pxl/item";
import type { Atom, Rss } from "@/lib/schemas/pxl/feeds";
import { cn } from "@/lib/utils";

function FeedList({ ...props }: ComponentProps<typeof ItemGroup>) {
  return <ItemGroup {...props} />;
}

function FeedListItem({ className, ...props }: ComponentProps<typeof Item>) {
  return <Item className={cn("p-0", className)} {...props} />;
}

function FeedListItemContent({ ...props }: ComponentProps<typeof ItemContent>) {
  return <ItemContent {...props} />;
}

function FeedListItemTitle({
  className,
  ...props
}: ComponentProps<typeof ItemTitle>) {
  return <ItemTitle className={cn("text-base", className)} {...props} />;
}

function FeedListItemDescription({
  className,
  ...props
}: ComponentProps<typeof ItemDescription>) {
  return (
    <ItemDescription
      className={cn(
        "text-sm line-clamp-none max-h-20 overflow-hidden relative group-hover/item:overflow-auto group-hover/item:scrollbar-thin scrollbar-stable",
        className,
      )}
      {...props}
    />
  );
}

function AtomFeedListItemTitle({
  entry,
  ...props
}: ComponentProps<typeof ItemTitle> & { entry: Atom.Entry }) {
  const title = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.title?.value);

    return group?.title?.value ?? entry.title;
  }, [entry]);

  return <FeedListItemTitle {...props}>{title}</FeedListItemTitle>;
}
FeedListItemTitle.Atom = AtomFeedListItemTitle;

function AtomFeedListItemDescription({
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
    <FeedListItemDescription
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}
FeedListItemDescription.Atom = AtomFeedListItemDescription;

function RssFeedListItemTitle({
  item,
  ...props
}: ComponentProps<typeof ItemTitle> & { item: Rss.Item }) {
  const title = useMemo(() => {
    return item.title ?? "";
  }, [item]);

  return <FeedListItemTitle {...props}>{title}</FeedListItemTitle>;
}
FeedListItemTitle.Rss = RssFeedListItemTitle;

function RssFeedListItemDescription({
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
    <FeedListItemDescription
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}
FeedListItemDescription.Rss = RssFeedListItemDescription;

export {
  FeedList,
  FeedListItem,
  FeedListItemContent,
  FeedListItemDescription,
  FeedListItemTitle,
};
