import z from "zod";

const ItemSchema = z.object({
  encoded: z.string().optional(),
});

const ContentSchemas = {
  Item: ItemSchema,
};

type Item = z.infer<typeof ItemSchema>;

declare namespace Content {
  export type { Item }
}

export type { Content, Item }
export { ContentSchemas, ItemSchema };