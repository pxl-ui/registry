import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { $getRoot, $getSelection } from "lexical";
import { Radical } from "lucide-react";
import { useState } from "react";

import { Button } from "@/ui/pxl/button";
import { Checkbox } from "@/ui/pxl/checkbox";
import { Input } from "@/ui/pxl/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/pxl/popover";
import { INSERT_EQUATION_COMMAND } from "@/ui/pxl/rich-text-editor/extensions/equation";
import { KatexRenderer } from "@/ui/pxl/rich-text-editor/nodes/equation-node";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

export function InsertEquationPlugin() {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();
  const { t, dir } = useTranslation();
  const [open, setOpen] = useState(false);
  const [equation, setEquation] = useState("");
  const [inline, setInline] = useState(false);

  const onOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setEquation("");
      setInline(false);
    }
  };

  const onSubmit = () => {
    if (equation.trim() === "") {
      return;
    }
    editor.update(() => {
      if (!$getSelection()) {
        $getRoot().selectEnd();
      }
    });
    editor.dispatchCommand(INSERT_EQUATION_COMMAND, { equation, inline });
    onOpenChange(false);
  };

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <Tooltip>
        <TooltipTrigger
          render={
            <PopoverTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label={t.insertEquation}
                  disabled={!isEditable}
                >
                  <Radical />
                </Button>
              }
            />
          }
        />
        <TooltipContent>{t.insertEquation}</TooltipContent>
      </Tooltip>
      <PopoverContent dir={dir} align="start" className="w-80">
        <div className="flex flex-col gap-2">
          <Input
            dir="ltr"
            className="font-mono"
            placeholder={t.equationPlaceholder}
            value={equation}
            onChange={(event) => setEquation(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                onSubmit();
              }
            }}
          />
          {/** biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={inline}
              onCheckedChange={(checked) => setInline(checked === true)}
            />
            {t.equationInline}
          </label>
          {equation.trim() !== "" && (
            <div
              dir="ltr"
              className="overflow-x-auto rounded-md border border-input px-3 py-2 text-center"
            >
              <KatexRenderer equation={equation} inline={inline} />
            </div>
          )}
          <Button
            size="sm"
            disabled={equation.trim() === ""}
            onClick={onSubmit}
          >
            {t.equationInsert}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
