import z from "zod";

const InReplyToSchema = z.object({
  ref: z.string(),
  href: z.url().optional(),
  type: z.string().optional(),
  source: z.string().optional(),
});

const LinkSchema = z.object({
  count: z.number().optional(),
  updated: z.string().optional(),
});

const ItemSchema = z.object({
  total: z.number().optional(),
  InReplyTos: z.array(InReplyToSchema).optional(),
});

const ThrSchemas = {
  Item: ItemSchema,
};

type InReplyTo = z.infer<typeof InReplyToSchema>;
type Link = z.infer<typeof LinkSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Thr {
  export type { Item };
}

export type { InReplyTo, Item, Link, Thr };
export { InReplyToSchema, ItemSchema, LinkSchema, ThrSchemas };
