
import { useState } from "react";

import { Button } from "@/components/ui/pxl/button";
import { Reveal, type RevealPattern } from "@/components/ui/pxl/reveal";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function RetroMenuExample() {
  const [open, setOpen] = useState(false);

  const [pattern, setPattern] = useState<RevealPattern>("diagonal");

  return (
    <div className="flex flex-col gap-4 items-center">

      <div className="flex flex-row gap-2 w-full">
        
        <Button
          className="flex-1"
          onClick={() => {
            setPattern("radial");
            setOpen((v) => !v);
          }}
        >
          {open ? "Hide radial" : "Show radial"}
        </Button>

        <Button
          className="flex-1"
          onClick={() => {
            setPattern("diagonal");
            setOpen((v) => !v);
          }}
        >
          {open ? "Hide diagonal" : "Show diagonal"}
        </Button>

        <Button
          className="flex-1"
          onClick={() => {
            setPattern("random");
            setOpen((v) => !v);
          }}
        >
          {open ? "Hide random" : "Show random"}
        </Button>
      </div>
      
      <div className="w-widget-md aspect-square">
        <Reveal
          show={open}
          pattern={pattern}
          variant="muted"
        >
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
                <li className="cursor-pointer hover:text-yellow-300">
                  ▸ Save
                </li>
              </ul>
            </nav>
          </WidgetArea>
        </Reveal>
      </div>
    </div>
  );
}
