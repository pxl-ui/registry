import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createQuoteNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { $getRoot, $getSelection } from "lexical";
import { useMemo } from "react";

import {
  type ComponentPickerItem,
  useComponentPickerItems,
} from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

export function QuotePickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();

  const items = useMemo<ComponentPickerItem[]>(
    () => [
      {
        value: "quote",
        label: t.quote,
        icon: <svg className="text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22 20H2v-2h20v2Zm0-4H2v-2h20v2ZM4 8h2v4H2V6h2v2Zm6 0h2v4H8V6h2v2Zm12 4h-8v-2h8v2Zm0-4h-8V6h8v2ZM6 6H4V4h2v2Zm6 0h-2V4h2v2Z"/></svg>,
        keywords: ["quote", "block quote", "blockquote"],
        onSelect: () =>
          editor.update(() => {
            const selection = $getSelection() ?? $getRoot().selectEnd();
            $setBlocksType(selection, () => $createQuoteNode());
          }),
      },
    ],
    [editor, t],
  );

  useComponentPickerItems(items);

  return null;
}
