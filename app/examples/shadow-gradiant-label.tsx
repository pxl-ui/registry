import { GradiantLabel } from "@/registry/pxl-cn/gradiant-label/gradiant-label";

export default function ShadowGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Shadow</label>
        <p className="text-sm text-muted-foreground">
          
        </p>
      </div>

      <GradiantLabel variant="shadow">-5 HP</GradiantLabel>
    </div>
  );
}
