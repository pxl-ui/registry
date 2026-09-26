import { ClipboardDOMImportExtension } from "@lexical/clipboard";
import { $createCodeNode } from "@lexical/code-core";
import {
  ClearEditorExtension,
  HorizontalRuleExtension,
  TabIndentationExtension,
} from "@lexical/extension";
import { HashtagExtension } from "@lexical/hashtag";
import { HistoryExtension } from "@lexical/history";
import {
  $createListItemNode,
  $createListNode,
  CheckListExtension,
  ListExtension,
} from "@lexical/list";
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
import {
  $createHeadingNode,
  $createQuoteNode,
  RichTextExtension,
} from "@lexical/rich-text";
import { TableExtension } from "@lexical/table";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  defineExtension,
} from "lexical";
import { useMemo } from "react";

import { AutoLinkExtension } from "@/ui/pxl/rich-text-editor/extensions/auto-link";
import { AutocompleteExtension } from "@/ui/pxl/rich-text-editor/extensions/autocomplete";
import { CardExtension } from "@/ui/pxl/rich-text-editor/extensions/card";
import { CodeExtension } from "@/ui/pxl/rich-text-editor/extensions/code";
import { CollapsibleExtension } from "@/ui/pxl/rich-text-editor/extensions/collapsible";
import { DateTimeExtension } from "@/ui/pxl/rich-text-editor/extensions/datetime";
import { DragDropPasteExtension } from "@/ui/pxl/rich-text-editor/extensions/drag-drop-paste";
import { EmojiExtension } from "@/ui/pxl/rich-text-editor/extensions/emoji";
import { EquationExtension } from "@/ui/pxl/rich-text-editor/extensions/equation";
import { FigmaExtension } from "@/ui/pxl/rich-text-editor/extensions/figma";
import { FormatStateExtension } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import { ImageExtension } from "@/ui/pxl/rich-text-editor/extensions/image";
import { LayoutExtension } from "@/ui/pxl/rich-text-editor/extensions/layout";
import { LinkExtension } from "@/ui/pxl/rich-text-editor/extensions/link";
import { MentionExtension } from "@/ui/pxl/rich-text-editor/extensions/mention";
import { PollExtension } from "@/ui/pxl/rich-text-editor/extensions/poll";
import { PullQuoteExtension } from "@/ui/pxl/rich-text-editor/extensions/pullquote";
import { RubyExtension } from "@/ui/pxl/rich-text-editor/extensions/ruby";
import { ShortcutsExtension } from "@/ui/pxl/rich-text-editor/extensions/shortcuts";
import { SpecialTextExtension } from "@/ui/pxl/rich-text-editor/extensions/special-text";
import { SpeechToTextExtension } from "@/ui/pxl/rich-text-editor/extensions/speech-to-text";
import { TabFocusExtension } from "@/ui/pxl/rich-text-editor/extensions/tab-focus";
import { TwitterExtension } from "@/ui/pxl/rich-text-editor/extensions/twitter";
import { YouTubeExtension } from "@/ui/pxl/rich-text-editor/extensions/youtube";
import { ActivityBar } from "@/ui/pxl/rich-text-editor/plugins/activitybar/activitybar-plugin";
import { CountPlugin } from "@/ui/pxl/rich-text-editor/plugins/activitybar/count-plugin";
import { ReadOnlyTogglePlugin } from "@/ui/pxl/rich-text-editor/plugins/activitybar/read-only-toggle-plugin";
import { ShortcutPlugin } from "@/ui/pxl/rich-text-editor/plugins/activitybar/shortcut-plugin";
import { SpeechToTextPlugin } from "@/ui/pxl/rich-text-editor/plugins/activitybar/speech-to-text-plugin";
import { AutoEmbedPlugin } from "@/ui/pxl/rich-text-editor/plugins/auto-embed-plugin";
import { BlockInsert } from "@/ui/pxl/rich-text-editor/plugins/block-insert/block-insert-plugin";
import { InsertCodeBlockPlugin } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-code-block-plugin";
import { InsertColumnsPlugin } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-columns-plugin";
import { InsertEmojiPlugin } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-emoji-plugin";
import { InsertEquationPlugin } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-equation-plugin";
import { InsertHorizontalRulePlugin } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-horizontal-rule-plugin";
import { InsertImagePlugin } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-image-plugin";
import { InsertTablePlugin } from "@/ui/pxl/rich-text-editor/plugins/block-insert/insert-table-plugin";
import { BulletedListPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/bulleted-list-picker-plugin";
import { CardPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/card-picker-plugin";
import { CheckListPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/check-list-picker-plugin";
import { CodePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/code-picker-plugin";
import { CollapsiblePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/collapsible-picker-plugin";
import { ColumnsPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/columns-picker-plugin";
import { ComponentPicker } from "@/ui/pxl/rich-text-editor/plugins/component-picker/component-picker-plugin";
import { DateTimePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/datetime-picker-plugin";
import { DividerPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/divider-picker-plugin";
import { HeadingPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/heading-picker-plugin";
import { ImagePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/image-picker-plugin";
import { NumberedListPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/numbered-list-picker-plugin";
import { ParagraphPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/paragraph-picker-plugin";
import { PollPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/poll-picker-plugin";
import { PullQuotePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/pullquote-picker-plugin";
import { QuotePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/quote-picker-plugin";
import { ReviewPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/review-picker-plugin";
import { TablePickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/component-picker/table-picker-plugin";
import { ContentEditable } from "@/ui/pxl/rich-text-editor/plugins/content-editable";
import { ContextMenuPlugin } from "@/ui/pxl/rich-text-editor/plugins/context-menu-plugin";
import { ReactFindReplaceExtension } from "@/ui/pxl/rich-text-editor/plugins/decorator/find-replace-panel";
import { ReactReviewExtension } from "@/ui/pxl/rich-text-editor/plugins/decorator/review-plugin";
import { DraggableBlockPlugin } from "@/ui/pxl/rich-text-editor/plugins/draggable-block-plugin";
import { EmojiPickerPlugin } from "@/ui/pxl/rich-text-editor/plugins/emoji-picker-plugin";
import { FloatingToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/floating/floating-toolbar-plugin";
import { LinkEditorPlugin } from "@/ui/pxl/rich-text-editor/plugins/floating/link-editor-plugin";
import { RubyEditorPlugin } from "@/ui/pxl/rich-text-editor/plugins/floating/ruby-editor-plugin";
import { TableHoverActionsPlugin } from "@/ui/pxl/rich-text-editor/plugins/floating/table-hover-actions-plugin";
import {
  LanguageProvider,
  LanguageSelectorPlugin,
} from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { MentionPlugin } from "@/ui/pxl/rich-text-editor/plugins/mention-plugin";
import { BlockFormatToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/block-format-toolbar-plugin";
import { ClearToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/clear-toolbar-plugin";
import { ColorToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/color-toolbar-plugin";
import { ElementFormatToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/element-format-toolbar-plugin";
import { FontFamilyToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/font-family-toolbar-plugin";
import { FontSizeToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/font-size-toolbar-plugin";
import { HistoryToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/history-toolbar-plugin";
import { ImportExportToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/import-export-toolbar-plugin";
import { IndentToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/indent-toolbar-plugin";
import { LinkToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/link-toolbar-plugin";
import { RubyToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/ruby-toolbar-plugin";
import { TextFormatToolbarPlugin } from "@/ui/pxl/rich-text-editor/plugins/toolbar/text-format-toolbar-plugin";
import { Toolbar } from "@/ui/pxl/rich-text-editor/plugins/toolbar/toolbar-plugin";
import { editorTheme } from "@/ui/pxl/rich-text-editor/theme";
import { EMOJI } from "@/ui/pxl/rich-text-editor/transformers/emoji-transformer";
import { HR } from "@/ui/pxl/rich-text-editor/transformers/horizontal-rule-transformer";
import { IMAGE } from "@/ui/pxl/rich-text-editor/transformers/image-transformer";
import { TABLE } from "@/ui/pxl/rich-text-editor/transformers/table-transformer";

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

function FullEditor() {
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
          MentionExtension,
          SpecialTextExtension,
          AutocompleteExtension,
          DragDropPasteExtension,
          TabFocusExtension,
          SpeechToTextExtension,
          ShortcutsExtension,
          CardExtension,
          CollapsibleExtension,
          DateTimeExtension,
          PullQuoteExtension,
          ReactReviewExtension,
          PollExtension,
          RubyExtension,
          YouTubeExtension,
          TwitterExtension,
          FigmaExtension,
          FormatStateExtension,
          ReactFindReplaceExtension,
          ClearEditorExtension,
          ClipboardDOMImportExtension,
        ],
        $initialEditorState: () => {
          $getRoot().append(
            $createHeadingNode("h1").append($createTextNode("Editor X")),
            $createParagraphNode().append(
              $createTextNode("A "),
              $createTextNode("complete").toggleFormat("bold"),
              $createTextNode(" writing surface: "),
              $createTextNode("rich text").toggleFormat("italic"),
              $createTextNode(", "),
              $createTextNode("markdown shortcuts").toggleFormat("underline"),
              $createTextNode(", and "),
              $createTextNode("blocks").toggleFormat("code"),
              $createTextNode(", all in one place."),
            ),
            $createHeadingNode("h2").append(
              $createTextNode("Everything included"),
            ),
            $createListNode("bullet").append(
              $createListItemNode().append(
                $createTextNode(
                  "Tables, images, equations, and embeds from the toolbar",
                ),
              ),
              $createListItemNode().append(
                $createTextNode('A slash menu: type "/" to insert any block'),
              ),
              $createListItemNode().append(
                $createTextNode(
                  "Drag handles, a floating toolbar, mentions, and emoji",
                ),
              ),
            ),
            $createQuoteNode().append(
              $createTextNode(
                "Select any text to format it in place, or grab a drag handle to rearrange the page.",
              ),
            ),
            $createCodeNode("markdown").append(
              $createTextNode("## Markdown works too, as you type"),
            ),
            $createParagraphNode().append(
              $createTextNode(
                'Try it now: press "/" on the empty line below, or explore the toolbar above.',
              ),
            ),
            $createParagraphNode(),
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
        <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-lg border border-input dark:bg-input/30">
          <Toolbar>
            <HistoryToolbarPlugin />
            <BlockFormatToolbarPlugin />
            <FontFamilyToolbarPlugin />
            <FontSizeToolbarPlugin />
            <ColorToolbarPlugin />
            <TextFormatToolbarPlugin formats="basic" />
            <ElementFormatToolbarPlugin formats="basic" />
            <IndentToolbarPlugin />
            <BlockInsert>
              <InsertCodeBlockPlugin />
              <InsertColumnsPlugin />
              <InsertEmojiPlugin />
              <InsertEquationPlugin />
              <InsertHorizontalRulePlugin />
              <InsertImagePlugin />
              <InsertTablePlugin />
            </BlockInsert>
            <ClearToolbarPlugin />
            <ImportExportToolbarPlugin transformers={EDITOR_TRANSFORMERS} />
          </Toolbar>
          <div className="relative min-w-0 flex-1 overflow-y-auto">
            <ContentEditable variant="draggable" />
            <DraggableBlockPlugin />
            <FloatingToolbarPlugin>
              <LinkToolbarPlugin />
              <RubyToolbarPlugin />
            </FloatingToolbarPlugin>
            <LinkEditorPlugin />
            <RubyEditorPlugin />
            <TableHoverActionsPlugin />
            <EmojiPickerPlugin />
            <MentionPlugin />
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
              <ColumnsPickerPlugin />
              <ImagePickerPlugin />
              <CardPickerPlugin />
              <CollapsiblePickerPlugin />
              <DateTimePickerPlugin />
              <PullQuotePickerPlugin />
              <ReviewPickerPlugin />
              <PollPickerPlugin />
            </ComponentPicker>
          </div>
          <ActivityBar>
            <div className="flex items-center gap-3">
              <CountPlugin />
            </div>
            <div className="ms-auto flex items-center gap-3">
              <SpeechToTextPlugin />
              <ReadOnlyTogglePlugin />
              <ShortcutPlugin />
              <LanguageSelectorPlugin />
            </div>
          </ActivityBar>
        </div>
      </LexicalExtensionComposer>
    </LanguageProvider>
  );
}

export { FullEditor };
