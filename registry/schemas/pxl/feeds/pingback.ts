import z from "zod";

const FeedSchema = z.object({
  to: z.string().optional(),
});
const ItemSchema = z.object({
  server: z.string().optional(),
  target: z.string().optional(),
});

const PingbackSchemas = {
  Item: ItemSchema,
  Feed: FeedSchema,
};

type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Pingback {
  export type { Item };
}

export type { Feed, Item, Pingback };
export { FeedSchema, ItemSchema, PingbackSchemas };
