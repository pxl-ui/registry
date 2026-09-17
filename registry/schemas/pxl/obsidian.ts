import z from "zod";

const CorePropertiesSchema = z.object({
  tags: z
    .array(z.string())
    .nullish()
    .describe(
      "Tags are keywords or topics that help you quickly find the notes you want.",
    ),
  aliases: z
    .array(z.string())
    .describe("An alias is an alternative name for a note."),
  cssclasses: z
    .array(z.string())
    .describe("Allows you to style individual notes using CSS snippets."),
});

const PublishPropertiesSchema = z.object({
  publish: z.boolean().optional().describe("Automatically include it for publishing as either a new or changed note."),
  permalink: z.string().optional().describe("Permanent link for the document"),
  description: z
    .string()
    .optional()
    .describe("Document description for SEO/previews"),
  image: z.string().optional().describe("Featured image URL"),
  cover: z.string().optional().describe("Cover image URL"),
});

const DocumentSchema = z
  .object({
    ...CorePropertiesSchema.shape,
    ...PublishPropertiesSchema.shape,
  })
  .describe("Obsidian document frontmatter schema");

const ObsidianSchemas = {
  Document: DocumentSchema,
};

type Document = z.infer<typeof DocumentSchema>;

declare namespace Obsidian {
  export type { Document };
}

export type { Document, Obsidian };
export { DocumentSchema, ObsidianSchemas };
export default ObsidianSchemas;