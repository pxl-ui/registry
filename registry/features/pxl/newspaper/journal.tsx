import { cn } from "cn";
import type { ComponentProps } from "react";

function Journal({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="journal" className={cn("", className)} {...props} />;
}

function JournalContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="journal-content"
      className={cn("flex flex-col md:flex-row gap-3 my-4", className)}
      {...props}
    />
  );
}

export { Journal, JournalContent };
