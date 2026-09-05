import { filter } from "~/lib/registry";

const lists = {
  small: filter({
    categories: ["widgets", "widget-sm"],
  }),
  medium: filter({
    categories: ["widgets", "widget-md"],
  }),
  large: filter({
    categories: ["widgets", "widget-lg"],
  }),
  extralarge: filter({
    categories: ["widgets", "widget-xl"],
  }),
};

export { lists };

export default {
  lists,
};
