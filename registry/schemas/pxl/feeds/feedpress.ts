import z from "zod";

const FeedSchema = z.object({
  link: z.string().optional(),
  newsletterId: z.string().optional(),
  locale: z.string().optional(),
  podcastId: z.string().optional(),
  cssFile: z.string().optional(),
});

const FeedPressSchemas = {
  Feed: FeedSchema,
};

type Feed = z.infer<typeof FeedSchema>;

declare namespace FeedPress {
  export type { Feed };
}

export type { Feed }
export { FeedPressSchemas, FeedSchema }