import { Button } from "@/components/ui/pxl/button";
import { Input } from "@/components/ui/pxl/input";
import { Label } from "@/components/ui/pxl/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/pxl/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button>Open popover</Button>} />
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxWidth">Max. width</Label>
            <Input
              id="maxWidth"
              defaultValue="300px"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxHeight">Max. height</Label>
            <Input
              id="maxHeight"
              defaultValue="none"
              className="col-span-2 h-8"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}