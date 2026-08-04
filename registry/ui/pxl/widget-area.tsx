import { cva, type VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";

const widgetVariants = cva("size-full", {
  variants: {
    size: {
      sm: "max-w-41 max-h-41 aspect-square",
      md: "max-h-41 max-w-86 aspect-86/41",
      lg: "max-h-86 max-w-86 aspect-square",
      xl: "max-h-86 max-w-176 aspect-43/22",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type Props = {
  className?: string;
} & VariantProps<typeof widgetVariants> &
  PropsWithChildren;

export function WidgetArea({ children, className, size }: Props) {
  return <div className={widgetVariants({ className, size })}>{children}</div>;
}
