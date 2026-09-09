import z from "zod";

const ChapterSchema = z.object({
  start: z.string(),
  title: z.string(),
  href: z.url().optional(),
  image: z.string().optional(),
});

const ItemSchema = z.object({
  chapters: z.array(ChapterSchema),
});

const PscSchemas = {
  Chapter: ChapterSchema,
  Item: ItemSchema,
};

type Chapter = z.infer<typeof ChapterSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Psc {
  export type { Item, Chapter };
}

export type { Chapter, Item, Psc };
export { ChapterSchema, ItemSchema, PscSchemas };
