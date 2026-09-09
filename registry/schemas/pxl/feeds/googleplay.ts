import z from "zod";

const ImageSchema = z.object({
  href: z.url(),
});

const ItemSchema = z.object({
  author: z.string().optional(),
  description: z.string().optional(),
  explicit: z.union([z.boolean(), z.literal("clean")]).optional(),
  block: z.boolean().optional(),
  image: ImageSchema.optional(),
});

const FeedSchema = z.object({
  author: z.string().optional(),
  description: z.string().optional(),
  explicit: z.union([z.boolean(), z.literal("clean")]).optional(),
  block: z.boolean().optional(),
  image: ImageSchema.optional(),
  newFeedUrl: z.url().optional(),
  email: z.email().optional(),
  categories: z.array(z.string()).optional(),
});

const GooglePlaySchemas = {
  Image: ImageSchema,
  Item: ItemSchema,
  Feed: FeedSchema,
};

type Image = z.infer<typeof ImageSchema>;
type Item = z.infer<typeof ItemSchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace GooglePlay {
  export type { Image, Item, Feed };
}

export type { Feed, Image, Item };
export { FeedSchema, GooglePlaySchemas, ImageSchema, ItemSchema };
