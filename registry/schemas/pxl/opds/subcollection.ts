import { z } from "zod";

import { type Link, LinkSchema } from "@/schemas/pxl/opds/link";

type Subcollection =
  | {
      metadata?: Record<string, unknown>;
      links?: Link[];
      [role: string]: unknown;
    }
  | (
      | Link
      | {
          metadata?: Record<string, unknown>;
          links?: Link[];
          [role: string]: unknown;
        }
    )[];

// The full collection form requires metadata and links. Nested roles recurse;
// the compact form also permits collection objects with optional metadata/links.
const SubcollectionSchema: z.ZodType<Subcollection> = z
  .lazy(() =>
    z.union([
      z.looseObject({
        metadata: z
          .record(z.string(), z.unknown())
          .describe("Collection metadata."),
        links: z.array(LinkSchema).describe("Collection links."),
        additionalProperties: SubcollectionSchema.optional(),
      }),
      z.array(
        z.union([
          LinkSchema,
          z
            .object({
              metadata: z.record(z.string(), z.unknown()).optional(),
              links: z.array(LinkSchema).optional(),
            })
            .catchall(SubcollectionSchema),
        ]),
      ),
    ]),
  )
  .describe("A full or compact Readium subcollection.");

export type { Subcollection };
export { SubcollectionSchema };
