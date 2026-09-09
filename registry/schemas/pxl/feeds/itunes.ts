import { z } from "zod";

const CategorySchema: z.ZodType<Category> = z.lazy(() =>
  z.object({
    text: z.string(),
    categories: z.array(CategorySchema).optional(),
  }),
);

const OwnerSchema = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
});

const ItemSchema = z.object({
  duration: z.number().optional(),
  image: z.string().optional(),
  explicit: z.boolean().optional(),
  author: z.string().optional(),
  title: z.string().optional(),
  episode: z.number().optional(),
  season: z.number().optional(),
  episodeType: z.string().optional(),
  block: z.boolean().optional(),
  summary: z.string().optional().meta({
    deprecated: true,
    description: "Use standard RSS description instead.",
  }),
  subtitle: z.string().optional().meta({
    deprecated: true,
    description: "No longer used by Apple Podcasts.",
  }),
  keywords: z.array(z.string()).optional().meta({
    deprecated: true,
    description: "No longer used by Apple Podcasts.",
  }),
});

const FeedSchema = z.object({
  image: z.string().optional(),
  categories: z.array(CategorySchema).optional(),
  explicit: z.boolean().optional(),
  author: z.string().optional(),
  title: z.string().optional(),
  type: z.string().optional(),
  newFeedUrl: z.string().optional(),
  block: z.boolean().optional(),
  complete: z.boolean().optional(),
  applePodcastsVerify: z.string().optional(),
  summary: z.string().optional().meta({
    deprecated: true,
    description: "Use standard RSS description instead.",
  }),
  subtitle: z.string().optional().meta({
    deprecated: true,
    description: "No longer used by Apple Podcasts.",
  }),
  keywords: z.array(z.string()).optional().meta({
    deprecated: true,
    description: "No longer used for search in Apple Podcasts.",
  }),
  owner: OwnerSchema.optional().meta({
    deprecated: true,
    description: "No longer supported by Apple Podcasts.",
  }),
});

const ItunesSchemas = {
  Category: CategorySchema,
  Owner: OwnerSchema,
  Item: ItemSchema,
  Feed: FeedSchema,
};

type Category = {
  text: string;
  categories?: Category[];
};
type Owner = z.infer<typeof OwnerSchema>;
type Item = z.infer<typeof ItemSchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace Itunes {
  export type { Category, Feed, Item, Owner };
}

export type { Category, Feed, Item, Owner };
export { CategorySchema, FeedSchema, ItemSchema, ItunesSchemas, OwnerSchema };
