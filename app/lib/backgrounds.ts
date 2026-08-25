import { filter } from "~/lib/registry";

const lists = {
  patterns: filter({
    categories: ["background-pattern"],
  }),
};

export { lists };

export default {
  lists,
};
