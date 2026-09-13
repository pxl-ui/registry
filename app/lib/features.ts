import { filter } from "~/lib/registry";

const lists = {
  articles: filter({
    categories: ["features", "articles"],
  }),
  feeds: filter({
    categories: ["features", "feeds"],
  }),
};

export { lists };