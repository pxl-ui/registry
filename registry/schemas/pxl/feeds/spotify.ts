import z from "zod";

const LimitSchema = z.object({
  recentCount: z.number().optional(),
});

const PartnerSchema = z.object({
  id: z.string(),
});

const SandboxSchema = z.object({
  enabled: z.boolean(),
});

const FeedAccessSchema = z.object({
  partner: PartnerSchema.optional(),
  sandbox: SandboxSchema.optional(),
});

const EntitlementSchema = z.object({
  name: z.string(),
});

const ItemAccessSchema = z.object({
  entitlement: EntitlementSchema.optional(),
});

const FeedSchema = z.object({
  limit: LimitSchema.optional(),
  countryOfOrigin: z.string().optional(),
  access: FeedAccessSchema.optional(),
});

const ItemSchema = z.object({
  access: ItemAccessSchema.optional(),
});

const SpotifySchemas = {
  Feed: FeedSchema,
  Item: ItemSchema,
};

type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Spotify {
  export type { Feed, Item }
}

export type { Feed, Item };
export { FeedSchema, ItemSchema, SpotifySchemas };
