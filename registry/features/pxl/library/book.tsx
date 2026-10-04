"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { motion, useReducedMotion } from "motion/react";
import { type ComponentProps, createContext, useContext } from "react";

type BookView = "cover" | "spine" | "back-cover";
type BookSize = "sm" | "lg";

const BookContext = createContext<{ view: BookView; size: BookSize } | null>(
  null,
);
const bookRotation: Record<BookView, number> = {
  cover: 0,
  spine: 90,
  "back-cover": 180,
};

const bookVariants = cva("relative inline-block shrink-0 align-bottom", {
  variants: {
    size: {
      sm: "h-32 w-20",
      lg: "h-64 w-40",
    }
  },
  defaultVariants: {
    size: "sm",
  }
})

function Book({
  className,
  style,
  children,
  view = "spine",
  size = "sm",
  duration = 0.65,
  ...props
}: {
  /** Change this value from any event or external state to turn the book. */
  view?: BookView;
  /** Sets the dimensions of all composed faces. */
  size?: BookSize;
  /** Duration of each turn, in seconds. */
  duration?: number;
} & ComponentProps<"div"> & VariantProps<typeof bookVariants>) {
  const reducedMotion = useReducedMotion();

  return (
    <BookContext.Provider value={{ view, size }}>
      <div
        {...props}
        data-slot="book"
        data-view={view}
        data-size={size}
        className={cn(
          "relative inline-block shrink-0 align-bottom",
          size === "sm" ? "h-32 w-20" : "h-64 w-40",
          className,
        )}
        style={{
          perspective: "800px",
          ...style,
        }}
      >
        <motion.div
          data-slot="book-body"
          className="relative size-full"
          style={
            {
              transformStyle: "preserve-3d",
              // Match the standalone spine widths, respecting root font size.
              "--book-depth": size === "sm" ? "0.875rem" : "2rem",
              "--book-width": size === "sm" ? "5rem" : "10rem",
            } as ComponentProps<typeof motion.div>["style"]
          }
          initial={false}
          animate={{
            rotateY: bookRotation[view],
            z: view === "spine" ? 0 : 24,
          }}
          transition={{
            type: "tween",
            duration: reducedMotion ? 0 : duration,
            ease: "easeInOut",
          }}
        >
          {/* The page block closes the volume without changing the pixel covers. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background"
            style={{
              transform:
                "rotateY(90deg) translateZ(calc(var(--book-width) / 2))",
              left: "calc(50% - var(--book-depth) / 2)",
              width: "var(--book-depth)",
              backfaceVisibility: "hidden",
              backgroundImage:
                "repeating-linear-gradient(to right, transparent 0 2px, var(--border) 2px 3px)",
            }}
          />
          {children}
        </motion.div>
      </div>
    </BookContext.Provider>
  );
}

/** Optional positioning layer: standalone parts keep their original markup. */
function BookFace({
  view,
  children,
}: {
  view: BookView;
  children: ComponentProps<"div">["children"];
}) {
  const book = useContext(BookContext);
  if (!book) return children;

  const transform =
    view === "spine"
      ? "rotateY(-90deg) translateZ(calc(var(--book-width)/2))"
      : `${view === "back-cover" ? "rotateY(180deg) " : ""}translateZ(calc(var(--book-depth) / 2))`;

  return (
    <div
      data-slot="book-face"
      data-view={view}
      aria-hidden={book.view !== view}
      inert={book.view !== view}
      className="absolute inset-0"
      style={{
        transform,
        backfaceVisibility: "hidden",
        ...(view === "spine" && {
          left: "calc(50% - var(--book-depth) / 2)",
          width: "var(--book-depth)",
        }),
      }}
    >
      {children}
    </div>
  );
}

const bookCoverVariants = cva(
  "group/book-cover relative aspect-[1/1.6] pixel-rounded [&_img]:object-cover [&_img]:size-full",
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
  size,
  children,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof bookCoverVariants>) {
  const book = useContext(BookContext);
  return (
    <BookFace view="cover">
      <div
        data-slot="book-cover"
        className={cn(
          bookCoverVariants({ genre, size: book?.size ?? size ?? "sm" }),
          book && "size-full",
          className,
        )}
        {...props}
      >
        <div
          data-slot="book-joint"
          className="absolute h-full w-1 bg-black/40"
        />
        {children}
      </div>
    </BookFace>
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
        sm: "h-32 w-20 pixel-size-sm **:data-[slot=book-joint]:right-2 **:data-[slot=book-blurb]:text-3xs **:data-[slot=book-blurb]:pt-2 **:data-[slot=book-blurb]:max-h-[calc(100%-(--spacing(2)))] **:data-[slot=book-blurb]:px-1",
        lg: "h-64 w-40 pixel-size-md **:data-[slot=book-joint]:right-4 **:data-[slot=book-blurb]:text-xs **:data-[slot=book-blurb]:pt-4 **:data-[slot=book-blurb]:max-h-[calc(100%-(--spacing(4)))] **:data-[slot=book-blurb]:px-2",
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
  size,
  children,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof bookBackCoverVariants>) {
  const book = useContext(BookContext);
  return (
    <BookFace view="back-cover">
      <div
        data-slot="book-backcover"
        className={cn(
          bookBackCoverVariants({ genre, size: book?.size ?? size ?? "sm" }),
          book && "size-full",
          className,
        )}
        {...props}
      >
        <div
          data-slot="book-joint"
          className="absolute h-full w-1 bg-black/40"
        />
        {children}
      </div>
    </BookFace>
  );
}

function BookBackCoverBlurb({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="book-blurb"
      className={cn("font-serif leading-tight size-full overflow-auto scrollbar-thin", className)}
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
      sm: "h-32 w-3.5 pixel-size-sm **:data-[slot=book-meta]:px-1 **:data-[slot=book-meta]:gap-1 **:data-[slot=book-title]:text-2xs **:data-[slot=book-author]:text-3xs",
      lg: "h-64 w-4 pixel-size-md **:data-[slot=book-meta]:px-2.5 **:data-[slot=book-meta]:gap-2 **:data-[slot=book-title]:text-base **:data-[slot=book-author]:text-xs",
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
  size,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof bookSpineVariants>) {
  const book = useContext(BookContext);
  return (
    <BookFace view="spine">
      <div
        data-slot="book-spine"
        className={cn(
          bookSpineVariants({ genre, size: book?.size ?? size ?? "sm" }),
          book && "size-full",
          className,
        )}
        {...props}
      />
    </BookFace>
  );
}

function BookSpineMeta({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="book-meta"
      className={cn(
        "size-full flex justify-between items-center [writing-mode:vertical-rl] rotate-180",
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
  Book,
  BookBackCover,
  BookBackCoverBlurb,
  BookCover,
  BookCoverAuthor,
  BookCoverMeta,
  BookCoverTitle,
  type BookSize,
  BookSpine,
  BookSpineAuthor,
  BookSpineMeta,
  BookSpineTitle,
  type BookView,
};
