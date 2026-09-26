import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { CodeXml } from "lucide-react";

import { Button } from "@/ui/pxl/button";
import { insertCodeBlock } from "@/ui/pxl/rich-text-editor/extensions/code";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function InsertCodeBlockPlugin() {
  const [editor] = useLexicalComposerContext();
  const { t } = useTranslation();
  const isEditable = useLexicalEditable();

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            aria-label={t.insertCodeBlock}
            disabled={!isEditable}
            onClick={() => insertCodeBlock(editor)}
          >
            <CodeXml />
          </Button>
        }
      />
      <TooltipContent>{t.insertCodeBlock}</TooltipContent>
    </Tooltip>
  );
}
