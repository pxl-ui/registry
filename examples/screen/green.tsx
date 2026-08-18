import { type ComponentProps, useState } from "react";

import { Button } from "@/components/ui/pxl/button";
import Screen from "@/components/ui/pxl/screen";
import { SpriteCanvas } from "@/components/ui/pxl/sprite-canvas";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function ScreenGreenExample() {
  const [background, setBackground] =
    useState<ComponentProps<typeof Screen>["background"]>("none");
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <Button
        onClick={() =>
          setBackground((prev) => (prev === "none" ? "filter" : "none"))
        }
      >
        Toggle Background
      </Button>
      <WidgetArea size="sm">
        <Screen
          className="size-full flex items-center justify-center"
          variant="green"
          background={background}
        >
          <Screen.Filter>
            <SpriteCanvas
              src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/sprites/tiny_chick.png"
              animation="Idle"
              size="lg"
              atlas={{
                frames: {
                  "0": { frame: { x: 0, y: 0, w: 16, h: 16 } },
                  "1": { frame: { x: 16, y: 0, w: 16, h: 16 } },
                  "2": { frame: { x: 32, y: 0, w: 16, h: 16 } },
                  "3": { frame: { x: 48, y: 0, w: 16, h: 16 } },
                },
                meta: { frameTags: [{ name: "Idle", from: 0, to: 3 }] },
              }}
            />
          </Screen.Filter>
        </Screen>
      </WidgetArea>
    </div>
  );
}
