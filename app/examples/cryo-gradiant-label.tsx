import { GradiantLabel } from "@/registry/pxl-cn/gradiant-label/gradiant-label";

export default function CryoGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Cryo</label>
        <p className="text-sm text-muted-foreground">
          White, Cyan and Blue tones recreating the ice power.
        </p>
      </div>

      <GradiantLabel variant="cryo">-5 HP</GradiantLabel>
    </div>
  );
}
