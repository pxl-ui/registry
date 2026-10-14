import {
  FoodMenu,
  FoodMenuBody,
  FoodMenuItem,
  FoodMenuItemLine,
  FoodMenuSection,
  FoodMenuSectionBody,
} from "@/components/features/pxl/cookbook/food-menu";
import {
  FoodMenuItemPrice,
  FoodMenuItemTitle,
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
            <FoodMenuSectionTitle
              className="font-not-jam-blackletter-16"
              menuSection={menuSection}
            />
            <FoodMenuSectionBody>
              {menuSection.hasMenuItem?.map((menuItem, iidx) => (
                <FoodMenuItem key={iidx.toString()}>
                  <FoodMenuItemTitle menuItem={menuItem} />
                  <FoodMenuItemLine />
                  <FoodMenuItemPrice menuItem={menuItem} />
                </FoodMenuItem>
              ))}
            </FoodMenuSectionBody>
          </FoodMenuSection>
        ))}
      </FoodMenuBody>
    </FoodMenu>
  );
}
