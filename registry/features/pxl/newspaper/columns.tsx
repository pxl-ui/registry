import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Columns({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="newspaper-columns"
      className={cn(
        "group/newspaper-columns w-full",
        "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4",
        className,
      )}
      {...props}
    />
  );
}

export { Columns };
