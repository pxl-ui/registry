import { Button } from "@/components/ui/pxl/button";

export default function ButtonBordersExample() {
  return (
    <div className="min-h-23 flex items-center justify-center">
      <div className="flex flex-row flex-wrap gap-2.5">
        <Button variant="default" border="none">None</Button>
        <Button variant="default" border="default">Default</Button>
        <Button variant="primary" border="outline">Outline</Button>
      </div>
    </div>
  );
}