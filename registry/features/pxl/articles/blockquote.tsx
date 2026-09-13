import type { ComponentProps, SVGProps } from "react";

import {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardDetails,
  ProfileCardName,
} from "@/components/ui/pxl/profile-card";
import { cn } from "@/lib/utils";

function BlockquoteAuthor(props: ComponentProps<typeof ProfileCard>) {
  return <ProfileCard {...props} />;
}

function BlockquoteAuthorAvatar(
  props: ComponentProps<typeof ProfileCardAvatar>,
) {
  return <ProfileCardAvatar {...props} />;
}

function BlockquoteAuthorDetails(
  props: ComponentProps<typeof ProfileCardDetails>,
) {
  return <ProfileCardDetails {...props} />;
}

function BlockquoteAuthorName({ className, ...props }: ComponentProps<typeof ProfileCardName>) {
  return <ProfileCardName className={cn("font-serif", className)} {...props} />;
}

function BlockquoteAuthorBody({ className, ...props }: ComponentProps<typeof ProfileCardBody>) {
  return <ProfileCardBody className={cn("font-serif", className)} {...props} />;
}

function BlockquoteIcon({
  className,
  position = "start",
  ...props
}: SVGProps<SVGSVGElement> & {
  position?: "start" | "end";
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={cn(
        "size-4 text-muted-foreground",
        position === "start" ? "self-start" : "self-end",
        className,
      )}
      {...props}
    >
      <path d="M10 2H2v1H1v8h1v1h5v4H6v1H4v1H3v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3h-1zm-1 9H8v-1H3V4h6zm13-8V2h-8v1h-1v8h1v1h5v4h-1v1h-2v1h-1v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3zm-7 7V4h6v7h-1v-1z" />
    </svg>
  );
}

function BlockquoteParagraph({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="blockquote-paragraph"
      className={cn(
        "font-serif text-2xl tracking-tight text-pretty text-muted-foreground lg:text-3xl lg:tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function Blockquote({
  children,
  className,
  showIcons,
  ...props
}: ComponentProps<"div"> & {
  showIcons?: boolean;
}) {
  return (
    <div
      data-slot="blockquote"
      className={cn("group/blog-blockquote my-5 max-w-3xl lg:my-9", className)}
      {...props}
    >
      <blockquote className="flex flex-col gap-1.5 border-l-[3px] pl-5 lg:pl-9">
        {children}
      </blockquote>
    </div>
  );
}

export {
  Blockquote,
  BlockquoteAuthor,
  BlockquoteAuthorAvatar,
  BlockquoteAuthorBody,
  BlockquoteAuthorDetails,
  BlockquoteAuthorName,
  BlockquoteIcon,
  BlockquoteParagraph,
};
