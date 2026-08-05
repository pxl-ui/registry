import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/pxl/card";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function CardWithHeader() {
  return (
    <div className="flex items-center justify-center min-h-92">
      <WidgetArea size="sm">
        <Card size="lg" className="size-full">
          <CardHeader>
            <CardTitle>Hello World!</CardTitle>
          </CardHeader>
          <CardContent>Hello World</CardContent>
        </Card>
      </WidgetArea>
    </div>
  );
}
