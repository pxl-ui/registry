import { Label } from "@/components/ui/pxl/label";
import { Switch } from "@/components/ui/pxl/switch";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch defaultChecked id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}