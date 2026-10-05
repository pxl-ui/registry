import { type Bookmarks, BookmarksSchema } from "./bookmarks";

const ChromiumSchemas = {
  Bookmarks: BookmarksSchema,
};

declare namespace Chromium {
  export type { Bookmarks };
}

export type { Bookmarks, Chromium };
export { BookmarksSchema, ChromiumSchemas };
export default ChromiumSchemas;
