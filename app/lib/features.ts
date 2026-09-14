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
  tasks: filter({
    categories: ["features", "tasks"],
  }),
};

export { lists };