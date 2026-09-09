import z from "zod";

const ItemOrFeedSchema = z.object({
  license: z.string().optional(),
  morePermissions: z.string().optional(),
  attributionName: z.string().optional(),
  attributionURL: z.string().optional(),
  useGuidelines: z.string().optional(),
  permits: z.string().optional(),
  requires: z.string().optional(),
  prohibits: z.string().optional(),
  jurisdiction: z.string().optional(),
  legalcode: z.string().optional(),
  deprecatedOn: z.string().optional(),
});

const CcSchemas = {
  ItemOrFeed: ItemOrFeedSchema,
};

type ItemOrFeed = z.infer<typeof ItemOrFeedSchema>;

declare namespace Cc {
  export type { ItemOrFeed }
}

export type { Cc, ItemOrFeed };
export { CcSchemas, ItemOrFeedSchema };
