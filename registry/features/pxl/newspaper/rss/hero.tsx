import { type ComponentProps, useMemo } from "react";

import {
  HeroCaption as BaseHeroCaption,
  HeroContent as BaseHeroContent,
  HeroHeadline as BaseHeroHeadline,
  HeroImage as BaseHeroImage,
  HeroVideo as BaseHeroVideo,
} from "@/features/pxl/newspaper/hero";
import type { Rss } from "@/lib/schemas/pxl/rss";

function HeroHeadline({
  item,
  ...props
}: ComponentProps<typeof BaseHeroHeadline> & { item: Rss.Item }) {
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
}: ComponentProps<typeof BaseHeroCaption> & { item: Rss.Item }) {
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

function HeroImage({
  item,
  ...props
}: ComponentProps<typeof BaseHeroImage> & { item: Rss.Item }) {
  const image = useMemo(() => {
    const mediaContentsImage = item.media?.contents
      ?.filter((c) => {
        if (c.type?.startsWith("image/")) {
          return true;
        }
        if (!c.type && c.url) {
          return /\.(jpe?g|png|gif|webp|avif|svg)(?:[?#]|$)/i.test(c.url);
        }

        return false;
      })
      .sort((a, b) => {
        if (a.width == null) return 1;
        if (b.width == null) return -1;

        // Take the smallest one in this case
        return a.width - b.width;
      })?.[0];

    if (mediaContentsImage) {
      return {
        alt:
          mediaContentsImage.description?.value ??
          mediaContentsImage.credits?.map((c) => c.value).join(", "),
        src: mediaContentsImage.url,
      };
    }

    const mediaContentsVideoWithThumbnails = item.media?.contents?.find(
      (c) =>
        c.type?.startsWith("video/") && c.thumbnails && c.thumbnails.length > 0,
    );

    if (mediaContentsVideoWithThumbnails) {
      const thumbnail = mediaContentsVideoWithThumbnails.thumbnails?.find(
        (t) => t.url,
      );

      if (thumbnail) {
        return {
          alt: mediaContentsVideoWithThumbnails.description?.value,
          src: thumbnail?.url,
        };
      }
    }

    return null;
  }, [item.media]);

  return image && <BaseHeroImage {...props} alt={image.alt} src={image.src} />;
}

function HeroVideo({
  item,
  ...props
}: ComponentProps<typeof BaseHeroVideo> & { item: Rss.Item }) {
  const video = useMemo(() => {
    const mediaContentsVideo = item.media?.contents?.find((c) =>
      c.type?.startsWith("video/") || c.medium === "video",
    );
    if (mediaContentsVideo) {
      return {
        title: mediaContentsVideo.description?.value,
        src: mediaContentsVideo.url,
        type: mediaContentsVideo.type ?? "video/mp4",
      };
    }

    return null;
  }, [item.media]);

  return (
    video && (
      <BaseHeroVideo
        {...props}
        src={video.src}
        title={video.title}
        type={video.type}
      />
    )
  );
}

function HeroContent({
  item,
  ...props
}: ComponentProps<typeof BaseHeroContent> & { item: Rss.Item }) {
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


export { HeroCaption, HeroContent, HeroHeadline, HeroImage, HeroVideo };
