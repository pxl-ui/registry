import { basename, filter } from "~/lib/registry";

type Display = {
  aspectRatio: string;
  width: string;
  height: string;
};

const displays = new Map<string, Display>();

filter({
  categories: ["displays"],
}).forEach(display => {
  if (!display.cssVars?.theme) {
    throw new Error(`Display "${display.name}" has no theme vars`);
  }

  const varKeys = Object.keys(display.cssVars.theme);
  const aspectRatioKey = varKeys.find(k => k.startsWith("aspect-"))
  const widthKey = varKeys.find(k => k.startsWith("display-width-"));
  const heightKey = varKeys.find(k => k.startsWith("display-height-"));

  if (!aspectRatioKey || !widthKey || !heightKey) {
    console.warn(`Display "${display.name}" has no proper display vars keys`);
    return;
  }

  displays.set(basename(display.name), {
    aspectRatio: display.cssVars.theme[aspectRatioKey],
    width: display.cssVars.theme[widthKey],
    height: display.cssVars.theme[heightKey],
  });
});

const lists = {
  hd: filter({
    categories: ["displays", "displays-hd"],
  }),
  vga: filter({
    categories: ["displays", "displays-vga"],
  }),
  xga: filter({
    categories: ["displays", "displays-xga"],
  }),
  embedded: filter({
    categories: ["displays", "displays-embedded"],
  }),
  widget: filter({
    categories: ["displays", "displays-widget"],
  }),
};

export { displays, lists };
