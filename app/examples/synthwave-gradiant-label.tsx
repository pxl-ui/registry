import { GradiantLabel } from "@/registry/pxl-ui/gradiant-label/gradiant-label";

export default function SynthwaveGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Synthwave</label>
        <p className="text-sm text-muted-foreground">
          
        </p>
      </div>

      <GradiantLabel variant="synthwave">-5 HP</GradiantLabel>
    </div>
  );
}
