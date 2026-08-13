import { Badge } from "@/components/ui/pxl/badge";

export default function BadgeBordersExample() {
  return (
    <div className="min-h-23 flex items-center justify-center">
      <div className="flex flex-row flex-wrap gap-2.5">
        <Badge variant="default" border="none">None</Badge>
        <Badge variant="default" border="default">Default</Badge>
        <Badge variant="primary" border="outline">Outline</Badge>
        <Badge variant="default" border="notch">Notch</Badge>
      </div>
    </div>
  );
}