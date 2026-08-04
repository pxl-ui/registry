import { Card, CardContent, CardHeader } from "@/components/ui/pxl/card";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function CardWithHeader() {
  return (
    <div className="flex items-center justify-center min-h-92">
      <WidgetArea size="sm">
        <Card size="lg" className="size-full">
          <CardHeader>Hello World!</CardHeader>
          <CardContent>Hello World</CardContent>
        </Card>
      </WidgetArea>
    </div>
  );
}
