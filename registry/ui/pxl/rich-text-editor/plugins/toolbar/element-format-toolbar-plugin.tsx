import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { type ElementFormatType, FORMAT_ELEMENT_COMMAND } from "lexical";
import {
  type LucideIcon,
  PilcrowLeft,
  PilcrowRight,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { useFormatStateValue } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import type { Locale } from "@/ui/pxl/rich-text-editor/locales";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { ToggleGroup, ToggleGroupItem } from "@/ui/pxl/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

type AlignItem = {
  value: Exclude<ElementFormatType, "">;
  labelKey: keyof Locale;
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
};

function AlignToggleGroup({ items }: { items: AlignItem[] }) {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const elementFormat = useFormatStateValue("elementFormat");
  const isEditable = useLexicalEditable();
  return (
    <ToggleGroup
      variant="outline"
      size="sm"
      spacing={0}
      disabled={!isEditable}
      value={[elementFormat]}
      onValueChange={(value) => {
        const next = value[0] as Exclude<ElementFormatType, ""> | undefined;
        if (next) {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, next);
        }
      }}
    >
      {items.map(({ value, labelKey, icon: Icon }) => (
        <Tooltip key={value}>
          <TooltipTrigger
            render={
              <ToggleGroupItem value={value} aria-label={t[labelKey]}>
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

export function ElementFormatToolbarPlugin({
  formats = "all",
}: {
  formats?: "basic" | "all";
}) {
  const { dir } = useTranslation();
  const isRtl = dir === "rtl";

  const alignGroups: AlignItem[][] = [
    [
      {
        value: "left",
        icon() {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 19H2v-2h16v2Zm-4-6H2v-2h12v2Zm8-6H2V5h20v2Z" />
            </svg>
          );
        },
        labelKey: "alignLeft",
      },
      { value: "center", icon() {
        return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 19H4v-2h16v2Zm-2-6H6v-2h12v2Zm4-6H2V5h20v2Z"/></svg>
      }, labelKey: "alignCenter" },
      { value: "right", icon() {
        return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22 19H6v-2h16v2Zm0-6H10v-2h12v2Zm0-6H2V5h20v2Z"/></svg>
      }, labelKey: "alignRight" },
      { value: "justify", icon() {
        return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22 19H2v-2h20v2Zm0-6H2v-2h20v2Zm0-6H2V5h20v2Z"/></svg>
      }, labelKey: "alignJustify" },
    ],
    [
      {
        value: "start",
        icon: isRtl ? PilcrowRight : PilcrowLeft,
        labelKey: "alignStart",
      },
      {
        value: "end",
        icon: isRtl ? PilcrowLeft : PilcrowRight,
        labelKey: "alignEnd",
      },
    ],
  ];

  const groups = formats === "basic" ? alignGroups.slice(0, 1) : alignGroups;

  return (
    <>
      {groups.map((items, groupIndex) => (
        <AlignToggleGroup key={groupIndex.toString()} items={items} />
      ))}
    </>
  );
}
