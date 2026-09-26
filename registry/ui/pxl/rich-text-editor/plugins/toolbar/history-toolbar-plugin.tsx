import { HistoryExtension } from "@lexical/history";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useExtensionDependency } from "@lexical/react/useExtensionComponent";
import { useSignalValue } from "@lexical/react/useExtensionSignalValue";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { REDO_COMMAND, UNDO_COMMAND } from "lexical";

import { Button } from "@/ui/pxl/button";
import { ButtonGroup } from "@/ui/pxl/button-group";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function HistoryToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const { canUndo, canRedo } = useExtensionDependency(HistoryExtension).output;
  const canUndoValue = useSignalValue(canUndo);
  const canRedoValue = useSignalValue(canRedo);
  const isEditable = useLexicalEditable();

  return (
    <ButtonGroup>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              aria-label={t.undo}
              disabled={!isEditable || !canUndoValue}
              onClick={() => {
                editor.dispatchCommand(UNDO_COMMAND, undefined);
              }}
            >
              <svg className="rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 20h-6v-2h6v2Zm2-2h-2v-8h2v8Zm-10-4H8v-2H6v-2H4V8h2V6h2V4h2v4h8v2h-8v4Z"/></svg>
            </Button>
          }
        />
        <TooltipContent>{t.undo}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              aria-label={t.redo}
              disabled={!isEditable || !canRedoValue}
              onClick={() => {
                editor.dispatchCommand(REDO_COMMAND, undefined);
              }}
            >
              <svg className="rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20H6v-2h6v2Zm-6-2H4v-8h2v8Zm8-8H6V8h8V4h2v2h2v2h2v2h-2v2h-2v2h-2v-4Z"/></svg>
            </Button>
          }
        />
        <TooltipContent>{t.redo}</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
}
