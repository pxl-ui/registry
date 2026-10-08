import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { SVGProps } from "react";

import Flags from "@/components/icons/pxl/terrabandiere";

type ISO_3166_Code = keyof typeof Flags.md;

const flagVariants = cva("", {
  variants: {
    size: {
      default: "w-8",
      sm: "w-4",
      md: "w-8",
    },
  },
});

function CountryFlag({
  className,
  code,
  size = "default",
  ...props
}: SVGProps<SVGSVGElement> &
  VariantProps<typeof flagVariants> & {
    /** [ISO 3166-1](https://www.wikiwand.com/es/ISO_3166-1) Code */
    code: ISO_3166_Code;
  }) {
  const Component =
    Flags[size === "default" || size === null ? "md" : size][code];

  if (!Component) {
    return null;
  }

  return (
    <Component
      shapeRendering="crisp-edges"
      className={cn(flagVariants({ size }), className)}
      {...props}
    />
  );
}

export { CountryFlag, type ISO_3166_Code };
