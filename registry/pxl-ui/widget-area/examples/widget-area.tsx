import { WidgetArea } from "../widget-area";

export default function WidgetAreaExample() {
  return (
    <div className="w-full min-h-92 flex items-center justify-center">
      <WidgetArea className="bg-red-200 rounded-sm flex items-center justify-center">
        Widget
      </WidgetArea>
    </div>
  )
}