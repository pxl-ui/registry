import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { Sparkles } from "lucide-react";

import { Button } from "@/ui/pxl/button";
import { ButtonGroup } from "@/ui/pxl/button-group";
import { OPEN_AI_EDITOR_COMMAND } from "@/ui/pxl/rich-text-editor/extensions/ai";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function AiToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();
  const { t } = useTranslation();

  return (
    <ButtonGroup>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              aria-label={t.askAi}
              disabled={!isEditable}
              onClick={() => {
                editor.dispatchCommand(OPEN_AI_EDITOR_COMMAND, undefined);
              }}
            >
              <Sparkles />
            </Button>
          }
        />
        <TooltipContent>{t.askAi}</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
}
