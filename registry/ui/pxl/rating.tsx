import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentType, type SVGProps, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const ratingVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      default: "gap-2.5",
      lg: "gap-3",
    },
    border: {
      none: "",
      solid: "",
    },
    variant: {
      default: "",
      blue: "",
      yellow: "",
      pink: "",
      green: "",
    },
  },
  defaultVariants: {
    size: "default",
    border: "solid",
    variant: "default",
  },
});

const iconVariants = cva("group/icon", {
  variants: {
    size: {
      sm: "w-4 h-4",
      default: "w-5 h-5",
      lg: "w-6 h-6",
    },
    border: {
      none: "",
      solid: "",
    },
    variant: {
      default: "fill-muted-foreground/10 data-[filled=true]:fill-yellow-400",
      blue: "fill-blue-100 data-[filled=true]:fill-blue-400 dark:fill-blue-950",
      yellow:
        "fill-yellow-100 data-[filled=true]:fill-yellow-400 dark:fill-yellow-950",
      pink: "fill-pink-100 data-[filled=true]:fill-pink-400 dark:fill-pink-950",
      green:
        "fill-green-100 data-[filled=true]:fill-green-400 dark:fill-green-950",
    },
  },
  defaultVariants: {
    size: "default",
    border: "solid",
    variant: "default",
  },
  compoundVariants: [
    {
      variant: "default",
      border: "solid",
      className:
        "[&>path:nth-child(2)]:fill-muted-foreground/30 data-[filled=true]:[&>path:nth-child(2)]:fill-yellow-600",
    },
    {
      variant: "blue",
      border: "solid",
      className:
        "[&>path:nth-child(2)]:fill-blue-200 data-[filled=true]:[&>path:nth-child(2)]:fill-blue-600 dark:[&>path:nth-child(2)]:fill-blue-800",
    },
    {
      variant: "green",
      border: "solid",
      className:
        "[&>path:nth-child(2)]:fill-green-200 data-[filled=true]:[&>path:nth-child(2)]:fill-green-600 dark:[&>path:nth-child(2)]:fill-green-800",
    },
    {
      variant: "pink",
      border: "solid",
      className:
        "[&>path:nth-child(2)]:fill-pink-200 data-[filled=true]:[&>path:nth-child(2)]:fill-pink-600 dark:[&>path:nth-child(2)]:fill-pink-800",
    },
    {
      variant: "yellow",
      border: "solid",
      className:
        "[&>path:nth-child(2)]:fill-yellow-200 data-[filled=true]:[&>path:nth-child(2)]:fill-yellow-600 dark:[&>path:nth-child(2)]:fill-yellow-800",
    },
  ],
});

const valueVariants = cva("text-muted-foreground w-5", {
  variants: {
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const RatingIcon = {
  Emoji({
    className,
    filled = false,
    value = 0,
    ...props
  }: SVGProps<SVGSVGElement> & {
    filled?: boolean;
    value?: number;
  }) {
    if (value <= 1) {
      return (
        <svg
          className={cn(className, !filled && "grayscale-80")}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect x="6" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="2" width="1" height="1" fill="#FA8070" />
          <rect x="7" y="2" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="2" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="2" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="3" width="1" height="1" fill="#FA8070" />
          <rect x="5" y="3" width="1" height="1" fill="#FA8070" />
          <rect x="6" y="3" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="3" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="3" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="3" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="3" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="3" width="1" height="1" fill="#F03E1F" />
          <rect x="12" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="4" width="1" height="1" fill="#FA8070" />
          <rect x="4" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="5" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="6" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="12" y="4" width="1" height="1" fill="#F03E1F" />
          <rect x="13" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="5" width="1" height="1" fill="#F03E1F" />
          <rect x="4" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="5" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="5" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="5" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="5" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="12" y="5" width="1" height="1" fill="#F03E1F" />
          <rect x="13" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="3" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="4" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="5" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="6" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="12" y="6" width="1" height="1" fill="#F03E1F" />
          <rect x="13" y="6" width="1" height="1" fill="#B82F1D" />
          <rect x="14" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="3" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="4" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="5" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="6" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="12" y="7" width="1" height="1" fill="#F03E1F" />
          <rect x="13" y="7" width="1" height="1" fill="#B82F1D" />
          <rect x="14" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="3" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="4" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="5" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="6" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="12" y="8" width="1" height="1" fill="#F03E1F" />
          <rect x="13" y="8" width="1" height="1" fill="#B82F1D" />
          <rect x="14" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="9" width="1" height="1" fill="#F03E1F" />
          <rect x="3" y="9" width="1" height="1" fill="#F03E1F" />
          <rect x="4" y="9" width="1" height="1" fill="#F03E1F" />
          <rect x="5" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="9" width="1" height="1" fill="#F03E1F" />
          <rect x="12" y="9" width="1" height="1" fill="#F03E1F" />
          <rect x="13" y="9" width="1" height="1" fill="#B82F1D" />
          <rect x="14" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="10" width="1" height="1" fill="#F03E1F" />
          <rect x="4" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="10" width="1" height="1" fill="#F03E1F" />
          <rect x="6" y="10" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="10" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="10" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="10" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="10" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="12" y="10" width="1" height="1" fill="#B82F1D" />
          <rect x="13" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="4" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="5" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="6" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="11" width="1" height="1" fill="#F03E1F" />
          <rect x="12" y="11" width="1" height="1" fill="#B82F1D" />
          <rect x="13" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="12" width="1" height="1" fill="#F03E1F" />
          <rect x="5" y="12" width="1" height="1" fill="#F03E1F" />
          <rect x="6" y="12" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="12" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="12" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="12" width="1" height="1" fill="#F03E1F" />
          <rect x="10" y="12" width="1" height="1" fill="#F03E1F" />
          <rect x="11" y="12" width="1" height="1" fill="#B82F1D" />
          <rect x="12" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="13" width="1" height="1" fill="#F03E1F" />
          <rect x="7" y="13" width="1" height="1" fill="#F03E1F" />
          <rect x="8" y="13" width="1" height="1" fill="#F03E1F" />
          <rect x="9" y="13" width="1" height="1" fill="#B82F1D" />
          <rect x="10" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="14" width="1" height="1" fill="#0E0C0C" />
        </svg>
      );
    }
    if (value <= 2) {
      return (
        <svg
          className={cn(className, !filled && "grayscale-80")}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect x="6" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="2" width="1" height="1" fill="#FFF089" />
          <rect x="7" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="3" width="1" height="1" fill="#FFF089" />
          <rect x="5" y="3" width="1" height="1" fill="#FFF089" />
          <rect x="6" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="4" width="1" height="1" fill="#FFF089" />
          <rect x="4" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="6" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="7" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="8" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="9" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="10" width="1" height="1" fill="#E88A36" />
          <rect x="13" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="12" y="11" width="1" height="1" fill="#E88A36" />
          <rect x="13" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="12" width="1" height="1" fill="#E88A36" />
          <rect x="12" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="13" width="1" height="1" fill="#E88A36" />
          <rect x="10" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="14" width="1" height="1" fill="#0E0C0C" />
        </svg>
      );
    }
    if (value <= 3) {
      return (
        <svg
          className={cn(className, !filled && "grayscale-80")}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect x="6" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="2" width="1" height="1" fill="#FFF089" />
          <rect x="7" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="3" width="1" height="1" fill="#FFF089" />
          <rect x="5" y="3" width="1" height="1" fill="#FFF089" />
          <rect x="6" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="4" width="1" height="1" fill="#FFF089" />
          <rect x="4" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="6" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="7" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="8" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="9" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="10" width="1" height="1" fill="#E88A36" />
          <rect x="13" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="11" width="1" height="1" fill="#E88A36" />
          <rect x="13" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="12" width="1" height="1" fill="#E88A36" />
          <rect x="12" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="13" width="1" height="1" fill="#E88A36" />
          <rect x="10" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="14" width="1" height="1" fill="#0E0C0C" />
        </svg>
      );
    }
    if (value <= 4) {
      return (
        <svg
          className={cn(className, !filled && "grayscale-80")}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect x="6" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="1" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="2" width="1" height="1" fill="#FFF089" />
          <rect x="7" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="2" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="2" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="3" width="1" height="1" fill="#FFF089" />
          <rect x="5" y="3" width="1" height="1" fill="#FFF089" />
          <rect x="6" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="3" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="3" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="4" width="1" height="1" fill="#FFF089" />
          <rect x="4" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="4" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="4" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="5" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="5" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="6" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="6" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="6" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="7" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="7" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="7" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="12" y="8" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="8" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="8" width="1" height="1" fill="#0E0C0C" />
          <rect x="1" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="3" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="9" width="1" height="1" fill="#F8C53A" />
          <rect x="13" y="9" width="1" height="1" fill="#E88A36" />
          <rect x="14" y="9" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="10" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="10" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="10" width="1" height="1" fill="#E88A36" />
          <rect x="13" y="10" width="1" height="1" fill="#0E0C0C" />
          <rect x="2" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="4" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="11" width="1" height="1" fill="#F8C53A" />
          <rect x="12" y="11" width="1" height="1" fill="#E88A36" />
          <rect x="13" y="11" width="1" height="1" fill="#0E0C0C" />
          <rect x="3" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="5" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="6" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="10" y="12" width="1" height="1" fill="#F8C53A" />
          <rect x="11" y="12" width="1" height="1" fill="#E88A36" />
          <rect x="12" y="12" width="1" height="1" fill="#0E0C0C" />
          <rect x="4" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="5" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="7" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="8" y="13" width="1" height="1" fill="#F8C53A" />
          <rect x="9" y="13" width="1" height="1" fill="#E88A36" />
          <rect x="10" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="11" y="13" width="1" height="1" fill="#0E0C0C" />
          <rect x="6" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="7" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="8" y="14" width="1" height="1" fill="#0E0C0C" />
          <rect x="9" y="14" width="1" height="1" fill="#0E0C0C" />
        </svg>
      );
    }
    return (
      <svg
        className={cn(className, !filled && "grayscale-80")}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="6" y="1" width="1" height="1" fill="#0E0C0C" />
        <rect x="7" y="1" width="1" height="1" fill="#0E0C0C" />
        <rect x="8" y="1" width="1" height="1" fill="#0E0C0C" />
        <rect x="9" y="1" width="1" height="1" fill="#0E0C0C" />
        <rect x="3" y="2" width="1" height="1" fill="#0E0C0C" />
        <rect x="4" y="2" width="1" height="1" fill="#0E0C0C" />
        <rect x="5" y="2" width="1" height="1" fill="#0E0C0C" />
        <rect x="6" y="2" width="1" height="1" fill="#FFF089" />
        <rect x="7" y="2" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="2" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="2" width="1" height="1" fill="#F8C53A" />
        <rect x="10" y="2" width="1" height="1" fill="#0E0C0C" />
        <rect x="11" y="2" width="1" height="1" fill="#0E0C0C" />
        <rect x="12" y="2" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="3" width="1" height="1" fill="#0E0C0C" />
        <rect x="3" y="3" width="1" height="1" fill="#F03E1F" />
        <rect x="4" y="3" width="1" height="1" fill="#FFF089" />
        <rect x="5" y="3" width="1" height="1" fill="#F03E1F" />
        <rect x="6" y="3" width="1" height="1" fill="#F8C53A" />
        <rect x="7" y="3" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="3" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="3" width="1" height="1" fill="#F8C53A" />
        <rect x="10" y="3" width="1" height="1" fill="#F03E1F" />
        <rect x="11" y="3" width="1" height="1" fill="#F8C53A" />
        <rect x="12" y="3" width="1" height="1" fill="#F03E1F" />
        <rect x="13" y="3" width="1" height="1" fill="#0E0C0C" />
        <rect x="1" y="4" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="4" width="1" height="1" fill="#F03E1F" />
        <rect x="3" y="4" width="1" height="1" fill="#B82F1D" />
        <rect x="4" y="4" width="1" height="1" fill="#B82F1D" />
        <rect x="5" y="4" width="1" height="1" fill="#B82F1D" />
        <rect x="6" y="4" width="1" height="1" fill="#612622" />
        <rect x="7" y="4" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="4" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="4" width="1" height="1" fill="#F03E1F" />
        <rect x="10" y="4" width="1" height="1" fill="#B82F1D" />
        <rect x="11" y="4" width="1" height="1" fill="#B82F1D" />
        <rect x="12" y="4" width="1" height="1" fill="#B82F1D" />
        <rect x="13" y="4" width="1" height="1" fill="#612622" />
        <rect x="14" y="4" width="1" height="1" fill="#0E0C0C" />
        <rect x="1" y="5" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="5" width="1" height="1" fill="#F03E1F" />
        <rect x="3" y="5" width="1" height="1" fill="#B82F1D" />
        <rect x="4" y="5" width="1" height="1" fill="#B82F1D" />
        <rect x="5" y="5" width="1" height="1" fill="#B82F1D" />
        <rect x="6" y="5" width="1" height="1" fill="#612622" />
        <rect x="7" y="5" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="5" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="5" width="1" height="1" fill="#F03E1F" />
        <rect x="10" y="5" width="1" height="1" fill="#B82F1D" />
        <rect x="11" y="5" width="1" height="1" fill="#B82F1D" />
        <rect x="12" y="5" width="1" height="1" fill="#B82F1D" />
        <rect x="13" y="5" width="1" height="1" fill="#612622" />
        <rect x="14" y="5" width="1" height="1" fill="#0E0C0C" />
        <rect x="1" y="6" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="6" width="1" height="1" fill="#F8C53A" />
        <rect x="3" y="6" width="1" height="1" fill="#B82F1D" />
        <rect x="4" y="6" width="1" height="1" fill="#B82F1D" />
        <rect x="5" y="6" width="1" height="1" fill="#612622" />
        <rect x="6" y="6" width="1" height="1" fill="#F8C53A" />
        <rect x="7" y="6" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="6" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="6" width="1" height="1" fill="#F8C53A" />
        <rect x="10" y="6" width="1" height="1" fill="#B82F1D" />
        <rect x="11" y="6" width="1" height="1" fill="#B82F1D" />
        <rect x="12" y="6" width="1" height="1" fill="#612622" />
        <rect x="13" y="6" width="1" height="1" fill="#E88A36" />
        <rect x="14" y="6" width="1" height="1" fill="#0E0C0C" />
        <rect x="1" y="7" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="3" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="4" y="7" width="1" height="1" fill="#612622" />
        <rect x="5" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="6" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="7" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="10" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="11" y="7" width="1" height="1" fill="#612622" />
        <rect x="12" y="7" width="1" height="1" fill="#F8C53A" />
        <rect x="13" y="7" width="1" height="1" fill="#E88A36" />
        <rect x="14" y="7" width="1" height="1" fill="#0E0C0C" />
        <rect x="1" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="8" width="1" height="1" fill="#F8C53A" />
        <rect x="3" y="8" width="1" height="1" fill="#F8C53A" />
        <rect x="4" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="5" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="6" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="7" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="8" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="9" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="10" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="11" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="12" y="8" width="1" height="1" fill="#F8C53A" />
        <rect x="13" y="8" width="1" height="1" fill="#E88A36" />
        <rect x="14" y="8" width="1" height="1" fill="#0E0C0C" />
        <rect x="1" y="9" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="9" width="1" height="1" fill="#F8C53A" />
        <rect x="3" y="9" width="1" height="1" fill="#F8C53A" />
        <rect x="4" y="9" width="1" height="1" fill="#0E0C0C" />
        <rect x="5" y="9" width="1" height="1" fill="#FFFFFF" />
        <rect x="6" y="9" width="1" height="1" fill="#FFFFFF" />
        <rect x="7" y="9" width="1" height="1" fill="#FFFFFF" />
        <rect x="8" y="9" width="1" height="1" fill="#FFFFFF" />
        <rect x="9" y="9" width="1" height="1" fill="#FFFFFF" />
        <rect x="10" y="9" width="1" height="1" fill="#FFFFFF" />
        <rect x="11" y="9" width="1" height="1" fill="#0E0C0C" />
        <rect x="12" y="9" width="1" height="1" fill="#F8C53A" />
        <rect x="13" y="9" width="1" height="1" fill="#E88A36" />
        <rect x="14" y="9" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="3" y="10" width="1" height="1" fill="#F8C53A" />
        <rect x="4" y="10" width="1" height="1" fill="#F8C53A" />
        <rect x="5" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="6" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="7" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="8" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="9" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="10" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="11" y="10" width="1" height="1" fill="#F8C53A" />
        <rect x="12" y="10" width="1" height="1" fill="#E88A36" />
        <rect x="13" y="10" width="1" height="1" fill="#0E0C0C" />
        <rect x="2" y="11" width="1" height="1" fill="#0E0C0C" />
        <rect x="3" y="11" width="1" height="1" fill="#F8C53A" />
        <rect x="4" y="11" width="1" height="1" fill="#F8C53A" />
        <rect x="5" y="11" width="1" height="1" fill="#F8C53A" />
        <rect x="6" y="11" width="1" height="1" fill="#0E0C0C" />
        <rect x="7" y="11" width="1" height="1" fill="#0E0C0C" />
        <rect x="8" y="11" width="1" height="1" fill="#0E0C0C" />
        <rect x="9" y="11" width="1" height="1" fill="#0E0C0C" />
        <rect x="10" y="11" width="1" height="1" fill="#F8C53A" />
        <rect x="11" y="11" width="1" height="1" fill="#F8C53A" />
        <rect x="12" y="11" width="1" height="1" fill="#E88A36" />
        <rect x="13" y="11" width="1" height="1" fill="#0E0C0C" />
        <rect x="3" y="12" width="1" height="1" fill="#0E0C0C" />
        <rect x="4" y="12" width="1" height="1" fill="#F8C53A" />
        <rect x="5" y="12" width="1" height="1" fill="#F8C53A" />
        <rect x="6" y="12" width="1" height="1" fill="#F8C53A" />
        <rect x="7" y="12" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="12" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="12" width="1" height="1" fill="#F8C53A" />
        <rect x="10" y="12" width="1" height="1" fill="#F8C53A" />
        <rect x="11" y="12" width="1" height="1" fill="#E88A36" />
        <rect x="12" y="12" width="1" height="1" fill="#0E0C0C" />
        <rect x="4" y="13" width="1" height="1" fill="#0E0C0C" />
        <rect x="5" y="13" width="1" height="1" fill="#0E0C0C" />
        <rect x="6" y="13" width="1" height="1" fill="#F8C53A" />
        <rect x="7" y="13" width="1" height="1" fill="#F8C53A" />
        <rect x="8" y="13" width="1" height="1" fill="#F8C53A" />
        <rect x="9" y="13" width="1" height="1" fill="#E88A36" />
        <rect x="10" y="13" width="1" height="1" fill="#0E0C0C" />
        <rect x="11" y="13" width="1" height="1" fill="#0E0C0C" />
        <rect x="6" y="14" width="1" height="1" fill="#0E0C0C" />
        <rect x="7" y="14" width="1" height="1" fill="#0E0C0C" />
        <rect x="8" y="14" width="1" height="1" fill="#0E0C0C" />
        <rect x="9" y="14" width="1" height="1" fill="#0E0C0C" />
      </svg>
    );
  },
  Star({
    filled = false,
    value,
    ...props
  }: SVGProps<SVGSVGElement> & {
    filled?: boolean;
    value?: number;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        data-filled={filled}
        data-value={value}
        {...props}
      >
        <path d="M13 3h2v4h8v4h-2v2h-2v3h2v6h-5v-2h-2v-2h-4v2H8v2H3v-6h2v-3H3v-2H1V7h8V3h2V1h2v2Z"></path>
        <path d="M5 20h3v2H3v-6h2v4Zm16 2h-5v-2h3v-4h2v6Zm-11-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-2-2h-4v-2h4v2Zm-7-2H5v-3h2v3Zm12 0h-2v-3h2v3ZM5 13H3v-2h2v2Zm16 0h-2v-2h2v2ZM9 9H3v2H1V7h8v2Zm14 2h-2V9h-6V7h8v4ZM11 7H9V3h2v4Zm4 0h-2V3h2v4Zm-2-4h-2V1h2v2Z"></path>
      </svg>
    );
  },
  Heart({
    filled = false,
    value,
    ...props
  }: SVGProps<SVGSVGElement> & {
    filled?: boolean;
    value?: number;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        data-filled={filled}
        data-value={value}
        {...props}
      >
        <path d="M9 4h2v2h2V4h2V2h4v2h2v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2H1V6h2V4h2V2h4v2Z"></path>
        <path d="M13 22h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 16H5v-2h2v2Zm12 0h-2v-2h2v2ZM5 14H3v-2h2v2Zm16 0h-2v-2h2v2ZM3 12H1V6h2v6Zm20 0h-2V6h2v6ZM13 8h-2V6h2v2ZM5 6H3V4h2v2Zm6 0H9V4h2v2Zm4 0h-2V4h2v2Zm6 0h-2V4h2v2ZM9 4H5V2h4v2Zm10 0h-4V2h4v2Z"></path>
      </svg>
    );
  },
  Energy({
    filled = false,
    value,
    ...props
  }: SVGProps<SVGSVGElement> & {
    filled?: boolean;
    value?: number;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        data-filled={filled}
        data-value={value}
        {...props}
      >
        <path d="M14 9h8v4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v-8H2v-4h2V9h2V7h2V5h2V3h2V1h2v8Z"></path>
        <path d="M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z"></path>
      </svg>
    );
  },
  Sparkle({
    filled = false,
    value,
    ...props
  }: SVGProps<SVGSVGElement> & {
    filled?: boolean;
    value?: number;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        data-filled={filled}
        data-value={value}
        {...props}
      >
        <path d="M13 5h2v4h4v2h4v2h-4v2h-4v4h-2v4h-2v-4H9v-4H5v-2H1v-2h4V9h4V5h2V1h2v4Z"></path>
        <path d="M13 23h-2v-4h2v4Zm-2-4H9v-4h2v4Zm4 0h-2v-4h2v4Zm-6-4H5v-2h4v2Zm10-2v2h-4v-2h4ZM5 13H1v-2h4v2Zm18 0h-4v-2h4v2ZM9 11H5V9h4v2Zm10 0h-4V9h4v2Zm-8-2H9V5h2v4Zm4 0h-2V5h2v4Zm-2-4h-2V1h2v4Z"></path>
      </svg>
    );
  },
};

function Rating({
  className,
  editable = false,
  maxRating = 5,
  showValue = false,
  rating,
  size,
  icon: Icon = RatingIcon.Star,
  iconClassName,
  onRatingChange,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof ratingVariants> & {
    /**
     * Current rating value (supports decimal values for partial stars)
     */
    rating: number;
    /**
     * Maximum rating value (number of stars to show)
     */
    maxRating?: number;
    /**
     * Whether to show the numeric rating value
     */
    showValue?: boolean;
    /**
     * Icon component
     */
    icon?: ComponentType<
      SVGProps<SVGSVGElement> & { filled?: boolean; value?: number }
    >;
    /**
     * Class name for the value span
     */
    iconClassName?: string;
    /**
     * Whether the rating is editable (clickable)
     */
    editable?: boolean;
    /**
     * Callback function called when rating changes
     */
    onRatingChange?: (rating: number) => void;
  }) {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const displayRating =
    editable && hoveredRating !== null ? hoveredRating : rating;

  const handleStarClick = (starRating: number) => {
    if (editable && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const handleStarMouseEnter = (starRating: number) => {
    if (editable) {
      setHoveredRating(starRating);
    }
  };

  const handleStarMouseLeave = () => {
    if (editable) {
      setHoveredRating(null);
    }
  };

  const values = useMemo(() => {
    const result = [];

    for (let i = 1; i <= maxRating; i++) {
      const filled = displayRating >= i;
      const partiallyFilled = displayRating > i - 1 && displayRating < i;
      const fillPercentage = partiallyFilled
        ? (displayRating - (i - 1)) * 100
        : 0;

      result.push({
        filled,
        partiallyFilled,
        fillPercentage,
        value: Math.floor((i / maxRating) * 5),
      });
    }

    return result;
  }, [displayRating, maxRating]);

  return (
    <div
      data-slot="rating"
      className={cn(ratingVariants({ size }), className)}
      {...props}
    >
      <div className="flex items-center">
        {values.map(({ filled, fillPercentage, value }, i) => (
          <div
            key={i.toString()}
            className={cn("relative", editable && "cursor-pointer")}
            onClick={() => handleStarClick(i)}
            onMouseEnter={() => handleStarMouseEnter(i)}
            onMouseLeave={handleStarMouseLeave}
          >
            {/* Background icon (empty) */}
            <Icon
              data-slot="rating-icon-empty"
              className={cn(iconVariants({ size, variant }))}
              value={value}
            />

            {/* Filled icon */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                width: filled ? "100%" : `${fillPercentage}%`,
              }}
            >
              <Icon
                data-slot="rating-icon-filled"
                filled
                className={cn(iconVariants({ size, variant }))}
                value={value}
              />
            </div>
          </div>
        ))}
      </div>
      {showValue && (
        <span
          data-slot="rating-value"
          className={cn(valueVariants({ size }), iconClassName)}
        >
          {displayRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

export { Rating, RatingIcon };
