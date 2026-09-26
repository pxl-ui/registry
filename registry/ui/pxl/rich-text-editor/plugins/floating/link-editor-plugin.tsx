import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import {
  $createLinkNode,
  $isAutoLinkNode,
  $isLinkNode,
  TOGGLE_LINK_COMMAND,
} from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  getDOMSelection,
  KEY_ESCAPE_COMMAND,
  type NodeKey,
  registerEventListener,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/ui/pxl/button";
import { Input } from "@/ui/pxl/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/pxl/popover";
import {
  $getSelectedLinkNode,
  $getSelectedNode,
} from "@/ui/pxl/rich-text-editor/extensions/format-state";
import {
  OPEN_LINK_EDITOR_COMMAND,
  sanitizeUrl,
} from "@/ui/pxl/rich-text-editor/extensions/link";
import {
  getDOMRangeRect,
  hideFloatingAnchor,
  setFloatingAnchorRect,
} from "@/ui/pxl/rich-text-editor/plugins/floating/floating-utils";
import { useTranslation } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/pxl/tooltip";

function preventDefault(
  event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
): void {
  event.preventDefault();
}

export function LinkEditorPlugin() {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();
  const { t, dir } = useTranslation();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [linkNodeKey, setLinkNodeKey] = useState<NodeKey | null>(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [editedLinkUrl, setEditedLinkUrl] = useState("https://");
  const [isEditMode, setIsEditMode] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const isOpen = isEditable && linkNodeKey !== null && !dismissed;

  const positionToRect = useCallback((rect: DOMRect | null) => {
    const triggerElem = triggerRef.current;
    if (triggerElem === null) {
      return;
    }
    if (rect === null) {
      hideFloatingAnchor(triggerElem);
    } else {
      setFloatingAnchorRect(triggerElem, rect);
    }
  }, []);

  const $updateLinkState = useCallback(() => {
    const selection = $getSelection();
    const linkNode = $isRangeSelection(selection)
      ? $getSelectedLinkNode(selection)
      : null;
    if (linkNode) {
      setLinkNodeKey(linkNode.getKey());
      setLinkUrl(linkNode.getURL());
    } else {
      setLinkNodeKey(null);
      setLinkUrl("");
    }
  }, []);

  const close = useCallback(() => {
    setDismissed(true);
    setIsEditMode(false);
  }, []);

  useEffect(() => {
    editor.read("latest", () => {
      $updateLinkState();
    });
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateLinkState();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          setDismissed(false);
          $updateLinkState();
          const selection = $getSelection();
          if (
            !($isRangeSelection(selection) && $getSelectedLinkNode(selection))
          ) {
            setIsEditMode(false);
          }
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        CLICK_COMMAND,
        (payload) => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const node = $getSelectedNode(selection);
            const linkNode = $findMatchingParent(node, $isLinkNode);
            if ($isLinkNode(linkNode) && (payload.metaKey || payload.ctrlKey)) {
              window.open(linkNode.getURL(), "_blank");
              return true;
            }
          }
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        OPEN_LINK_EDITOR_COMMAND,
        () => {
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) {
            return false;
          }
          const linkNode = $getSelectedLinkNode(selection);
          if (!linkNode && selection.isCollapsed()) {
            return false;
          }
          setDismissed(false);
          setEditedLinkUrl(linkNode ? linkNode.getURL() : "https://");
          setIsEditMode(true);
          if (!linkNode) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
          }
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [editor, $updateLinkState]);

  useEffect(() => {
    return editor.registerCommand(
      KEY_ESCAPE_COMMAND,
      () => {
        if (isOpen) {
          close();
          return true;
        }
        return false;
      },
      COMMAND_PRIORITY_HIGH,
    );
  }, [editor, isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      positionToRect(null);
      return;
    }
    const update = () => {
      const element =
        linkNodeKey !== null ? editor.getElementByKey(linkNodeKey) : null;
      if (element) {
        positionToRect(element.getBoundingClientRect());
        return;
      }
      const nativeSelection = getDOMSelection(editor._window);
      const rootElement = editor.getRootElement();
      positionToRect(
        nativeSelection && rootElement
          ? getDOMRangeRect(nativeSelection, rootElement)
          : null,
      );
    };
    update();
    return mergeRegister(
      editor.registerUpdateListener(update),
      registerEventListener(window, "resize", update),
      registerEventListener(document, "scroll", update, true),
    );
  }, [editor, isOpen, linkNodeKey, positionToRect]);

  const handleLinkSubmission = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault();
    if (linkNodeKey === null) {
      return;
    }
    editor.update(() => {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl));
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const parent = $getSelectedNode(selection).getParent();
        if ($isAutoLinkNode(parent)) {
          const linkNode = $createLinkNode(parent.getURL(), {
            rel: parent.__rel,
            target: parent.__target,
            title: parent.__title,
          });
          parent.replace(linkNode, true);
        }
      }
    });
    setEditedLinkUrl("https://");
    setIsEditMode(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLinkSubmission(event);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsEditMode(false);
    }
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger
        ref={triggerRef}
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none fixed top-0 left-0 opacity-0"
        style={{ transform: "translate(-10000px, -10000px)" }}
      />
      <PopoverPrimitive.Portal dir={dir}>
        <PopoverContent
          dir="ltr"
          ref={contentRef}
          side="bottom"
          align="start"
          sideOffset={8}
          initialFocus={false}
          finalFocus={false}
          aria-label={t.link}
          className="w-auto min-w-0 flex-row items-center gap-1 p-1"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              close();
            }
          }}
        >
          {isEditMode ? (
            <>
              <Input
                ref={(elem) => {
                  if (elem) {
                    elem.focus();
                  }
                }}
                value={editedLinkUrl}
                placeholder={t.linkUrlPlaceholder}
                className="h-7 w-56 md:text-[0.8rem]"
                onChange={(event) => {
                  setEditedLinkUrl(event.target.value);
                }}
                onKeyDown={handleKeyDown}
              />
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={t.cancel}
                      onMouseDown={preventDefault}
                      onClick={() => {
                        setIsEditMode(false);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 19H5v-2h2v2Zm12 0h-2v-2h2v2ZM9 15v2H7v-2h2Zm8 2h-2v-2h2v2Zm-6-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2H9V9h2v2Zm4 0h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Z"/></svg>
                    </Button>
                  }
                />
                <TooltipContent>{t.cancel}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={t.saveLink}
                      onMouseDown={preventDefault}
                      onClick={handleLinkSubmission}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z"/></svg>
                    </Button>
                  }
                />
                <TooltipContent>{t.saveLink}</TooltipContent>
              </Tooltip>
            </>
          ) : (
            <>
              <a
                href={sanitizeUrl(linkUrl)}
                target="_blank"
                rel="noopener noreferrer"
                title={t.openLink}
                className="max-w-56 truncate ps-2 text-[0.8rem] text-primary underline underline-offset-2"
              >
                {linkUrl}
              </a>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={t.editLink}
                      onMouseDown={preventDefault}
                      onClick={(event) => {
                        event.preventDefault();
                        setEditedLinkUrl(linkUrl);
                        setIsEditMode(true);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4 20h4v2H2v-6h2v4Zm6 0H8v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H4v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2H6v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2H8v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2h-2V8h2v2Zm4 0h-2V8h2v2Zm4 0h-2V8h2v2Zm-6-2h-2V6h2v2Zm8 0h-2V6h2v2Zm-6-2h-2V4h2v2Zm4 0h-2V4h2v2Zm-2-2h-2V2h2v2Z"></path></svg>
                    </Button>
                  }
                />
                <TooltipContent>{t.editLink}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={t.removeLink}
                      onMouseDown={preventDefault}
                      onClick={() => {
                        editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM9 6H15V4H17V6H22V8H20V20H18V8H6V20H4V8H2V6H7V4H9V6ZM15 4H9V2H15V4Z"/></svg>
                    </Button>
                  }
                />
                <TooltipContent>{t.removeLink}</TooltipContent>
              </Tooltip>
            </>
          )}
        </PopoverContent>
      </PopoverPrimitive.Portal>
    </Popover>
  );
}
