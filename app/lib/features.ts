import { filter } from "~/lib/registry";

const lists = {
  clock: filter({ categories: ["features", "clock"] }),
  conversation: filter({
    categories: ["features", "conversation"],
  }),
  cookbook: filter({
    categories: ["features", "cookbook"],
  }),
  forecast: filter({
    categories: ["features", "forecast"],
  }),
  library: filter({
    categories: ["features", "library"],
  }),
  magazine: filter({
    categories: ["features", "magazine"],
  }),
  marketing: filter({
    categories: ["features", "marketing"],
  }),
  medkit: filter({
    categories: ["features", "medkit"],
  }),
  newspaper: filter({
    categories: ["features", "newspaper"],
  }),
  notebook: filter({
    categories: ["features", "notebook"],
  }),
  taskboard: filter({
    categories: ["features", "taskboard"],
  }),
};

export { lists };
