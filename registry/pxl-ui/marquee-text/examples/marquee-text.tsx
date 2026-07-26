import { MarqueeText } from "@/registry/pxl-ui/marquee-text/marquee-text";

export default function BasicMarqueeTextExample() {
  return (
    <div className="w-full max-w-xs space-y-4">
      <MarqueeText>A very long text for a tiny screen</MarqueeText>
    </div>
  );
}
