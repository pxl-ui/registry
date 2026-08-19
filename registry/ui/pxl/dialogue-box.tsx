import {
  type ComponentProps,
  type CSSProperties,
  memo,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { Streamdown } from "streamdown";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar";
import { Card, CardContent } from "@/components/ui/pxl/card";
import { cn } from "@/lib/utils";

const BOTTOM_THRESHOLD = 4;

const DialogueInner = memo(
  ({
    className,
    isAnimating,
    ...props
  }: { isAnimating?: boolean } & ComponentProps<typeof Streamdown>) => (
    <Streamdown
      className={cn(
        "size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
        isAnimating &&
          "[&>*:last-child]:after:content-['▊'] [&>*:last-child]:after:ml-0.5 [&>*:last-child]:after:animate-blink [&>*:last-child]:after:text-current",
        className,
      )}
      {...props}
    />
  ),
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    nextProps.isAnimating === prevProps.isAnimating,
);

function DialogueMessage({
  characterDelay = 60,
  className,
  displayCursor = false,
  text,
  onEnd,
}: {
  characterDelay?: number;
  displayCursor?: boolean;
  className?: string;
  text: string;
  onEnd?: () => void;
}) {
  const [current, setCurrent] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const versionRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const stickToBottomRef = useRef(true);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    stickToBottomRef.current = distanceFromBottom <= BOTTOM_THRESHOLD;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run on current change
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !stickToBottomRef.current) return;
    el.scrollTop = el.scrollHeight;
  }, [current]);

  useEffect(() => {
    if (!text) return;
    const version = ++versionRef.current;

    function sleep(ms: number) {
      return new Promise<void>((resolve, reject) => {
        const id = setTimeout(() => {
          if (versionRef.current !== version) reject("cancelled");
          else resolve();
        }, ms);
        return () => clearTimeout(id);
      });
    }

    function commit(text: string) {
      setCurrent((cur) => cur + text);
    }

    async function run() {
      setCurrent("");
      setIsAnimating(true);
      stickToBottomRef.current = true;
      const words = text.split(" ");

      for (const word of words) {
        for (let i = 0; i < word.length; i++) {
          commit(word[i]);
          await sleep(characterDelay);
        }
        commit(" ");
        await sleep(characterDelay);
      }

      onEnd?.();
    }

    run()
      .catch(() => {})
      .finally(() => {
        if (versionRef.current === version) setIsAnimating(false);
      });
  }, [characterDelay, onEnd, text]);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className={cn(
        "overflow-auto scrollbar-none whitespace-pre-wrap break-all",
        className,
      )}
      style={
        {
          "--tw-duration": `${characterDelay}ms`,
        } as CSSProperties
      }
    >
      <DialogueInner
        isAnimating={displayCursor && isAnimating}
        className="size-full"
      >
        {current}
      </DialogueInner>
    </div>
  );
}

function DialoguePortrait({
  alt,
  className,
  fallback,
  src,
}: {
  alt?: string;
  className?: string;
  fallback?: string;
  src?: string;
}) {
  return (
    <Avatar className={className} size="xl">
      <AvatarImage alt={alt} src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}

function DialogueBox({
  children,
  className,
}: {
  className?: string;
} & PropsWithChildren) {
  return (
    <Card className={className}>
      <CardContent className="flex justify-between gap-2 [--card-spacing:--spacing(1)]">{children}</CardContent>
    </Card>
  );
}

export { DialogueBox, DialogueMessage, DialoguePortrait };
