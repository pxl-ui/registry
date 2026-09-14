import { filter } from "~/lib/registry";

const lists = {
  articles: filter({
    categories: ["features", "articles"],
  }),
  chats: filter({
    categories: ["features", "chats"],
  }),
  feeds: filter({
    categories: ["features", "feeds"],
  }),
  marketing: filter({
    categories: ["features", "marketing"],
  }),
};

export { lists };