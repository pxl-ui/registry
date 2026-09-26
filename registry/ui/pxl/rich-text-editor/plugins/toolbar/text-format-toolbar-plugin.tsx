import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { FORMAT_TEXT_COMMAND, type TextFormatType } from "lexical";
import {
  Highlighter,
  type LucideIcon,
  Strikethrough,
  Subscript,
  Superscript
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { useFormatStateValue } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import type { Locale } from "@/ui/pxl/rich-text-editor/locales";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { ToggleGroup, ToggleGroupItem } from "@/ui/pxl/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

const FORMAT_GROUPS: {
  format: TextFormatType;
  labelKey: keyof Locale;
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
}[][] = [
  [
    {
      format: "bold",
      labelKey: "bold",
      icon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 4v2H8v5h6V6h2v7H8v5h8v2H6V4h8Zm4 14h-2v-5h2v5Z"></path>
          </svg>
        );
      },
    },
    {
      format: "italic",
      labelKey: "italic",
      icon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 18h1v2H6v-2h3v-4h2v4Zm2-4h-2v-4h2v4Zm2-4h-2V6h-1V4h6v2h-3v4Z"></path>
          </svg>
        );
      },
    },
    {
      format: "underline",
      labelKey: "underline",
      icon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 20H5v-2h14v2Zm-3-4H8v-2h8v2Zm-8-2H6V4h2v10Zm10 0h-2V4h2v10Z"></path>
          </svg>
        );
      },
    },
    { format: "strikethrough", labelKey: "strikethrough", icon: Strikethrough },
  ],
  [
    { format: "highlight", labelKey: "highlight", icon: Highlighter },
    {
      format: "code",
      labelKey: "inlineCode",
      icon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5h2v2H8V5ZM6 7h2v2H6V7ZM4 9h2v2H4V9Zm-2 2h2v2H2v-2Zm2 2h2v2H4v-2Zm2 2h2v2H6v-2Zm2 2h2v2H8v-2Zm8-12h-2v2h2V5Zm2 2h-2v2h2V7Zm2 2h-2v2h2V9Zm2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Zm-2 2h-2v2h2v-2Z" />
          </svg>
        );
      },
    },
  ],
  [
    { format: "subscript", labelKey: "subscript", icon: Subscript },
    { format: "superscript", labelKey: "superscript", icon: Superscript },
  ],
  [
    {
      format: "uppercase",
      labelKey: "uppercase",
      icon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 11h5V7h2v10H9v-4H4v4H2V7h2v4Zm14-4h-3v2h3V7h2v4h-5v4h5v2h-7V5h5v2Zm4 8h-2v-4h2v4ZM9 7H4V5h5v2Z"></path>
          </svg>
        );
      },
    },
    {
      format: "lowercase",
      labelKey: "lowercase",
      icon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 17H4v-2h5v-5H4V8h7v9Zm4-9h5v2h-5v5h5v2h-7V5h2v3ZM4 15H2v-5h2v5Zm18 0h-2v-5h2v5Z"></path>
          </svg>
        );
      },
    },
    {
      format: "capitalize",
      labelKey: "titleCase",
      icon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 11h5V7h2v10H9v-4H4v4H2V7h2v4Zm18 6h-7v-2h5v-5h-5V8h7v9Zm-7-2h-2v-5h2v5ZM9 7H4V5h5v2Z"></path>
          </svg>
        );
      },
    },
  ],
];

function FormatToggleGroup({
  items,
}: {
  items: (typeof FORMAT_GROUPS)[number];
}) {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const formats = useFormatStateValue("formats");
  const isEditable = useLexicalEditable();
  return (
    <ToggleGroup
      multiple
      variant="outline"
      size="sm"
      spacing={0}
      disabled={!isEditable}
      value={formats}
      onValueChange={(value) => {
        const next = new Set(value as TextFormatType[]);
        for (const { format } of items) {
          if (next.has(format) !== formats.includes(format)) {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
          }
        }
      }}
    >
      {items.map(({ format, labelKey, icon: Icon }) => (
        <Tooltip key={format}>
          <TooltipTrigger
            render={
              <ToggleGroupItem value={format} aria-label={t[labelKey]}>
                <Icon />
              </ToggleGroupItem>
            }
          />
          <TooltipContent>{t[labelKey]}</TooltipContent>
        </Tooltip>
      ))}
    </ToggleGroup>
  );
}

export function TextFormatToolbarPlugin({
  formats = "all",
}: {
  formats?: "basic" | "all";
}) {
  const groups =
    formats === "basic" ? FORMAT_GROUPS.slice(0, 1) : FORMAT_GROUPS;
  return (
    <>
      {groups.map((items, groupIndex) => (
        <FormatToggleGroup key={groupIndex.toString()} items={items} />
      ))}
    </>
  );
}
