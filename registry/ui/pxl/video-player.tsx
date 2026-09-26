"use client";

import { cn } from "cn";
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import type { ComponentProps, CSSProperties } from "react";

function VideoPlayer({
  style,
  ...props
}: ComponentProps<typeof MediaController>) {
  return (
    <MediaController
      style={
        {
          "--media-primary-color": "var(--foreground)",
          "--media-secondary-color": "var(--background)",
          "--media-text-color": "var(--foreground)",
          "--media-background-color": "var(--background)",
          "--media-control-hover-background": "var(--accent)",
          "--media-font-family": "var(--font-sans)",
          "--media-live-button-icon-color": "var(--muted-foreground)",
          "--media-live-button-indicator-color": "var(--destructive)",
          "--media-range-track-background": "var(--border)",
          ...style,
        } as CSSProperties
      }
      {...props}
    />
  );
}

function VideoPlayerControlBar(props: ComponentProps<typeof MediaControlBar>) {
  return <MediaControlBar {...props} />;
}

function VideoPlayerTimeRange({
  className,
  ...props
}: ComponentProps<typeof MediaTimeRange>) {
  return <MediaTimeRange className={cn("p-2.5", className)} {...props} />;
}

function VideoPlayerTimeDisplay({
  className,
  ...props
}: ComponentProps<typeof MediaTimeDisplay>) {
  return <MediaTimeDisplay className={cn("p-2.5", className)} {...props} />;
}

function VideoPlayerVolumeRange({
  className,
  ...props
}: ComponentProps<typeof MediaVolumeRange>) {
  return <MediaVolumeRange className={cn("p-2.5", className)} {...props} />;
}

function VideoPlayerPlayButton({
  className,
  ...props
}: ComponentProps<typeof MediaPlayButton>) {
  return (
    <MediaPlayButton className={cn("p-2.5", className)} {...props}>
      <svg
        slot="play"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 5h2v2H9v10h2v2H9v2H7V3h2v2Zm4 12h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-2-2h-2V9h2v2Zm-2-2h-2V7h2v2Z" />
      </svg>
      <svg
        slot="pause"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M10 20H4V4h6v16Zm8-16v16h-6V4h6Zm-4 2v12h2V6h-2ZM6 18h2V6H6v12Z" />
      </svg>
    </MediaPlayButton>
  );
}

function VideoPlayerSeekBackwardButton({
  className,
  ...props
}: ComponentProps<typeof MediaSeekBackwardButton>) {
  return (
    <MediaSeekBackwardButton className={cn("p-2.5", className)} {...props}>
      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 20h-6v-2h6v2Zm2-2h-2v-8h2v8Zm-10-4H8v-2H6v-2H4V8h2V6h2V4h2v4h8v2h-8v4Z"/></svg>
    </MediaSeekBackwardButton>
  );
}

function VideoPlayerSeekForwardButton({
  className,
  ...props
}: ComponentProps<typeof MediaSeekForwardButton>) {
  return (
    <MediaSeekForwardButton className={cn("p-2.5", className)} {...props}>
      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20H6v-2h6v2Zm-6-2H4v-8h2v8Zm8-8H6V8h8V4h2v2h2v2h2v2h-2v2h-2v2h-2v-4Z"/></svg>
    </MediaSeekForwardButton>
  );
}

function VideoPlayerMuteButton({
  className,
  ...props
}: ComponentProps<typeof MediaMuteButton>) {
  return (
    <MediaMuteButton className={cn("p-2.5", className)} {...props}>
      <svg
        slot="off"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17 22h-2v-2h-2v-2h2V6h-2V4h2V2h2v20Zm-4-4h-2v-2h2v2ZM11 8v2H9v4h2v2H7V8h4Zm2 0h-2V6h2v2Z" />
      </svg>
      <svg slot="low" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M15 22h-2v-2h-2v-2h2V6h-2V4h2V2h2v20Zm-4-4H9v-2h2v2ZM9 8v2H7v4h2v2H5V8h4Zm10 6h-2v-4h2v4Zm-8-6H9V6h2v2Z"/></svg>
      <svg slot="medium" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13 22h-2v-2H9v-2h2V6H9V4h2V2h2v20Zm-4-4H7v-2h2v2Zm10 0h-4v-2h4v2ZM7 10H5v4h2v2H3V8h4v2Zm14 6h-2V8h2v8Zm-4-2h-2v-4h2v4ZM9 8H7V6h2v2Zm10 0h-4V6h4v2Z"/></svg>
      <svg slot="high" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 22H9v-2H7v-2h2V6H7V4h2V2h2v20Zm8 0h-6v-2h6v2Zm2-2h-2v-2h2v2ZM7 18H5v-2h2v2Zm10 0h-4v-2h4v2Zm6 0h-2V6h2v12ZM5 10H3v4h2v2H1V8h4v2Zm14 6h-2V8h2v8Zm-4-2h-2v-4h2v4ZM7 8H5V6h2v2Zm10 0h-4V6h4v2Zm4-2h-2V4h2v2Zm-2-2h-6V2h6v2Z"/></svg>
    </MediaMuteButton>
  );
}

function VideoPlayerContent({ className, ...props }: ComponentProps<"video">) {
  return <video className={cn("mt-0 mb-0", className)} {...props} />;
}

export {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
};
