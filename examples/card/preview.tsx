import { Card, CardContent } from "@/components/ui/pxl/card";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function CardPreview() {
  return (
    <div className="flex items-center justify-center min-h-92">
      <WidgetArea size="md">
      <Card size="lg" className="size-full">
        <CardContent>Hello World</CardContent>
      </Card>
      </WidgetArea>
    </div>
  );
}
