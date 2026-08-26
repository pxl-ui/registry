import { Card, CardContent } from "@/components/ui/pxl/card";
import { cn } from "@/lib/utils";

export default function CursorPreview({ pack: packName }: { pack: string }) {

  return (
    <div className={cn("mt-0 not-content", `cursors-${packName}`)}>
      <Card className="size-full pixel-color-border!">
        <CardContent scrollable>
          <div className="grid gap-3 justify-center grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
            <div className="flex flex-col items-center">
              <span className="icon-cursor-default size-8" />
              <span className="flex-1">Default</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-pointer size-8" />
              <span className="flex-1">Pointer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-text size-8" />
              <span className="flex-1">Text</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-move size-8" />
              <span className="flex-1">Move</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-grab size-8" />
              <span className="flex-1">Grab</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-grabbing size-8" />
              <span className="flex-1">Grabbing</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-crosshair size-8" />
              <span className="flex-1">Crosshair</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-not-allowed size-8" />
              <span className="flex-1">Not Allowed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-help size-8" />
              <span className="flex-1">Help</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-wait size-8" />
              <span className="flex-1">Wait</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-progress size-8" />
              <span className="flex-1">Progress</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-zoom-out size-8" />
              <span className="flex-1">Zoom In</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-zoom-out size-8" />
              <span className="flex-1">Zoom Out</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-screenshot size-8" />
              <span className="flex-1">Screenshot</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-hand size-8" />
              <span className="flex-1">Hand</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-n-resize size-8" />
              <span className="flex-1">N Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-s-resize size-8" />
              <span className="flex-1">S Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-e-resize size-8" />
              <span className="flex-1">E Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-w-resize size-8" />
              <span className="flex-1">W Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-ns-resize size-8" />
              <span className="flex-1">NS Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-ew-resize size-8" />
              <span className="flex-1">EW Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-ne-resize size-8" />
              <span className="flex-1">NE Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-nw-resize size-8" />
              <span className="flex-1">NW Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-se-resize size-8" />
              <span className="flex-1">SE Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-sw-resize size-8" />
              <span className="flex-1">SW Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-nesw-resize size-8" />
              <span className="flex-1">NESW Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-nwse-resize size-8" />
              <span className="flex-1">NWSE Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-col-resize size-8" />
              <span className="flex-1">Col Resize</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="icon-cursor-row-resize size-8" />
              <span className="flex-1">Row Resize</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
