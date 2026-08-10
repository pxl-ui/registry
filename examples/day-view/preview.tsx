import { WidgetArea } from "@/components/ui/pxl/widget-area";
import { DayView } from "@/components/widgets/pxl/day-view";

export default function DayViewPreview() {
  return (
    <div className="flex items-center justify-center min-h-23">
      <WidgetArea size="md">
        <DayView className="size-full" />
      </WidgetArea>
    </div>
  );
}
