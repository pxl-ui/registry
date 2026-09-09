import { z } from "zod";

import { AdminSchemas } from "./admin";
import { AppSchemas } from "./app";
import { ArxivSchemas } from "./arxiv";
import { CcSchemas } from "./cc";
import { CreativeCommonsSchemas } from "./creativecommons";
import { DcSchemas } from "./dc";
import { DcTermsSchemas } from "./dcterms";
import { GeoSchemas } from "./geo";
import { GeoRssSchemas } from "./georss";
import { GooglePlaySchemas } from "./googleplay";
import { ItunesSchemas } from "./itunes";
import { MediaSchemas } from "./media";
import { OpenSearchSchemas } from "./opensearch";
import { PingbackSchemas } from "./pingback";
import { PscSchemas } from "./psc";
import { SlashSchemas } from "./slash";
import { SySchemas } from "./sy";
import { ThrSchemas } from "./thr";
import { TrackbackSchemas } from "./trackback";
import { WfwSchemas } from "./wfw";
import { YtSchemas } from "./yt";

const LinkSchema = z.object({
  href: z.string(),
  rel: z.enum(["self", "alternate"]).optional(),
  type: z.string().optional(),
  hreflang: z.string().optional(),
  title: z.string().optional(),
  length: z.number().optional(),
  thr: z
    .object({
      count: z.number().optional(),
      updated: z.string().optional(),
    })
    .optional(),
});

const PersonSchema = z.object({
  name: z.string(),
  uri: z.url().optional(),
  email: z.email().optional(),
  arxiv: z
    .object({
      affiliation: z.string().optional(),
    })
    .optional(),
});

const CategorySchema = z.object({
  term: z.string(),
  scheme: z.string().optional(),
  label: z.string().optional(),
});

const GeneratorSchema = z.object({
  text: z.string(),
  uri: z.string().optional(),
  version: z.string(),
});

const SourceSchema = z.object({
  authors: z.array(PersonSchema).optional(),
  categories: z.array(CategorySchema).optional(),
  contributors: z.array(PersonSchema).optional(),
  generator: GeneratorSchema.optional(),
  icon: z.string(),
  id: z.string(),
  links: z.array(LinkSchema).optional(),
  logo: z.string().optional(),
  rights: z.string().optional(),
  subtitle: z.string().optional(),
  title: z.string().optional(),
  updated: z.string().optional(),
});

const EntrySchema = z.object({
  authors: z.array(PersonSchema).optional(),
  categories: z.array(CategorySchema).optional(),
  content: z.string().optional(),
  contributors: z.array(PersonSchema).optional(),
  id: z.string(),
  links: z.array(LinkSchema).optional(),
  published: z.string().optional(),
  rights: z.string().optional(),
  source: SourceSchema.optional(),
  summary: z.string().optional(),
  title: z.string(),
  updated: z.string(),
  app: AppSchemas.Entry.optional(),
  arxiv: ArxivSchemas.Entry.optional(),
  cc: CcSchemas.ItemOrFeed.optional(),
  dc: DcSchemas.ItemOrFeed.optional(),
  slash: SlashSchemas.Item.optional(),
  itunes: ItunesSchemas.Item.optional(),
  googleplay: GooglePlaySchemas.Item.optional(),
  psc: PscSchemas.Item.optional(),
  media: MediaSchemas.ItemOrFeed.optional(),
  georss: GeoRssSchemas.ItemOrFeed.optional(),
  geo: GeoSchemas.ItemOrFeed.optional(),
  thr: ThrSchemas.Item.optional(),
  dcterms: DcTermsSchemas.ItemOrFeed.optional(),
  creativeCommons: CreativeCommonsSchemas.ItemOrFeed.optional(),
  wfw: WfwSchemas.Item.optional(),
  yt: YtSchemas.Item.optional(),
  pingback: PingbackSchemas.Item.optional(),
  trackback: TrackbackSchemas.Item.optional(),
});

const FeedSchema = z.object({
  authors: z.array(PersonSchema).optional(),
  categories: z.array(CategorySchema).optional(),
  contributors: z.array(PersonSchema).optional(),
  generator: GeneratorSchema.optional(),
  icon: z.string().optional(),
  id: z.string(),
  links: z.array(LinkSchema).optional(),
  logo: z.string().optional(),
  rights: z.string().optional(),
  subtitle: z.string().optional(),
  title: z.string(),
  updated: z.string().optional(),
  entries: z.array(EntrySchema).optional(),
  cc: CcSchemas.ItemOrFeed.optional(),
  dc: DcSchemas.ItemOrFeed.optional(),
  sy: SySchemas.Feed.optional(),
  itunes: ItunesSchemas.Feed.optional(),
  googleplay: GooglePlaySchemas.Feed.optional(),
  media: MediaSchemas.ItemOrFeed.optional(),
  georss: GeoRssSchemas.ItemOrFeed.optional(),
  geo: GeoSchemas.ItemOrFeed.optional(),
  dcterms: DcTermsSchemas.ItemOrFeed.optional(),
  creativeCommons: CreativeCommonsSchemas.ItemOrFeed.optional(),
  opensearch: OpenSearchSchemas.Feed.optional(),
  yt: YtSchemas.Feed.optional(),
  admin: AdminSchemas.Feed.optional(),
  pingback: PingbackSchemas.Feed.optional(),
});

const AtomSchemas = {
  Category: CategorySchema,
  Entry: EntrySchema,
  Feed: FeedSchema,
  Link: LinkSchema,
  Person: PersonSchema,
  Source: SourceSchema,
};

type Category = z.infer<typeof CategorySchema>;
type Entry = z.infer<typeof EntrySchema>;
type Feed = z.infer<typeof FeedSchema>;
type Link = z.infer<typeof LinkSchema>;
type Person = z.infer<typeof PersonSchema>;
type Source = z.infer<typeof SourceSchema>;

declare namespace Atom {
  export type { Category, Entry, Feed, Link }
}

export type { Atom, Category, Entry, Feed, Link, Person, Source };
export { AtomSchemas, CategorySchema, EntrySchema, FeedSchema, LinkSchema, PersonSchema, SourceSchema }