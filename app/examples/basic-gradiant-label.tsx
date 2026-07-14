import { GradiantLabel } from "@/registry/pxl-cn/gradiant-label/gradiant-label";

export default function BasicGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Basic Gradiant Label</label>
        <p className="text-sm text-muted-foreground">
          Showing New York City with a single marker
        </p>
      </div>

      <GradiantLabel>+129 XP</GradiantLabel>
    </div>
  );
}
