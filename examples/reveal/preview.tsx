import { useState } from "react";

import { Button } from "@/components/ui/pxl/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { Reveal } from "@/components/ui/pxl/reveal";
import { WheelList } from "@/components/ui/pxl/wheel-list";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function RevealPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen((v) => !v)}>
        {open ? "Hide menu" : "Show menu"}
      </Button>

      <div className="w-widget-md aspect-square">
        <Reveal
          show={open}
          variant="muted"
          duration={1}
        >
          <WidgetArea size="sm">
            <Card size="lg" className="size-full">
              <CardHeader>
                <CardTitle>Hello World!</CardTitle>
                <CardDescription>Hello</CardDescription>
              </CardHeader>
              <CardContent>
                <WheelList
                  align="start"
                  visibleCount={3}
                  defaultValue="ITEM"
                  onChange={(evt) =>
                    console.log(
                      evt.settled ? `selected ${evt.value}` : "coasting",
                    )
                  }
                  onSelect={(value) => console.log(value)}
                >
                  {[
                    "POKÉDEX",
                    "POKÉMON",
                    "ITEM",
                    "TRAINER",
                    "SAVE",
                    "OPTION",
                    "EXIT",
                  ].map((i) => (
                    <WheelList.Option key={i} value={i}>
                      {i}
                    </WheelList.Option>
                  ))}
                </WheelList>
              </CardContent>
            </Card>
          </WidgetArea>
        </Reveal>
      </div>
    </div>
  );
}
