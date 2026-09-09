import { z } from "zod";

const RatingSchema = z.object({
  value: z.string(),
  scheme: z.string().optional(),
});

const TitleOrDescriptionSchema = z.object({
  value: z.string(),
  type: z.string().optional(),
});

const ThumbnailSchema = z.object({
  url: z.url(),
  height: z.number().optional(),
  width: z.number().optional(),
  time: z.string().optional(),
});

const CategorySchema = z.object({
  name: z.string(),
  scheme: z.string().optional(),
  label: z.string().optional(),
});

const HashSchema = z.object({
  value: z.string(),
  algo: z.string().optional(),
});

const PlayerSchema = z.object({
  url: z.url(),
  height: z.number().optional(),
  width: z.number().optional(),
});

const CreditSchema = z.object({
  value: z.string(),
  role: z.string().optional(),
  scheme: z.string().optional(),
});

const CopyrightSchema = z.object({
  value: z.string(),
  url: z.url().optional(),
});

const TextSchema = z.object({
  value: z.string(),
  type: z.string().optional(),
  lang: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
});

const RestrictionSchema = z.object({
  value: z.string(),
  relationship: z.string(),
  type: z.string().optional(),
});

const StarRatingSchema = z.object({
  average: z.number().optional(),
  count: z.number().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
});

const StatisticsSchema = z.object({
  views: z.number().optional(),
  favorites: z.number().optional(),
});

const TagSchema = z.object({
  name: z.string(),
  weight: z.number().optional(),
});

const CommunitySchema = z.object({
  starRating: StarRatingSchema.optional(),
  statistics: StatisticsSchema.optional(),
  tags: z.array(TagSchema).optional(),
});

const ParamSchema = z.object({
  name: z.string(),
  value: z.string(),
});

const EmbedSchema = z.object({
  url: z.url(),
  width: z.number().optional(),
  height: z.number().optional(),
  params: z.array(ParamSchema).optional(),
});

const StatusSchema = z.object({
  state: z.string(),
  reason: z.string().optional(),
});

const PriceSchema = z.object({
  type: z.string().optional(),
  info: z.string().optional(),
  price: z.number().optional(),
  currency: z.string().optional(),
});

const LicenseSchema = z.union([
  z.object({
    name: z.string(),
    type: z.string().optional(),
    href: z.url().optional(),
  }),
  z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    href: z.url(),
  }),
]);

const SubTitleSchema = z.object({
  type: z.string().optional(),
  lang: z.string().optional(),
  href: z.url(),
});

const PeerLinkSchema = z.object({
  type: z.string().optional(),
  href: z.url(),
});

const RightsSchema = z.object({
  status: z.string().optional(),
});

const SceneSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

const LocationSchema = z.object({
  description: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

const CommonElementsSchema = z.object({
  ratings: z.array(RatingSchema).optional(),
  title: TitleOrDescriptionSchema.optional(),
  description: TitleOrDescriptionSchema.optional(),
  keywords: z.array(z.string()).optional(),
  thumbnails: z.array(ThumbnailSchema).optional(),
  categories: z.array(CategorySchema).optional(),
  hashes: z.array(HashSchema).optional(),
  player: PlayerSchema.optional(),
  credits: z.array(CreditSchema).optional(),
  copyright: CopyrightSchema.optional(),
  texts: z.array(TextSchema).optional(),
  restrictions: z.array(RestrictionSchema).optional(),
  community: CommunitySchema.optional(),
  comments: z.array(z.string()).optional(),
  embed: EmbedSchema.optional(),
  responses: z.array(z.string()).optional(),
  backLinks: z.array(z.string()).optional(),
  status: StatusSchema.optional(),
  prices: z.array(PriceSchema).optional(),
  licenses: z.array(LicenseSchema).optional(),
  subTitles: z.array(SubTitleSchema).optional(),
  peerLinks: z.array(PeerLinkSchema).optional(),
  locations: z.array(LocationSchema).optional(),
  rights: RightsSchema.optional(),
  scenes: z.array(SceneSchema).optional(),
});

const ContentSchema = CommonElementsSchema.extend({
  url: z.url().optional(),
  fileSize: z.number().optional(),
  type: z.string().optional(),
  medium: z.string().optional(),
  isDefault: z.boolean().optional(),
  expression: z.string().optional(),
  bitrate: z.number().optional(),
  framerate: z.number().optional(),
  samplingrate: z.number().optional(),
  channels: z.number().optional(),
  duration: z.number().optional(),
  height: z.number().optional(),
  width: z.number().optional(),
  lang: z.string().optional(),
});

const GroupSchema = CommonElementsSchema.extend({
  contents: z.array(ContentSchema).optional(),
});

const ItemOrFeedSchema = CommonElementsSchema.extend({
  groups: z.array(GroupSchema).optional(),
  contents: z.array(ContentSchema).optional(),
  group: GroupSchema.optional().meta({
    deprecated: true,
    description: "Use `groups` instead.",
  }),
});

const MediaSchemas = {
  ItemOrFeed: ItemOrFeedSchema,
};

type Rating = z.infer<typeof RatingSchema>;
type TitleOrDescription = z.infer<typeof TitleOrDescriptionSchema>;
type Thumbnail = z.infer<typeof ThumbnailSchema>;
type Category = z.infer<typeof CategorySchema>;
type Hash = z.infer<typeof HashSchema>;
type Player = z.infer<typeof PlayerSchema>;
type Credit = z.infer<typeof CreditSchema>;
type Copyright = z.infer<typeof CopyrightSchema>;
type Text = z.infer<typeof TextSchema>;
type Restriction = z.infer<typeof RestrictionSchema>;
type StarRating = z.infer<typeof StarRatingSchema>;
type Statistics = z.infer<typeof StatisticsSchema>;
type Tag = z.infer<typeof TagSchema>;
type Embed = z.infer<typeof EmbedSchema>;
type Param = z.infer<typeof ParamSchema>;
type Status = z.infer<typeof StatusSchema>;
type Price = z.infer<typeof PriceSchema>;
type License = z.infer<typeof LicenseSchema>;
type SubTitle = z.infer<typeof SubTitleSchema>;
type PeerLink = z.infer<typeof PeerLinkSchema>;
type Rights = z.infer<typeof RightsSchema>;
type Scene = z.infer<typeof SceneSchema>;
type Location = z.infer<typeof LocationSchema>;
type CommonElements = z.infer<typeof CommonElementsSchema>;
type Content = z.infer<typeof ContentSchema>;
type Group = z.infer<typeof GroupSchema>;
type ItemOrFeed = z.infer<typeof ItemOrFeedSchema>;

declare namespace Media {
  export type { ItemOrFeed };
}

export type {
  Category,
  CommonElements,
  Content,
  Copyright,
  Credit,
  Embed,
  Group,
  Hash,
  ItemOrFeed,
  License,
  Location,
  Media,
  Param,
  PeerLink,
  Player,
  Price,
  Rating,
  Restriction,
  Rights,
  Scene,
  StarRating,
  Statistics,
  Status,
  SubTitle,
  Tag,
  Text,
  Thumbnail,
  TitleOrDescription,
};
export {
  CategorySchema,
  CommonElementsSchema,
  ContentSchema,
  CopyrightSchema,
  CreditSchema,
  EmbedSchema,
  GroupSchema,
  HashSchema,
  ItemOrFeedSchema,
  LicenseSchema,
  LocationSchema,
  MediaSchemas,
  ParamSchema,
  PeerLinkSchema,
  PlayerSchema,
  PriceSchema,
  RatingSchema,
  RestrictionSchema,
  RightsSchema,
  SceneSchema,
  StarRatingSchema,
  StatisticsSchema,
  StatusSchema,
  SubTitleSchema,
  TagSchema,
  TextSchema,
  ThumbnailSchema,
  TitleOrDescriptionSchema,
};
