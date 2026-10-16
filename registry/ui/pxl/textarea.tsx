import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const textareaWrapperVariants = cva(
  "has-[textarea:disabled]:opacity-50",
  {
    variants: {
      border: {
        solid:
          "pr-1.5 pb-1.5 pixel-border pixel-color-input pixel-size-[3px] has-[textarea:focus-visible]:pixel-color-ring has-[textarea[aria-invalid=true]]:pixel-color-destructive",
        none: "",
      },
      defaultVariants: {
        border: "solid",
      },
    },
  },
);

function Textarea({
  border = "solid",
  className,
  ...props
}: ComponentProps<"textarea"> & VariantProps<typeof textareaWrapperVariants>) {
  return (
    <div
      data-slot="textarea-wrapper"
      className={cn(textareaWrapperVariants({ border }), className)}
    >
      <textarea
        data-slot="textarea"
        className="flex field-sizing-content min-h-16 w-full bg-transparent px-2.5 py-2 text-base transition-[color] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
        {...props}
      />
    </div>
  );
}

export { Textarea };
