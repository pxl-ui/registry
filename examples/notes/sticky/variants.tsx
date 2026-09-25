import {
  Sticky,
  StickyContent,
  StickyTitle,
} from "@/components/features/pxl/notes/sticky";
import { Markdown } from "@/components/ui/pxl/markdown";

export default function StickyVariants() {
  return (
    <div className="flex flex-col gap-5 max-w-3xl max-h-140 overflow-auto">
      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Supernova Neons</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="aqua-splash" size="sm">
            <StickyTitle>Aqua Splash</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="acid-lime" size="sm">
            <StickyTitle>Acid Lime</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="guava" size="sm">
            <StickyTitle>Guava</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="tropical-pink" size="sm">
            <StickyTitle>Tropical Pink</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="iris-infusion" size="sm">
            <StickyTitle>Iris Infusion</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Energy Boost</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="vital-orange" size="sm">
            <StickyTitle>Vital Orange</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="tropical-pink" size="sm">
            <StickyTitle>Tropical Pink</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="limeade" size="sm">
            <StickyTitle>Limeade</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="blue-paradise" size="sm">
            <StickyTitle>Blue Paradise</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="sunnyside" size="sm">
            <StickyTitle>Sunnyside</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Playful Primaries</h3>
        <div className="grid grid-cols-6 gap-2">
          <Sticky variant="candy-apple-red" size="sm">
            <StickyTitle>Candy Apple Red</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="vital-orange" size="sm">
            <StickyTitle>Vital Orange</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="sunnyside" size="sm">
            <StickyTitle>Sunnyside</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="limeade" size="sm">
            <StickyTitle>Limeade</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="blue-paradise" size="sm">
            <StickyTitle>Blue Paradise</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="iris-infusion" size="sm">
            <StickyTitle>Blue Paradise</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Wanderlust Pastels</h3>
        <div className="grid grid-cols-6 gap-2">
          <Sticky variant="pink-salt" size="sm">
            <StickyTitle>Pink Salt</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="positively-pink" size="sm">
            <StickyTitle>Positively Pink</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="orchid-frost" size="sm">
            <StickyTitle>Orchid Frost</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="washed-denim" size="sm">
            <StickyTitle>Washed Denim</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="fresh-mint" size="sm">
            <StickyTitle>Fresh Mint</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="pebble-gray" size="sm">
            <StickyTitle>Pebble Gray</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Oasis</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="washed-denim" size="sm">
            <StickyTitle>Washed Denim</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="fresh-mint" size="sm">
            <StickyTitle>Fresh Mint</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="limeade" size="sm">
            <StickyTitle>Limeade</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="lucky-green" size="sm">
            <StickyTitle>Lucky Green</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="sea-glass" size="sm">
            <StickyTitle>Sea Glass</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Summer Joy</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="citron" size="sm">
            <StickyTitle>Citron</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="papaya-fizz" size="sm">
            <StickyTitle>Papaya Fizz</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="power-pink" size="sm">
            <StickyTitle>Power Pink</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="washed-denim" size="sm">
            <StickyTitle>Washed Denim</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="fresh-mint" size="sm">
            <StickyTitle>Fresh Mint</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Simply Serene</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="washed-denim" size="sm">
            <StickyTitle>Washed Denim</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="pebble-gray" size="sm">
            <StickyTitle>Pebble Gray</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="fresh-snow" size="sm">
            <StickyTitle>Fresh Snow</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="pink-salt" size="sm">
            <StickyTitle>Pink Salt</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="black-onyx" size="sm">
            <StickyTitle>Black Onyx</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Beachside Café</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="fresh-mint" size="sm">
            <StickyTitle>Fresh Mint</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="aqua-splash" size="sm">
            <StickyTitle>Aqua Splash</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="sunnyside" size="sm">
            <StickyTitle>Sunnyside</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="guava" size="sm">
            <StickyTitle>Guava</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="pink-salt" size="sm">
            <StickyTitle>Pink Salt</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Floral Fantasy</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="limeade" size="sm">
            <StickyTitle>Limeade</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="blue-paradise" size="sm">
            <StickyTitle>Blue Paradise</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="sunnyside" size="sm">
            <StickyTitle>Sunnyside</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="positively-pink" size="sm">
            <StickyTitle>Positively Pink</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="guava" size="sm">
            <StickyTitle>Guava</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Poptimistic</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="guava" size="sm">
            <StickyTitle>Guava</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="vital-orange" size="sm">
            <StickyTitle>Vital Orange</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="aqua-splash" size="sm">
            <StickyTitle>Aqua Splash</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="acid-lime" size="sm">
            <StickyTitle>Acid Lime</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="power-pink" size="sm">
            <StickyTitle>Power Pink</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-serif">Sweet Sprinkles</h3>
        <div className="grid grid-cols-5 gap-2">
          <Sticky variant="positively-pink" size="sm">
            <StickyTitle>Positively Pink</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="pink-salt" size="sm">
            <StickyTitle>Pink Salt</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="canary-yellow" size="sm">
            <StickyTitle>Canary Yellow</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="fresh-mint" size="sm">
            <StickyTitle>Fresh Mint</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
          <Sticky variant="moonstone" size="sm">
            <StickyTitle>Moonstone</StickyTitle>
            <StickyContent>
              <Markdown>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.`}
              </Markdown>
            </StickyContent>
          </Sticky>
        </div>
      </div>
    </div>
  );
}
