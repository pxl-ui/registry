import { Label } from "@/components/ui/pxl/label";
import { Switch } from "@/components/ui/pxl/switch";

export default function SwitchVariantsExample() {
  return (
    <div className="flex flex-row flex-wrap gap-2.5">
      <div className="flex items-center gap-2">
        <Switch variant="primary" defaultChecked id="primary" />
        <Label htmlFor="primary">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch variant="success" defaultChecked id="success" />
        <Label htmlFor="success">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch variant="danger" defaultChecked id="danger" />
        <Label htmlFor="danger">Danger</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch variant="warning" defaultChecked id="warning" />
        <Label htmlFor="warning">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch variant="info" defaultChecked id="info" />
        <Label htmlFor="info">Info</Label>
      </div>
    </div>
  );
}
