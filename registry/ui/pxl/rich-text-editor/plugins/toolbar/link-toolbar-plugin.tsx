import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";

import { useFormatStateValue } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import { OPEN_LINK_EDITOR_COMMAND } from "@/ui/pxl/rich-text-editor/extensions/link";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { ToggleGroup, ToggleGroupItem } from "@/ui/pxl/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function LinkToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();
  const { t } = useTranslation();
  const isLink = useFormatStateValue("isLink");

  return (
    <ToggleGroup
      multiple
      variant="outline"
      size="sm"
      spacing={0}
      disabled={!isEditable}
      value={isLink ? ["link"] : []}
      onValueChange={() => {
        if (isLink) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        } else {
          editor.dispatchCommand(OPEN_LINK_EDITOR_COMMAND, undefined);
        }
      }}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <ToggleGroupItem value="link" aria-label={t.insertLink}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H4v-2h7v2Zm9 0h-7v-2h7v2ZM4 16H2V8h2v8Zm18 0h-2V8h2v8Zm-5-3H7v-2h10v2Zm-6-5H4V6h7v2Zm9 0h-7V6h7v2Z"/></svg>
            </ToggleGroupItem>
          }
        />
        <TooltipContent>{t.insertLink}</TooltipContent>
      </Tooltip>
    </ToggleGroup>
  );
}
