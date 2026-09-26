import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createHeadingNode, type HeadingTagType } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import { $getRoot, $getSelection } from "lexical";
import { type ComponentType, type SVGProps, useMemo } from "react";

import type { Locale } from "@/ui/pxl/rich-text-editor/locales";
import {
  type ComponentPickerItem,
  useComponentPickerItems,
} from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

const HEADINGS: {
  tag: HeadingTagType;
  labelKey: keyof Locale;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    tag: "h1",
    labelKey: "heading1",
    icon(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 11h6V6h2v12h-2v-5H5v5H3V6h2v5Zm16-3v10h-2v-8h-2V8h4Zm-4 4h-2v-2h2v2Z" />
        </svg>
      );
    },
  },
  {
    tag: "h2",
    labelKey: "heading2",
    icon(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 11h6V6h2v12h-2v-5H5v5H3V6h2v5Zm12 5h4v2h-6v-4h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-2-4v2h-4V8h4Z" />
        </svg>
      );
    },
  },
  {
    tag: "h3",
    labelKey: "heading3",
    icon(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 11h6V6h2v12h-2v-5H5v5H3V6h2v5Zm14 7h-4v-2h4v2Zm2-2h-2v-2h2v2Zm-2-2h-4v-2h4v2Zm2-2h-2v-2h2v2Zm-2-4v2h-4V8h4Z" />
        </svg>
      );
    },
  },
];

export function HeadingPickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();

  const items = useMemo<ComponentPickerItem[]>(
    () =>
      HEADINGS.map(({ tag, labelKey, icon: Icon }) => ({
        value: tag,
        label: t[labelKey],
        icon: <Icon className="text-muted-foreground" />,
        keywords: ["heading", "header", tag],
        onSelect: () =>
          editor.update(() => {
            const selection = $getSelection() ?? $getRoot().selectEnd();
            $setBlocksType(selection, () => $createHeadingNode(tag));
          }),
      })),
    [editor, t],
  );

  useComponentPickerItems(items);

  return null;
}
