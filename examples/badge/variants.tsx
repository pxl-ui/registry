import {
  Badge
} from "@/components/ui/pxl/badge";

export default function BadgeVariantsExample() {
  return (
    <div className="flex flex-col gap-2.5 items-center justify-center min-h-23">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="muted">Muted</Badge>
      <Badge variant="accent">Accent</Badge>
    </div>
  );
}