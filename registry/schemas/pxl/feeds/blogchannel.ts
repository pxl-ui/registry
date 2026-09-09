import z from "zod";

const FeedSchema = z.object({
  blogRoll: z.string().optional(),
  blink: z.string().optional(),
  mySubscriptions: z.string().optional(),
});

const BlogChannelSchemas = {
  Feed: FeedSchema,
};

type Feed = z.infer<typeof FeedSchema>;

declare namespace BlogChannel {
  export type { Feed };
}

export type { BlogChannel, Feed };
export { BlogChannelSchemas, FeedSchema };
