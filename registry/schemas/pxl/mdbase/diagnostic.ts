import { z } from "zod";

const extensionKeyPattern = /^x-[A-Za-z][A-Za-z0-9._:-]{0,127}$/;

const knownKeys = new Set([
  "severity",
  "code",
  "message",
  "path",
  "field",
  "type",
  "schema_location",
  "details",
]);

const DiagnosticSchema = z
  .looseObject({
    severity: z.enum(["info", "warning", "error"]),
    code: z.string().regex(/^[a-z][a-z0-9_]*$/),
    message: z.string().min(1),
    path: z
      .string()
      .regex(/^(?!\/)(?!.*(?:^|\/)\.\.(?:\/|$))[^\\]*$/)
      .optional(),
    field: z.string().optional(),
    type: z.string().optional(),
    schema_location: z.string().optional(),
    details: z.unknown().optional(),
  })
  .check((ctx) => {
    const unknownKeys = Object.keys(ctx.value).filter(
      (key) => !knownKeys.has(key) && !extensionKeyPattern.test(key),
    );

    if (unknownKeys.length > 0) {
      ctx.issues.push({
        code: "unrecognized_keys",
        keys: unknownKeys,
        input: ctx.value,
      });
    }
  })
  .describe("mdbase v0.3 diagnostic")
  .meta({
    title: "Diagnostic"
  });

type Diagnostic = z.infer<typeof DiagnosticSchema>;

export type { Diagnostic };
export { DiagnosticSchema };
