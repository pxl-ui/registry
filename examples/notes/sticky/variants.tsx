import { deckThemes } from "@/components/features/pxl/notes/deck";
import {
  Sticky,
  type StickyColor,
  StickyContent,
  StickyTitle,
} from "@/components/features/pxl/notes/sticky";
import { Markdown } from "@/components/ui/pxl/markdown";

export default function StickyVariants() {
  return (
    <div className="flex flex-col gap-5 max-w-3xl max-h-140 overflow-auto">
      {deckThemes.map((theme) => (
        <div key={theme.label} className="flex flex-col gap-3">
          <h3 className="font-serif">{theme.label}</h3>
          <div
            className="grid grid-cols-5 gap-2"
            style={{
              gridTemplateColumns: `repeat(${Object.keys(theme.variants).length}, minmax(0, 1fr))`,
            }}
          >
            {Object.keys(theme.variants).map((key) => (
              <Sticky key={key} variant={key as StickyColor} size="sm">
                <StickyTitle className="capitalize">
                  {key.split("-").join(" ")}
                </StickyTitle>
                <StickyContent>
                  <Markdown>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
                  </Markdown>
                </StickyContent>
              </Sticky>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
