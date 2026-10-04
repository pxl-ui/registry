import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps } from "react";

const bookCoverVariants = cva(
  "group/book-cover relative aspect-[1/1.6] pixel-rounded",
  {
    variants: {
      genre: {
        unknown: "bg-muted **:data-[slot=book-meta]:border-l-muted-foreground",
      },
      size: {
        sm: "h-32 w-20 pixel-size-sm **:data-[slot=book-joint]:left-2 **:data-[slot=book-meta]:h-14 **:data-[slot=book-title]:text-2xs **:data-[slot=book-author]:text-3xs",
        lg: "h-64 w-40 pixel-size-md **:data-[slot=book-joint]:left-4 **:data-[slot=book-meta]:h-28 **:data-[slot=book-title]:text-base **:data-[slot=book-author]:text-xs",
      },
    },
    defaultVariants: {
      genre: "unknown",
      size: "sm",
    },
  },
);

function BookCover({
  className,
  genre = "unknown",
  size = "sm",
  children,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof bookCoverVariants>) {
  return (
    <div
      data-slot="book-cover"
      className={cn(bookCoverVariants({ genre, size }), className)}
      {...props}
    >
      <div data-slot="book-joint" className="absolute h-full w-1 bg-black/40" />
      {children}
    </div>
  );
}

function BookCoverMeta({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="book-meta"
      className={cn(
        "absolute top-[40%] w-full bg-white/80 backdrop-blur-md px-1 py-1",
        className,
      )}
      {...props}
    />
  );
}

function BookCoverTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="book-title"
      className={cn("font-heading line-clamp-2", className)}
      {...props}
    />
  );
}

function BookCoverAuthor({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="book-author"
      className={cn("font-serif text-muted-foreground italic", className)}
      {...props}
    />
  );
}

const bookBackCoverVariants = cva(
  "group/book-backcover relative aspect-[1/1.6] pixel-rounded",
  {
    variants: {
      genre: {
        unknown: "bg-muted **:data-[slot=book-meta]:border-l-muted-foreground",
      },
      size: {
        sm: "h-32 w-20 pixel-size-sm **:data-[slot=book-joint]:right-2 **:data-[slot=book-blurb]:text-3xs **:data-[slot=book-blurb]:my-2 **:data-[slot=book-blurb]:px-1",
        lg: "h-64 w-40 pixel-size-md **:data-[slot=book-joint]:right-4 **:data-[slot=book-blurb]:text-sm **:data-[slot=book-blurb]:my-2 **:data-[slot=book-blurb]:px-1",
      },
    },
    defaultVariants: {
      genre: "unknown",
      size: "sm",
    },
  },
);

function BookBackCover({
  className,
  genre = "unknown",
  size = "sm",
  children,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof bookBackCoverVariants>) {
  return (
    <div
      data-slot="book-backcover"
      className={cn(bookBackCoverVariants({ genre, size }), className)}
      {...props}
    >
      <div data-slot="book-joint" className="absolute h-full w-1 bg-black/40" />
      {children}
    </div>
  );
}

function BookBackCoverBlurb({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="book-blurb"
      className={cn(
        "font-serif leading-tight w-full line-clamp-6",
        className,
      )}
      {...props}
    />
  );
}

const bookSpineVariants = cva("group/book-cover relative pixel-rounded", {
  variants: {
    genre: {
      unknown: "bg-muted",
    },
    size: {
      sm: "h-32 w-3.5 pixel-size-sm **:data-[slot=book-meta]:gap-1 **:data-[slot=book-title]:text-2xs **:data-[slot=book-author]:text-3xs",
      lg: "h-64 w-4 pixel-size-md **:data-[slot=book-title]:text-base **:data-[slot=book-author]:text-xs",
    },
  },
  defaultVariants: {
    genre: "unknown",
    size: "sm",
  },
});

function BookSpine({
  className,
  genre = "unknown",
  size = "sm",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof bookSpineVariants>) {
  return (
    <div
      data-slot="book-spine"
      className={cn(bookSpineVariants({ genre, size }), className)}
      {...props}
    />
  );
}

function BookSpineMeta({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="book-meta"
      className={cn(
        "size-full flex [writing-mode:vertical-rl] rotate-180 px-1",
        className,
      )}
      {...props}
    />
  );
}

function BookSpineTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="book-title"
      className={cn("font-heading line-clamp-1", className)}
      {...props}
    />
  );
}

function BookSpineAuthor({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="book-author"
      className={cn(
        "font-serif line-clamp-1 text-muted-foreground italic",
        className,
      )}
      {...props}
    />
  );
}

export {
  BookBackCover,
  BookBackCoverBlurb,
  BookCover,
  BookCoverAuthor,
  BookCoverMeta,
  BookCoverTitle,
  BookSpine,
  BookSpineAuthor,
  BookSpineMeta,
  BookSpineTitle,
};
