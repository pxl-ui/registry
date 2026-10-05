
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
  publication,
  ...props
}: ComponentProps<typeof BaseBookBackCoverBlurb> & {
  publication: OPDS.Publication;
}) {
  if (!publication.metadata.description) {
    return null;
  }

  return (
    <BaseBookBackCoverBlurb
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: html content
      dangerouslySetInnerHTML={{
        __html: publication.metadata.description,
      }}
    ></BaseBookBackCoverBlurb>
  );
}

function BookCoverAuthor({
  publication,
  ...props
}: ComponentProps<typeof BaseBookCoverAuthor> & {
  publication: OPDS.Publication;
}) {
  const author = useMemo(
    function getAuthor() {
      const author = 
        Array.isArray(publication.metadata.author) ?
          publication.metadata.author[0] :
          publication.metadata.author;

      if (typeof author === "string") {
        return author;
      }

      if (typeof author?.name === "string") {
        return author.name;
      }

      if (!author) {
        return null;
      }

      const keys = Object.keys(author.name);

      return author.name[keys[0]];
    },
    [publication.metadata.author],
  );

  if (!author) {
    return null;
  }

  return <BaseBookCoverAuthor {...props}>{author}</BaseBookCoverAuthor>;
}

function BookCoverImage({
  publication,
  ...props
}: ComponentProps<"img"> & {
  publication: OPDS.Publication;
}) {
  const image = useMemo(
    function getImage() {
      const largestImage = publication.images?.sort((a, b) => 
        (b.width ?? 0) - (a.width ?? 0)
      )?.[0];

      if (largestImage) {
        return largestImage.href;
      }

      return null;
    },
    [publication.images],
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
  publication,
  ...props
}: ComponentProps<typeof BaseBookCoverTitle> & {
  publication: OPDS.Publication;
}) {
  const title = useMemo(
    function getTitle() {
      if (typeof publication.metadata.title === "string") {
        return publication.metadata.title;
      }

      const keys = Object.keys(publication.metadata.title);

      return publication.metadata.title[keys[0]];
    },
    [publication.metadata.title],
  );

  if (!title) return null;

  return <BaseBookCoverTitle {...props}>{title}</BaseBookCoverTitle>;
}

function BookSpineAuthor({
  publication,
  ...props
}: ComponentProps<typeof BaseBookSpineAuthor> & {
  publication: OPDS.Publication;
}) {
  const author = useMemo(
    function getAuthor() {
      const author = 
        Array.isArray(publication.metadata.author) ?
          publication.metadata.author[0] :
          publication.metadata.author;

      if (typeof author === "string") {
        return author;
      }

      if (typeof author?.name === "string") {
        return author.name;
      }

      if (!author) {
        return null;
      }

      const keys = Object.keys(author.name);

      return author.name[keys[0]];
    },
    [publication.metadata.author],
  );

  if (!author) {
    return null;
  }

  return <BaseBookSpineAuthor {...props}>{author}</BaseBookSpineAuthor>;
}

function BookSpineTitle({
  publication,
  ...props
}: ComponentProps<typeof BaseBookSpineTitle> & {
  publication: OPDS.Publication;
}) {
  const title = useMemo(
    function getTitle() {
      if (typeof publication.metadata.title === "string") {
        return publication.metadata.title;
      }

      const keys = Object.keys(publication.metadata.title);

      return publication.metadata.title[keys[0]];
    },
    [publication.metadata.title],
  );

  if (!title) return null;

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
