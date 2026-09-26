import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { Languages } from "lucide-react";

import { Button } from "@/ui/pxl/button";
import { ButtonGroup } from "@/ui/pxl/button-group";
import { toggleRubyEditor } from "@/ui/pxl/rich-text-editor/extensions/ruby";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function RubyToolbarPlugin() {
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
              aria-label={t.insertRuby}
              disabled={!isEditable}
              onClick={() => {
                toggleRubyEditor(editor);
              }}
            >
              <Languages />
            </Button>
          }
        />
        <TooltipContent>{t.insertRuby}</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
}
