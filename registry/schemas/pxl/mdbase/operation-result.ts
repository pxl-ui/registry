import { z } from "zod";

import { DiagnosticSchema } from "@/schemas/pxl/mdbase/diagnostic";

const OperationResultSchema = z
  .object({
    valid: z.boolean(),
    result: z.any(),
    diagnostics: z.array(DiagnosticSchema),
  })
  .describe("mdbase v0.3 operation result")
  .meta({
    title: "OperationResult"
  });

type OperationResult = z.infer<typeof OperationResultSchema>;

export type { OperationResult };
export { OperationResultSchema };
