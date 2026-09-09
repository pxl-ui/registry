import z from "zod";

const RatingSchema = z.object({
  value: z.string().optional(),
  tv: z.string().optional(),
  movie: z.string().optional(),
});

const LiveStreamSchema = z.object({
  url: z.string().optional(),
  schedule: z.string().optional(),
  duration: z.string().optional(),
  type: z.string().optional(),
});

const PosterSchema = z.object({
  url: z.string().optional(),
});

const AlternateEnclosureSchema = z.object({
  src: z.string().optional(),
  type: z.string().optional(),
  length: z.number().optional(),
});

const MetamarkSchema = z.object({
  type: z.string().optional(),
  link: z.string().optional(),
  position: z.number().optional(),
  duration: z.number().optional(),
  value: z.string().optional(),
});

const DonateSchema = z.object({
  href: z.url(),
  value: z.string().optional(),
});

const FeedSchema = z.object({
  rating: RatingSchema.optional(),
  liveEmbed: z.string().optional(),
  flashLiveStream: LiveStreamSchema.optional(),
  httpLiveStream: LiveStreamSchema.optional(),
  shoutcastLiveStream: LiveStreamSchema.optional(),
  liveStream: LiveStreamSchema.optional(),
  location: z.string(),
  frequency: z.string(),
  mycast: z.boolean(),
  subscribe: z.record(z.string(), z.string()),
  donate: DonateSchema.optional(),
});

const ItemSchema = z.object({
  poster: PosterSchema.optional(),
  isHd: z.boolean().optional(),
  embed: z.string().optional(),
  webm: AlternateEnclosureSchema.optional(),
  mp4: AlternateEnclosureSchema.optional(),
  metamarks: z.array(MetamarkSchema).optional(),
});

const RawVoiceSchemas = {
  Feed: FeedSchema,
  Item: ItemSchema,
};

type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace RawVoice {
  export type { Item, Feed };
}

export type { Feed, Item, RawVoice };
export { FeedSchema, ItemSchema, RawVoiceSchemas };
