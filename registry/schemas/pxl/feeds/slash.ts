import z from "zod";

const HitParadeSchema = z.array(z.number());
const ItemSchema = z.object({
  section: z.string().optional(),
  department: z.string().optional(),
  comments: z.number().optional(),
  hitParade: HitParadeSchema.optional(),
});

const SlashSchemas = {
  HitParade: HitParadeSchema,
  Item: ItemSchema,
};

type HitParade = z.infer<typeof HitParadeSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Slash {
  export type { HitParade, Item };
}

export type { HitParade, Item, Slash };
export { HitParadeSchema, ItemSchema, SlashSchemas };
