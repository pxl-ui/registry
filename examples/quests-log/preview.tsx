import { WidgetArea } from "@/components/ui/pxl/widget-area";
import { QuestsLog } from "@/components/widgets/pxl/quests-log";

export default function QuestsLogPreview() {
  return (
    <div className="flex items-center justify-center min-h-23">
      <WidgetArea size="md">
        <QuestsLog className="size-full" />
      </WidgetArea>
    </div>
  );
}
