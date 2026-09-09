import z from "zod";

const ItemSchema = z.object({
  videoId: z.string().optional(),
  channelId: z.string().optional(),
});

const FeedSchema = z.object({
  channelId: z.string().optional(),
  playlistId: z.string().optional(),
});

const YtSchemas = {
  Item: ItemSchema,
  Feed: FeedSchema,
};

type Item = z.infer<typeof ItemSchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace Yt {
  export type { Item };
}

export type { Feed, Item, Yt };
export { FeedSchema, ItemSchema, YtSchemas };
