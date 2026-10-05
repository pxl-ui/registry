import { cn } from "cn";
import type { ComponentProps } from "react";

function Shelf({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="shelf"
      className={cn(
        "w-full",
        className,
      )}
      {...props}
    />
  );
}

function ShelfContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="shelf-content"
      className={cn(
        "relative isolate flex justify-center items-end overflow-visible",
        className,
      )}
      {...props}
    />
  );
}

function ShelfSupport({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="shelf-support"
      className={cn(
        "h-4 bg-taupe-400 pixel-rounded pixel-size-md",
        className,
      )}
      {...props}
    />
  );

}

export { Shelf, ShelfContent, ShelfSupport };
