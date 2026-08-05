import { cva, type VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";

const widgetVariants = cva("widget", {
  variants: {
    size: {
      sm: "widget-size-sm aspect-widget-sm",
      md: "widget-size-md aspect-widget-md",
      lg: "widget-size-lg aspect-widget-lg",
      xl: "widget-size-xl aspect-widget-xl",
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
