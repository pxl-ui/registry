import { Label } from "@/components/ui/pxl/label";
import {
  RadioGroup,
  RadioGroupCheckIndicator,
  RadioGroupCrossIndicator,
  RadioGroupItem,
  RadioGroupMinusIndicator,
  RadioGroupPlusIndicator,
  RadioGroupSlashIndicator,
} from "@/components/ui/pxl/radio-group";

export default function RadioGroupVariants() {
  return (
    <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
      <RadioGroup
        variant="primary"
        indicator={RadioGroupPlusIndicator}
        className="w-auto"
        defaultValue="default"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem id="primary_r1" value="default" />
          <Label htmlFor="primary_r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="primary_r2" value="comfortable" />
          <Label htmlFor="primary_r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="primary_r3" value="compact" />
          <Label htmlFor="primary_r3">Compact</Label>
        </div>
      </RadioGroup>
      <RadioGroup
        variant="success"
        indicator={RadioGroupCheckIndicator}
        className="w-auto"
        defaultValue="comfortable"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem id="success_r1" value="default" />
          <Label htmlFor="success_r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="success_r2" value="comfortable" />
          <Label htmlFor="success_r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="success_r3" value="compact" />
          <Label htmlFor="success_r3">Compact</Label>
        </div>
      </RadioGroup>
      <RadioGroup
        variant="danger"
        indicator={RadioGroupCrossIndicator}
        className="w-auto"
        defaultValue="compact"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem id="danger_r1" value="default" />
          <Label htmlFor="danger_r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="danger_r2" value="comfortable" />
          <Label htmlFor="danger_r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="danger_r3" value="compact" />
          <Label htmlFor="danger_r3">Compact</Label>
        </div>
      </RadioGroup>
      <RadioGroup
        variant="warning"
        indicator={RadioGroupMinusIndicator}
        className="w-auto"
        defaultValue="comfortable"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem id="warning_r1" value="default" />
          <Label htmlFor="warning_r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="warning_r2" value="comfortable" />
          <Label htmlFor="warning_r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="warning_r3" value="compact" />
          <Label htmlFor="warning_r3">Compact</Label>
        </div>
      </RadioGroup>
      <RadioGroup 
        variant="info" 
        indicator={RadioGroupSlashIndicator}
        className="w-auto" 
        defaultValue="default">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="info_r1" value="default" />
          <Label htmlFor="info_r1">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="info_r2" value="comfortable" />
          <Label htmlFor="info_r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="info_r3" value="compact" />
          <Label htmlFor="info_r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
