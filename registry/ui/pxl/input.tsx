import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

const inputWrapperVariants = cva(
  "[--pixel-color:var(--input)] has-[input:focus-visible]:[--pixel-color:var(--ring)] has-[input:disabled]:opacity-50 has-[input[aria-invalid=true]]:[--pixel-color:var(--destructive)]",
  {
    variants: {
      size: {
        default: "",
        xs: "",
        md: "",
      },
      border: {
        solid: "pixel-rounded pixel-border pixel-size-md",
        none: "",
      }
    },
    defaultVariants: {
      border: "solid",
      size: "default",
    },
  },
);

const inputVariants = cva(
  "w-full min-w-0 bg-transparent transition-[color] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        default: "px-2.5 py-1 h-9 text-base file:h-7 file:text-sm md:text-sm",
        xs: "px-1.5 py-0.5 h-5 text-sm file:h-7 file:text-sm md:text-xs",
        md: "px-2.5 py-1 h-9 text-base file:h-7 file:text-sm md:text-sm",
      },
      border: {
        solid: "",
        none: "",
      }
    },
    defaultVariants: {
      border: "solid",
      size: "default",
    },
  },
);

const Input = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<"input">, "size"> & VariantProps<typeof inputVariants>
>(function Input({ border = "solid", className, size = "default", type, ...props }, ref) {
  return (
    <div
      data-slot="input-wrapper"
      className={cn(
        inputWrapperVariants({
          border,
          size,
        }),
        className,
      )}
    >
      <InputPrimitive
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          inputVariants({
            border,
            size,
          }),
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export { Input, inputVariants, inputWrapperVariants };
