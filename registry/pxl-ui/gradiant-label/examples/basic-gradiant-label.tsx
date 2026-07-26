import { GradiantLabel } from "@/registry/pxl-ui/gradiant-label/gradiant-label";

export default function BasicGradiantLabelExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Basic</label>
        <p className="text-sm text-muted-foreground">
          
        </p>
      </div>

      <GradiantLabel>+129 XP</GradiantLabel>
    </div>
  );
}
