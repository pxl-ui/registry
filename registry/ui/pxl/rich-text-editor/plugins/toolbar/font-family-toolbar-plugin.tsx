import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { $patchStyleText } from "@lexical/selection";
import { $getRoot, $getSelection } from "lexical";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/ui/pxl/combobox";
import { useFormatStateValue } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

const FONT_FAMILIES = [
  "Able 5",
  "Pixel Digivolve",
  "Monogram",
  "Illusion Book",
  "Not Jam Blackletter 16",
];

export function FontFamilyToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t, dir } = useTranslation();
  const fontFamily = useFormatStateValue("fontFamily");
  const isEditable = useLexicalEditable();

  return (
    <Combobox
      items={FONT_FAMILIES}
      value={fontFamily || FONT_FAMILIES[0]}
      disabled={!isEditable}
      onValueChange={(value) => {
        if (!value) {
          return;
        }
        editor.update(() => {
          const selection = $getSelection() ?? $getRoot().selectEnd();
          $patchStyleText(selection, { "font-family": value });
        });
      }}
    >
      <ComboboxInput
        aria-label={t.fontFamilyPlaceholder}
        disabled={!isEditable}
        className="h-7 w-44"
      />
      <ComboboxContent dir={dir}>
        <ComboboxEmpty>{t.noMatches}</ComboboxEmpty>
        <ComboboxList>
          {(family: string) => (
            <ComboboxItem key={family} value={family}>
              <span style={{ fontFamily: family }}>{family}</span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
