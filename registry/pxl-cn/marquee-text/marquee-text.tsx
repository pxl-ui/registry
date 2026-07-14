import type { PropsWithChildren } from "react";

export function MarqueeText({ children }: PropsWithChildren) {
  return (
    <div className="@container w-full overflow-hidden">
      <span className="inline-block whitespace-nowrap font-heading italic text-lg animate-marquee">
        {children}
      </span>
    </div>
  );
}
