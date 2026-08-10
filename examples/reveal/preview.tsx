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

export default function RevealExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-start gap-4 p-8">
      <Button borders={false} onClick={() => setOpen((v) => !v)}>
        {open ? "Hide menu" : "Show menu"}
      </Button>

      <WidgetArea size="sm">
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
                  label="Pick a start time"
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
      </WidgetArea>
    </div>
  );
}
