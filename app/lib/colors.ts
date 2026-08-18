

import { filter } from "~/lib/registry";

const palettes = new Map<string, string>();

Object.entries(
  import.meta.glob<string>("/registry/**/*.gpl", {
    query: "?raw",
    eager: true,
    import: "default",
  }),
).forEach(([path, palette]) => {
  palettes.set(
    path.replace("/registry/colors/pxl/", "").replace(".gpl", ""),
    palette,
  );
});

const lists = {
  base: filter({
    categories: ["color-palette-base"]
  }),
  colors: filter({
    categories: ["color-palette-colors"]
  }),
  compat: filter({
    categories: ["color-palette-compat"]
  }),
  complete: filter({
    categories: ["color-palette-complete"]
  })
}

export {
  lists,
  palettes
};

export default {
  lists,
  palettes
};