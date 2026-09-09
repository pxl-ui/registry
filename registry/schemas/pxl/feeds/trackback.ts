import z from "zod";

const ItemSchema = z.object({
  ping: z.string().optional(),
  abouts: z.array(z.string()).optional(),
});

const TrackbackSchemas = {
  Item: ItemSchema,
};

type Item = z.infer<typeof ItemSchema>;

declare namespace Trackback {
  export type { Item };
}

export type { Item, Trackback };
export { ItemSchema, TrackbackSchemas };
