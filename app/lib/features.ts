import { filter } from "~/lib/registry";

const lists = {
  feeds: filter({
    categories: ["features", "feeds"],
  }),
};

export { lists };