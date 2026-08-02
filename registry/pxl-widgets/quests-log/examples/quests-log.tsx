import { WidgetArea } from "@/components/ui/pxl-ui/widget-area/widget-area";

import { QuestsLog } from "../quests-log";

export default function Preview() {
  return (
    <div className="flex items-center justify-center min-h-92">
      <WidgetArea size="md">
        <QuestsLog className="size-full" />
      </WidgetArea>
    </div>
  );
}
