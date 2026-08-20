import { Checkbox } from "@/components/ui/pxl/checkbox";
import { Label } from "@/components/ui/pxl/label";

export default function LabelDemo() {
  return (
    <div className="flex gap-2 h-fit">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}
