import { type ComponentProps, useMemo } from "react";

import {
  HeroCaption as BaseHeroCaption,
  HeroContent as BaseHeroContent,
  HeroHeadline as BaseHeroHeadline,
  HeroImage as BaseHeroImage,
  type HeroVideo as BaseHeroVideo,
} from "@/features/pxl/newspaper/hero";
import type { Atom } from "@/lib/schemas/pxl/atom";

function HeroHeadline({
  entry,
  ...props
}: ComponentProps<typeof BaseHeroHeadline> & { entry: Atom.Entry }) {
  const title = useMemo(() => {
    if (entry.title) {
      return entry.title;
    }

    return "";
  }, [entry.title]);

  return <BaseHeroHeadline {...props}>{title}</BaseHeroHeadline>;
}

function HeroCaption({
  entry,
  ...props
}: ComponentProps<typeof BaseHeroCaption> & { entry: Atom.Entry }) {
  const author = useMemo(() => {
    if (entry.authors && entry.authors.length > 0) {
      return entry.authors?.map((a) => a.name).join(", ");
    }

    return null;
  }, [entry.authors]);

  return author && <BaseHeroCaption {...props}>{author}</BaseHeroCaption>;
}

function HeroContent({
  entry,
  ...props
}: ComponentProps<typeof BaseHeroContent> & { entry: Atom.Entry }) {
  const content = useMemo(() => {
    if (entry.content) {
      return entry.content;
    }

    if (entry.summary) {
      return entry.summary;
    }

    return null;
  }, [entry.content, entry.summary]);

  return content && <BaseHeroContent {...props}>{content}</BaseHeroContent>;
}

function HeroImage({
  entry,
  ...props
}: ComponentProps<typeof BaseHeroImage> & { entry: Atom.Entry }) {
  const image = useMemo(() => {
    const group = entry.media?.groups?.find((g) => g.thumbnails?.length);

    if (group) {
      const thumbnail = group.thumbnails?.sort((a, b) => {
        if (a.width == null) return 1;
        if (b.width == null) return -1;

        // Take the biggest one in this case
        return b.width - a.width;
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

  return image && <BaseHeroImage {...image} {...props} />;
}

function HeroVideo({
  entry,
  ...props
}: ComponentProps<typeof BaseHeroVideo> & { entry: Atom.Entry }) {
  const video: ComponentProps<"video"> | null = null;

  return null;
  // return video && <BaseHeroVideo {...video} {...props} />;
}

export { HeroCaption, HeroContent, HeroHeadline, HeroImage, HeroVideo };
