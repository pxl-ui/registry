import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useMemo } from "react";

import { insertCodeBlock } from "@/ui/pxl/rich-text-editor/extensions/code";
import {
  type ComponentPickerItem,
  useComponentPickerItems,
} from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

export function CodePickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();

  const items = useMemo<ComponentPickerItem[]>(
    () => [
      {
        value: "code-block",
        label: t.insertCodeBlock,
        icon: <svg className="text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z"/></svg>,
        keywords: ["code", "codeblock", "javascript", "python", "js"],
        onSelect: () => insertCodeBlock(editor),
      },
    ],
    [editor, t],
  );

  useComponentPickerItems(items);

  return null;
}
