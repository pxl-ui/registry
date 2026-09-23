import { type ComponentProps, useMemo } from "react";

import {
  TeaserAuthor as BaseTeaserAuthor,
  TeaserDate as BaseTeaserDate,
  TeaserDescription as BaseTeaserDescription,
  TeaserImage as BaseTeaserImage,
  TeaserTitle as BaseTeaserTitle,
  type TeaserVideo as BaseTeaserVideo,
} from "@/features/pxl/newspaper/teaser";
import type { Atom } from "@/lib/schemas/pxl/atom";

function TeaserTitle({
  entry,
  ...props
}: ComponentProps<typeof BaseTeaserTitle> & { entry: Atom.Entry }) {
  const title = useMemo(() => {
    if (entry.title) {
      return entry.title;
    }

    return "";
  }, [entry.title]);

  return <BaseTeaserTitle {...props}>{title}</BaseTeaserTitle>;
}

function TeaserDescription({
  entry,
  ...props
}: ComponentProps<typeof BaseTeaserDescription> & { entry: Atom.Entry }) {
  const description = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.description?.value);

    if (group) {
      return group?.description?.value;
    }

    return entry.content;
  }, [entry.content, entry.media]);

  return (
    description && (
      <BaseTeaserDescription
        {...props}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: feed content
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    )
  );
}

function TeaserAuthor({
  entry,
  ...props
}: ComponentProps<typeof BaseTeaserAuthor> & { entry: Atom.Entry }) {
  const author = useMemo(() => {
    if (entry.authors && entry.authors.length > 0) {
      return entry.authors?.map((a) => a.name).join(", ");
    }

    return null;
  }, [entry.authors]);

  return author && <BaseTeaserAuthor {...props}>{author}</BaseTeaserAuthor>;
}

function TeaserDate({
  entry,
  ...props
}: ComponentProps<typeof BaseTeaserDate> & { entry: Atom.Entry }) {
  const date = useMemo(() => {
    if (entry.updated) {
      return entry.updated;
    }

    if (entry.published) {
      return entry.published;
    }

    return null;
  }, [entry.updated, entry.published]);

  return date && <BaseTeaserDate {...props} date={date} />;
}

function TeaserImage({
  entry,
  ...props
}: ComponentProps<typeof BaseTeaserImage> & { entry: Atom.Entry }) {
  const image = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.thumbnails?.length);

    if (group) {
      const thumbnail = group.thumbnails?.sort((a, b) => {
        if (a.width == null) return 1;
        if (b.width == null) return -1;

        // Take the smallest one in this case
        return a.width - b.width;
      })?.[0];

      if (thumbnail) {
        return {
          src: thumbnail.url,
          alt: group.description?.value,
          width: thumbnail.width,
          height: thumbnail.height,
        };
      }
    }

    return null;
  }, [entry.media]);

  return image && <BaseTeaserImage {...image} {...props} />;
}

function TeaserExternalLink({
  children,
  entry,
  ...props
}: ComponentProps<"a"> & { entry: Atom.Entry }) {
  const externalLink = useMemo(() => {
    if (entry.links && entry.links.length > 0) {
      return entry.links.find((l) => l.rel === "alternate")?.href;
    }

    return null;
  }, [entry.links]);

  return externalLink ? (
    <a {...props} href={externalLink}>
      {children}
    </a>
  ) : (
    children
  );
}

function TeaserVideo({
  entry,
  ...props
}: ComponentProps<typeof BaseTeaserVideo> & { entry: Atom.Entry }) {
  const video: ComponentProps<"video"> | null = null;

  return null;
  // return video && <BaseTeaserVideo {...video} {...props} />;
}

export {
  TeaserAuthor,
  TeaserDate,
  TeaserDescription,
  TeaserExternalLink,
  TeaserImage,
  TeaserTitle,
  TeaserVideo,
};
