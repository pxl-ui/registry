import z from "zod";

const SignatureSchema = z.object({
  key: z.string().optional(),
  algorithm: z.string().optional(),
  value: z.string().optional(),
});

const NetworkSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  value: z.string().optional(),
});

const FeedSchema = z.object({
  showId: z.string().optional(),
  showUrl: z.string().optional(),
  signature: SignatureSchema.optional(),
  settings: z.string().optional(),
  network: NetworkSchema.optional(),
  importedFeed: z.string().optional(),
});

const ItemSchema = z.object({
  episodeId: z.string().optional(),
  showId: z.string().optional(),
  episodeUrl: z.string().optional(),
  settings: z.string().optional(),
});

const AcastSchemas = {
  Feed: FeedSchema,
  Item: ItemSchema,
};

type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Acast {
  export type { Feed, Item }
}

export type { Acast, Feed, Item };
export { AcastSchemas, FeedSchema, ItemSchema };
