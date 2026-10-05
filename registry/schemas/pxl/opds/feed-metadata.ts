import { z } from "zod";

const FeedMetadataSchema = z
  .looseObject({
    identifier: z.url().describe("Unique URI identifying the feed.").optional(),
    "@type": z.url().describe("URI identifying the type of feed.").optional(),
    title: z
      .union([
        z.string(),
        z.array(z.unknown()),
        z.record(z.string(), z.unknown()),
      ])
      .describe("Title of the feed."),
    subtitle: z
      .union([
        z.string(),
        z.array(z.unknown()),
        z.record(z.string(), z.unknown()),
      ])
      .describe("Subtitle of the feed.")
      .optional(),
    modified: z.iso
      .datetime({ offset: true })
      .describe("Last modification timestamp.")
      .optional(),
    description: z.string().describe("Description of the feed.").optional(),
    itemsPerPage: z
      .number()
      .int()
      .gt(0)
      .describe("Number of items per page.")
      .optional(),
    currentPage: z
      .number()
      .int()
      .gt(0)
      .describe("Current page number, starting at one.")
      .optional(),
    numberOfItems: z
      .number()
      .int()
      .min(0)
      .describe("Total number of items in the feed.")
      .optional(),
  })
  .describe("Feed-level metadata, including title and pagination information.");

type FeedMetadata = z.infer<typeof FeedMetadataSchema>;

export type { FeedMetadata };
export { FeedMetadataSchema };
