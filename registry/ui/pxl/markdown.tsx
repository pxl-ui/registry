import { type ComponentProps, useCallback, useState } from "react";
import {
  type LinkSafetyModalProps,
  Streamdown,
  type StreamdownTranslations,
} from "streamdown";

import { Button } from "@/components/ui/pxl/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/pxl/dialog";
import { cn } from "@/lib/utils";

const DEFAULT_MARKDOWN_TRANSLATIONS: StreamdownTranslations = {
  // Code block
  copyCode: "Copy Code",
  downloadFile: "Download file",
  // Mermaid
  downloadDiagram: "Download diagram",
  downloadDiagramAsSvg: "Download diagram as SVG",
  downloadDiagramAsPng: "Download diagram as PNG",
  downloadDiagramAsMmd: "Download diagram as MMD",
  viewFullscreen: "View fullscreen",
  exitFullscreen: "Exit fullscreen",
  mermaidFormatSvg: "SVG",
  mermaidFormatPng: "PNG",
  mermaidFormatMmd: "MMD",
  // Table
  copyTable: "Copy table",
  copyTableAsMarkdown: "Copy table as Markdown",
  copyTableAsCsv: "Copy table as CSV",
  copyTableAsTsv: "Copy table as TSV",
  downloadTable: "Download table",
  downloadTableAsCsv: "Download table as CSV",
  downloadTableAsMarkdown: "Download table as Markdown",
  tableFormatMarkdown: "Markdown",
  tableFormatCsv: "CSV",
  tableFormatTsv: "TSV",
  // Image
  imageNotAvailable: "Image not available",
  downloadImage: "Download image",
  // Link modal
  openExternalLink: "Open external link?",
  externalLinkWarning: "You're about to visit an external website.",
  close: "Close",
  copyLink: "Copy link",
  copied: "Copied",
  openLink: "Open link",
};

function LinkSafetyModal({
  url,
  isOpen,
  onClose,
  onConfirm,
  t = DEFAULT_MARKDOWN_TRANSLATIONS,
}: LinkSafetyModalProps & {
  t?: Partial<StreamdownTranslations>;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }, [url]);

  const handleConfirm = useCallback(() => {
    onConfirm();
    onClose();
  }, [onConfirm, onClose]);

  if (!isOpen) return null;
  return (
    <Dialog open data-streamdown="link-safety-modal" onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 21H5v-2h12v2ZM5 19H3V7h2v12Zm14 0h-2v-6h2v6Zm-8-4H9v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V9h2v2Zm6 0h-2V7h-2V5h-4V3h8v8Zm-4-2h-2V7h2v2Zm-6-2H5V5h6v2Z" />
            </svg>
            {t.openExternalLink}
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <p>{t.externalLinkWarning}</p>
            <div
              className={cn(
                "break-all pixel-rounded pixel-size-md bg-muted px-3 py-2 font-mono text-sm",
                url.length > 100 && "max-h-32 overflow-y-auto",
              )}
            >
              {url}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex [&_button]:flex-1">
          <Button variant="outline" onClick={handleCopy}>
            {copied ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z" />
                </svg>
                <span>{t.copied}</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 22h-8v-2h8v2Zm-8-2H8v-2H6v-2h2V8h2v12Zm10 0h-2V8h2v12ZM6 16H4V4h2v12ZM16 6h2v2h-8V6h4V4h2v2Zm-2-2H6V2h8v2Z"></path>
                </svg>
                <span>{t.copyLink}</span>
              </>
            )}
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 21H5v-2h12v2ZM5 19H3V7h2v12Zm14 0h-2v-6h2v6Zm-8-4H9v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V9h2v2Zm6 0h-2V7h-2V5h-4V3h8v8Zm-4-2h-2V7h2v2Zm-6-2H5V5h6v2Z" />
            </svg>
            {t.openLink}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Markdown({
  className,
  components,
  linkSafety,
  translations = DEFAULT_MARKDOWN_TRANSLATIONS,
  ...props
}: ComponentProps<typeof Streamdown>) {
  return (
    <Streamdown
      mode="static"
      linkSafety={{
        enabled: true,
        renderModal(modalProps) {
          return <LinkSafetyModal {...modalProps} t={translations} />;
        },
        ...linkSafety,
      }}
      className={cn(
        "typeset size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
        className,
      )}
      components={{
        ...components,
      }}
      {...props}
    />
  );
}

export { DEFAULT_MARKDOWN_TRANSLATIONS, Markdown };
