import {
  FoodMenu,
  FoodMenuBody,
  FoodMenuItem,
  FoodMenuItemLine,
  FoodMenuSection,
  FoodMenuSectionBody,
  FoodMenuSectionHeader,
  FoodMenuSectionMedia,
} from "@/components/features/pxl/cookbook/food-menu";
import {
  FoodMenuItemDescription,
  FoodMenuItemPrice,
  FoodMenuItemTitle,
  FoodMenuSectionDescription,
  FoodMenuSectionImage,
  FoodMenuSectionTitle,
  FoodMenuTitle,
} from "@/components/features/pxl/cookbook/schemaorg/food-menu";
import "~/examples/fonts/not-jam-blackletter-16.css";

import { foodMenu } from "../__fixtures__/schemaorg/menu";

export default function FoodMenuDemo() {
  return (
    <FoodMenu className="w-full max-w-xl max-h-240">
      <FoodMenuTitle className="font-not-jam-blackletter-16" menu={foodMenu} />
      <FoodMenuBody>
        {foodMenu.hasMenuSection?.map((menuSection, mIdx) => (
          <FoodMenuSection key={mIdx.toString()}>
            <FoodMenuSectionHeader>
              <FoodMenuSectionMedia
                variant="image"
                className="size-8 grayscale group-hover/food-menu-section:grayscale-0 transition-colors"
              >
                <FoodMenuSectionImage
                  className="pixelated"
                  menuSection={menuSection}
                />
              </FoodMenuSectionMedia>
              <FoodMenuSectionTitle
                className="font-not-jam-blackletter-16"
                menuSection={menuSection}
              />
              <FoodMenuSectionDescription menuSection={menuSection} />
            </FoodMenuSectionHeader>
            <FoodMenuSectionBody>
              {menuSection.hasMenuItem?.map((menuItem, iidx) => (
                <FoodMenuItem key={iidx.toString()}>
                  <FoodMenuItemTitle menuItem={menuItem} />
                  <FoodMenuItemLine />
                  <FoodMenuItemPrice menuItem={menuItem} />
                  <FoodMenuItemDescription menuItem={menuItem} />
                </FoodMenuItem>
              ))}
            </FoodMenuSectionBody>
          </FoodMenuSection>
        ))}
      </FoodMenuBody>
    </FoodMenu>
  );
}
