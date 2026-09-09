import z from "zod";

const ItemOrFeedSchema = z.object({
  licenses: z.array(z.string()).optional(),
});

const CreativeCommonsSchemas = {
  ItemOrFeed: ItemOrFeedSchema,
};

type ItemOrFeed = z.infer<typeof ItemOrFeedSchema>;

declare namespace CreativeCommons {
  export type { ItemOrFeed }
}

export type { CreativeCommons, ItemOrFeed }
export { CreativeCommonsSchemas, ItemOrFeedSchema }