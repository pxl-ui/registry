import * as React from "react";

import { Button } from "@/components/ui/button";
import { CopyIcon } from "@/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  command?: "add" | "list";
  registryId: string;
  registryComponent?: string;
};

export function RegistryCommand({ command = "add", registryId, registryComponent }: Props) {
  const commandStr = registryComponent
    ? `pnpm dlx shadcn@latest ${command} ${registryId}/${registryComponent}`
    : `pnpm dlx shadcn@latest ${command} ${registryId}`;

  const [copied, setCopied] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commandStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative">
      <pre className="mt-2 rounded-lg bg-slate-100 p-4 whitespace-pre-wrap wrap-break-word">
        <code className="text-sm text-slate-900">{commandStr}</code>
      </pre>
      <TooltipProvider>
        <Tooltip open={copied || tooltipOpen} onOpenChange={setTooltipOpen}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={copyToClipboard}
            >
              <CopyIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? "Copied!" : "Copy to clipboard"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
