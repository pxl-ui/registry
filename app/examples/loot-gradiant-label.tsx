import { GradiantLabel } from "@/registry/pxl-cn/gradiant-label/gradiant-label";

export default function LootGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Loot</label>
        <p className="text-sm text-muted-foreground">
          
        </p>
      </div>

      <GradiantLabel variant="loot">-5 HP</GradiantLabel>
    </div>
  );
}
