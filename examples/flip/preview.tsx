import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/pxl/card";
import { Flip, FlipBack, FlipFront, FlipTrigger } from "@/components/ui/pxl/flip";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function FlipPreview() {
  return (
    <div className="flex flex-col gap-2.5 items-center justify-center">
      <WidgetArea size="md">
        <Flip
          className="size-full"
          flipDirection="horizontal"
        >
          <FlipTrigger>
            <FlipFront className="w-full">
              <Card size="lg" className="size-full" variant="default">
                <CardHeader>
                  <CardTitle>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path></svg>
                    Front
                  </CardTitle>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </FlipFront>
            <FlipBack className="w-full">
              <Card size="lg" className="size-full" variant="danger">
                <CardHeader>
                  <CardTitle>              
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z"></path></svg>
                    Back
                  </CardTitle>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            </FlipBack>
          </FlipTrigger>
        </Flip>
      </WidgetArea>
    </div>
  );
}
