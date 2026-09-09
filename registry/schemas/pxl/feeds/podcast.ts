import z from "zod";

const TranscriptSchema = z.object({
  url: z.url(),
  type: z.string(),
  language: z.string().optional(),
  rel: z.string().optional(),
});

const LockedSchema = z.object({
  value: z.boolean(),
  owner: z.string().optional(),
});

const FundingSchema = z.object({
  url: z.url(),
  display: z.string().optional(),
});

const ChaptersSchema = z.object({
  url: z.url(),
  type: z.string(),
});

const SoundbiteSchema = z.object({
  startTime: z.number(),
  duration: z.number(),
  display: z.string().optional(),
});

const PersonSchema = z.object({
  display: z.string(),
  role: z.string().optional(),
  group: z.string().optional(),
  img: z.string().optional(),
  href: z.url().optional(),
});

const LocationSchema = z.object({
  display: z.string(),
  rel: z.string().optional(),
  geo: z.string().optional(),
  osm: z.string().optional(),
  country: z.string().optional(),
});

const SeasonSchema = z.object({
  number: z.number(),
  name: z.string().optional(),
});

const EpisodeSchema = z.object({
  number: z.number(),
  display: z.string().optional(),
});

const TrailerSchema = z.object({
  display: z.string(),
  url: z.url(),
  pubDate: z.string(),
  length: z.number().optional(),
  type: z.string().optional(),
  season: z.number().optional(),
});

const LicenseSchema = z.object({
  display: z.string(),
  url: z.url().optional(),
});

const SourceSchema = z.object({
  uri: z.url(),
  contentType: z.string().optional(),
});

const IntegritySchema = z.object({
  type: z.string(),
  value: z.string(),
});

const AlternateEnclosureSchema = z.object({
  type: z.string(),
  length: z.number().optional(),
  bitrate: z.number().optional(),
  height: z.number().optional(),
  lang: z.string().optional(),
  title: z.string().optional(),
  rel: z.string().optional(),
  codecs: z.string().optional(),
  default: z.boolean().optional(),
  sources: z.array(SourceSchema).optional(),
  integrity: IntegritySchema.optional(),
});

const ValueRecipientSchema = z.object({
  name: z.string().optional(),
  customKey: z.string().optional(),
  customValue: z.string().optional(),
  type: z.string(),
  address: z.string(),
  split: z.number(),
  fee: z.boolean().optional(),
});

const ValueSchema = z.object({
  type: z.string(),
  method: z.string(),
  suggested: z.number().optional(),
  valueRecipients: z.array(ValueRecipientSchema).optional(),
  valueTimeSplits: z.array(z.lazy(() => ValueTimeSplitSchema)).optional(),
});

const ImagesSchema = z.object({
  srcset: z.string().optional(),
});

const ImageSchema = z.object({
  href: z.url(),
  alt: z.string().optional(),
  aspectRatio: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  type: z.string().optional(),
  purpose: z.string().optional(),
});

const ContentLinkSchema = z.object({
  href: z.url(),
  display: z.string().optional(),
});

const SocialInteractSchema = z.object({
  uri: z.url().optional(),
  protocol: z.string(),
  accountId: z.string().optional(),
  accountUrl: z.string().optional(),
  priority: z.number().optional(),
});

const ChatSchema = z.object({
  server: z.string(),
  protocol: z.string(),
  accountId: z.string().optional(),
  space: z.string().optional(),
});

const TxtSchema = z.object({
  display: z.string(),
  purpose: z.string().optional(),
});

const BlockSchema = z.object({
  value: z.boolean(),
  id: z.string().optional(),
});

const RemoteItemSchema = z.object({
  feedGuid: z.string(),
  feedUrl: z.string().optional(),
  itemGuid: z.string().optional(),
  medium: z.string().optional(),
  title: z.string().optional(),
});

const PodrollSchema = z.object({
  remoteItems: z.array(RemoteItemSchema).optional(),
});

const UpdateFrequencySchema = z.object({
  display: z.string(),
  complete: z.boolean().optional(),
  dtstart: z.string().optional(),
  rrule: z.string().optional(),
});

const PodpingSchema = z.object({
  usesPodping: z.boolean().optional(),
});

const PublisherSchema = z.object({
  remoteItem: RemoteItemSchema.optional(),
});

const ValueTimeSplitSchema = z.object({
  startTime: z.number(),
  duration: z.number(),
  remoteStartTime: z.number().optional(),
  remotePercentage: z.number().optional(),
  remoteItem: RemoteItemSchema.optional(),
  valueRecipients: z.array(ValueRecipientSchema).optional(),
});

const BaseItemSchema = z.object({
  transcripts: z.array(TranscriptSchema).optional(),
  chapters: ChaptersSchema.optional(),
  soundbites: z.array(SoundbiteSchema).optional(),
  persons: z.array(PersonSchema).optional(),
  locations: z.array(LocationSchema).optional(),
  season: SeasonSchema.optional(),
  episode: EpisodeSchema.optional(),
  license: LicenseSchema.optional(),
  alternateEnclosures: z.array(AlternateEnclosureSchema).optional(),
  values: z.array(ValueSchema).optional(),
  images: z.array(ImageSchema).optional(),
  socialInteracts: z.array(SocialInteractSchema).optional(),
  txts: z.array(TxtSchema).optional(),
  chat: ChatSchema.optional(),
  location: LocationSchema.optional().meta({
    deprecated: true,
    description:
      "Use `locations` (array) instead. Multiple podcast:location elements are allowed per specification.",
  }),
  value: ValueSchema.optional().meta({
    deprecated: true,
    description:
      "Use `values` (array) instead. Multiple podcast:value elements are allowed per specification.",
  }),
  chats: z.array(ChatSchema).optional().meta({
    deprecated: true,
    description:
      "Use `chat` (singular) instead. Only one podcast:chat element is allowed per specification.",
  }),
});

const LiveItemSchema = BaseItemSchema.extend({
  status: z.string(),
  start: z.string(),
  end: z.string().optional(),
  contentLinks: z.array(ContentLinkSchema).optional(),
});

const ItemSchema = BaseItemSchema;

const FeedSchema = z.object({
  locked: LockedSchema.optional(),
  fundings: z.array(FundingSchema).optional(),
  persons: z.array(PersonSchema).optional(),
  locations: z.array(LocationSchema).optional(),
  trailers: z.array(TrailerSchema).optional(),
  license: LicenseSchema.optional(),
  guid: z.string().optional(),
  values: z.array(ValueSchema).optional(),
  medium: z.string().optional(),
  images: z.array(ImageSchema).optional(),
  liveItems: z.array(LiveItemSchema).optional(),
  blocks: z.array(BlockSchema).optional(),
  txts: z.array(TxtSchema).optional(),
  remoteItems: z.array(RemoteItemSchema).optional(),
  podroll: PodrollSchema.optional(),
  updateFrequency: UpdateFrequencySchema.optional(),
  podping: PodpingSchema.optional(),
  chat: ChatSchema.optional(),
  publisher: PublisherSchema.optional(),
  location: LocationSchema.optional().meta({
    deprecated: true,
    description:
      "Use `locations` (array) instead. Multiple podcast:location elements are allowed per specification.",
  }),
  value: ValueSchema.optional().meta({
    deprecated: true,
    description:
      "Use `values` (array) instead. Multiple podcast:value elements are allowed per specification.",
  }),
  chats: z.array(ChatSchema).optional().meta({
    deprecated: true,
    description:
      "Use `chat` (singular) instead. Only one podcast:chat element is allowed per specification.",
  }),
});

const PodcastSchemas = {
  Item: ItemSchema,
  Feed: FeedSchema,
};

type Transcript = z.infer<typeof TranscriptSchema>;
type Locked = z.infer<typeof LockedSchema>;
type Funding = z.infer<typeof FundingSchema>;
type Chapters = z.infer<typeof ChaptersSchema>;
type Soundbite = z.infer<typeof SoundbiteSchema>;
type Person = z.infer<typeof PersonSchema>;
type Location = z.infer<typeof LocationSchema>;
type Season = z.infer<typeof SeasonSchema>;
type Episode = z.infer<typeof EpisodeSchema>;
type Trailer = z.infer<typeof TrailerSchema>;
type License = z.infer<typeof LicenseSchema>;
type AlternateEnclosure = z.infer<typeof AlternateEnclosureSchema>;
type Source = z.infer<typeof SourceSchema>;
type Integrity = z.infer<typeof IntegritySchema>;
type Value = z.infer<typeof ValueSchema>;
type ValueRecipient = z.infer<typeof ValueRecipientSchema>;
type ValueTimeSplit = z.infer<typeof ValueTimeSplitSchema>;
type Images = z.infer<typeof ImagesSchema>;
type Image = z.infer<typeof ImageSchema>;
type LiveItem = z.infer<typeof LiveItemSchema>;
type ContentLink = z.infer<typeof ContentLinkSchema>;
type SocialInteract = z.infer<typeof SocialInteractSchema>;
type Chat = z.infer<typeof ChatSchema>;
type Block = z.infer<typeof BlockSchema>;
type Txt = z.infer<typeof TxtSchema>;
type RemoteItem = z.infer<typeof RemoteItemSchema>;
type Podroll = z.infer<typeof PodrollSchema>;
type UpdateFrequency = z.infer<typeof UpdateFrequencySchema>;
type Podping = z.infer<typeof PodpingSchema>;
type Publisher = z.infer<typeof PublisherSchema>;
type Item = z.infer<typeof ItemSchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace Podcast {
  export type { Feed, Item };
}

export type { Feed, Item };
export { FeedSchema, ItemSchema, PodcastSchemas };
