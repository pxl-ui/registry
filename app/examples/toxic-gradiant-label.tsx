import { GradiantLabel } from "@/registry/pxl-cn/gradiant-label/gradiant-label";

export default function ToxicGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Toxic</label>
        <p className="text-sm text-muted-foreground">
          
        </p>
      </div>

      <GradiantLabel variant="toxic">-5 HP</GradiantLabel>
    </div>
  );
}
