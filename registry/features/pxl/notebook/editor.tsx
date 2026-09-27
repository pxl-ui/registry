"use client";

import { ClipboardDOMImportExtension } from "@lexical/clipboard";
import {
  ClearEditorExtension,
  HorizontalRuleExtension,
  TabIndentationExtension,
} from "@lexical/extension";
import { HashtagExtension } from "@lexical/hashtag";
import { HistoryExtension } from "@lexical/history";
import { CheckListExtension, ListExtension } from "@lexical/list";
import {
  CHECK_LIST,
  ELEMENT_TRANSFORMERS,
  MULTILINE_ELEMENT_TRANSFORMERS,
  registerMarkdownShortcuts,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
  type Transformer,
} from "@lexical/markdown";
import { LexicalExtensionComposer } from "@lexical/react/LexicalExtensionComposer";
import { $createHeadingNode, RichTextExtension } from "@lexical/rich-text";
import { TableExtension } from "@lexical/table";
import { $createTextNode, $getRoot, defineExtension } from "lexical";
import { useMemo } from "react";

import { AutoLinkExtension } from "@/ui/pxl/rich-text-editor/extensions/auto-link";
import { AutocompleteExtension } from "@/ui/pxl/rich-text-editor/extensions/autocomplete";
import { CodeExtension } from "@/ui/pxl/rich-text-editor/extensions/code";
import { DateTimeExtension } from "@/ui/pxl/rich-text-editor/extensions/datetime";
import { DragDropPasteExtension } from "@/ui/pxl/rich-text-editor/extensions/drag-drop-paste";
import { EmojiExtension } from "@/ui/pxl/rich-text-editor/extensions/emoji";
import { EquationExtension } from "@/ui/pxl/rich-text-editor/extensions/equation";
import { FormatStateExtension } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import { ImageExtension } from "@/ui/pxl/rich-text-editor/extensions/image";
import { LayoutExtension } from "@/ui/pxl/rich-text-editor/extensions/layout";
import { LinkExtension } from "@/ui/pxl/rich-text-editor/extensions/link";
import { ShortcutsExtension } from "@/ui/pxl/rich-text-editor/extensions/shortcuts";
import { SpecialTextExtension } from "@/ui/pxl/rich-text-editor/extensions/special-text";
import { SpeechToTextExtension } from "@/ui/pxl/rich-text-editor/extensions/speech-to-text";
import { TabFocusExtension } from "@/ui/pxl/rich-text-editor/extensions/tab-focus";
import { AutoEmbedPlugin } from "@/ui/pxl/rich-text-editor/plugins/auto-embed-plugin";
import { BulletedListPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/bulleted-list-picker-plugin";
import { CheckListPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/check-list-picker-plugin";
import { CodePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/code-picker-plugin";
import { ComponentPicker } from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { DateTimePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/datetime-picker-plugin";
import { DividerPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/divider-picker-plugin";
import { HeadingPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/heading-picker-plugin";
import { NumberedListPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/numbered-list-picker-plugin";
import { ParagraphPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/paragraph-picker-plugin";
import { QuotePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/quote-picker-plugin";
import { TablePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/table-picker-plugin";
import { ContentEditable } from "@/ui/pxl/rich-text-editor/plugins/content-editable";
import { ContextMenuPlugin } from "@/ui/pxl/rich-text-editor/plugins/context-menu-plugin";
import { ReactFindReplaceExtension } from "@/ui/pxl/rich-text-editor/plugins/decorator/find-replace-panel";
import { DraggableBlockPlugin } from "@/ui/pxl/rich-text-editor/plugins/draggable-block-plugin";
import { EmojiPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/emoji-picker-plugin";
import { FloatingToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/floating/floating-toolbar-plugin";
import { LinkEditorPlugin } from "@/ui/pxl/rich-text-editor/plugins/floating/link-editor-plugin";
import { TableHoverActionsPlugin } from "@/ui/pxl/rich-text-editor/plugins/floating/table-hover-actions-plugin";
import { LanguageProvider } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { LinkToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/link-toolbar-plugin";
import { editorTheme } from "@/ui/pxl/rich-text-editor/theme";
import { EMOJI } from "@/ui/pxl/rich-text-editor/transformers/emoji-transformer";
import { HR } from "@/ui/pxl/rich-text-editor/transformers/horizontal-rule-transformer";
import { IMAGE } from "@/ui/pxl/rich-text-editor/transformers/image-transformer";
import { TABLE } from "@/ui/pxl/rich-text-editor/transformers/table-transformer";

import "~/examples/fonts/not-jam-blackletter-16.css";

const EDITOR_TRANSFORMERS: Transformer[] = [
  TABLE,
  HR,
  IMAGE,
  EMOJI,
  CHECK_LIST,
  ...ELEMENT_TRANSFORMERS,
  ...MULTILINE_ELEMENT_TRANSFORMERS,
  ...TEXT_FORMAT_TRANSFORMERS,
  ...TEXT_MATCH_TRANSFORMERS,
];

function Editor() {
  const app = useMemo(
    () =>
      defineExtension({
        name: "@shadcn-editor/editor",
        namespace: "shadcn-editor",
        dependencies: [
          RichTextExtension,
          HistoryExtension,
          TabIndentationExtension,
          ListExtension,
          CheckListExtension,
          HashtagExtension,
          LinkExtension,
          AutoLinkExtension,
          CodeExtension,
          LayoutExtension,
          EmojiExtension,
          EquationExtension,
          TableExtension,
          HorizontalRuleExtension,
          ImageExtension,
          SpecialTextExtension,
          AutocompleteExtension,
          DragDropPasteExtension,
          TabFocusExtension,
          SpeechToTextExtension,
          ShortcutsExtension,
          DateTimeExtension,
          FormatStateExtension,
          ReactFindReplaceExtension,
          ClearEditorExtension,
          ClipboardDOMImportExtension,
        ],
        $initialEditorState: () => {
          $getRoot().append(
            $createHeadingNode("h1").append($createTextNode("Editor X")),

            $createHeadingNode("h2").append(
              $createTextNode("Everything included"),
            ),
          );
        },
        register: (editor) =>
          registerMarkdownShortcuts(editor, EDITOR_TRANSFORMERS),
        theme: editorTheme,
      }),
    [],
  );

  return (
    <LanguageProvider>
      <LexicalExtensionComposer extension={app} contentEditable={null}>
        <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden dark:bg-input/30">
          <div className="relative min-w-0 flex-1 overflow-y-auto">
            <ContentEditable variant="draggable" />
            <DraggableBlockPlugin />
            <FloatingToolbarPlugin>
              <LinkToolbarPlugin />
            </FloatingToolbarPlugin>
            <LinkEditorPlugin />
            <TableHoverActionsPlugin />
            <EmojiPickerPlugin />
            <AutoEmbedPlugin />
            <ContextMenuPlugin />
            <ComponentPicker>
              <ParagraphPickerPlugin />
              <HeadingPickerPlugin />
              <TablePickerPlugin />
              <NumberedListPickerPlugin />
              <BulletedListPickerPlugin />
              <CheckListPickerPlugin />
              <QuotePickerPlugin />
              <CodePickerPlugin />
              <DividerPickerPlugin />
              <DateTimePickerPlugin />
            </ComponentPicker>
          </div>
        </div>
      </LexicalExtensionComposer>
    </LanguageProvider>
  );
}

export { Editor };
