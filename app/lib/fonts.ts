

import { filter } from "~/lib/registry";

const lists = {
  headings: filter({
    categories: ["font-heading"]
  }),
  texts: filter({
    categories: ["font-sans"]
  }),
  serifs: filter({
    categories: ["font-serif"]
  }),
  monospaces: filter({
    categories: ["font-mono"]
  }),
}

export {
  lists,
};

export default {
  lists,
};