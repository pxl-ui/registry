import { z } from "zod";

const LinkSchema = z.object({
  date_added: z.string(),
  date_last_used: z.string(),
  guid: z.uuid(),
  id: z.string(),
  meta_info: z.object({
    power_bookmark_meta: z.string(),
  }),
  name: z.string(),
  type: z.literal("url"),
  url: z.url(),
});

const FolderSchema = z.object({
  date_added: z.string(),
  date_last_used: z.string(),
  guid: z.uuid(),
  id: z.string(),
  name: z.string(),
  type: z.literal("folder"),
  get children() {
    return z
      .array(z.discriminatedUnion("type", [FolderSchema, LinkSchema]))
      .optional();
  },
});

const RootsSchema = z.object({
  bookmark_bar: FolderSchema,
  other: FolderSchema,
  synced: FolderSchema,
});

const BookmarksSchema = z.object({
  checksum: z.string(),
  roots: RootsSchema,
  version: z.number(),
}).describe("Chromium Bookmarks store");

type Link = z.infer<typeof LinkSchema>;
type Folder = z.infer<typeof FolderSchema>;
type Roots = z.infer<typeof RootsSchema>;
type Bookmarks = z.infer<typeof BookmarksSchema>;

export type { Bookmarks, Folder, Link, Roots };
export { BookmarksSchema, FolderSchema, LinkSchema, RootsSchema };
