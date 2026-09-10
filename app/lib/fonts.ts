

import { filter } from "~/lib/registry";

const lists = {
  headings: filter({
    categories: ["font-heading"]
  }),
  texts: filter({
    categories: ["font-text"]
  }),
  serifs: filter({
    categories: ["font-serif"]
  }),
  monospaces: filter({
    categories: ["font-monospace"]
  }),
}

export {
  lists,
};

export default {
  lists,
};