import { type ComponentProps, useState } from "react";

import { Button } from "@/components/ui/pxl/button";
import { Reveal } from "@/components/ui/pxl/reveal";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function RetroMenuExample() {
  const [open, setOpen] = useState(false);

  const [variant, setVariant] =
    useState<ComponentProps<typeof Reveal>["variant"]>("default");

  return (
    <div className="flex flex-col gap-4 items-center">

      <div className="flex flex-row gap-2 w-full">
        <Button
          className="flex-1"
          onClick={() => {
            setVariant("default");
            setOpen((v) => !v);
          }}
        >
          Default (Background)
        </Button>

        <Button
          variant="success"
          className="flex-1"
          onClick={() => {
            setVariant("success");
            setOpen((v) => !v);
          }}
        >
          Success
        </Button>

        <Button
          variant="danger"
          className="flex-1"
          onClick={() => {
            setVariant("dangerForeground");
            setOpen((v) => !v);
          }}
        >
          Danger Foreground
        </Button>
      </div>
      
      <div className="w-widget-md aspect-square">
        <Reveal show={open} variant={variant}>
          <WidgetArea size="sm">
            <nav className="">
              <ul className="space-y-2">
                <li className="cursor-pointer hover:text-yellow-300">
                  ▸ Continue
                </li>
                <li className="cursor-pointer hover:text-yellow-300">
                  ▸ Items
                </li>
                <li className="cursor-pointer hover:text-yellow-300">
                  ▸ Equipment
                </li>
                <li className="cursor-pointer hover:text-yellow-300">▸ Save</li>
              </ul>
            </nav>
          </WidgetArea>
        </Reveal>
      </div>
    </div>
  );
}
