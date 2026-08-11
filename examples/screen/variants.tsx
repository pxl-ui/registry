import { Card, CardContent } from "@/components/ui/pxl/card";
import Screen from "@/components/ui/pxl/screen";
import { SpriteCanvas } from "@/components/ui/pxl/sprite-canvas";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function ScreenVariants() {
  const content = () => (
    <SpriteCanvas
      src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
      animation="Idle"
      size="lg"
      atlas={{
        frames: {
          "0": { frame: { x:  0, y: 0, w: 16, h: 16 }, },
          "1": { frame: { x: 16, y: 0, w: 16, h: 16 }, },
          "2": { frame: { x: 32, y: 0, w: 16, h: 16 }, },
          "3": { frame: { x: 48, y: 0, w: 16, h: 16 }, },
        },
        meta: { frameTags: [ { name: "Idle", from: 0, to: 3, }, ], },
      }}
    />
  );

  return (
    <div className="flex flex-wrap items-center justify-center min-h-23 gap-2">
      <WidgetArea size="sm">
        <Screen variant="crt">
          <Screen.Filter>
            <Card className="widget-size-sm aspect-widget-sm">
              <CardContent className="flex flex-col items-center justify-center">
                {content()}
                <p>CRT</p>
              </CardContent>
            </Card>
          </Screen.Filter>
        </Screen>
      </WidgetArea>
      <WidgetArea size="sm">
        <Screen variant="lcd">
          <Screen.Filter>
            <Card className="widget-size-sm aspect-widget-sm">
              <CardContent className="flex flex-col items-center justify-center">
                {content()}
                <p>LCD</p>
              </CardContent>
            </Card>
          </Screen.Filter>
        </Screen>
      </WidgetArea>
      <WidgetArea size="sm">
        <Screen variant="dark">
          <Screen.Filter>
            <Card className="widget-size-sm aspect-widget-sm">
              <CardContent className="flex flex-col items-center justify-center">
                {content()}
                <p>Dark</p>
              </CardContent>
            </Card>
          </Screen.Filter>
        </Screen>
      </WidgetArea>
      <WidgetArea size="sm">
        <Screen variant="green">
          <Screen.Filter>
            <Card className="widget-size-sm aspect-widget-sm">
              <CardContent className="flex flex-col items-center justify-center">
                {content()}
                <p>Green</p>
              </CardContent>
            </Card>
          </Screen.Filter>
        </Screen>
      </WidgetArea>
      <WidgetArea size="sm">
        <Screen variant="greenLight">
          <Screen.Filter>
            <Card className="widget-size-sm aspect-widget-sm">
              <CardContent className="flex flex-col items-center justify-center">
                {content()}
                <p>Green Light</p>
              </CardContent>
            </Card>
          </Screen.Filter>
        </Screen>
      </WidgetArea>
    </div>
  );
}
