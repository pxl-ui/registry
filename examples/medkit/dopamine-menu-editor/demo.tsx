import { DopamineMenuEditor } from "@/components/features/pxl/medkit/dopamine-menu-editor";

import { dopamineMenu } from "../__fixtures__/schemaorg/dopamine-menu";

export default function DopamineMenuEditorDemo() {
  return (
    <DopamineMenuEditor
      className="w-full max-w-xl max-h-160"
      defaultValue={dopamineMenu}
    />
  );
}
