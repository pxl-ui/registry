import z from "zod";

import { AcastSchemas } from "./acast";
import { AdminSchemas } from "./admin";
import { AtomSchemas } from "./atom";
import { BlogChannelSchemas } from "./blogchannel";
import { CcSchemas } from "./cc";
import { ContentSchemas } from "./content";
import { CreativeCommonsSchemas } from "./creativecommons";
import { DcSchemas } from "./dc";
import { DcTermsSchemas } from "./dcterms";
import { FeedPressSchemas } from "./feedpress";
import { GeoSchemas } from "./geo";
import { GeoRssSchemas } from "./georss";
import { GooglePlaySchemas } from "./googleplay";
import { ItunesSchemas } from "./itunes";
import { MediaSchemas } from "./media";
import { OpenSearchSchemas } from "./opensearch";
import { PingbackSchemas } from "./pingback";
import { PodcastSchemas } from "./podcast";
import { PrismSchemas } from "./prism";
import { PscSchemas } from "./psc";
import { RawVoiceSchemas } from "./rawvoice";
import { SlashSchemas } from "./slash";
import { SourceSchemas } from "./source";
import { SpotifySchemas } from "./spotify";
import { SySchemas } from "./sy";
import { ThrSchemas } from "./thr";
import { TrackbackSchemas } from "./trackback";
import { WfwSchemas } from "./wfw";

const PersonLikeSchema = z.union([
  z.string(),
  z.object({
    name: z.string().optional(),
    email: z.email().optional(),
  }),
]);

const CategorySchema = z.object({
  name: z.string(),
  domain: z.string().optional(),
});

const CloudSchema = z.object({
  domain: z.string(),
  port: z.number(),
  path: z.string(),
  registerProcedure: z.string(),
  protocol: z.string(),
});

const ImageSchema = z.object({
  url: z.string(),
  title: z.string(),
  link: z.string(),
  description: z.string().optional(),
  height: z.number().optional(),
  width: z.number().optional(),
});

const TextInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  name: z.string(),
  link: z.string(),
});

const EnclosureSchema = z.object({
  url: z.string(),
  length: z.number(),
  type: z.string(),
});

const GuidSchema = z.object({
  value: z.string(),
  isPermaLink: z.boolean().optional(),
});

const SourceSchema = z.object({
  title: z.string(),
  url: z.string().optional(),
});

const ItemSchema = z.object({
  title: z.string().optional(),
  link: z.string().optional(),
  description: z.string().optional(),
  authors: z.array(PersonLikeSchema).optional(),
  categories: z.array(CategorySchema).optional(),
  comments: z.string().optional(),
  enclosures: z.array(EnclosureSchema).optional(),
  guid: GuidSchema.optional(),
  pubDate: z.string().optional(),
  source: SourceSchema.optional(),
  atom: AtomSchemas.Entry.optional(),
  cc: CcSchemas.ItemOrFeed.optional(),
  dc: DcSchemas.ItemOrFeed.optional(),
  content: ContentSchemas.Item.optional(),
  creativeCommons: CreativeCommonsSchemas.ItemOrFeed.optional(),
  slash: SlashSchemas.Item.optional(),
  itunes: ItunesSchemas.Item.optional(),
  podcast: PodcastSchemas.Item.optional(),
  psc: PscSchemas.Item.optional(),
  googleplay: GooglePlaySchemas.Item.optional(),
  media: MediaSchemas.ItemOrFeed.optional(),
  georss: GeoRssSchemas.ItemOrFeed.optional(),
  geo: GeoSchemas.ItemOrFeed.optional(),
  thr: ThrSchemas.Item.optional(),
  dcterms: DcTermsSchemas.ItemOrFeed.optional(),
  prism: PrismSchemas.Item.optional(),
  wfw: WfwSchemas.Item.optional(),
  sourceNs: SourceSchemas.Feed.optional(),
  rawvoice: RawVoiceSchemas.Item.optional(),
  spotify: SpotifySchemas.Item.optional(),
  pingback: PingbackSchemas.Item.optional(),
  trackback: TrackbackSchemas.Item.optional(),
  acast: AcastSchemas.Item.optional(),
});

const FeedSchema = z.object({
  title: z.string(),
  link: z.string().optional(),
  description: z.string(),
  language: z.string().optional(),
  copyright: z.string().optional(),
  managingEditor: PersonLikeSchema.optional(),
  webMaster: PersonLikeSchema.optional(),
  pubDate: z.string().optional(),
  lastBuildDate: z.string().optional(),
  categories: z.array(CategorySchema).optional(),
  generator: z.string().optional(),
  docs: z.string().optional(),
  cloud: CloudSchema.optional(),
  ttl: z.number().optional(),
  image: ImageSchema.optional(),
  rating: z.string().optional(),
  textInput: TextInputSchema.optional(),
  skipHours: z.array(z.number()).optional(),
  skipDays: z.array(z.string()).optional(),
  items: z.array(ItemSchema).optional(),
  atom: AtomSchemas.Feed.optional(),
  cc: CcSchemas.ItemOrFeed.optional(),
  dc: DcSchemas.ItemOrFeed.optional(),
  sy: SySchemas.Feed.optional(),
  itunes: ItunesSchemas.Feed.optional(),
  podcast: PodcastSchemas.Feed.optional(),
  googleplay: GooglePlaySchemas.Feed.optional(),
  media: MediaSchemas.ItemOrFeed.optional(),
  georss: GeoRssSchemas.ItemOrFeed.optional(),
  geo: GeoSchemas.ItemOrFeed.optional(),
  dcterms: DcTermsSchemas.ItemOrFeed.optional(),
  prism: PrismSchemas.Feed.optional(),
  creativeCommons: CreativeCommonsSchemas.ItemOrFeed.optional(),
  feedpress: FeedPressSchemas.Feed.optional(),
  opensearch: OpenSearchSchemas.Feed.optional(),
  admin: AdminSchemas.Feed.optional(),
  source: SourceSchemas.Feed.optional(),
  blogChannel: BlogChannelSchemas.Feed.optional(),
  rawvoice: RawVoiceSchemas.Feed.optional(),
  spotify: SpotifySchemas.Feed.optional(),
  pingback: PingbackSchemas.Feed.optional(),
  acast: AcastSchemas.Feed.optional(),
});

const RssSchemas = {
  Feed: FeedSchema,
  Item: ItemSchema,
};

type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Rss {
  export type { Item, Feed };
}

export type { Feed, Item, Rss };
export { FeedSchema, ItemSchema, RssSchemas };
