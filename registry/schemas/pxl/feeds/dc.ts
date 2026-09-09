import z from "zod";

const ItemOrFeedSchema = z.object({
  titles: z.array(z.string()).optional(),
  creators: z.array(z.string()).optional(),
  subjects: z.array(z.string()).optional(),
  descriptions: z.array(z.string()).optional(),
  publishers: z.array(z.string()).optional(),
  contributors: z.array(z.string()).optional(),
  dates: z.array(z.string()).optional(),
  types: z.array(z.string()).optional(),
  formats: z.array(z.string()).optional(),
  identifiers: z.array(z.string()).optional(),
  sources: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  relations: z.array(z.string()).optional(),
  title: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `titles` (array) instead. Dublin Core fields are repeatable.",
  }),
  creator: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `creators` (array) instead. Dublin Core fields are repeatable.",
  }),
  subject: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `subjects` (array) instead. Dublin Core fields are repeatable.",
  }),
  description: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `descriptions` (array) instead. Dublin Core fields are repeatable.",
  }),
  publisher: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `publishers` (array) instead. Dublin Core fields are repeatable.",
  }),
  contributor: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `contributors` (array) instead. Dublin Core fields are repeatable.",
  }),
  date: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `dates` (array) instead. Dublin Core fields are repeatable.",
  }),
  type: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `types` (array) instead. Dublin Core fields are repeatable.",
  }),
  format: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `formats` (array) instead. Dublin Core fields are repeatable.",
  }),
  identifier: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `identifiers` (array) instead. Dublin Core fields are repeatable.",
  }),
  source: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `sources` (array) instead. Dublin Core fields are repeatable.",
  }),
  language: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `languages` (array) instead. Dublin Core fields are repeatable.",
  }),
  relation: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `relations` (array) instead. Dublin Core fields are repeatable.",
  }),
  coverage: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core fields are repeatable.",
  }),
  rights: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core fields are repeatable.",
  }),
});

const DcSchemas = {
  ItemOrFeed: ItemOrFeedSchema,
};

type ItemOrFeed = z.infer<typeof ItemOrFeedSchema>;

declare namespace Dc {
  export type { ItemOrFeed }
}

export type { Dc, ItemOrFeed };
export { DcSchemas, ItemOrFeedSchema };
