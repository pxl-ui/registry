
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
  catalog,
  ...props
}: ComponentProps<typeof BaseBookBackCoverBlurb> & {
  catalog: OPDS.Catalog;
}) {
  const blurb = useMemo(
    function getBlurb() {
      const entry = catalog.entries?.[0];

      if (entry?.content) {
        return entry?.content;
      }
    },
    [catalog],
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
  catalog,
  ...props
}: ComponentProps<typeof BaseBookCoverAuthor> & {
  catalog: OPDS.Catalog;
}) {
  const author = useMemo(
    function getAuthor() {
      const entry = catalog.entries?.[0];

      if (entry?.authors?.[0]?.name) {
        if (entry?.authors?.[0]?.name.includes(",")) {
          return entry?.authors?.[0]?.name?.split(",").reverse().join(" ");
        }

        return entry?.authors?.[0]?.name;
      }
    },
    [catalog],
  );

  if (!author) {
    return null;
  }

  return <BaseBookCoverAuthor {...props}>{author}</BaseBookCoverAuthor>;
}

function BookCoverImage({
  catalog,
  ...props
}: ComponentProps<"img"> & {
  catalog: OPDS.Catalog
}) {
  const image = useMemo(
    function getImage() {
      const entry = catalog.entries?.[0];

      const imageLink = entry?.links?.find(l => l.rel === "http://opds-spec.org/image");

      if (imageLink) {
        return imageLink.href;
      }

      const thumbnailLink = entry?.links?.find(l => l.rel === "http://opds-spec.org/image/thumbnail");

      if (thumbnailLink) {
        return thumbnailLink.href;
      }
    },
    [catalog],
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
  catalog,
  ...props
}: ComponentProps<typeof BaseBookCoverTitle> & {
  catalog: OPDS.Catalog;
}) {
  const title = useMemo(
    function getTitle() {
      const entry = catalog.entries?.[0];

      if (entry?.title.value) {
        return entry.title.value;
      }

      return catalog.title.value;
    },
    [catalog],
  );

  return <BaseBookCoverTitle {...props}>{title}</BaseBookCoverTitle>;
}

function BookSpineAuthor({
  catalog,
  ...props
}: ComponentProps<typeof BaseBookSpineAuthor> & {
  catalog: OPDS.Catalog;
}) {
  const author = useMemo(
    function getAuthor() {
      const entry = catalog.entries?.[0];

      if (entry?.authors?.[0]?.name) {
        return entry?.authors?.[0]?.name;
      }
    },
    [catalog],
  );

  if (!author) {
    return null;
  }

  return <BaseBookSpineAuthor {...props}>{author}</BaseBookSpineAuthor>;
}

function BookSpineTitle({
  catalog,
  ...props
}: ComponentProps<typeof BaseBookSpineTitle> & {
  catalog: OPDS.Catalog;
}) {
  const title = useMemo(
    function getTitle() {
      const entry = catalog.entries?.[0];

      if (entry?.title.value) {
        return entry.title.value;
      }

      return catalog.title.value;
    },
    [catalog],
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
