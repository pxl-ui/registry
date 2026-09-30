import { z } from "zod";

const IdentifierSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9._:-]*$/)
  .describe("An identifier.");

const TypeNameSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9_-]{0,127}$/)
  .describe("A type name.");

const FieldNameSchema = z
  .string()
  .regex(/^[A-Za-z_][A-Za-z0-9_:-]*$/)
  .describe("A field name.");

const ExpressionSchema = z.string().min(1).describe("A non-empty expression.");

const ExtensionSchema = z
  .object({})
  .catchall(z.unknown())
  .describe("An extension object.");

const ExtensionKeySchema = z
  .string()
  .regex(/^x-[A-Za-z][A-Za-z0-9._:-]{0,127}$/);

const TypeListSchema = z
  .array(TypeNameSchema)
  .min(1)
  .refine(
    (types) => new Set(types).size === types.length,
    "Type names must be unique",
  )
  .describe("A non-empty list of unique type names.")
  .meta({
    title: "TypeList"
  });

const ThisContextSchema = z
  .object({
    on_missing: z
      .enum(["view", "null", "error"])
      .default("view")
      .describe("Defines how a missing `this` context is handled."),
    types: TypeListSchema.optional().describe(
      "The types applicable to the `this` context.",
    ),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        key !== "on_missing" &&
        key !== "types" &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("The context configuration for the current view.")
  .meta({
    title: "ThisContext"
  });

const ViewContextSchema = z
  .object({
    this: ThisContextSchema.describe(
      "The context representing the current view.",
    ),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (key !== "this" && !ExtensionKeySchema.safeParse(key).success) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("Context available when evaluating a view.")
  .meta({
    title: "ViewContext"
  });

const ProjectionSchema = z
  .object({
    expr: ExpressionSchema.describe("The projection expression."),
    description: z
      .string()
      .optional()
      .describe("A human-readable description of the projection."),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        key !== "expr" &&
        key !== "description" &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("A named projection definition.")
  .meta({
    title: "Projection"
  });

const ProjectionSetSchema = z
  .record(FieldNameSchema, ProjectionSchema)
  .describe("A set of projections keyed by field name.")
  .meta({
    title: "ProjectionSet"
  });

const SharedQuerySchema = z
  .object({
    types: TypeListSchema.optional().describe(
      "The types included in the query.",
    ),
    where: ExpressionSchema.optional().describe("The filtering expression."),
    context: ViewContextSchema.optional().describe(
      "The context used when evaluating the query.",
    ),
    projections: ProjectionSetSchema.optional().describe(
      "The projections defined for the query.",
    ),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        key !== "types" &&
        key !== "where" &&
        key !== "context" &&
        key !== "projections" &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("A query shared by one or more views.")
  .meta({
    title: "SharedQuery"
  });

const PropertyMetadataSchema = z
  .object({
    label: z
      .string()
      .optional()
      .describe("The display label for the property."),
    description: z
      .string()
      .optional()
      .describe("A human-readable description of the property."),
    format: z
      .string()
      .optional()
      .describe("The presentation format for the property."),
    hidden: z
      .boolean()
      .optional()
      .describe("Whether the property should be hidden."),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        key !== "label" &&
        key !== "description" &&
        key !== "format" &&
        key !== "hidden" &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("Metadata associated with a property.")
  .meta({
    title: "PropertyMetadata"
  });

const PropertyMetadataSetSchema = z
  .record(z.string().min(1), PropertyMetadataSchema)
  .describe("A set of property metadata keyed by property name.")
  .meta({
    title: "PropertyMetadataSet"
  });

const SummaryFunctionSchema = z
  .object({
    expr: ExpressionSchema.describe("The summary function expression."),
    description: z
      .string()
      .optional()
      .describe("A human-readable description of the summary function."),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        key !== "expr" &&
        key !== "description" &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("A summary function definition.")
  .meta({
    title: "SummaryFunction"
  });

const SummaryFunctionSetSchema = z
  .record(FieldNameSchema, SummaryFunctionSchema)
  .describe("A set of summary functions keyed by field name.")
  .meta({
    title: "SummaryFunctionSet"
  });

const SelectExpressionSchema = z
  .object({
    name: FieldNameSchema.describe("The name of the selected field."),
    expr: ExpressionSchema.describe(
      "The expression producing the selected value.",
    ),
    label: z
      .string()
      .optional()
      .describe("The display label for the selected value."),
    description: z
      .string()
      .optional()
      .describe("A human-readable description of the selected value."),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        key !== "name" &&
        key !== "expr" &&
        key !== "label" &&
        key !== "description" &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("An expression-based select item.")
  .meta({
    title: "SelectExpression"
  });

const SelectSchema = z
  .array(
    z.union([
      z.string().min(1).describe("A field name selected directly."),
      SelectExpressionSchema,
    ]),
  )
  .min(1)
  .describe("The fields and expressions selected by a view.")
  .meta({
    title: "Select"
  });

const OrderBySchema = z
  .array(
    z.object({
      field: z.string().min(1).describe("The field used for ordering."),
      direction: z
        .enum(["asc", "desc"])
        .default("asc")
        .describe("The ordering direction."),
    }),
  )
  .min(1)
  .describe("The ordering specification for a view.")
  .meta({
    title: "OrderBy"
  });

const GroupBySchema = z
  .array(
    z.object({
      field: z.string().min(1).describe("The field used for grouping."),
      direction: z
        .enum(["asc", "desc"])
        .default("asc")
        .describe("The grouping direction."),
    }),
  )
  .min(1)
  .describe("The grouping specification for a view.")
  .meta({
    title: "GroupBy"
  });

const SummarySchema = z
  .object({
    field: z.string().min(1).describe("The field to summarize."),
    function: IdentifierSchema.describe(
      "The identifier of the summary function.",
    ),
    name: FieldNameSchema.optional().describe(
      "The output field name for the summary.",
    ),
    label: z.string().optional().describe("The display label for the summary."),
  })
  .describe("A summary operation applied to a field.");

const SummariesSchema = z
  .array(SummarySchema)
  .min(1)
  .describe("The summary operations defined for a view.")
  .meta({
    title: "Summary"
  });

const PresentationSchema = z
  .object({
    type: IdentifierSchema.describe("The presentation type identifier."),
    fallback: IdentifierSchema.optional().describe(
      "The fallback presentation type identifier.",
    ),
    mappings: z
      .record(FieldNameSchema, z.string().min(1))
      .optional()
      .describe("Mappings from field names to presentation values."),
    options: z
      .object({})
      .catchall(z.unknown())
      .optional()
      .describe("Additional presentation options."),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        key !== "type" &&
        key !== "fallback" &&
        key !== "mappings" &&
        key !== "options" &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("Presentation configuration for a view.")
  .meta({
    title: "Presentation"
  });

const ViewSchema = z
  .object({
    id: IdentifierSchema.describe("The unique identifier of the view."),
    name: z.string().min(1).describe("The name of the view."),
    description: z
      .string()
      .optional()
      .describe("A human-readable description of the view."),
    types: TypeListSchema.optional().describe(
      "The types applicable to the view.",
    ),
    where: ExpressionSchema.optional().describe(
      "The filtering expression for the view.",
    ),
    context: ViewContextSchema.optional().describe(
      "The context used when evaluating the view.",
    ),
    projections: ProjectionSetSchema.optional().describe(
      "The projections defined for the view.",
    ),
    select: SelectSchema.optional().describe(
      "The fields and expressions selected by the view.",
    ),
    order_by: OrderBySchema.optional().describe("The ordering specification."),
    group_by: GroupBySchema.optional().describe("The grouping specification."),
    summaries: SummariesSchema.optional().describe("The summary operations."),
    limit: z
      .number()
      .int()
      .min(0)
      .optional()
      .describe("The maximum number of results."),
    offset: z
      .number()
      .int()
      .min(0)
      .optional()
      .describe("The number of results to skip."),
    include_body: z
      .boolean()
      .default(false)
      .describe("Whether the result should include the body."),
    frontmatter_mode: z
      .enum(["effective", "persisted", "both"])
      .default("effective")
      .describe("Which frontmatter representation should be included."),
    presentation: PresentationSchema.optional().describe(
      "The presentation configuration.",
    ),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        ![
          "id",
          "name",
          "description",
          "types",
          "where",
          "context",
          "projections",
          "select",
          "order_by",
          "group_by",
          "summaries",
          "limit",
          "offset",
          "include_body",
          "frontmatter_mode",
          "presentation",
        ].includes(key) &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("A saved view definition.")
  .meta({
    title: "View"
  });

const SavedViewSchema = z
  .object({
    type: z
      .string()
      .min(1)
      .optional()
      .describe("The canonical type membership value."),
    id: IdentifierSchema.describe(
      "The unique identifier of the saved-view record.",
    ),
    version: z
      .number()
      .int()
      .min(1)
      .describe("The version of the saved-view record."),
    name: z.string().min(1).describe("The name of the saved view."),
    description: z
      .string()
      .optional()
      .describe("A human-readable description of the saved view."),
    query: SharedQuerySchema.optional().describe(
      "The query shared by the saved view.",
    ),
    properties: PropertyMetadataSetSchema.optional().describe(
      "Metadata associated with properties.",
    ),
    summary_functions: SummaryFunctionSetSchema.optional().describe(
      "Summary functions available to the saved view.",
    ),
    views: z
      .array(ViewSchema)
      .min(1)
      .describe("The views contained in the saved-view record."),
  })
  .catchall(ExtensionSchema)
  .superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (
        ![
          "type",
          "id",
          "version",
          "name",
          "description",
          "query",
          "properties",
          "summary_functions",
          "views",
        ].includes(key) &&
        !ExtensionKeySchema.safeParse(key).success
      ) {
        ctx.addIssue({
          code: "custom",
          path: [key],
          message:
            "Unknown properties must use the x-* extension naming convention.",
        });
      }
    }
  })
  .describe("The contract view of a saved-view record.")
  .meta({
    title: "SavedView"
  });

type SavedView = z.infer<typeof SavedViewSchema>;

export type { SavedView };
export {  SavedViewSchema };
