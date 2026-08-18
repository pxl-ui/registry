import { WidgetArea } from "@/components/ui/pxl/widget-area";
import { DayView } from "@/components/widgets/pxl/day-view";

export default function DayViewPendingExample() {
  return (
    <WidgetArea size="md">
      <DayView status="pending" className="size-full" />
    </WidgetArea>
  );
}
