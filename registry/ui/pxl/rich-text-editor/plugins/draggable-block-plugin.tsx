import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { DraggableBlockPlugin_EXPERIMENTAL } from "@lexical/react/LexicalDraggableBlockPlugin";
import {
  $createParagraphNode,
  $createTextNode,
  $getNearestNodeFromDOMNode,
  $isElementNode,
} from "lexical";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/ui/pxl/rich-text-editor/plugins/i18n-plugin";

const DRAGGABLE_BLOCK_MENU_CLASSNAME = "draggable-block-menu";

function isOnMenu(element: HTMLElement): boolean {
  return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}

export function DraggableBlockPlugin() {
  const [editor] = useLexicalComposerContext();
  const { dir } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const targetLineRef = useRef<HTMLDivElement>(null);
  const [draggableElement, setDraggableElement] = useState<HTMLElement | null>(
    null,
  );
  const [anchorElem, setAnchorElem] = useState<HTMLElement | null>(null);

  useEffect(() => {
    return editor.registerRootListener((rootElement) => {
      setAnchorElem(rootElement?.parentElement ?? null);
    });
  }, [editor]);

  if (!anchorElem) {
    return null;
  }

  function insertSlashBlock(event: React.MouseEvent) {
    if (!draggableElement) {
      return;
    }
    editor.update(() => {
      const node = $getNearestNodeFromDOMNode(draggableElement);
      if (!node) {
        return;
      }
      if ($isElementNode(node)) {
        const textContent = node.getTextContent();
        const needsSpace = textContent !== "" && !/\s$/.test(textContent);
        node.selectEnd().insertText(needsSpace ? " /" : "/");
        return;
      }
      const paragraph = $createParagraphNode();
      const textNode = $createTextNode("/");
      paragraph.append(textNode);
      if (event.altKey || event.ctrlKey) {
        node.insertBefore(paragraph);
      } else {
        node.insertAfter(paragraph);
      }
      textNode.selectEnd();
    });
    editor.focus();
  }

  return (
    <DraggableBlockPlugin_EXPERIMENTAL
      anchorElem={anchorElem}
      menuRef={menuRef}
      targetLineRef={targetLineRef}
      menuComponent={
        <div
          ref={menuRef}
          className={cn(
            DRAGGABLE_BLOCK_MENU_CLASSNAME,
            "absolute top-0 flex cursor-grab items-center rounded-md p-px opacity-0 will-change-transform active:cursor-grabbing",
            dir === "rtl" ? "right-2" : "left-0",
          )}
        >
          <button
            type="button"
            title="Click to open block menu"
            className="flex size-5 items-center justify-center rounded-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onMouseDown={(event) => event.preventDefault()}
            onClick={insertSlashBlock}
          >
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z"/></svg>
          </button>
          <div className="flex size-5 items-center justify-center rounded-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 1h2v2h-2zM15 1h2v2h-2zM5 3h2v2h-2zM9 3h2v2h-2zM13 3h2v2h-2zM17 3h2v2h-2zM7 5h2v2h-2zM15 5h2v2h-2zM7 9h2v2h-2zM15 9h2v2h-2zM5 11h2v2h-2zM9 11h2v2h-2zM13 11h2v2h-2zM17 11h2v2h-2zM7 13h2v2h-2zM15 13h2v2h-2zM7 17h2v2h-2zM15 17h2v2h-2zM5 19h2v2h-2zM9 19h2v2h-2zM13 19h2v2h-2zM17 19h2v2h-2zM7 21h2v2h-2zM15 21h2v2h-2z"></path></svg>
          </div>
        </div>
      }
      targetLineComponent={
        <div
          ref={targetLineRef}
          className="pointer-events-none absolute top-0 left-0 h-1 rounded-full bg-primary/50 opacity-0 will-change-transform"
        />
      }
      isOnMenu={isOnMenu}
      onElementChanged={setDraggableElement}
    />
  );
}
