import { formatColor } from "gimp-palette";

import { cn } from "@/lib/utils";
import { palettes } from "~/lib/colors";
import { basename, kind } from "~/lib/registry";

function getPaletteGradient(item: string) {
  const palette = palettes.get(basename(item));

  if (!palette) {
    return "transparent";
  }

  const { colors } = palette;

  if (!colors.length) {
    return "transparent";
  }

  const step = 100 / colors.length;

  return `conic-gradient(${colors
    .map((color, index) => {
      const start = index * step;
      const end = (index + 1) * step;

      return `${formatColor(color, "rgb")} ${start}% ${end}%`;
    })
    .join(", ")})`;
}

export default function LinkCardMedia({ item: itemName }: { item: string }) {
  const itemKind = kind(itemName);

  if (itemKind === "color") {
    return (
      <div className="size-4 aspect-square">
        <div
          className="size-full pixel-rounded pixel-size-md"
          style={{
            background: getPaletteGradient(itemName),
          }}
        ></div>
      </div>
    );
  }

  if (itemKind === "font") {
    return (
      <div
        className={cn(
          "not-italic text-sm text-muted-foreground",
          `font-${basename(itemName)}`,
        )}
      >
        Aa
      </div>
    );
  }

  return null;
}
