import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $getSelection, type LexicalEditor } from "lexical";
import { type ComponentType, type SVGProps, useMemo } from "react";

import { INSERT_DATETIME_COMMAND } from "@/ui/pxl/rich-text-editor/extensions/datetime";
import type { Locale } from "@/ui/pxl/rich-text-editor/locales";
import {
  type ComponentPickerItem,
  useComponentPickerItems,
} from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

const DATETIME_ITEMS: {
  value: string;
  labelKey: keyof Locale;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  offsetDays: number;
  keywords: string[];
}[] = [
  {
    value: "datetime",
    labelKey: "insertDateTime",
    icon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 22H5v-2h14v2ZM5 8h14V6h2v14h-2V10H5v10H3V6h2v2Zm4 10H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-8-4H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 4h6V2h2v2h2v2H5V4h2V2h2v2Z"></path>
        </svg>
      );
    },
    offsetDays: 0,
    keywords: ["date", "time", "datetime", "calendar"],
  },
  {
    value: "datetime-today",
    labelKey: "dateTimeToday",
    icon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11 22H5v-2h6v2Zm6 0h-2v-2h2v2ZM5 8h14V6h2v8h-2v-4H5v10H3V6h2v2Zm10 12h-2v-2h2v2Zm4 0h-2v-2h2v2Zm2-2h-2v-2h2v2ZM9 4h6V2h2v2h2v2H5V4h2V2h2v2Z"></path>
        </svg>
      );
    },
    offsetDays: 0,
    keywords: ["today", "date", "now"],
  },
  {
    value: "datetime-tomorrow",
    labelKey: "dateTimeTomorrow",
    icon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 22H5v-2h8v2Zm6-4h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2ZM5 8h14V6h2v8h-2v-4H5v10H3V6h2v2Zm4-4h6V2h2v2h2v2H5V4h2V2h2v2Z"></path>
        </svg>
      );
    },
    offsetDays: 1,
    keywords: ["tomorrow", "date"],
  },
  {
    value: "datetime-yesterday",
    labelKey: "dateTimeYesterday",
    icon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 22H5v-2h8v2ZM5 8h14V6h2v8h-2v-4H5v10H3V6h2v2Zm16 12h-6v-2h6v2ZM9 4h6V2h2v2h2v2H5V4h2V2h2v2Z"></path>
        </svg>
      );
    },
    offsetDays: -1,
    keywords: ["yesterday", "date"],
  },
];

function insertDateTime(editor: LexicalEditor, offsetDays: number) {
  editor.update(() => {
    if (!$getSelection()) {
      $getRoot().selectEnd();
    }
  });
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  date.setHours(0, 0, 0, 0);
  editor.dispatchCommand(INSERT_DATETIME_COMMAND, { dateTime: date });
}

export function DateTimePickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();

  const items = useMemo<ComponentPickerItem[]>(
    () =>
      DATETIME_ITEMS.map(
        ({ value, labelKey, icon: Icon, offsetDays, keywords }) => ({
          value,
          label: t[labelKey],
          icon: <Icon className="text-muted-foreground" />,
          keywords,
          onSelect: () => insertDateTime(editor, offsetDays),
        }),
      ),
    [editor, t],
  );

  useComponentPickerItems(items);

  return null;
}
