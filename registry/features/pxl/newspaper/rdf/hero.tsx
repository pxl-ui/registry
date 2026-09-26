import { type ComponentProps, useMemo } from "react";

import {
  HeroCaption as BaseHeroCaption,
  HeroContent as BaseHeroContent,
  HeroHeadline as BaseHeroHeadline,
} from "@/features/pxl/newspaper/hero";
import type { Rdf } from "@/lib/schemas/pxl/rdf";

function HeroHeadline({
  item,
  ...props
}: ComponentProps<typeof BaseHeroHeadline> & { item: Rdf.Item }) {
  const title = useMemo(() => {
    if (item.title) {
      return item.title;
    }

    return "";
  }, [item.title]);

  return <BaseHeroHeadline {...props}>{title}</BaseHeroHeadline>;
}

function HeroCaption({
  item,
  ...props
}: ComponentProps<typeof BaseHeroCaption> & { item: Rdf.Item }) {
  const author = useMemo(() => {
    if (item.dc?.creators) {
      return item.dc.creators.join(", ");
    }

    if (item.dc?.creator) {
      return item.dc.creator;
    }

    return null;
  }, [item.dc]);

  return author && <BaseHeroCaption {...props}>{author}</BaseHeroCaption>;
}

function HeroContent({
  item,
  ...props
}: ComponentProps<typeof BaseHeroContent> & { item: Rdf.Item }) {
  const content = useMemo(() => {
    if (item.content) {
      return item.content.encoded;
    }

    if (item.description) {
      return item.description;
    }

    return null;
  }, [item.content, item.description]);

  return content && <BaseHeroContent {...props}>{content}</BaseHeroContent>;
}

export { HeroCaption, HeroContent, HeroHeadline };
