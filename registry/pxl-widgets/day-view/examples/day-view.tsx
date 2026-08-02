import { WidgetArea } from "@/components/ui/pxl-ui/widget-area/widget-area";

import { DayView } from "../day-view";

export default function Preview() {
  return (
    <div className="flex items-center justify-center min-h-92">
      <WidgetArea size="md">
        <DayView className="size-full" />
      </WidgetArea>
    </div>
  );
}
