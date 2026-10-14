import {
  DopamineMenu,
  DopamineMenuBody,
  DopamineMenuItem,
  DopamineMenuItemLine,
  DopamineMenuSection,
  DopamineMenuSectionBody,
} from "@/components/features/pxl/medkit/dopamine-menu";
import {
  DopamineMenuItemTime,
  DopamineMenuItemTitle,
  DopamineMenuSectionTitle,
  DopamineMenuTitle,
} from "@/components/features/pxl/medkit/schemaorg/dopamine-menu";
import "~/examples/fonts/not-jam-blackletter-16.css";

import { dopamineMenu } from "../__fixtures__/schemaorg/dopamine-menu";

export default function DopamineMenuDemo() {
  return (
    <DopamineMenu className="w-full max-w-xl max-h-240">
      <DopamineMenuTitle className="font-not-jam-blackletter-16" menu={dopamineMenu} />
      <DopamineMenuBody>
        {dopamineMenu.hasMenuSection?.map((menuSection, mIdx) => (
          <DopamineMenuSection key={mIdx.toString()}>
            <DopamineMenuSectionTitle
              className="font-not-jam-blackletter-16"
              menuSection={menuSection}
            />
            <DopamineMenuSectionBody>
              {menuSection.hasMenuItem?.map((menuItem, iidx) => (
                <DopamineMenuItem key={iidx.toString()}>
                  <DopamineMenuItemTitle menuItem={menuItem} />
                  <DopamineMenuItemLine />
                  <DopamineMenuItemTime menuItem={menuItem} />
                </DopamineMenuItem>
              ))}
            </DopamineMenuSectionBody>
          </DopamineMenuSection>
        ))}
      </DopamineMenuBody>
    </DopamineMenu>
  );
}
