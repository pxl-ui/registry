import { TextStroke } from "@/components/ui/pxl/text-stroke";

export default function Variants() {
  return (
    <div className="flex flex-wrap content-center justify-center gap-2">
      <TextStroke variant="background">Background</TextStroke>
      <TextStroke variant="loot">Loot</TextStroke>
      <TextStroke variant="cryo">Cryo</TextStroke>
      <TextStroke variant="fire">Fire</TextStroke>
      <TextStroke variant="toxic">Toxic</TextStroke>
      <TextStroke variant="plasma">Plasma</TextStroke>
      <TextStroke variant="shadow">Shadow</TextStroke>
      <TextStroke variant="synthwave">Synthwave</TextStroke>
      <TextStroke variant="chrome">Chrome</TextStroke>
    </div>
  );
}
