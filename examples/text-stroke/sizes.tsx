import { TextStroke } from "@/components/ui/pxl/text-stroke";

export default function Sizes() {
  return (
    <div className="w-full min-h-92 flex flex-col items-center justify-center gap-2">
      <TextStroke size="xs">ExtraSmall</TextStroke>
      <TextStroke size="sm">Small</TextStroke>
      <TextStroke size="md">Medium</TextStroke>
      <TextStroke size="lg">Large</TextStroke>
    </div>
  );
}
