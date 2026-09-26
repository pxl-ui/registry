import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { type ComponentProps, useEffect, useRef, useState } from "react";

import { Markdown } from "@/components/ui/pxl/markdown";

function Hero({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn("flex flex-col gap-4", className)}
      {...props}
    ></article>
  );
}

function HeroHeadline({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn("font-serif text-3xl text-pretty", className)}
      {...props}
    ></h1>
  );
}

function HeroFigure({ className, ...props }: ComponentProps<"figure">) {
  return (
    <figure
      data-slot="hero-figure"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    ></figure>
  );
}

function HeroImage({ alt, className, ...props }: ComponentProps<"img">) {
  return (
    <img
      data-slot="hero-image"
      alt={alt}
      title={alt}
      className={cn("", className)}
      {...props}
    />
  );
}

function HeroVideo({
  className,
  src,
  type,
  ...props
}: ComponentProps<"video"> & Pick<ComponentProps<"source">, "src" | "type">) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-slot="hero-video"
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

function HeroCaption({ className, ...props }: ComponentProps<"figcaption">) {
  return (
    <figcaption
      data-slot="hero-caption"
      className={cn(
        "font-serif text-muted-foreground text-xs italic",
        className,
      )}
      {...props}
    ></figcaption>
  );
}

const heroContentVariants = cva("", {
  defaultVariants: {
    lineClamp: "none",
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

function HeroContent({
  children,
  className,
  lineClamp = "none",
  ...props
}: Omit<ComponentProps<"div">, "children"> &
  Pick<ComponentProps<typeof Markdown>, "children"> &
  VariantProps<typeof heroContentVariants>) {
  return (
    <div
      data-slot="hero-content"
      className={cn(className, heroContentVariants({ lineClamp }), className)}
      {...props}
    >
      <Markdown typeset="newspaper-typeset" className="drop-cap">
        {children}
      </Markdown>
    </div>
  );
}

export {
  Hero,
  HeroCaption,
  HeroContent,
  HeroFigure,
  HeroHeadline,
  HeroImage,
  HeroVideo,
};
