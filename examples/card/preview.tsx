import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/pxl/card";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function CardPreview() {
  return (
    <div className="flex items-center justify-center min-h-92">
      <WidgetArea size="md">
      <Card size="lg" className="size-full">
          <CardHeader>
            <CardTitle>Hello World!</CardTitle>
          </CardHeader>
        <CardContent>
          This is a Card
        </CardContent>
      </Card>
      </WidgetArea>
    </div>
  );
}
