import { filter } from "~/lib/registry";

const lists = {
  all: filter({
    categories: ["schemas"],
  }),
};

export { lists };