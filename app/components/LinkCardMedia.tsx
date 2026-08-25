import { formatColor } from "gimp-palette";
import { lazy, Suspense } from "react";

import { cn } from "@/lib/utils";
import { palettes } from "~/lib/colors";
import { components } from "~/lib/examples";
import { iconPacks } from "~/lib/icons";
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

function getFirstIcon(item: string) {
  const pack = iconPacks.get(basename(item));

  if (!pack) {
    return "";
  }

  const variant = pack.variants[Object.keys(pack.variants)[0]];

  return Object.values(variant)[0];
}

function getBackgroundPreview(item: string) {
  const itemName = basename(item);
  const importer = components.get(`${itemName}/thumbnail`);

  if (!importer) {
    return null;
  }

  const Component = lazy(importer);

  return (
    <div className="size-4 aspect-square relative">
      <Suspense
        fallback={
          <div className="animate-pulse w-full h-full bg-muted pixel-rounded" />
        }
      >
        <Component />
      </Suspense>
    </div>
  );
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

  if (itemKind === "background") {
    return getBackgroundPreview(itemName);
  }

  if (itemKind === "icon") {
    return (
      <div
        className={cn("not-italic text-sm text-muted-foreground")}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Icon rendering
        dangerouslySetInnerHTML={{ __html: getFirstIcon(itemName) }}
      />
    );
  }

  return null;
}
