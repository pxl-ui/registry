import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { $patchStyleText } from "@lexical/selection";
import { $getRoot, $getSelection } from "lexical";
import { Baseline, type LucideIcon, PaintBucket } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/pxl/button";
import { ButtonGroup } from "@/ui/pxl/button-group";
import { useFormatStateValue } from "@/ui/pxl/rich-text-editor/extensions/format-state";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

function ColorPicker({
  property,
  label,
  icon: Icon,
}: {
  property: "color" | "background-color";
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;
}) {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();
  const color = useFormatStateValue(
    property === "color" ? "color" : "backgroundColor",
  );

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <label
            data-slot="button"
            aria-label={label}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
              "cursor-pointer",
              !isEditable && "pointer-events-none opacity-50",
            )}
          >
            <Icon />
            <input
              type="color"
              aria-label={label}
              value={HEX_COLOR.test(color) ? color : "#000000"}
              disabled={!isEditable}
              onChange={(event) => {
                const value = event.target.value;
                editor.update(() => {
                  const selection = $getSelection() ?? $getRoot().selectEnd();
                  $patchStyleText(selection, { [property]: value });
                });
              }}
              className="sr-only"
            />
          </label>
        }
      />
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export function ColorToolbarPlugin() {
  const { t } = useTranslation();
  return (
    <ButtonGroup>
      <ColorPicker
        property="color"
        label={t.textColor}
        icon={(props: SVGProps<SVGSVGElement>) => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              {...props}
            >
              <path d="M4 19h6v-8h2v10H2V11h2v8Zm16-4h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM8 9h2v2H4V9h2V7h2v2Zm8 2h-2V9h2v2Zm4 0h-2V9h2v2Zm-6-2h-2V7h2v2Zm4 0h-2V7h2v2Zm-2-2h-2V5h2v2Zm4 0h-2V5h2v2Zm-2-2h-2V3h2v2Zm2-2h-2V1h2v2Z" />
            </svg>
          );
        }}
      />
      <ColorPicker
        property="background-color"
        label={t.backgroundColor}
        icon={(props: SVGProps<SVGSVGElement>) => {
          return (
            <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 22H6v-2h12v2ZM6 20H4V10h2v10Zm14 0h-2V10h2v10ZM8 8h8V4h2v6h-2v2h-2v2h-2v-2h-2v4H8v-6H6V4h2v4Zm8-4H8V2h8v2Z"></path>
            </svg>
          );
        }}
      />
    </ButtonGroup>
  );
}
