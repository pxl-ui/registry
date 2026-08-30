import { Label } from "@/components/ui/pxl/label";
import { Switch } from "@/components/ui/pxl/switch";

export default function SwitchSizesExample() {
  return (
    <div className="flex flex-row flex-wrap gap-2.5">
      <div className="flex items-center gap-2">
        <Switch size="sm" defaultChecked id="sm" />
        <Label htmlFor="sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="md" defaultChecked id="md" />
        <Label htmlFor="md">Medium</Label>
      </div>
    </div>
  );
}
