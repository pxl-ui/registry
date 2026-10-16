import { useState } from "react";

import { DopamineMenuEditor } from "@/components/features/pxl/medkit/dopamine-menu-editor";

import { dopamineMenu } from "../__fixtures__/schemaorg/dopamine-menu";

export default function DopamineMenuEditorMobile() {
  const [menu, setMenu] = useState(dopamineMenu);
  return (
    <div className="w-80 max-w-full">
      <DopamineMenuEditor value={menu} onValueChange={setMenu} />
    </div>
  );
}
