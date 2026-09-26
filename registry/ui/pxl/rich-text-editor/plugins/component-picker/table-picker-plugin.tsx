import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Table } from "lucide-react";
import { useMemo } from "react";

import { insertTable } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-table-plugin";
import {
  type ComponentPickerItem,
  useComponentPickerItems,
  useComponentPickerQuery,
} from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

const FULL_TABLE_REGEX = /^([1-9]|10)x([1-9]|10)$/;
const PARTIAL_TABLE_REGEX = /^([1-9]|10)x?$/;

export function TablePickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const queryString = useComponentPickerQuery();

  const items = useMemo<ComponentPickerItem[]>(() => {
    const items: ComponentPickerItem[] = [
      {
        value: "table",
        label: t.insertTable,
        icon: <svg className="text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4h-7v4h7V4h2v16h-2v-4h-7v4h7v2H4v-2h7v-4H4v4H2V4h2v4h7V4H4V2h16v2ZM4 14h7v-4H4v4Zm9 0h7v-4h-7v4Z"/></svg>,
        keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
        onSelect: () => insertTable(editor, 3, 3),
      },
    ];

    const query = (queryString ?? "").trim();
    const fullMatch = FULL_TABLE_REGEX.exec(query);
    const partialMatch = fullMatch ? null : PARTIAL_TABLE_REGEX.exec(query);

    const sizes = fullMatch
      ? [{ rows: Number(fullMatch[1]), columns: Number(fullMatch[2]) }]
      : partialMatch
        ? Array.from({ length: 5 }, (_, index) => ({
            rows: Number(partialMatch[1]),
            columns: index + 1,
          }))
        : [];

    for (const { rows, columns } of sizes) {
      items.push({
        value: `table-${rows}x${columns}`,
        label: `${rows}x${columns} ${t.insertTable}`,
        icon: <Table className="text-muted-foreground" />,
        keywords: ["table", `${rows}x${columns}`],
        onSelect: () => insertTable(editor, rows, columns),
      });
    }

    return items;
  }, [editor, t, queryString]);

  useComponentPickerItems(items);

  return null;
}
