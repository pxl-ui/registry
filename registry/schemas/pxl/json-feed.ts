import z from "zod";

const ItemSchema = z.object({
  id: z.string(),
  url: z.url().optional(),
  external_url: z.url().optional(),
  title: z.string().optional(),
  content_html: z.string().optional(),
  content_text: z.string().optional(),
  summary: z.string().optional(),
  image: z.string().optional(),
  banner_image: z.string().optional(),
  date_published: z.string().optional(),
  date_modified: z.string().optional(),
  tags: z.array(z.string()).optional(),
  authors: z
    .array(
      z.object({
        name: z.string().optional(),
        url: z.url().optional(),
        avatar: z.string().optional(),
      }),
    )
    .optional(),
  language: z.string().optional(),
  attachments: z
    .array(
      z.object({
        url: z.url(),
        mime_type: z.string(),
        title: z.string().optional(),
        size_in_bytes: z.number().optional(),
        duration_in_seconds: z.number().optional(),
      }),
    )
    .optional(),
}).describe("A JSON Feed Item");

const FeedSchema = z.object({
  title: z.string(),
  home_page_url: z.url().optional(),
  feed_url: z.url().optional(),
  description: z.string().optional(),
  user_comment: z.string().optional(),
  next_url: z.url().optional(),
  icon: z.string().optional(),
  favicon: z.string().optional(),
  language: z.string().optional(),
  expired: z.boolean().optional(),
  hubs: z
    .array(
      z.object({
        type: z.string().optional(),
        url: z.url().optional(),
      }),
    )
    .optional(),
  authors: z
    .array(
      z.object({
        name: z.string().optional(),
        url: z.url().optional(),
        avatar: z.string().optional(),
      }),
    )
    .optional(),
  items: z.array(ItemSchema),
}).describe("A JSON Feed");

const JsonFeedSchemas = {
  Feed: FeedSchema,
  Item: ItemSchema,
};

type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace JsonFeed {
  export type { Item, Feed };
}

export type { Feed, Item, JsonFeed };
export { FeedSchema, ItemSchema, JsonFeedSchemas };
export default JsonFeedSchemas;
