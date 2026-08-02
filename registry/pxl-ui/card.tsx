import { cva, type VariantProps } from "class-variance-authority";

import {
  Card as ShadcnCard,
  CardAction as ShadcnCardAction,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group/card bg-card text-card-foreground pixel-color-border pixel-border pixel-size-(--card-border)",
  {
    variants: {
      size: {
        default: "[--card-border:--spacing(1)] [--card-spacing:--spacing(2)]",
        sm: "[--card-border:--spacing(0.5)] [--card-spacing:--spacing(1)]",
        md: "[--card-border:--spacing(1)] [--card-spacing:--spacing(2)]",
        lg: "[--card-border:--spacing(1.5)] [--card-spacing:--spacing(3)]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type Props = {
  asChild?: boolean;
} & VariantProps<typeof cardVariants> & React.ComponentProps<"div">;

function Card({ className, size, ...props }: Props) {
  return (
    <div
      data-slot="card"
      className={cardVariants({
        size,
        className,
      })}
      {...props}
    ></div>
  );
}

function CardHeader({ className, ...props }: Props) {
  return <ShadcnCardHeader className={className} {...props} />;
}

function CardTitle({ className, ...props }: Props) {
  return <ShadcnCardTitle className={className} {...props} />;
}

function CardDescription({ className, ...props }: Props) {
  return <ShadcnCardDescription className={className} {...props} />;
}

function CardAction({ className, ...props }: Props) {
  return <ShadcnCardAction className={className} {...props} />;
}

function CardContent({ className, ...props }: Props) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-(--card-spacing) size-full", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: Props) {
  return (
    <ShadcnCardFooter
      data-slot="card-footer"
      className={className}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
