import { Label } from "@/components/ui/pxl/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/pxl/radio-group";

export default function RadioGroupPreview() {
  return (
    <div className="flex items-center justify-center">
      <RadioGroup className="w-auto" defaultValue="comfortable">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r1" value="default" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r2" value="comfortable" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="r3" value="compact" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}