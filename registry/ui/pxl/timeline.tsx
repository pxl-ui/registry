import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { createContext, useCallback, useContext, useState } from "react";

import { cn } from "@/lib/utils";

const TimelineContext = createContext<
  | {
      activeStep: number;
      setActiveStep: (step: number) => void;
    }
  | undefined
>(undefined);

const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a Timeline");
  }
  return context;
};

function Timeline({
  defaultValue = 1,
  value,
  onValueChange,
  orientation = "vertical",
  className,
  render,
  children,
  ...props
}: useRender.ComponentProps<"div"> & {
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  orientation?: "horizontal" | "vertical";
}) {
  const [activeStep, setInternalStep] = useState(defaultValue);

  const setActiveStep = useCallback(
    (step: number) => {
      if (value === undefined) {
        setInternalStep(step);
      }
      onValueChange?.(step);
    },
    [value, onValueChange],
  );

  const currentStep = value ?? activeStep;

  const defaultProps = {
    className: cn(
      "group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
      className,
    ),
    "data-orientation": orientation,
    "data-slot": "timeline",
    children,
  };

  return (
    <TimelineContext.Provider
      value={{ activeStep: currentStep, setActiveStep }}
    >
      {useRender({
        defaultTagName: "div",
        render,
        props: mergeProps<"div">(defaultProps, props),
      })}
    </TimelineContext.Provider>
  );
}

function TimelineContent({
  className,
  render,
  children,
  ...props
}: useRender.ComponentProps<"div">) {
  const defaultProps = {
    className: cn("text-muted-foreground text-sm", className),
    "data-slot": "timeline-content",
    children,
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}

function TimelineDate({
  className,
  render,
  children,
  ...props
}: useRender.ComponentProps<"time">) {
  const defaultProps = {
    className: cn(
      "mb-1 block font-medium text-muted-foreground text-xs group-data-[orientation=vertical]/timeline:max-sm:h-4",
      className,
    ),
    "data-slot": "timeline-date",
    children,
  };

  return useRender({
    defaultTagName: "time",
    render,
    props: mergeProps<"time">(defaultProps, props),
  });
}

function TimelineHeader({
  className,
  render,
  children,
  ...props
}: useRender.ComponentProps<"div">) {
  const defaultProps = {
    className: cn(className),
    "data-slot": "timeline-header",
    children,
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}

function TimelineIndicator({
  className,
  children,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  const defaultProps = {
    "aria-hidden": true,
    className: cn(
      "group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2 absolute size-4 pixel-size-lg pixel-border pixel-color-foreground/20 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=horizontal]/timeline:left-0 group-data-completed/timeline-item:pixel-color-foreground",
      className,
    ),
    "data-slot": "timeline-indicator",
    children,
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}

function TimelineItem({
  step,
  className,
  render,
  children,
  ...props
}: useRender.ComponentProps<"div"> & {
  step: number;
}) {
  const { activeStep } = useTimeline();

  const defaultProps = {
    className: cn(
      "group/timeline-item relative flex flex-1 flex-col gap-0.5 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:not-last:pb-6 has-[+[data-completed]]:**:data-[slot=timeline-separator]:bg-foreground",
      className,
    ),
    "data-completed": step <= activeStep || undefined,
    "data-slot": "timeline-item",
    children,
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}

function TimelineSeparator({
  className,
  render,
  children,
  ...props
}: useRender.ComponentProps<"div">) {
  const defaultProps = {
    "aria-hidden": true,
    className: cn(
      "group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2 absolute self-start bg-foreground/10 group-last/timeline-item:hidden group-data-[orientation=horizontal]/timeline:h-1 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem)] group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem)] group-data-[orientation=vertical]/timeline:w-1 group-data-[orientation=horizontal]/timeline:translate-x-4 group-data-[orientation=vertical]/timeline:translate-y-4",
      className,
    ),
    "data-slot": "timeline-separator",
    children,
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}

function TimelineTitle({
  className,
  render,
  children,
  ...props
}: useRender.ComponentProps<"h3">) {
  const defaultProps = {
    className: cn("font-medium text-sm", className),
    "data-slot": "timeline-title",
    children,
  };

  return useRender({
    defaultTagName: "h3",
    render,
    props: mergeProps<"h3">(defaultProps, props),
  });
}

export {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
};
