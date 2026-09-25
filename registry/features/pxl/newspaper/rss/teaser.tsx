import { type ComponentProps, useMemo } from "react";

import {
  TeaserAuthor as BaseTeaserAuthor,
  TeaserDate as BaseTeaserDate,
  TeaserDescription as BaseTeaserDescription,
  TeaserImage as BaseTeaserImage,
  TeaserTitle as BaseTeaserTitle,
  TeaserVideo as BaseTeaserVideo,
} from "@/features/pxl/newspaper/teaser";
import type { Rss } from "@/lib/schemas/pxl/rss";

function TeaserTitle({
  item,
  ...props
}: ComponentProps<typeof BaseTeaserTitle> & { item: Rss.Item }) {
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
}: ComponentProps<typeof BaseTeaserDescription> & { item: Rss.Item }) {
  const description = useMemo(() => {
    if (item.itunes?.summary) {
      return item.itunes.summary;
    }

    return item.description;
  }, [item.description, item.itunes]);

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
  item,
  ...props
}: ComponentProps<typeof BaseTeaserAuthor> & { item: Rss.Item }) {
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

function TeaserDate({
  item,
  ...props
}: ComponentProps<typeof BaseTeaserDate> & { item: Rss.Item }) {
  const date = useMemo(() => {
    if (item.pubDate) {
      return item.pubDate;
    }

    return null;
  }, [item.pubDate]);

  return date && <BaseTeaserDate {...props} date={date} />;
}

function TeaserImage({
  item,
  ...props
}: ComponentProps<typeof BaseTeaserImage> & { item: Rss.Item }) {
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

  return (
    image && <BaseTeaserImage {...props} alt={image.alt} src={image.src} />
  );
}

function TeaserVideo({
  item,
  ...props
}: ComponentProps<typeof BaseTeaserVideo> & { item: Rss.Item }) {
  const video = useMemo(() => {
    const mediaContentsVideo = item.media?.contents?.find((c) =>
      c.type?.startsWith("video/"),
    );
    if (mediaContentsVideo) {
      return {
        title: mediaContentsVideo.description?.value,
        src: mediaContentsVideo.url,
        type: mediaContentsVideo.type,
      };
    }

    return null;
  }, [item.media]);

  return (
    video && (
      <BaseTeaserVideo
        {...props}
        src={video.src}
        title={video.title}
        type={video.type}
      />
    )
  );
}

export {
  TeaserAuthor,
  TeaserDate,
  TeaserDescription,
  TeaserImage,
  TeaserTitle,
  TeaserVideo
};

