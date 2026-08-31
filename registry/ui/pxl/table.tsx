import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const tableVariants = cva("relative w-full overflow-x-auto", {
  variants: {
    border: {
      solid: "pixel-border pixel-color-border p-[calc(var(--pixel-size)*2)]",
      none: "",
    },
  },
  defaultVariants: {
    border: "solid",
  },
});

function Table({
  border = "solid",
  className,
  ...props
}: Omit<ComponentProps<"table">, "border"> &
  VariantProps<typeof tableVariants>) {
  return (
    <div data-slot="table-container" className={tableVariants({ border })}>
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-xs", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:pixel-color-[transparent]", className)}
      {...props}
    />
  );
}


const tableFooterVariants = cva(
  [
    "font-medium",
    "bg-muted/50",
    "[&>tr]:last:pixel-color-[transparent]"
  ],
  {
    variants: {
      border: {
        solid: [
          "pixel-color-border",
          "pixel-size-md",
          "[--dash-size:12px]",
          "[--dash-gap:0px]",
          "bg-[repeating-linear-gradient(to_right,var(--pixel-color)_0,var(--pixel-color)_var(--dash-size),transparent_var(--dash-size),transparent_calc(var(--dash-size)+var(--dash-gap)))]",
          "bg-size-[auto_var(--pixel-size)]",
          "bg-top",
          "bg-no-repeat",
        ],
        dashed: [
          "pixel-color-border",
          "pixel-size-md",
          "[--dash-size:12px]",
          "[--dash-gap:4px]",
          "bg-[repeating-linear-gradient(to_right,var(--pixel-color)_0,var(--pixel-color)_var(--dash-size),transparent_var(--dash-size),transparent_calc(var(--dash-size)+var(--dash-gap)))]",
          "bg-size-[auto_var(--pixel-size)]",
          "bg-top",
          "bg-no-repeat",
        ],
      },
    },
    defaultVariants: {
      border: "dashed",
    },
  },
);

function TableFooter({ className, border = "dashed", ...props }: ComponentProps<"tfoot"> & VariantProps<typeof tableFooterVariants>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        tableFooterVariants({ border }),
        className,
      )}
      {...props}
    />
  );
}

const tableRowVariants = cva(
  [
    "transition-colors",
    "hover:bg-muted/50",
    "has-aria-expanded:bg-muted/50",
    "data-[state=selected]:bg-muted",
  ],
  {
    variants: {
      border: {
        solid: [
          "pixel-color-border",
          "pixel-size-md",
          "[--dash-size:12px]",
          "[--dash-gap:0px]",
          "bg-[repeating-linear-gradient(to_right,var(--pixel-color)_0,var(--pixel-color)_var(--dash-size),transparent_var(--dash-size),transparent_calc(var(--dash-size)+var(--dash-gap)))]",
          "bg-size-[auto_var(--pixel-size)]",
          "bg-bottom",
          "bg-no-repeat",
        ],
        dashed: [
          "pixel-color-border",
          "pixel-size-md",
          "[--dash-size:12px]",
          "[--dash-gap:4px]",
          "bg-[repeating-linear-gradient(to_right,var(--pixel-color)_0,var(--pixel-color)_var(--dash-size),transparent_var(--dash-size),transparent_calc(var(--dash-size)+var(--dash-gap)))]",
          "bg-size-[auto_var(--pixel-size)]",
          "bg-bottom",
          "bg-no-repeat",
        ],
        none: ""
      },
    },
    defaultVariants: {
      border: "dashed",
    },
  },
);

function TableRow({ border = "dashed", className, ...props }: ComponentProps<"tr"> & VariantProps<typeof tableRowVariants>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        tableRowVariants({ border }),
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground has-[[role=checkbox]]:pr-0",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap has-[[role=checkbox]]:pr-0",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
