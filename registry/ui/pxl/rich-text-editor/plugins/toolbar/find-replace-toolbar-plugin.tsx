import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useExtensionSignalValue } from "@lexical/react/useExtensionSignalValue";
import { TextSearch } from "lucide-react";

import { Button } from "@/ui/pxl/button";
import { ButtonGroup } from "@/ui/pxl/button-group";
import {
  FindReplaceExtension,
  TOGGLE_FIND_REPLACE_COMMAND,
} from "@/ui/pxl/rich-text-editor/extensions/find-replace";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function FindReplaceToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const isOpen = useExtensionSignalValue(FindReplaceExtension, "isOpen");

  return (
    <ButtonGroup>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              aria-label={t.findAndReplace}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
              onClick={() => {
                editor.dispatchCommand(TOGGLE_FIND_REPLACE_COMMAND, undefined);
              }}
            >
              <TextSearch />
            </Button>
          }
        />
        <TooltipContent>{t.findAndReplace}</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
}
