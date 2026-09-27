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
  tasks: filter({
    categories: ["features", "tasks"],
  }),
};

export { lists };