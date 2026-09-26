import { cn } from "cn";
import type { ComponentProps } from "react";

function List({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="newspaper-list"
      className={cn(
        "group/newspaper-list w-full",
        "flex flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
        className,
      )}
      {...props}
    />
  );
}

export { List };
