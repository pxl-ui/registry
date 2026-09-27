import { cn } from "cn";
import { type ComponentProps, useLayoutEffect, useRef, useState } from "react";

function Fold({
  children,
  className = "",
  defaultOpen = false,
  foldHeight = 0,
  ...props
}: ComponentProps<"div"> & {
  defaultOpen?: boolean;
  foldHeight?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const update = () => setHeight(el.scrollHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [children, foldHeight]);

  const fold = foldHeight ?? height / 2;

  return (
    <div data-slot="fold" className={cn(className)} {...props}>
      <div
        className="relative w-full overflow-visible rounded-md shadow-2xl shadow-black/40 transform-3d perspective-[1600px]"
        style={{ height: height || undefined }}
      >
        <div
          ref={measureRef}
          className="invisible absolute left-0 top-0 -z-10 w-full"
          aria-hidden="true"
        >
          {children}
        </div>

        {height > 0 && (
          <>
            {/* Mitad superior, fija */}
            <div
              data-slot="fold-front"
              className="absolute inset-x-0 top-0 z-20 overflow-hidden rounded-t-md bg-[#f6f1e4]"
              style={{ height: fold }}
            >
              <div style={{ height }}>{children}</div>
            </div>

            {/* Mitad inferior, la que pliega/despliega */}
            <div
              data-slot="fold-back"
              className="absolute inset-x-0 z-10 overflow-hidden rounded-b-md bg-[#f6f1e4]
                         transition-transform duration-900 ease-[cubic-bezier(0.3,1.4,0.6,1)]
                         backface-hidden origin-[top_center]"
              style={{
                top: fold,
                height: height - fold,
                transform: open ? "rotateX(0deg)" : "rotateX(-180deg)",
              }}
            >
              <div style={{ height, transform: `translateY(-${fold}px)` }}>
                {children}
              </div>
            </div>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-4 rounded-full bg-[#8a3324] px-5 py-2 text-sm font-medium text-white
                   transition-transform active:scale-95"
      >
        {open ? "Plegar" : "Desplegar"}
      </button>
    </div>
  );
}

export { Fold };
