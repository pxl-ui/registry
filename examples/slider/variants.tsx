import { Slider } from "@/components/ui/pxl/slider";

export default function SliderVariantsExample() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-md">
      <Slider variant="primary" defaultValue={[50]} />
      <Slider variant="success" defaultValue={[50]} />
      <Slider variant="danger" defaultValue={[50]} />
      <Slider variant="warning" defaultValue={[50]} />
      <Slider variant="info" defaultValue={[50]} />
    </div>
  );
}