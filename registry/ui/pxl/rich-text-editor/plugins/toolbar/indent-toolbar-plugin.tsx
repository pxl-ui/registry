import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND } from "lexical";

import { Button } from "@/ui/pxl/button";
import { ButtonGroup } from "@/ui/pxl/button-group";
import { useFormatStateValue } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function IndentToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const indent = useFormatStateValue("indent");
  const isEditable = useLexicalEditable();

  return (
    <ButtonGroup>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              aria-label={t.outdent}
              disabled={!isEditable || indent === 0}
              onClick={() => {
                editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
              }}
            >
              <svg className="scale-x-[-1] rtl:scale-x-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 19H15V17H17V19ZM19 13H21V15H19V17H17V15H7V13H17V11H19V13ZM7 13H5V11H7V13ZM5 11H3V5H5V11ZM17 11H15V9H17V11Z"></path></svg>
            </Button>
          }
        />
        <TooltipContent>{t.outdent}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              aria-label={t.indent}
              disabled={!isEditable}
              onClick={() => {
                editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
              }}
            >
              <svg className="rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 19H15V17H17V19ZM19 13H21V15H19V17H17V15H7V13H17V11H19V13ZM7 13H5V11H7V13ZM5 11H3V5H5V11ZM17 11H15V9H17V11Z"></path></svg>
            </Button>
          }
        />
        <TooltipContent>{t.indent}</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
}
