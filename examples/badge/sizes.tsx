import { Badge } from "@/components/ui/pxl/badge";

export default function BadgeSizesExample() {
  return (
    <div className="min-h-23 flex items-center justify-center">
      <div className="flex flex-row flex-wrap gap-2.5">
        <Badge size="xs">XS</Badge>
        <Badge size="sm">SM</Badge>
        <Badge size="md">MD</Badge>
        <Badge size="lg">LG</Badge>
      </div>
    </div>
  );
}