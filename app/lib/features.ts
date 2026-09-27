import { filter } from "~/lib/registry";

const lists = {
  magazine: filter({
    categories: ["features", "magazine"],
  }),
  conversation: filter({
    categories: ["features", "conversation"],
  }),
  newspaper: filter({
    categories: ["features", "newspaper"],
  }),
  marketing: filter({
    categories: ["features", "marketing"],
  }),
  notebook: filter({
    categories: ["features", "notebook"],
  }),
  taskboard: filter({
    categories: ["features", "taskboard"],
  }),
};

export { lists };