import z from "zod";

const ItemOrFeedSchema = z.object({
  lat: z.number().optional(),
  long: z.number().optional(),
  alt: z.number().optional(),
});

const GeoSchemas = {
  ItemOrFeed: ItemOrFeedSchema,
};

type ItemOrFeed = z.infer<typeof ItemOrFeedSchema>;

declare namespace Geo {
  export type { ItemOrFeed };
}

export type { Geo, ItemOrFeed };
export { GeoSchemas, ItemOrFeedSchema };
