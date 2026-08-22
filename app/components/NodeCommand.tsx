import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";

import { Button } from "@/components/ui/pxl/button";
import { Card, CardContent, CardHeader } from "@/components/ui/pxl/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/pxl/tabs";
import { cn } from "@/lib/utils";

export default function NodeCommad({
  className,
  command,
  tabs = [
    {
      label: "pnpm",
      template: "pnpm dlx {cmd}",
    },
    {
      label: "npm",
      template: "npx {cmd}",
    },
    {
      label: "yarn",
      template: "yarn dlx {cmd}",
    },
    {
      label: "bun",
      template: "bunx --bun {cmd}",
    },
  ],
}: {
  className?: string;
  command: string;
  tabs?: {
    label: string;
    template: string;
  }[];
}) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [_, copyToClipboard] = useCopyToClipboard();

  function handleCopy(value: string) {
    copyToClipboard(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className={cn("not-content mt-6", className)}>
      <Tabs
        value={activeTabIndex}
        onValueChange={(val) => setActiveTabIndex(val)}
      >
        <Card variant="muted" className="pixel-color-border!">
          <CardHeader>
            <svg
              className="absolute top-5 left-4 size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h2v16h-2v2H4v-2H2V4h2V2h16v2ZM6 16v2h2v-2H6Zm6 0v2h4v-2h-4Zm-4-2v2h2v-2H8Zm-2-2v2h2v-2H6Z"></path>
            </svg>
            <TabsList className="ml-8 gap-0!">
              {tabs.map(({ label }, idx) => (
                <TabsTrigger key={label} value={idx}>
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button
              className="absolute top-2.5 right-4 size-7"
              size="icon"
              variant="ghost"
              onClick={() =>
                handleCopy(
                  tabs[activeTabIndex].template.replace("{cmd}", command),
                )
              }
            >
              {!copied && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 22H8v-2h12v2ZM8 20H6v-2H4v-2h2V8h2v12Zm14 0h-2V8h2v12ZM4 16H2V4h2v12ZM18 6h2v2H8V6h8V4h2v2Zm-2-2H4V2h12v2Z" />
                </svg>
              )}
              {copied && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z" />
                </svg>
              )}
            </Button>
          </CardHeader>
          <CardContent className="px-4 py-3.5">
            {tabs.map(({ label, template }, idx) => (
              <TabsContent key={label} value={idx}>
                <pre className="font-mono" key={label}>
                  {template.replace("{cmd}", command)}
                </pre>
              </TabsContent>
            ))}
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
