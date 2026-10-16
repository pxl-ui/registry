import { DopamineMenuEditor } from "@/components/features/pxl/medkit/dopamine-menu-editor";

import { dopamineMenu } from "../__fixtures__/schemaorg/dopamine-menu";

export default function DopamineMenuEditorWidget() {
  return (
    <div className="w-60 max-w-full">
      <DopamineMenuEditor className="h-80" defaultValue={dopamineMenu} />
    </div>
  );
}
