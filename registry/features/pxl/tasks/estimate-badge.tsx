import { type ComponentProps, useState } from "react";

import { Badge } from "@/components/ui/pxl/badge";
import type { TaskNotes } from "@/lib/schemas/pxl/tasknotes";
import { cn } from "@/lib/utils";

function formatEstimate(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

function EstimateBadge({
  className,
  value,
  onClick,
  ...props
}: ComponentProps<typeof Badge> & {
  showLabel?: boolean;
  value: number;
}) {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    console.log("isFlipping")
    setIsFlipping(true);
  };

  const handleAnimationEnd = () => {
    setIsFlipping(false);
    onClick?.(new MouseEvent("click") as never);
  };

  return (
    <Badge
      className={cn(className, "perspective-normal")}
      variant="muted"
      {...props}
      onClick={handleClick}
    >
      <span
        onAnimationEnd={handleAnimationEnd}
        className={isFlipping ? "animate-flip" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-3 mr-0.5"
        >
          <path d="M13 18h3v-2h2v4h-2v2H8v-2H6v-4h2v2h3v-4h-1v-4H8V8h8v2h-2v4h-1v4Zm-3-2H8v-2h2v2Zm6 0h-2v-2h2v2ZM8 8H6V4h2v4Zm10 0h-2V4h2v4Zm-2-4H8V2h8v2Z"></path>
        </svg>
      </span>
      {formatEstimate(value)}
    </Badge>
  );
}

function TaskNotesEstimateBadge({
  task,
  ...props
}: ComponentProps<typeof Badge> & {
  showLabel?: boolean;
  task: TaskNotes.Task;
}) {
  const value = (task.timeEstimate ?? 0) * 60; // Estimate is in minutes, we need to transform it to seconds.
  return <EstimateBadge {...props} value={value} />;
}
EstimateBadge.TaskNotes = TaskNotesEstimateBadge;

export { EstimateBadge };
