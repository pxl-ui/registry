import { cn } from "cn";
import { type ComponentProps, useMemo } from "react";

import { Separator } from "@/components/ui/pxl/separator";

function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      data-slot="journal-header"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function HeaderSeparator({
  className,
  ...props
}: ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="header-separator"
      border="solid"
      className={className}
      {...props}
    />
  );
}

function HeaderTopMeta({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="header-top-meta"
      className="flex justify-between mb-2"
      {...props}
    />
  );
}

function HeaderIssueNumber({
  children,
  className,
  issueNumber,
  locale,
  prefix,
  ...props
}: ComponentProps<"time"> & {
  issueNumber?: number;
  locale?: string;
  prefix?: string;
}) {
  const formatted = useMemo(() => {
    if (!issueNumber) {
      return null;
    }

    const formatter = new Intl.NumberFormat(locale);

    return prefix
      ? `${prefix}${formatter.format(issueNumber)}`
      : formatter.format(issueNumber);
  }, [issueNumber, locale, prefix]);

  return (
    <span
      data-slot="header-issue-number"
      className={cn(
        "shrink-0 flex-1 truncate font-serif text-start text-muted-foreground text-xs md:text-sm",
        className,
      )}
      {...props}
    >
      {formatted ?? children}
    </span>
  );
}

function HeaderDate({
  children,
  className,
  date,
  locale,
  ...props
}: ComponentProps<"time"> & {
  date?: Date | string | number;
  locale?: string;
}) {
  const formatted = useMemo(() => {
    if (!date) {
      return null;
    }

    const value = new Date(date);

    if (Number.isNaN(value)) {
      return null;
    }

    const longFormatter = new Intl.DateTimeFormat(locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const shortFormatter = new Intl.DateTimeFormat(locale);

    return {
      long: longFormatter.format(value),
      short: shortFormatter.format(value),
    };
  }, [date, locale]);

  return (
    <time
      data-slot="header-date"
      className={cn(
        "shrink-0 flex-1 truncate font-serif text-center text-muted-foreground text-xs md:text-sm",
        className,
      )}
      {...props}
    >
      {formatted ? (
        <>
          <span className="md:hidden">{formatted.short}</span>
          <span className="hidden md:inline">{formatted.long}</span>
        </>
      ) : (
        children
      )}
    </time>
  );
}

function HeaderLanguage({ className, ...props }: ComponentProps<"time">) {
  return (
    <time
      data-slot="header-language"
      className={cn(
        "shrink-0 flex-1 truncate text-end font-serif text-muted-foreground text-xs md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

function HeaderMasthead({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="header-masthead"
      className={cn(
        "my-3 flex flex-row justify-around md:justify-center gap-2 md:gap-5",
        className,
      )}
      {...props}
    />
  );
}

function HeaderLogo({ className, ...props }: ComponentProps<"figure">) {
  return (
    <figure
      data-slot="header-logo"
      className={cn(
        "inline-flex h-15 md:h-30 [&_img]:h-full [&_img]:w-auto",
        className,
      )}
      {...props}
    />
  );
}

function HeaderMastheadContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="header-masthead-content"
      className={cn("flex flex-col items-center justify-center", className)}
      {...props}
    />
  );
}

function HeaderTitle({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      data-slot="header-title"
      className={cn("font-heading text-center text-xl md:text-3xl", className)}
      {...props}
    />
  );
}

function HeaderSubtitle({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="header-subtitle"
      className={cn(
        "font-serif text-sm md:text-lg text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function HeaderNav({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="header-nav" className={cn("", className)} {...props} />
  );
}

export {
  Header,
  HeaderDate,
  HeaderIssueNumber,
  HeaderLanguage,
  HeaderLogo,
  HeaderMasthead,
  HeaderMastheadContent,
  HeaderNav,
  HeaderSeparator,
  HeaderSubtitle,
  HeaderTitle,
  HeaderTopMeta,
};
