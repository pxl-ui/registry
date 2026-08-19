import type { ComponentProps, PropsWithChildren } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar";
import { TextStroke } from "@/components/ui/pxl/text-stroke";
import { cn } from "@/lib/utils";

function ScoreAvatar({
  alt,
  fallback,
  index,
  src,
}: {
  alt?: string;
  fallback?: string;
  index?: number;
  src?: string;
}) {
  return (
    <div className="shrink-0">
      <Avatar size="xs" className={cn(index === 1 && "[--size:--spacing(4)]")}>
        <AvatarImage alt={alt} src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
}

function ScoreTitle({
  children,
  index,
}: { index: number } & PropsWithChildren) {
  return (
    <TextStroke
      className="whitespace-pre"
      size="xs"
      variant={index <= 3 ? "synthwave" : "chrome"}
    >
      {children}
    </TextStroke>
  );
}

function ScoreDescription({ children }: PropsWithChildren) {
  return (
    <span className="text-muted-foreground font-mono italic font-extrabold text-xs leading-4.5">
      {children}
    </span>
  );
}

function ScoreLine({
  avatar,
  avatarAlt,
  avatarFallback,
  description,
  index,
  title,
}: {
  index: number;
  avatar?: string;
  avatarAlt?: string;
  avatarFallback?: string;
  description?: string;
  title: string;
}) {
  return (
    <div
      data-index={index}
      className={cn(
        "w-full flex items-center justify-between",
        index === 1 && "animate-pulse duration-50",
        index === 2 && "grayscale-50",
        index === 3 && "grayscale-75",
        index > 3 && "grayscale",
      )}
    >
      <ScoreAvatar
        index={index}
        src={avatar}
        alt={avatarAlt}
        fallback={avatarFallback}
      />
      <ScoreTitle index={index}>{title}</ScoreTitle>
      <ScoreDescription>{description}</ScoreDescription>
    </div>
  );
}

function Scores({
  className,
  items,
}: {
  className?: string;
  items: Omit<ComponentProps<typeof ScoreLine>, "index">[];
}) {
  return (
    <div className={cn("grid justify-items-start gap-1", className)}>
      {items.map((props, key) => (
        <ScoreLine key={key.toString()} index={key + 1} {...props} />
      ))}
    </div>
  );
}

export { ScoreAvatar, ScoreDescription, ScoreLine, Scores, ScoreTitle };
