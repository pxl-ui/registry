import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/extension";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $getSelection } from "lexical";
import { useMemo } from "react";

import {
  type ComponentPickerItem,
  useComponentPickerItems,
} from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

export function DividerPickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();

  const items = useMemo<ComponentPickerItem[]>(
    () => [
      {
        value: "divider",
        label: t.insertHorizontalRule,
        icon: <svg className="text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4 11h16v2H4z"/></svg>,
        keywords: ["horizontal rule", "divider", "hr", "separator"],
        onSelect: () => {
          editor.update(() => {
            if (!$getSelection()) {
              $getRoot().selectEnd();
            }
          });
          editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
        },
      },
    ],
    [editor, t],
  );

  useComponentPickerItems(items);

  return null;
}
