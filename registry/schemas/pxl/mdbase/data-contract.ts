import { z } from "zod";

import JSONSchemas from "@/schemas/pxl/json-schema";

const EXTENSION_KEY_PATTERN = /^x-[A-Za-z][A-Za-z0-9._:-]{0,127}$/;

/**
 * Rejects any key that is not declared in the schema shape and does not
 * match the `x-` extension pattern (equivalent to `additionalProperties: false`
 * combined with `patternProperties`).
 */
const allowExtensionKeys = <T extends z.ZodObject>(schema: T): T =>
  schema.check((ctx) => {
    const known = new Set(Object.keys(schema.shape));
    for (const key of Object.keys(ctx.value as Record<string, unknown>)) {
      if (!known.has(key) && !EXTENSION_KEY_PATTERN.test(key)) {
        ctx.issues.push({
          code: "custom",
          message: `Unexpected property "${key}"`,
          input: ctx.value,
          path: [key],
        });
      }
    }
  });

const ContractIdSchema = z
  .string()
  .min(3)
  .max(128)
  .regex(/^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)+$/);

const SemanticVersionSchema = z
  .string()
  .regex(
    /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,
  );

const SchemaWrapperSchema = z.union([
  z.strictObject({
    dialect: z.literal("json-schema-2020-12"),
    value: JSONSchemas["2020-12"],
  }),
  z.strictObject({
    dialect: z.literal("json-schema-2020-12"),
    ref: z.string().min(1),
  }),
]);

const ContractBaseSchema = z.looseObject({
  kind: z.literal("mdbase.contract"),
  id: ContractIdSchema,
  version: SemanticVersionSchema,
  name: z.string().min(1).optional(),
  description: z.string().optional(),
});

const DataContractSchema = z
  .discriminatedUnion("contract_type", [
    allowExtensionKeys(
      ContractBaseSchema.extend({
        contract_type: z.literal("record"),
        record_schema: SchemaWrapperSchema,
        binding_schema: SchemaWrapperSchema.optional(),
      }),
    ),
    allowExtensionKeys(
      ContractBaseSchema.extend({
        contract_type: z.literal("event"),
        data_schema: SchemaWrapperSchema,
        source_schema: SchemaWrapperSchema.optional(),
      }),
    ),
    allowExtensionKeys(
      ContractBaseSchema.extend({
        contract_type: z.literal("action"),
        input_schema: SchemaWrapperSchema,
        output_schema: SchemaWrapperSchema.optional(),
        error_schema: SchemaWrapperSchema.optional(),
        provider_schema: SchemaWrapperSchema.optional(),
        behavior: z
          .strictObject({
            idempotency: z.enum(["none", "optional", "required"]).optional(),
            cancellation: z.enum(["none", "cooperative"]).optional(),
          })
          .optional(),
      }),
    ),
  ])
  .describe("mdbase v0.3 contract frontmatter")
  .meta({
    title: "DataContract"
  });

type DataContract = z.infer<typeof DataContractSchema>;

export type { DataContract };
export { DataContractSchema };
