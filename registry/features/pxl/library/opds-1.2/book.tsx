
import { type ComponentProps, useMemo } from "react";

import {
  BookBackCoverBlurb as BaseBookBackCoverBlurb,
  BookCoverAuthor as BaseBookCoverAuthor,
  BookCoverTitle as BaseBookCoverTitle,
  BookSpineAuthor as BaseBookSpineAuthor,
  BookSpineTitle as BaseBookSpineTitle,
} from "@/features/pxl/library/book";
import type { OPDS } from "@/lib/schemas/pxl/opds";

function BookBackCoverBlurb({
  feed,
  ...props
}: ComponentProps<typeof BaseBookBackCoverBlurb> & {
  feed: OPDS.v1_2.Feed;
}) {
  const blurb = useMemo(
    function getBlurb() {
      const entry = feed.entries?.[0];

      if (entry?.content) {
        return entry?.content;
      }
    },
    [feed],
  );

  if (!blurb) {
    return null;
  }

  return (
    <BaseBookBackCoverBlurb
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: html content
      dangerouslySetInnerHTML={{
        __html: blurb.value,
      }}
    ></BaseBookBackCoverBlurb>
  );
}

function BookCoverAuthor({
  feed,
  ...props
}: ComponentProps<typeof BaseBookCoverAuthor> & {
  feed: OPDS.v1_2.Feed;
}) {
  const author = useMemo(
    function getAuthor() {
      const entry = feed.entries?.[0];

      if (entry?.authors?.[0]?.name) {
        if (entry?.authors?.[0]?.name.includes(",")) {
          return entry?.authors?.[0]?.name?.split(",").reverse().join(" ");
        }

        return entry?.authors?.[0]?.name;
      }
    },
    [feed],
  );

  if (!author) {
    return null;
  }

  return <BaseBookCoverAuthor {...props}>{author}</BaseBookCoverAuthor>;
}

function BookCoverImage({
  feed,
  ...props
}: ComponentProps<"img"> & {
  feed: OPDS.v1_2.Feed
}) {
  const image = useMemo(
    function getImage() {
      const entry = feed.entries?.[0];

      const imageLink = entry?.links?.find(l => l.rel === "http://opds-spec.org/image");

      if (imageLink) {
        return imageLink.href;
      }

      const thumbnailLink = entry?.links?.find(l => l.rel === "http://opds-spec.org/image/thumbnail");

      if (thumbnailLink) {
        return thumbnailLink.href;
      }
    },
    [feed],
  );
  
  if (!image) {
    return;
  }

  return (
    <img
      alt="Cover"
      src={image}
      {...props}
    />
  );
}

function BookCoverTitle({
  feed,
  ...props
}: ComponentProps<typeof BaseBookCoverTitle> & {
  feed: OPDS.v1_2.Feed;
}) {
  const title = useMemo(
    function getTitle() {
      const entry = feed.entries?.[0];

      if (entry?.title.value) {
        return entry.title.value;
      }

      return feed.title.value;
    },
    [feed],
  );

  return <BaseBookCoverTitle {...props}>{title}</BaseBookCoverTitle>;
}

function BookSpineAuthor({
  feed,
  ...props
}: ComponentProps<typeof BaseBookSpineAuthor> & {
  feed: OPDS.v1_2.Feed;
}) {
  const author = useMemo(
    function getAuthor() {
      const entry = feed.entries?.[0];

      if (entry?.authors?.[0]?.name) {
        return entry?.authors?.[0]?.name;
      }
    },
    [feed],
  );

  if (!author) {
    return null;
  }

  return <BaseBookSpineAuthor {...props}>{author}</BaseBookSpineAuthor>;
}

function BookSpineTitle({
  feed,
  ...props
}: ComponentProps<typeof BaseBookSpineTitle> & {
  feed: OPDS.v1_2.Feed;
}) {
  const title = useMemo(
    function getTitle() {
      const entry = feed.entries?.[0];

      if (entry?.title.value) {
        return entry.title.value;
      }

      return feed.title.value;
    },
    [feed],
  );

  return <BaseBookSpineTitle {...props}>{title}</BaseBookSpineTitle>;
}

export {
  BookBackCoverBlurb,
  BookCoverAuthor,
  BookCoverImage,
  BookCoverTitle,
  BookSpineAuthor,
  BookSpineTitle,
};
