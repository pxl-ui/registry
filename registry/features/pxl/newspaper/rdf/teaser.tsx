import { type ComponentProps, useMemo } from "react";

import {
  TeaserAuthor as BaseTeaserAuthor,
  TeaserDescription as BaseTeaserDescription,
  TeaserTitle as BaseTeaserTitle,
} from "@/features/pxl/newspaper/teaser";
import type { Rdf } from "@/lib/schemas/pxl/rdf";

function TeaserTitle({
  item,
  ...props
}: ComponentProps<typeof BaseTeaserTitle> & { item: Rdf.Item }) {
  const title = useMemo(() => {
    if (item.title) {
      return item.title;
    }

    return "";
  }, [item.title]);

  return <BaseTeaserTitle {...props}>{title}</BaseTeaserTitle>;
}

function TeaserAuthor({
  item,
  ...props
}: ComponentProps<typeof BaseTeaserAuthor> & { item: Rdf.Item }) {
  const author = useMemo(() => {
    if (item.dc?.creators) {
      return item.dc.creators.join(", ");
    }

    if (item.dc?.creator) {
      return item.dc.creator;
    }

    return null;
  }, [item.dc]);

  return author && <BaseTeaserAuthor {...props}>{author}</BaseTeaserAuthor>;
}

function TeaserDescription({
  item,
  ...props
}: ComponentProps<typeof BaseTeaserDescription> & { item: Rdf.Item }) {
  const description = useMemo(() => {
    if (item.content?.encoded) {
      return item.content?.encoded;
    }

    return item.description;
  }, [item.content, item.description]);

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

export { TeaserAuthor, TeaserDescription, TeaserTitle };
