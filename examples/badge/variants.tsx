import {
  Badge
} from "@/components/ui/pxl/badge";

export default function BadgeVariantsExample() {
  return (
    <div className="min-h-23 flex items-center justify-center">
      <div className="flex flex-row flex-wrap gap-2.5">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="muted">Muted</Badge>
        <Badge variant="accent">Accent</Badge>
      </div>
    </div>
  );
}