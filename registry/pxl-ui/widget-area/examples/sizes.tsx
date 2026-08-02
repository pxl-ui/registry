import { WidgetArea } from "../widget-area";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <WidgetArea size="sm" className="bg-red-200 rounded-sm flex items-center justify-center">
        Small
      </WidgetArea>
      <WidgetArea size="md" className="bg-red-200 rounded-sm flex items-center justify-center">
        Medium
      </WidgetArea>
      <WidgetArea size="lg" className="bg-red-200 rounded-sm flex items-center justify-center">
        Large
      </WidgetArea>
      <WidgetArea size="xl" className="bg-red-200 rounded-sm flex items-center justify-center">
        ExtraLarge
      </WidgetArea>
    </div>
  )
}