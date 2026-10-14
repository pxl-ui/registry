import {
  DopamineMenu,
  DopamineMenuBody,
  DopamineMenuItem,
  DopamineMenuItemLine,
  DopamineMenuSection,
  DopamineMenuSectionBody,
  DopamineMenuSectionHeader,
  DopamineMenuSectionMedia,
} from "@/components/features/pxl/medkit/dopamine-menu";
import {
  DopamineMenuItemDescription,
  DopamineMenuItemTime,
  DopamineMenuItemTitle,
  DopamineMenuSectionDescription,
  DopamineMenuSectionImage,
  DopamineMenuSectionTitle,
  DopamineMenuTitle,
} from "@/components/features/pxl/medkit/schemaorg/dopamine-menu";
import "~/examples/fonts/not-jam-blackletter-16.css";

import { dopamineMenu } from "../__fixtures__/schemaorg/dopamine-menu";

export default function DopamineMenuDemo() {
  return (
    <DopamineMenu className="w-full max-w-xl max-h-240">
      <DopamineMenuTitle
        className="font-not-jam-blackletter-16"
        menu={dopamineMenu}
      />
      <DopamineMenuBody>
        {dopamineMenu.hasMenuSection?.map((menuSection, mIdx) => (
          <DopamineMenuSection key={mIdx.toString()}>
            <DopamineMenuSectionHeader>
              <DopamineMenuSectionMedia
                variant="image"
                className="size-8 grayscale group-hover/dopamine-menu-section:grayscale-0 transition-colors"
              >
                <DopamineMenuSectionImage
                  className="pixelated"
                  menuSection={menuSection}
                />
              </DopamineMenuSectionMedia>
              <DopamineMenuSectionTitle
                className="font-not-jam-blackletter-16"
                menuSection={menuSection}
              />
              <DopamineMenuSectionDescription menuSection={menuSection} />
            </DopamineMenuSectionHeader>
            <DopamineMenuSectionBody>
              {menuSection.hasMenuItem?.map((menuItem, iidx) => (
                <DopamineMenuItem key={iidx.toString()}>
                  <DopamineMenuItemTitle menuItem={menuItem} />
                  <DopamineMenuItemLine />
                  <DopamineMenuItemTime menuItem={menuItem} />
                  <DopamineMenuItemDescription menuItem={menuItem} />
                </DopamineMenuItem>
              ))}
            </DopamineMenuSectionBody>
          </DopamineMenuSection>
        ))}
      </DopamineMenuBody>
    </DopamineMenu>
  );
}
