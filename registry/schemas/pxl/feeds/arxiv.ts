import z from "zod";

const PrimaryCategorySchema = z.object({
  term: z.string().optional(),
  scheme: z.string().optional(),
  label: z.string().optional(),
});
const AuthorSchema = z.object({
  affiliation: z.string().optional(),
});
const EntrySchema = z.object({
  comment: z.string().optional(),
  journalRef: z.string().optional(),
  doi: z.string().optional(),
  primaryCategory: PrimaryCategorySchema,
});

const ArxivSchemas = {
  PrimaryCategory: PrimaryCategorySchema,
  Entry: EntrySchema,
}

type PrimaryCategory = z.infer<typeof PrimaryCategorySchema>;
type Author = z.infer<typeof AuthorSchema>;
type Entry = z.infer<typeof EntrySchema>;

declare namespace Arxiv {
  export type { PrimaryCategory, Author, Entry }
}

export type { Arxiv, Author, Entry, PrimaryCategory };
export { ArxivSchemas, AuthorSchema, EntrySchema, PrimaryCategorySchema };
