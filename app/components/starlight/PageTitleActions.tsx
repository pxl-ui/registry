import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";

import { Button } from "@/components/ui/pxl/button";

import type { CollectionEntry } from "astro:content";

type DocsEntry = CollectionEntry<"docs">;

function PageTitleActions({
  entry,
  texts = {
    copyPage: "Copy Page",
  },
}: {
  entry: DocsEntry;
  texts?: {
    copyPage: string;
  };
}) {
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
    <Button 
      className="gap-1.5 px-3! md:text-[0.8rem]!"
      size="sm"
      variant="secondary" onClick={() => handleCopy(entry.body ?? "")}>
      {!copied && (
        <svg
          className="size-4"
          data-icon="inline-start"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 22H8v-2h12v2ZM8 20H6v-2H4v-2h2V8h2v12Zm14 0h-2V8h2v12ZM4 16H2V4h2v12ZM18 6h2v2H8V6h8V4h2v2Zm-2-2H4V2h12v2Z" />
        </svg>
      )}
      {copied && (
        <svg
          className="size-4"
          data-icon="inline-start"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z" />
        </svg>
      )}
      {texts.copyPage}
    </Button>
  );
}

export { PageTitleActions };
