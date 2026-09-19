import z from "zod";

const VersionSchema = z.object({
  version: z
    .string()
    .nullable()
    .describe(
      "Semver string if the heading is semver-compliant, otherwise `null`.",
    ),
  title: z.string().nullable().describe("The raw heading text."),
  date: z
    .string()
    .nullable()
    .describe("Date parsed from the heading if present, otherwise `null`."),
  body: z
    .string()
    .describe("All content under the heading, as a single string."),
  parsed: z
    .record(z.string(), z.array(z.string()))
    .describe(`List items grouped by subheading. The \`_\` key holds every list item;
each \`### Subheading\` adds a key with the items beneath it.`),
}).describe("A version described in the document");

const DocumentSchema = z.object({
  title: z
    .string()
    .optional()
    .describe(
      "The document title (the first `#` heading that is not itself a version), if present.",
    ),
  description: z
    .string()
    .optional()
    .describe("Free text between the title and the first version, if any."),
  versions: z
    .array(VersionSchema)
    .describe("Version entries, in document order."),
}).describe("Changelog interface from [changelog-parser](https://www.npmjs.com/package/changelog-parser)");

const ChangelogSchemas = {
  Document: DocumentSchema,
  Version: VersionSchema,
};

type Document = z.infer<typeof DocumentSchema>;
type Version = z.infer<typeof VersionSchema>;

declare namespace Changelog {
  export type { Document, Version };
}

export type { Changelog, Document, Version };
export { ChangelogSchemas, DocumentSchema, VersionSchema };

export default ChangelogSchemas;
