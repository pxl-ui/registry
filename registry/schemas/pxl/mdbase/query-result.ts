import { z } from "zod";

import { DiagnosticSchema } from "@/schemas/pxl/mdbase/diagnostic";

const QueryResultSchema = z
  .strictObject({
    results: z.array(
      z.looseObject({
        file: z.looseObject({
          path: z.string().min(1),
        }),
        frontmatter: z.record(z.string(), z.unknown()).optional(),
        effective_frontmatter: z.record(z.string(), z.unknown()).optional(),
        values: z.record(z.string(), z.unknown()).optional(),
        body: z.string().optional(),
      }),
    ),
    meta: z.looseObject({
      total_count: z.int().min(0),
      has_more: z.boolean(),
      context: z
        .strictObject({
          path: z.string().min(1),
        })
        .optional(),
      view: z
        .strictObject({
          path: z.string().min(1),
          id: z.string().min(1),
        })
        .optional(),
      groups: z
        .array(
          z.strictObject({
            values: z.record(z.string(), z.unknown()),
            count: z.int().min(0),
            summaries: z.record(z.string(), z.unknown()),
          }),
        )
        .optional(),
    }),
    diagnostics: z.array(DiagnosticSchema),
  })
  .describe("mdbase v0.3 query result")
  .meta({
    title: "QueryResult"
  });

type QueryResult = z.infer<typeof QueryResultSchema>;


export type { QueryResult };
export { QueryResultSchema };