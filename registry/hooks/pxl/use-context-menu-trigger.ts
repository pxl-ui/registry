import { type MouseEvent, useRef } from "react";

export function useContextMenuTrigger(onOpen: () => void) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return {
    onContextMenu: (e: MouseEvent) => {
      e.preventDefault();
      onOpen();
    },

    onTouchStart: () => {
      timerRef.current = setTimeout(onOpen, 500);
    },

    onTouchEnd: () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },

    onTouchMove: () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
  };
}
