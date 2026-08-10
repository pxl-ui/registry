import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function WidgetAreaExample() {
  return (
    <div className="w-full min-h-23 flex items-center justify-center">
      <WidgetArea className="bg-primary text-primary-foreground  rounded-sm flex items-center justify-center">
        Widget
      </WidgetArea>
    </div>
  )
}