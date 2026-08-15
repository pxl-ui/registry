import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const screenVariants = cva("", {
  variants: {
    variant: {
      default: "",
      lcd: "filter-lcd",
      green: "filter-green",
      greenLight: "filter-green-light",
      dark: "filter-dark",
      crt: "filter-crt",
    },
    background: {
      default: "",
      none: "",
      filter: "",
    },
  },
  defaultVariants: {
    variant: "default",
    background: "default",
  },
  compoundVariants: [
    {
      variant: "lcd",
      background: "filter",
      className: "bg-lcd",
    },
    {
      variant: "dark",
      background: "filter",
      className: "bg-lcd-dark",
    },
    {
      variant: "green",
      background: "filter",
      className: "bg-lcd-green",
    },
    {
      variant: "greenLight",
      background: "filter",
      className: "bg-lcd-green-light",
    },
  ],
});

function CRTFilter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="hidden absolute w-0 h-0">
      <defs>
        <filter
          id="crt-filter"
          x="0"
          y="0"
          width="100%"
          height="100%"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            type="matrix"
            in="SourceGraphic"
            result="rChan"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
          />
          <feOffset in="rChan" dx="-1.2" dy="0" result="rShift" />

          <feColorMatrix
            type="matrix"
            in="SourceGraphic"
            result="bChan"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
          <feOffset in="bChan" dx="1.2" dy="0" result="bShift" />

          <feColorMatrix
            type="matrix"
            in="SourceGraphic"
            result="gChan"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
          />

          <feBlend in="rShift" in2="gChan" mode="screen" result="rgBlend" />
          <feBlend in="rgBlend" in2="bShift" mode="screen" result="rgbBlend" />

          <feGaussianBlur in="rgbBlend" stdDeviation="2.5" result="glow" />
          <feBlend in="rgbBlend" in2="glow" mode="screen" result="withGlow" />

          <feComponentTransfer in="withGlow" result="bright">
            <feFuncR type="linear" slope="1.15" />
            <feFuncG type="linear" slope="1.15" />
            <feFuncB type="linear" slope="1.15" />
          </feComponentTransfer>
          <feColorMatrix
            type="saturate"
            in="bright"
            values="1.30"
            result="saturated"
          />

          <feImage
            href="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'1'%20height%3D'2'%3E%3Crect%20x%3D'0'%20y%3D'1'%20width%3D'1'%20height%3D'1'%20fill%3D'black'%20fill-opacity%3D'0.35'%2F%3E%3C%2Fsvg%3E"
            x="0"
            y="0"
            width="1"
            height="2"
            result="scanTile"
            preserveAspectRatio="none"
          />
          <feTile
            in="scanTile"
            x="0"
            y="0"
            width="160"
            height="160"
            result="scanlines"
          />
          <feBlend
            in="saturated"
            in2="scanlines"
            mode="multiply"
            result="withScan"
          />

          <feGaussianBlur in="withScan" stdDeviation="3.2" result="vigBlur" />
          <feComposite
            in="withScan"
            in2="vigBlur"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="0.08"
            k4="-0.040"
          />
        </filter>
      </defs>
    </svg>
  );
}

function GreenLightFilter() {
  return (
    <svg
      width="0"
      height="0"
      className="hidden absolute w-0 h-0"
      aria-hidden="true"
    >
      <filter id="green-light-filter" color-interpolation-filters="sRGB">
        <feFlood flood-color="hsla(84, 21%, 53%, 0.28)" result="flood" />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="tint"
        />
        <feBlend in="SourceGraphic" in2="tint" mode="multiply" />
      </filter>
    </svg>
  );
}

function ScreenProvider({
  background,
  children,
  className,
  variant,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof screenVariants>) {
  return (
    <div
      className={cn(
        className,
        screenVariants({
          background,
          variant,
        }),
      )}
      {...props}
    >
      {variant === "crt" && <CRTFilter />}
      {variant === "greenLight" && <GreenLightFilter />}
      {children}
    </div>
  );
}

function ScreenFilter({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("filtered", className)} {...props}>
      {children}
    </div>
  );
}

ScreenProvider.Filter = ScreenFilter;

export { ScreenFilter, ScreenProvider };

export default ScreenProvider;
