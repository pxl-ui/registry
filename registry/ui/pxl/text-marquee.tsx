import { cva, type VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";

const textMarqueeVariants = cva("inline-block whitespace-nowrap animate-marquee", {
  variants: {
    variant: {
      default:
        "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary-foreground",
      success: "text-success-foreground",
      danger: "text-danger-foreground",
      warning: "text-warning-foreground",
      info: "text-info-foreground",
    },
    size: {
      default: "text-lg",
      xs: "text-base",
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-4xl",
    },
    font: {
      default: "font-heading",
      heading: "font-heading",
      sans: "font-sans",
      mono: "font-mono"
    }
  },
  defaultVariants: {
    size: "default",
    font: "default",
    variant: "default",
  }
})

export function TextMarquee({ 
  children,
  className,
  ...props
}: VariantProps<typeof textMarqueeVariants> & PropsWithChildren & { className?: string; }) {
  return (
    <div className="@container w-full overflow-hidden">
      <span className={
        textMarqueeVariants({
          ...props,
          className: className
        })
      }>
        {children}
      </span>
    </div>
  );
}
