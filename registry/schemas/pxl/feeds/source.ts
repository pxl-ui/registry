import z from "zod";

const AccountSchema = z.object({
  service: z.string(),
  value: z.string().optional(),
});

const LikesSchema = z.object({
  server: z.string(),
});

const ArchiveSchema = z.object({
  url: z.string(),
  startDay: z.string(),
  endDay: z.string().optional(),
  filename: z.string().optional(),
});

const SubscriptionListSchema = z.object({
  url: z.url(),
  value: z.string().optional(),
});

const InReplyToSchema = z.object({
  value: z.string(),
  isPermaLink: z.boolean().optional(),
});

const FeedSchema = z.object({
  accounts: z.array(AccountSchema).optional(),
  likes: LikesSchema.optional(),
  archive: ArchiveSchema.optional(),
  subscriptionLists: z.array(SubscriptionListSchema).optional(),
  cloud: z.string().optional(),
  blogroll: z.string().optional(),
  self: z.string().optional(),
  localTime: z.string().optional(),
});

const ItemSchema = z.object({
  markdown: z.string().optional(),
  outlines: z.array(z.string()).optional(),
  linkFull: z.string().optional(),
  InReplyTo: InReplyToSchema.optional(),
});

const SourceSchemas = {
  Feed: FeedSchema,
  Item: ItemSchema,
};

type Archive = z.infer<typeof ArchiveSchema>;
type SubscriptionList = z.infer<typeof SubscriptionListSchema>;
type InReplyTo = z.infer<typeof InReplyToSchema>;
type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Source {
  export type { Item, Feed };
}

export type { Archive, Feed, InReplyTo, Item, Source, SubscriptionList };
export { FeedSchema, ItemSchema, SourceSchemas };
