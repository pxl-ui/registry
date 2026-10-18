import { type ComponentProps, useMemo } from "react";

import {
  DopamineMenuItemDescription as BaseDopamineMenuItemDescription,
  DopamineMenuItemTime as BaseDopamineMenuItemTime,
  DopamineMenuItemTitle as BaseDopamineMenuItemTitle,
  DopamineMenuSectionDescription as BaseDopamineMenuSectionDescription,
  DopamineMenuSectionImage as BaseDopamineMenuSectionImage,
  DopamineMenuSectionTitle as BaseDopamineMenuSectionTitle,
  DopamineMenuTitle as BaseDopamineMenuTitle,
} from "@/components/features/pxl/medkit/dopamine-menu";
/** We use the Schema.org standard Menu to preserve the analogy */
import type {
  Menu,
  MenuItem,
  MenuSection,
} from "@/lib/schemas/pxl/schemaorg/food-establishment";

function DopamineMenuTitle({
  menu,
  ...props
}: ComponentProps<typeof BaseDopamineMenuTitle> & {
  menu: Menu;
}) {
  const title = useMemo(
    function resolveMenuTitle() {
      if (!menu.name) {
        return "";
      }

      return menu.name;
    },
    [menu.name],
  );

  return <BaseDopamineMenuTitle {...props}>{title}</BaseDopamineMenuTitle>;
}

function DopamineMenuSectionImage({
  menuSection,
  ...props
}: ComponentProps<typeof BaseDopamineMenuSectionImage> & {
  menuSection: MenuSection;
}) {
  const image = useMemo(
    function resolveSectionImage() {
      if (!menuSection.image) {
        return null;
      }

      const image = Array.isArray(menuSection.image)
        ? menuSection.image[0]
        : menuSection.image;

      if (!image) {
        return null;
      }

      if (typeof image === "string") {
        return {
          src: image,
        };
      } else {
        return {
          src: image.contentUrl,
          alt: image.name,
          width: image.width,
          height: image.height,
        };
      }
    },
    [menuSection.image],
  );

  if (!image) {
    return null;
  }

  return <BaseDopamineMenuSectionImage {...image} {...props} />;
}

function DopamineMenuSectionTitle({
  menuSection,
  ...props
}: ComponentProps<typeof BaseDopamineMenuSectionTitle> & {
  menuSection: MenuSection;
}) {
  const title = useMemo(
    function resolveSectionTitle() {
      if (!menuSection.name) {
        return "";
      }

      return menuSection.name;
    },
    [menuSection.name],
  );

  return (
    <BaseDopamineMenuSectionTitle {...props}>
      {title}
    </BaseDopamineMenuSectionTitle>
  );
}

function DopamineMenuSectionDescription({
  menuSection,
  ...props
}: ComponentProps<typeof BaseDopamineMenuSectionTitle> & {
  menuSection: MenuSection;
}) {
  const description = useMemo(
    function resolveSectionDescription() {
      if (!menuSection.description) {
        return null;
      }

      return menuSection.description;
    },
    [menuSection.description],
  );

  if (!description) {
    return null;
  }

  return (
    <BaseDopamineMenuSectionDescription {...props}>
      {description}
    </BaseDopamineMenuSectionDescription>
  );
}

function DopamineMenuItemTitle({
  menuItem,
  ...props
}: ComponentProps<typeof BaseDopamineMenuItemTitle> & {
  menuItem: MenuItem;
}) {
  const title = useMemo(
    function resolveItemTitle() {
      if (!menuItem.name) {
        return "";
      }

      return menuItem.name;
    },
    [menuItem.name],
  );

  return (
    <BaseDopamineMenuItemTitle {...props}>{title}</BaseDopamineMenuItemTitle>
  );
}

function DopamineMenuItemDescription({
  menuItem,
  ...props
}: ComponentProps<typeof BaseDopamineMenuItemTitle> & {
  menuItem: MenuItem;
}) {
  const description = useMemo(
    function resolveItemDescription() {
      if (!menuItem.description) {
        return null;
      }

      return menuItem.description;
    },
    [menuItem.description],
  );

  if (!menuItem.description) {
    return null;
  }

  return (
    <BaseDopamineMenuItemDescription {...props}>
      {description}
    </BaseDopamineMenuItemDescription>
  );
}

function DopamineMenuItemTime({
  menuItem,
  locale,
  ...props
}: ComponentProps<typeof BaseDopamineMenuItemTime> & {
  menuItem: MenuItem;
  locale?: string;
}) {
  const time = useMemo(
    function resolveItemDuration() {
      if (menuItem.offers?.price === undefined) {
        return null;
      }

      const price = menuItem.offers.price;
      const durationKey = menuItem.offers.priceCurrency ?? "minutes";

      let placeholded = false;
      let amount = typeof price === "number" ? price : Number(price);

      if (!Number.isFinite(amount)) {
        placeholded = true;
        amount = 2; // Placeholder in case amount is not a number (ie. ranges "1-2")
      }

      const durationObj = { [durationKey]: amount };

      try {
        const formatted = new Intl.DurationFormat(locale, {
          style: "short",
        }).format(durationObj);

        return placeholded
          ? formatted.replace(amount.toString(), price.toString())
          : formatted;
      } catch {
        return `${amount} ${durationKey}`;
      }
    },
    [menuItem.offers?.price, menuItem.offers?.priceCurrency, locale],
  );

  if (!time) {
    return null;
  }

  return <BaseDopamineMenuItemTime {...props}>{time}</BaseDopamineMenuItemTime>;
}

export {
  DopamineMenuItemDescription,
  DopamineMenuItemTime,
  DopamineMenuItemTitle,
  DopamineMenuSectionDescription,
  DopamineMenuSectionImage,
  DopamineMenuSectionTitle,
  DopamineMenuTitle,
};
