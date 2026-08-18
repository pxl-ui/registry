import { Button } from "@/components/ui/pxl/button";

export default function ButtonVariantsExample() {
  return (
    <div className="flex flex-row flex-wrap gap-2.5">
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}