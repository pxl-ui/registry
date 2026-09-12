import type { CollapsibleRootChangeEventDetails } from "@base-ui/react/collapsible";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, SVGProps } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/pxl/collapsible";
import { cn } from "@/lib/utils";

const calloutVariants = cva(
  "group/callout relative grid w-full gap-0.5 rounded-none text-card-foreground px-2.5 py-2 text-left text-xs has-data-[slot=callout-action]:relative has-data-[slot=callout-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0 *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      border: {
        solid:
          "pixel-border pixel-size-lg px-[calc(--spacing(2.5)+var(--pixel-size))] py-[calc(--spacing(2)+var(--pixel-size))]",
        rounded:
          "pixel-rounded pixel-size-lg px-[calc(--spacing(2.5)+var(--pixel-size))] py-[calc(--spacing(2)+var(--pixel-size))]",
        none: "",
      },
      variant: {
        abstract:
          "bg-info pixel-color-info-foreground *:data-[slot=callout-title]:text-info-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-info-foreground",
        attention:
          "bg-warning pixel-color-warning-foreground *:data-[slot=callout-title]:text-warning-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-warning-foreground",
        bug: "bg-danger pixel-color-danger-foreground *:data-[slot=callout-title]:text-danger-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-danger-foreground",
        caution:
          "bg-warning pixel-color-warning-foreground *:data-[slot=callout-title]:text-warning-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-warning-foreground",
        check:
          "bg-success pixel-color-success-foreground *:data-[slot=callout-title]:text-success-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-success-foreground",
        cite: "bg-card pixel-color-border *:data-[slot=callout-title]:text-card-foreground *:data-[slot=callout-description]:text-muted-foreground *:[svg]:text-card-foreground",
        danger:
          "bg-danger pixel-color-danger-foreground *:data-[slot=callout-title]:text-danger-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-danger-foreground",
        default:
          "bg-card pixel-color-border *:data-[slot=callout-title]:text-card-foreground *:data-[slot=callout-description]:text-muted-foreground *:[svg]:text-card-foreground",
        done: "bg-success pixel-color-success-foreground *:data-[slot=callout-title]:text-success-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-success-foreground",
        error:
          "bg-danger pixel-color-danger-foreground *:data-[slot=callout-title]:text-danger-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-danger-foreground",
        example:
          "bg-violet-100 dark:bg-violet-800 pixel-color-violet-600 dark:pixel-color-violet-400 *:data-[slot=callout-title]:text-violet-600 dark:*:data-[slot=callout-title]:text-violet-400 *:data-[slot=callout-description]:text-foreground *:[svg]:text-violet-600 dark:*:[svg]:text-violet-400",
        fail: "bg-danger pixel-color-danger-foreground *:data-[slot=callout-title]:text-danger-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-danger-foreground",
        failure:
          "bg-danger pixel-color-danger-foreground *:data-[slot=callout-title]:text-danger-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-danger-foreground",
        faq: "bg-warning pixel-color-warning-foreground *:data-[slot=callout-title]:text-warning-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-warning-foreground",
        help: "bg-warning pixel-color-warning-foreground *:data-[slot=callout-title]:text-warning-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-warning-foreground",
        hint: "bg-info pixel-color-info-foreground *:data-[slot=callout-title]:text-info-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-info-foreground",
        important:
          "bg-info pixel-color-info-foreground *:data-[slot=callout-title]:text-info-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-info-foreground",
        info: "bg-primary pixel-color-primary-foreground *:data-[slot=callout-title]:text-primary-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-primary-foreground",
        missing:
          "bg-danger pixel-color-danger-foreground *:data-[slot=callout-title]:text-danger-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-danger-foreground",
        note: "bg-primary pixel-color-primary-foreground *:data-[slot=callout-title]:text-primary-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-primary-foreground",
        question:
          "bg-warning pixel-color-warning-foreground *:data-[slot=callout-title]:text-warning-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-warning-foreground",
        quote:
          "bg-muted pixel-color-muted-foreground *:data-[slot=callout-title]:text-muted-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-muted-foreground",
        success:
          "bg-success pixel-color-success-foreground *:data-[slot=callout-title]:text-success-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-success-foreground",
        summary:
          "bg-info pixel-color-info-foreground *:data-[slot=callout-title]:text-info-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-info-foreground",
        tip: "bg-info pixel-color-info-foreground *:data-[slot=callout-title]:text-info-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-info-foreground",
        tldr: "bg-info pixel-color-info-foreground *:data-[slot=callout-title]:text-info-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-info-foreground",
        todo: "bg-primary pixel-color-primary-foreground *:data-[slot=callout-title]:text-primary-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-primary-foreground",
        warning:
          "bg-warning pixel-color-warning-foreground *:data-[slot=callout-title]:text-warning-foreground *:data-[slot=callout-description]:text-foreground *:[svg]:text-warning-foreground",
      },
    },
    defaultVariants: {
      border: "solid",
      variant: "default",
    },
    compoundVariants: [
      {
        border: "rounded",
        variant: "default",
        className: "bg-border/30 dark:bg-card",
      },
    ],
  },
);

type CalloutVariant = NonNullable<
  VariantProps<typeof calloutVariants>["variant"]
>;

const CalloutIcon: Record<
  CalloutVariant,
  ((props: SVGProps<SVGSVGElement>) => React.JSX.Element) | undefined
> = {
  abstract(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6v-2h12v2ZM6 20H4V6h2v14Zm14 0h-2V6h2v14Zm-8-4H8v-2h4v2Zm4-4H8v-2h8v2Zm0-8h2v2h-2v2H8V6H6V4h2V2h8v2Zm-6 2h4V4h-4v2Z"></path>
      </svg>
    );
  },
  attention(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M14 22h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2Zm-5-1h-2v-2h2v2Zm-7-1H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4Zm-9-7v6h-2V7h2Zm-7 3H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z" />
      </svg>
    );
  },
  bug(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M2 5h2v4H2zm20 0h-2v4h2zM4 9h2v2H4zm16 0h-2v2h2zM2 13h4v2H2zm20 0h-4v2h4zM4 17h2v2H4zm16 0h-2v2h2zM2 19h2v2H2zm20 0h-2v2h2zM6 11h12v2H6z" />
        <path d="M6 7h2v12H6zm10 0h2v12h-2zM8 19h8v2H8zM8 5h8v2H8z" />
        <path d="M11 15h2v6h-2zM8 1h2v6H8zm6 0h2v6h-2z" />
      </svg>
    );
  },
  caution(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M14 22h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2Zm-5-1h-2v-2h2v2Zm-7-1H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4Zm-9-7v6h-2V7h2Zm-7 3H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z" />
      </svg>
    );
  },
  check(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z"></path>
      </svg>
    );
  },
  cite(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M10 2H2v1H1v8h1v1h5v4H6v1H4v1H3v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3h-1zm-1 9H8v-1H3V4h6zm13-8V2h-8v1h-1v8h1v1h5v4h-1v1h-2v1h-1v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3zm-7 7V4h6v7h-1v-1z" />
      </svg>
    );
  },
  danger(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z" />
      </svg>
    );
  },
  default: undefined,
  done(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z"></path>
      </svg>
    );
  },
  error(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z" />
      </svg>
    );
  },
  example(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M10 5h12v2H10zm0 4h8v2h-8zm0 4h12v2H10zm0 4h8v2h-8zm-4-6H4V9h2v2ZM4 9H2V7h2v2Zm4 0H6V7h2v2ZM6 7H4V5h2v2Zm-2 6h2v2H4zm0 4h2v2H4zm-2 0v-2h2v2zm4 0v-2h2v2z" />
      </svg>
    );
  },
  fail(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M7 19H5v-2h2v2Zm12 0h-2v-2h2v2ZM9 15v2H7v-2h2Zm8 2h-2v-2h2v2Zm-6-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2H9V9h2v2Zm4 0h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Z" />
      </svg>
    );
  },
  failure(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M7 19H5v-2h2v2Zm12 0h-2v-2h2v2ZM9 15v2H7v-2h2Zm8 2h-2v-2h2v2Zm-6-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2H9V9h2v2Zm4 0h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Z" />
      </svg>
    );
  },
  faq(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM13 18H11V16H13V18ZM22 18H20V6H22V18ZM15 13H13V15H11V11H15V13ZM17 11H15V8H17V11ZM9 10H7V8H9V10ZM15 8H9V6H15V8ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path>
      </svg>
    );
  },
  help(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM13 18H11V16H13V18ZM22 18H20V6H22V18ZM15 13H13V15H11V11H15V13ZM17 11H15V8H17V11ZM9 10H7V8H9V10ZM15 8H9V6H15V8ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path>
      </svg>
    );
  },
  hint(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M16 22H8v-2h8v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2ZM6 18H4v-6h2v6Zm14 0h-2v-8h2v8Zm-10-4H8v-2h2v2Zm-2-2H6V8h2v4Zm4-8h2v2h-2v6h-2V2h2v2Zm6 6h-2V8h2v2Zm-2-2h-2V6h2v2Z"></path>
      </svg>
    );
  },
  important(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M16 22H8v-2h8v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2ZM6 18H4v-6h2v6Zm14 0h-2v-8h2v8Zm-10-4H8v-2h2v2Zm-2-2H6V8h2v4Zm4-8h2v2h-2v6h-2V2h2v2Zm6 6h-2V8h2v2Zm-2-2h-2V6h2v2Z"></path>
      </svg>
    );
  },
  info(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z" />
      </svg>
    );
  },
  missing(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M7 19H5v-2h2v2Zm12 0h-2v-2h2v2ZM9 15v2H7v-2h2Zm8 2h-2v-2h2v2Zm-6-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2H9V9h2v2Zm4 0h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Z" />
      </svg>
    );
  },
  note(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M4 20h4v2H2v-6h2v4Zm6 0H8v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H4v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2H6v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2H8v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2h-2V8h2v2Zm4 0h-2V8h2v2Zm4 0h-2V8h2v2Zm-6-2h-2V6h2v2Zm8 0h-2V6h2v2Zm-6-2h-2V4h2v2Zm4 0h-2V4h2v2Zm-2-2h-2V2h2v2Z"></path>
      </svg>
    );
  },
  question(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM13 18H11V16H13V18ZM22 18H20V6H22V18ZM15 13H13V15H11V11H15V13ZM17 11H15V8H17V11ZM9 10H7V8H9V10ZM15 8H9V6H15V8ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path>
      </svg>
    );
  },
  quote(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M10 2H2v1H1v8h1v1h5v4H6v1H4v1H3v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3h-1zm-1 9H8v-1H3V4h6zm13-8V2h-8v1h-1v8h1v1h5v4h-1v1h-2v1h-1v3h1v1h2v-1h2v-1h1v-1h1v-2h1V3zm-7 7V4h6v7h-1v-1z" />
      </svg>
    );
  },
  success(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z"></path>
      </svg>
    );
  },
  summary(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6v-2h12v2ZM6 20H4V6h2v14Zm14 0h-2V6h2v14Zm-8-4H8v-2h4v2Zm4-4H8v-2h8v2Zm0-8h2v2h-2v2H8V6H6V4h2V2h8v2Zm-6 2h4V4h-4v2Z"></path>
      </svg>
    );
  },
  tip(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M16 22H8v-2h8v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2ZM6 18H4v-6h2v6Zm14 0h-2v-8h2v8Zm-10-4H8v-2h2v2Zm-2-2H6V8h2v4Zm4-8h2v2h-2v6h-2V2h2v2Zm6 6h-2V8h2v2Zm-2-2h-2V6h2v2Z"></path>
      </svg>
    );
  },
  tldr(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6v-2h12v2ZM6 20H4V6h2v14Zm14 0h-2V6h2v14Zm-8-4H8v-2h4v2Zm4-4H8v-2h8v2Zm0-8h2v2h-2v2H8V6H6V4h2V2h8v2Zm-6 2h4V4h-4v2Z"></path>
      </svg>
    );
  },
  todo(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-11-2H9v-2h2v2Zm-2-2H7v-2h2v2Zm4 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"></path>
      </svg>
    );
  },
  warning(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M14 22h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2Zm-5-1h-2v-2h2v2Zm-7-1H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4Zm-9-7v6h-2V7h2Zm-7 3H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z" />
      </svg>
    );
  },
};

function CalloutTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="callout-title"
      className={cn(
        "font-medium group-has-[>svg]/callout:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CalloutDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="callout-description"
      className={cn(
        "text-xs/relaxed text-balance md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-2",
        className,
      )}
      {...props}
    />
  );
}

function Callout({
  border = "rounded",
  children,
  className,
  collapsible = false,
  defaultOpen,
  Icon: IconOverride,
  onOpenChange,
  open,
  title,
  variant = "default",
  ...props
}: ComponentProps<"div"> &
  VariantProps<typeof calloutVariants> & {
    collapsible?: boolean;
    defaultOpen?: boolean;
    Icon?: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
    onOpenChange?: (
      open: boolean,
      eventDetails: CollapsibleRootChangeEventDetails,
    ) => void;
    open?: boolean;
    title?: string;
  }) {
  const Icon = IconOverride ?? (variant ? CalloutIcon[variant] : undefined);
  const calloutTitle =
    title ??
    (variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : undefined);

  if (collapsible) {
    return (
      <Collapsible
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        open={open}
        render={
          <div
            data-slot="callout"
            role="alert"
            className={cn(calloutVariants({ border, variant }), className)}
            {...props}
          />
        }
      >
        {Icon && <CollapsibleTrigger 
         nativeButton={false}
         render={<Icon />} />}
        <CollapsibleTrigger
          nativeButton={false}
          render={
            <CalloutTitle className="flex gap-0.5" data-slot="callout-title">
              {calloutTitle}
              <svg
                className="size-4 transition-transform group-data-open/callout:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 13v-2h-2v2h2Zm-2-2V9h-2v2h2Zm0 4v-2h-2v2h2Zm-2-6V7h-2v2h2Zm0 8v-2h-2v2h2ZM10 7V5H8v2h2Zm0 12v-2H8v2h2Z" />
              </svg>
            </CalloutTitle>
          }
        />
        <CollapsibleContent transition="easeOut">
          {children && <CalloutDescription>{children}</CalloutDescription>}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <div
      data-slot="callout"
      role="alert"
      className={cn(calloutVariants({ border, variant }), className)}
      {...props}
    >
      {Icon && <Icon />}
      <CalloutTitle>{calloutTitle}</CalloutTitle>
      {children && <CalloutDescription>{children}</CalloutDescription>}
    </div>
  );
}

export { Callout, CalloutIcon, type CalloutVariant, calloutVariants };
