import { filter } from "~/lib/registry";

const lists = {
  content: filter({
    categories: ["content"],
  }),
  interaction: filter({
    categories: ["interaction"],
  }),
  layout: filter({
    categories: ["layout"],
  }),
  navigation: filter({
    categories: ["navigation"],
  }),
  widgets: filter({
    categories: ["widgets"],
  }),
};

export { lists };

export default {
  lists,
};
