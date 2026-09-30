import { z } from "zod";

import JSONSchemas from "@/schemas/pxl/json-schema";

const extensionKeyPattern = /^x-[A-Za-z][A-Za-z0-9._:-]{0,127}$/;

const DomainExtensionSchema = z.record(z.string(), z.unknown());

function withExtensions<T extends z.ZodRawShape>(shape: T) {
  return z
    .object(shape)
    .catchall(DomainExtensionSchema)
    .superRefine((value, ctx) => {
      for (const key of Object.keys(value)) {
        if (!(key in shape) && !extensionKeyPattern.test(key)) {
          ctx.addIssue({
            code: "custom",
            message: `Unrecognized key: "${key}"`,
            path: [key],
            input: value,
          });
        }
      }
    });
}

const TypeNameSchema = z.string().regex(/^[A-Za-z][A-Za-z0-9_-]{0,127}$/);

const IdentifierSchema = z.string().regex(/^[A-Za-z][A-Za-z0-9._:-]*$/);

const FieldReferenceSchema = z
  .union([
    z
      .string()
      .regex(
        /^[A-Za-z_][A-Za-z0-9_:-]*(\[\])?(\.[A-Za-z_][A-Za-z0-9_:-]*(\[\])?)*$/,
      ),
    z
      .string()
      .min(1)
      .regex(/^(\/([^/~]|~0|~1)*)*$/),
  ])
  .describe("An mdbase field path or a non-root RFC 6901 JSON Pointer.");

const ScalarSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);

const LifecycleActionSchema = z.strictObject({
  if: z.string().min(1).optional(),
  set: z
    .record(
      FieldReferenceSchema,
      z.union([
        z.strictObject({ now: z.literal(true) }),
        z.strictObject({ today: z.literal(true) }),
        z.strictObject({ uuid: z.literal(true) }),
        z.strictObject({ ulid: z.literal(true) }),
        z.strictObject({ slugify: FieldReferenceSchema }),
        z.strictObject({ copy: FieldReferenceSchema }),
        z
          .strictObject({ literal: z.unknown() })
          .refine((value) => "literal" in value, {
            message: "`literal` is required",
          }),
      ]),
    )
    .refine((value) => Object.keys(value).length >= 1, {
      message: "At least one field must be set",
    }),
});

const LifecycleEventSchema = z.union([
  LifecycleActionSchema,
  z.array(LifecycleActionSchema).min(1),
]);

const TypeFileSchema = withExtensions({
  kind: z.literal("mdbase.type"),
  name: TypeNameSchema,
  version: z.number().int().min(1).optional(),
  description: z.string().optional(),
  match: z
    .strictObject({
      path_glob: z
        .union([z.string().min(1), z.array(z.string().min(1)).min(1)])
        .optional(),
      fields_present: z
        .array(FieldReferenceSchema)
        .min(1)
        .refine((items) => new Set(items).size === items.length, {
          message: "Items must be unique",
        })
        .optional(),
      where: z
        .record(
          FieldReferenceSchema,
          z.union([
            ScalarSchema,
            z.array(z.unknown()),
            z
              .strictObject({
                eq: z.unknown().optional(),
                neq: z.unknown().optional(),
                contains: z.unknown().optional(),
                containsAll: z.array(z.unknown()).optional(),
                containsAny: z.array(z.unknown()).optional(),
                exists: z.boolean().optional(),
                startsWith: z.string().optional(),
                endsWith: z.string().optional(),
                matches: z.string().optional(),
                gt: ScalarSchema.optional(),
                gte: ScalarSchema.optional(),
                lt: ScalarSchema.optional(),
                lte: ScalarSchema.optional(),
              })
              .refine((value) => Object.keys(value).length >= 1, {
                message: "At least one operator is required",
              }),
          ]),
        )
        .refine((value) => Object.keys(value).length >= 1, {
          message: "At least one predicate is required",
        })
        .optional(),
      expr: z.strictObject({ $expr: z.string().min(1) }).optional(),
    })
    .refine((value) => Object.keys(value).length >= 1, {
      message: "At least one match criterion is required",
    })
    .optional(),
  schema: z.union([
    z.strictObject({
      dialect: z.literal("json-schema-2020-12"),
      value: JSONSchemas["2020-12"],
    }),
    z.strictObject({
      dialect: z.literal("json-schema-2020-12"),
      ref: z.string().min(1),
    }),
  ]),
  collection: withExtensions({
    display: z
      .strictObject({
        name_field: FieldReferenceSchema.optional(),
        description_field: FieldReferenceSchema.optional(),
        icon: z.string().optional(),
        color_field: FieldReferenceSchema.optional(),
      })
      .optional(),
    read_defaults: z.record(z.string(), z.unknown()).optional(),
    links: z
      .record(
        FieldReferenceSchema,
        z.strictObject({
          target_type: z
            .union([
              TypeNameSchema,
              z.literal("any"),
              z
                .array(TypeNameSchema)
                .min(1)
                .refine((items) => new Set(items).size === items.length, {
                  message: "Items must be unique",
                }),
            ])
            .optional(),
          validate_exists: z.boolean().optional(),
          format: z.enum(["wikilink", "markdown", "path", "any"]).optional(),
        }),
      )
      .refine((value) => Object.keys(value).length >= 1, {
        message: "At least one link rule is required",
      })
      .optional(),
    unique: z
      .array(
        z
          .strictObject({
            field: FieldReferenceSchema,
            scope: z.enum(["collection", "type", "path_glob"]).optional(),
            path_glob: z.string().min(1).optional(),
          })
          .refine(
            (rule) =>
              rule.scope !== "path_glob" || rule.path_glob !== undefined,
            {
              message: "`path_glob` is required when scope is 'path_glob'",
              path: ["path_glob"],
            },
          ),
      )
      .min(1)
      .optional(),
    path: z
      .strictObject({
        pattern: z.string().min(1).optional(),
        runtime: IdentifierSchema.optional(),
        template: z.string().min(1).optional(),
        folder: z.string().optional(),
        generated_by: IdentifierSchema.optional(),
      })
      .optional(),
    projections: z
      .record(
        z.string().regex(/^[A-Za-z_][A-Za-z0-9_:-]*$/),
        z.strictObject({
          expr: z.string().min(1),
          description: z.string().optional(),
        }),
      )
      .optional(),
  }).optional(),
  lifecycle: z
    .strictObject({
      on_create: LifecycleEventSchema.optional(),
      on_update: LifecycleEventSchema.optional(),
    })
    .optional(),
  implements: z
    .array(
      withExtensions({
        contract: z
          .string()
          .min(3)
          .max(128)
          .regex(/^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)+$/),
        version: z
          .string()
          .regex(
            /^(?:[\^~=]?(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?|(?:>=|<=|>|<|=)(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?: (?:>=|<=|>|<|=)(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?)*)$/,
          ),
        fields: z.record(FieldReferenceSchema, FieldReferenceSchema),
        binding: z.record(z.string(), z.unknown()).optional(),
      }),
    )
    .min(1)
    .optional(),
}).describe("mdbase v0.3 type file frontmatter")
  .meta({
    title: "TypeFile"
  });

type TypeFile = z.infer<typeof TypeFileSchema>;

export type { TypeFile };
export { TypeFileSchema };
