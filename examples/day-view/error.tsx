import { WidgetArea } from "@/components/ui/pxl/widget-area";
import { DayView } from "@/components/widgets/pxl/day-view";

export default function DayViewErrorExample() {
  return (
    <WidgetArea size="md">
      <DayView
        status="error"
        errorMessage="Something Failed"
        className="size-full"
      />
    </WidgetArea>
  );
}
