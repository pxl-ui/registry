import { TextMarquee } from "@/components/ui/pxl/text-marquee";

export default function TextMarqueePreview() {
  return (
    <div className="w-full min-h-23 flex items-center justify-center">
      <div className="w-full max-w-2xs space-y-4">
        <TextMarquee className="italic">A very long text for a tiny screen</TextMarquee>
      </div>
    </div>
  );
}
