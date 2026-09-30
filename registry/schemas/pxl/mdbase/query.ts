import { z } from "zod";

const extensionKeyPattern = /^x-[A-Za-z][A-Za-z0-9._:-]{0,127}$/;

const extensible = <Shape extends z.ZodRawShape>(shape: Shape) => {
  const knownKeys = new Set(Object.keys(shape));

  return z.object(shape)
    .catchall(z.record(z.string(), z.unknown()))
    .check((ctx) => {
      const unrecognized = Object.keys(ctx.value).filter(
        (key) => !knownKeys.has(key) && !extensionKeyPattern.test(key)
      );

      if (unrecognized.length > 0) {
        ctx.issues.push({
          code: "unrecognized_keys",
          keys: unrecognized,
          input: ctx.value,
        });
      }
    });
};

const ExpressionSchema = z.string()
  .min(1);

const FieldNameSchema = z.string()
  .regex(/^[A-Za-z_][A-Za-z0-9_:-]*$/);

const FieldOrderSchema = z.strictObject({
  field: z.string().min(1),
  direction: z.enum(["asc", "desc"]).default("asc"),
});

const QuerySchema = extensible({
  types: z.array(z.string().regex(/^[A-Za-z][A-Za-z0-9_-]{0,127}$/))
    .min(1)
    .refine((items) => new Set(items).size === items.length, {
      message: "Items must be unique",
    })
    .optional(),
  timezone: z.string()
    .min(1)
    .describe("IANA timezone used for this query execution")
    .optional(),
  context: z.strictObject({
    this: z.strictObject({
      path: z.string().min(1),
    }),
  }).optional(),
  projections: z.record(
    FieldNameSchema,
    extensible({
      expr: ExpressionSchema,
      description: z.string().optional(),
    })
  ).optional(),
  where: ExpressionSchema.optional(),
  select: z.array(
    z.union([
      z.string().min(1),
      extensible({
        name: FieldNameSchema,
        expr: ExpressionSchema,
        label: z.string().optional(),
        description: z.string().optional(),
      }),
    ])
  ).min(1).optional(),
  order_by: z.array(FieldOrderSchema).min(1).optional(),
  group_by: z.array(FieldOrderSchema).min(1).optional(),
  summary_functions: z.record(
    FieldNameSchema,
    extensible({
      expr: ExpressionSchema,
      description: z.string().optional(),
    })
  ).optional(),
  summaries: z.array(
    z.strictObject({
      field: z.string().min(1),
      function: z.string().regex(/^[A-Za-z][A-Za-z0-9._:-]*$/),
      name: FieldNameSchema.optional(),
      label: z.string().optional(),
    })
  ).min(1).optional(),
  limit: z.int().min(0).optional(),
  offset: z.int().min(0).optional(),
  include_body: z.boolean().default(false).optional(),
  frontmatter_mode: z.enum(["effective", "persisted", "both"])
    .default("effective")
    .optional(),
}).describe("mdbase v0.3 query object")
  .meta({
    title: "Query"
  });

type Query = z.infer<typeof QuerySchema>;

export type { Query }
export { QuerySchema }