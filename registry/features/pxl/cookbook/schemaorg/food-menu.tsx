import { type ComponentProps, useMemo } from "react";

import {
  FoodMenuItemDescription as BaseFoodMenuItemDescription,
  FoodMenuItemPrice as BaseFoodMenuItemPrice,
  FoodMenuItemTitle as BaseFoodMenuItemTitle,
  FoodMenuSectionDescription as BaseFoodMenuSectionDescription,
  FoodMenuSectionImage as BaseFoodMenuSectionImage,
  FoodMenuSectionTitle as BaseFoodMenuSectionTitle,
  FoodMenuTitle as BaseFoodMenuTitle,
} from "@/components/features/pxl/cookbook/food-menu";
import type {
  Menu,
  MenuItem,
  MenuSection,
} from "@/lib/schemas/pxl/schemaorg/food-establishment";

function FoodMenuTitle({
  menu,
  ...props
}: ComponentProps<typeof BaseFoodMenuTitle> & {
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

  return <BaseFoodMenuTitle {...props}>{title}</BaseFoodMenuTitle>;
}

function FoodMenuSectionImage({
  menuSection,
  ...props
}: ComponentProps<typeof BaseFoodMenuSectionImage> & {
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

  return <BaseFoodMenuSectionImage {...image} {...props} />;
}

function FoodMenuSectionTitle({
  menuSection,
  ...props
}: ComponentProps<typeof BaseFoodMenuSectionTitle> & {
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
    <BaseFoodMenuSectionTitle {...props}>{title}</BaseFoodMenuSectionTitle>
  );
}

function FoodMenuSectionDescription({
  menuSection,
  ...props
}: ComponentProps<typeof BaseFoodMenuSectionTitle> & {
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
    <BaseFoodMenuSectionDescription {...props}>
      {description}
    </BaseFoodMenuSectionDescription>
  );
}

function FoodMenuItemTitle({
  menuItem,
  ...props
}: ComponentProps<typeof BaseFoodMenuItemTitle> & {
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

  return <BaseFoodMenuItemTitle {...props}>{title}</BaseFoodMenuItemTitle>;
}

function FoodMenuItemDescription({
  menuItem,
  ...props
}: ComponentProps<typeof BaseFoodMenuItemTitle> & {
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
    <BaseFoodMenuItemDescription {...props}>
      {description}
    </BaseFoodMenuItemDescription>
  );
}

function FoodMenuItemPrice({
  menuItem,
  locale,
  ...props
}: ComponentProps<typeof BaseFoodMenuItemPrice> & {
  menuItem: MenuItem;
  locale?: string;
}) {
  const price = useMemo(
    function resolveItemPrice() {
      if (!menuItem.offers?.price) {
        return null;
      }

      const price = menuItem.offers.price;
      const currency = menuItem.offers.priceCurrency;

      const amount = typeof price === "number" ? price : Number(price);

      if (!Number.isFinite(amount)) {
        return null;
      }

      if (!currency) {
        return new Intl.NumberFormat(locale, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(amount);
      }

      try {
        return new Intl.NumberFormat(locale, {
          style: "currency",
          currency,
        }).format(amount);
      } catch {
        return `${amount} ${currency}`;
      }
    },
    [menuItem.offers?.price, menuItem.offers?.priceCurrency, locale],
  );

  if (!price) {
    return null;
  }

  return <BaseFoodMenuItemPrice {...props}>{price}</BaseFoodMenuItemPrice>;
}

export {
  FoodMenuItemDescription,
  FoodMenuItemPrice,
  FoodMenuItemTitle,
  FoodMenuSectionDescription,
  FoodMenuSectionImage,
  FoodMenuSectionTitle,
  FoodMenuTitle,
};
