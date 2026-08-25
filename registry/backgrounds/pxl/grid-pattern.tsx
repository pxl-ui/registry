import { cva, type VariantProps } from "class-variance-authority";
import { type SVGProps, useId } from "react";

import { cn } from "@/lib/utils";

const animatedGridPatternVariants = cva(
  "pointer-events-none absolute inset-0 h-full w-full",
  {
    variants: {
      variant: {
        default: "bg-background fill-border stroke-border text-border",
        primary: "bg-primary fill-primary-foreground/30 stroke-primary-foreground/30 text-primary-foreground/30",
        secondary: "bg-secondary fill-secondary-foreground/30 stroke-secondary-foreground/30 text-secondary-foreground/30",
        muted: "bg-muted fill-muted-foreground/30 stroke-muted-foreground/30 text-muted-foreground/30",
        info: "bg-info fill-info-foreground/30 stroke-info-foreground/30 text-info-foreground/30",
        success: "bg-success fill-success-foreground/30 stroke-success-foreground/30 text-success-foreground/30",
        warning: "bg-warning fill-warning-foreground/30 stroke-warning-foreground/30 text-warning-foreground/30",
        danger: "bg-danger fill-danger-foreground/30 stroke-danger-foreground/30 text-danger-foreground/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function GridPattern({
  variant = "default",
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: SVGProps<SVGSVGElement> &
  VariantProps<typeof animatedGridPatternVariants> & {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    squares?: Array<[x: number, y: number]>;
    strokeDasharray?: string;
    className?: string;
    [key: string]: unknown;
  }) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(animatedGridPatternVariants({ variant }), className)}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export { GridPattern };
