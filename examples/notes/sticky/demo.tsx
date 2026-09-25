import {
  Sticky,
  StickyContent,
  StickyTitle,
} from "@/components/features/pxl/notes/sticky";
import { Markdown } from "@/components/ui/pxl/markdown";

export default function StickyDemo() {
  return (
    <Sticky className="max-w-md max-h-72" rotate="left" variant="canary-yellow" size="lg">
      <StickyTitle>Daily standups</StickyTitle>
      <StickyContent>
        <Markdown>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales felis ut eros sodales, vitae bibendum nulla vehicula. Pellentesque a turpis dolor. Ut bibendum dolor vel turpis cursus volutpat. Nulla eu quam nulla. Suspendisse sed lacinia nisl, eget tincidunt sem. Quisque ipsum nisi, consectetur in massa quis, gravida porta lorem. Duis fringilla nisl eget dolor efficitur, sed tincidunt urna vulputate. Nulla sed porta sapien. Aliquam sollicitudin tristique augue ut condimentum. Sed lacinia, elit luctus ullamcorper facilisis, nisi justo congue erat, a egestas ante massa sed lorem. Mauris eu arcu est. Etiam sodales lacus nec tortor aliquet, vitae malesuada neque tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nibh leo, tincidunt a lorem sed, accumsan mollis metus.

Vestibulum finibus nisi sit amet augue finibus porttitor. Maecenas posuere lorem laoreet neque ornare molestie. Suspendisse vitae tincidunt lectus. In vel suscipit nisl. Pellentesque hendrerit, mi at tempor vehicula, orci est vehicula risus, in convallis dolor ligula ullamcorper purus. Sed scelerisque vel orci eu congue. Proin et erat sit amet lorem vestibulum posuere quis sit amet lacus. Morbi in quam odio. Donec maximus sollicitudin euismod. Donec eget risus et enim tempus feugiat.

Suspendisse ut elit id elit accumsan suscipit. Duis mauris tortor, vestibulum sed tempus sit amet, sollicitudin nec lacus. Praesent eu interdum ex. Integer porttitor vitae libero et scelerisque. Praesent et sapien faucibus, pretium enim a, sagittis orci. Curabitur dapibus velit sed nibh lacinia, at ornare dolor euismod. Donec vehicula auctor bibendum. Donec in dapibus lacus, vitae lobortis magna. Fusce consequat volutpat semper. Praesent varius odio vitae massa iaculis, eget tempus leo gravida.

Pellentesque sagittis lacinia pharetra. Vivamus finibus quis mauris in varius. Integer condimentum ante mauris, vel dictum dui tempus in. Nullam vehicula pharetra libero, eu feugiat libero feugiat eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque luctus sem ut turpis tristique, a volutpat magna tincidunt. Mauris sit amet mi pharetra, pharetra dolor nec, finibus nunc. Praesent laoreet odio nec velit tempor ullamcorper. Phasellus ac ullamcorper elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nunc nec nibh tincidunt rhoncus ut eget ligula. Suspendisse consequat mi vitae viverra suscipit. Nunc tempor mi augue, non ultrices purus semper sed.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi venenatis sapien et mattis accumsan. Praesent tincidunt viverra lectus ac aliquam. Cras vitae justo pellentesque lectus gravida suscipit. Cras rutrum, justo non convallis lobortis, leo turpis luctus nulla, non sollicitudin lacus augue a erat. Duis dignissim dignissim dolor, at sodales sem auctor ut. Aliquam gravida ligula ac est vehicula elementum.`}
        </Markdown>
      </StickyContent>
    </Sticky>
  );
}
