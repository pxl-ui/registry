import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import {
  type ComponentProps,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const TeaserContext = createContext<{ hovered: boolean }>({
  hovered: false,
});

const teaserVariants = cva(
  "group/teaser flex w-full flex-wrap items-center transition-colors duration-100 outline-none [a]:transition-colors [a]:hover:bg-muted",
  {
    variants: {
      size: {
        xs: "gap-2",
        sm: "gap-2.5",
        md: "gap-3.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

function Teaser({
  className,
  state = "unread",
  size = "md",
  ...props
}: ComponentProps<"li"> &
  VariantProps<typeof teaserVariants> & {
    state?: "read" | "unread";
  }) {
  const [hovered, setHovered] = useState(false);
  return (
    <TeaserContext.Provider value={{ hovered }}>
      <li
        className={cn(teaserVariants({ size }))}
        data-slot="teaser"
        data-state={state}
        data-size={size}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      />
    </TeaserContext.Provider>
  );
}

function TeaserContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-content"
      className={cn("min-w-0 flex-1 flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function TeaserTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="teaser-title"
      className={cn(
        "min-w-0",
        "font-serif font-bold leading-snug text-base text-pretty",
        "group-data-[state=read]/teaser:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

const teaserDescriptionVariants = cva("", {
  defaultVariants: {
    lineClamp: "scroll",
  },
  variants: {
    lineClamp: {
      3: "line-clamp-3",
      5: "line-clamp-5",
      none: "",
      scroll:
        "max-h-20 overflow-y-auto scrollbar-gutter-stable scrollbar-thin scrollbar-thumb-transparent group-hover/teaser:scrollbar-thumb-border",
    },
  },
});

function TeaserDescription({
  className,
  lineClamp = "scroll",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof teaserDescriptionVariants>) {
  return (
    <div
      data-slot="teaser-description"
      className={cn(
        "relative px-px",
        "newspaper-typeset",
        "group-data-[state=read]/teaser:text-muted-foreground/60",
        teaserDescriptionVariants({ lineClamp }),
        className,
      )}
      {...props}
    />
  );
}

function TeaserMeta({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-meta"
      className={cn("min-w-0 flex-1 flex flex-row gap-1.5", className)}
      {...props}
    />
  );
}

function TeaserAuthor({ className, ...props }: ComponentProps<"cite">) {
  return (
    <cite
      data-slot="teaser-author"
      className={cn(
        "font-serif font-normal leading-normal text-left",
        "text-muted-foreground group-data-[state=read]/teaser:text-muted-foreground/60",
        "text-2xs",
        className,
      )}
      {...props}
    />
  );
}

function TeaserDate({
  className,
  date,
  dateFormat = "dd/MM",
  hourFormat = "24-h",
  locale,
  ...props
}: ComponentProps<"time"> & {
  date?: Date | string | number;
  dateFormat?: "dd/MM" | "MM/dd" | "yyyy-MM-dd" | null;
  hourFormat?: "24-h" | "12-h" | null;
  locale?: string;
}) {
  const formatted = useMemo(() => {
    if (!date) {
      return null;
    }

    const value = new Date(date);

    if (Number.isNaN(value)) {
      return null;
    }

    if (!dateFormat && !hourFormat) {
      return "";
    }

    const options: Intl.DateTimeFormatOptions = {};

    if (dateFormat) {
      switch (dateFormat) {
        case "dd/MM":
          options.day = "2-digit";
          options.month = "2-digit";
          break;
        case "MM/dd":
          options.month = "2-digit";
          options.day = "2-digit";
          break;
        case "yyyy-MM-dd":
          options.year = "numeric";
          options.month = "2-digit";
          options.day = "2-digit";
          break;
      }
    }
    if (hourFormat) {
      options.hour = "2-digit";
      options.minute = "2-digit";
      options.hour12 = hourFormat === "12-h";
    }
    return value.toLocaleString(locale, options).replace(",", " -");
  }, [date, dateFormat, hourFormat, locale]);

  if (!formatted) {
    return null;
  }

  return (
    <time
      data-slot="teaser-date"
      className={cn(
        "italic font-serif font-normal leading-normal text-left",
        "text-muted-foreground group-data-[state=read]/teaser:text-muted-foreground/60",
        "text-2xs",
        className,
      )}
      {...props}
    >
      {formatted}
    </time>
  );
}

const teaserMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      color: {
        default: "",
        grayscale: "grayscale",
        sepia: "sepia",
      },
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          "overflow-hidden [&_img]:size-full [&_img]:object-cover size-6 group-data-[size=sm]/teaser:size-8 group-data-[size=md]/teaser:size-20 empty:hidden",
        video:
          "overflow-hidden [&_video]:size-full [&_video]:object-cover size-6 group-data-[size=sm]/teaser:size-8 group-data-[size=md]/teaser:size-20 empty:hidden",
      },
    },
    defaultVariants: {
      color: "default",
      variant: "default",
    },
  },
);

function TeaserMedia({
  className,
  color = "default",
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof teaserMediaVariants>) {
  return (
    <div
      data-slot="teaser-media"
      data-variant={variant}
      className={cn(teaserMediaVariants({ color, variant, className }))}
      {...props}
    />
  );
}

function TeaserImage({ alt, className, ...props }: ComponentProps<"img">) {
  return (
    <img
      data-slot="teaser-image"
      alt={alt}
      title={alt}
      className={cn("", className)}
      {...props}
    />
  );
}

function TeaserVideo({
  className,
  src,
  type,
  ...props
}: ComponentProps<"video"> & Pick<ComponentProps<"source">, "src" | "type">) {
  const { hovered } = useContext(TeaserContext);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (hovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [hovered]);

  return (
    <video
      ref={videoRef}
      data-slot="teaser-video"
      muted
      loop
      playsInline
      className={cn("", className)}
      {...props}
    >
      <source src={src} type={type} />
    </video>
  );
}

export {
  Teaser,
  TeaserAuthor,
  TeaserContent,
  TeaserDate,
  TeaserDescription,
  TeaserImage,
  TeaserMedia,
  TeaserMeta,
  TeaserTitle,
  TeaserVideo,
};
