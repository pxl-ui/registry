import { z } from "zod";

const RecordDocumentSchema = z
  .strictObject({
    path: z.string().min(1).describe("Path of the record."),
    revision: z.string().min(1).describe("Revision identifier of the record."),
    types: z.array(z.string().min(1)).describe("Types assigned to the record."),
    frontmatter: z
      .record(z.string(), z.unknown())
      .describe("Frontmatter as written in the document."),
    effective_frontmatter: z
      .record(z.string(), z.unknown())
      .describe("Frontmatter after applying type defaults and resolution."),
    body: z.string().describe("Markdown body of the document."),
    document: z.string().describe("Full raw document content.").optional(),
    file: z
      .strictObject({
        name: z.string().min(1).describe("File name."),
        folder: z.string().describe("Folder containing the file."),
        size: z.int().min(0).describe("File size."),
        mtime: z.string().describe("Last modification time."),
      })
      .describe("File system metadata of the record."),
  })
  .describe("mdbase v0.3 record document.")
  .meta({
    title: "RecordDocument"
  });

type RecordDocument = z.infer<typeof RecordDocumentSchema>;

export type { RecordDocument };
export { RecordDocumentSchema };
