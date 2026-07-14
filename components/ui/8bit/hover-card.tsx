import type { HoverCard as HoverCardPrimitive } from "radix-ui";

import {
  HoverCard as ShadcnHoverCard,
  HoverCardContent as ShadcnHoverCardContent,
  HoverCardTrigger as ShadcnHoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <ShadcnHoverCard {...props} />;
}

function HoverCardTrigger({
  className,
  asChild = true,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <ShadcnHoverCardTrigger
      className={cn(className)}
      asChild={asChild}
      {...props}
    />
  );
}

function HoverCardContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <ShadcnHoverCardContent className={cn("relative", className)} {...props}>
      {children}

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </ShadcnHoverCardContent>
  );
}

export { HoverCard, HoverCardContent, HoverCardTrigger };
