import z from "zod";

import { AdminSchemas } from "./admin";
import { AtomSchemas } from "./atom";
import { ContentSchemas } from "./content";
import { DcSchemas } from "./dc";
import { DcTermsSchemas } from "./dcterms";
import { GeoRssSchemas } from "./georss";
import { MediaSchemas } from "./media";
import { SlashSchemas } from "./slash";
import { SySchemas } from "./sy";
import { WfwSchemas } from "./wfw";

const AboutSchema = z.object({
  about: z.string().optional(),
});

/** @internal General RDF element kept for potential future use when all RDF data is needed. */
const ElementSchema = z.object({
  about: z.string().optional(),
  resource: z.string().optional(),
  id: z.string().optional(),
  nodeId: z.string().optional(),
  parseType: z.string().optional(),
  datatype: z.string().optional(),
  type: z.string().optional(),
  value: z.array(z.unknown()).optional(),
});

const ImageSchema = z.object({
  title: z.string(),
  link: z.string(),
  url: z.url().optional(),
  rdf: AboutSchema.optional(),
});

const TextInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  name: z.string(),
  link: z.string(),
  rdf: AboutSchema.optional(),
});

const ItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  description: z.string().optional(),
  rdf: AboutSchema.optional(),
  atom: AtomSchemas.Entry.optional(),
  dc: DcSchemas.ItemOrFeed.optional(),
  content: ContentSchemas.Item.optional(),
  slash: SlashSchemas.Item.optional(),
  media: MediaSchemas.ItemOrFeed.optional(),
  georss: GeoRssSchemas.ItemOrFeed.optional(),
  dcterms: DcTermsSchemas.ItemOrFeed.optional(),
  wfw: WfwSchemas.Item.optional(),
});

const FeedSchema = z.object({
  title: z.string(),
  link: z.string(),
  description: z.string(),
  image: ImageSchema.optional(),
  items: z.array(ItemSchema).optional(),
  textInput: TextInputSchema.optional(),
  rdf: AboutSchema.optional(),
  atom: AtomSchemas.Feed.optional(),
  dc: DcSchemas.ItemOrFeed.optional(),
  sy: SySchemas.Feed.optional(),
  media: MediaSchemas.ItemOrFeed.optional(),
  georss: GeoRssSchemas.ItemOrFeed.optional(),
  dcterms: DcTermsSchemas.ItemOrFeed.optional(),
  admin: AdminSchemas.Feed.optional(),
});

const RdfSchemas = {
  Item: ItemSchema,
  Feed: FeedSchema,
};

type Item = z.infer<typeof ItemSchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace Rdf {
  export type { Item, Feed };
}

export type { Feed, Item, Rdf };
export { FeedSchema, ItemSchema, RdfSchemas };
