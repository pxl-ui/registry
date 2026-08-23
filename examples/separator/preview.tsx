import { Separator } from "@/components/ui/pxl/separator";

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="space-y-1">
        <h4 className="font-heading text-sm">
          pxl-ui
        </h4>
        <p className="text-muted-foreground text-sm">
          Retro styled components
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Themes</span>
      </div>
    </div>
  );
}