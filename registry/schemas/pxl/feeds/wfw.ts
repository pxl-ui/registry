import z from "zod";

const ItemSchema = z.object({
  comment: z.string().optional(),
  commentRss: z.string().optional(),
});

const WfwSchemas = {
  Item: ItemSchema,
};

type Item = z.infer<typeof ItemSchema>;

declare namespace Wfw {
  export type { Item }
}

export type { Item, Wfw };
export { ItemSchema, WfwSchemas };
