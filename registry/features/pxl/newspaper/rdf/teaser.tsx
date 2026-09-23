import { type ComponentProps, useMemo } from "react";

import {
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

export { TeaserDescription, TeaserTitle };
