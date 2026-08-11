"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cva } from "class-variance-authority";
import {
  type ComponentProps,
  type ComponentType,
  createContext,
  useContext,
} from "react";

import { cn } from "@/lib/utils";

const radioGroupVariants = cva("grid w-full gap-3", {
  variants: {
    variant: {
      default: "[--radio-accent:var(--foreground)]",
      primary: "[--radio-accent:var(--primary-foreground)]",
      success: "[--radio-accent:var(--success-foreground)]",
      warning: "[--radio-accent:var(--warning-foreground)]",
      info: "[--radio-accent:var(--info-foreground)]",
      danger: "[--radio-accent:var(--danger-foreground)]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const RadioGroupContext = createContext<{
  indicator?: ComponentType;
}>({});

function RadioGroupCheckIndicator() {
  return (
    <svg
      className="size-3.5 text-(--radio-accent)"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z" />
    </svg>
  );
}
function RadioGroupCrossIndicator() {
  return (
    <svg
      className="size-3.5 text-(--radio-accent)"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 19H5v-2h2v2Zm12 0h-2v-2h2v2ZM9 15v2H7v-2h2Zm8 2h-2v-2h2v2Zm-6-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2H9V9h2v2Zm4 0h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Z" />
    </svg>
  );
}

function RadioGroupCircleIndicator() {
  return (
    <svg
      className="size-2 text-(--radio-accent)"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18 4h2v2h2v12h-2v2h-2v2H6v-2H4v-2H2V6h2V4h2V2h12v2Z"></path>
    </svg>
  );
}

function RadioGroupMinusIndicator() {
  return (
    <svg
      className="size-3.5 text-(--radio-accent)"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4 11h16v2H4z"></path>
    </svg>
  );
}

function RadioGroupPlusIndicator() {
  return (
    <svg
      className="size-3.5 text-(--radio-accent)"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z"></path>
    </svg>
  );
}

function RadioGroupSlashIndicator() {
  return (
    <svg
      className="size-3.5 text-(--radio-accent) -rotate-45"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4 11h16v2H4z"></path>
    </svg>
  );
}

function RadioGroup({
  className,
  variant = "default",
  indicator = RadioGroupCircleIndicator,
  ...props
}: RadioGroupPrimitive.Props &
  ComponentProps<typeof radioGroupVariants> & {
    indicator?: ComponentType;
  }) {
  return (
    <RadioGroupContext.Provider value={{ indicator }}>
      <RadioGroupPrimitive
        data-slot="radio-group"
        className={cn(radioGroupVariants({ variant }), className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  );
}

function RadioGroupItem({
  className,
  indicator,
  ...props
}: RadioPrimitive.Root.Props & {
  indicator?: ComponentType;
}) {
  const ctx = useContext(RadioGroupContext);
  const Indicator = indicator ?? ctx.indicator;

  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 pixel-rounded pixel-border pixel-size-md pixel-color-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:pixel-color-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:pixel-color-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20  dark:aria-invalid:pixel-color-[color-mix(in_oklab,var(--destructive)_50%,transparent)] dark:aria-invalid:ring-destructive/40",
        "data-checked:[--pixel-color:var(--radio-accent)]",
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-4 items-center justify-center"
      >
        {Indicator && <Indicator />}
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export {
  RadioGroup,
  RadioGroupCheckIndicator,
  RadioGroupCircleIndicator,
  RadioGroupCrossIndicator,
  RadioGroupItem,
  RadioGroupMinusIndicator,
  RadioGroupPlusIndicator,
  RadioGroupSlashIndicator,
};
