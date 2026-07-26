import { GradiantLabel } from "@/registry/pxl-ui/gradiant-label/gradiant-label";

export default function FireGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Fire</label>
        <p className="text-sm text-muted-foreground">
          Yellow, Orange and Red tones recreating the fire power.
        </p>
      </div>

      <GradiantLabel variant="fire">-5 HP</GradiantLabel>
    </div>
  );
}
