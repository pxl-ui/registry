import { z } from "zod";

type JSONSchema2020_12 = {
  $schema?: string;
  $id?: string;
  $ref?: string;

  type?:
    | "null"
    | "boolean"
    | "object"
    | "array"
    | "number"
    | "string"
    | "integer"
    | (
        | "null"
        | "boolean"
        | "object"
        | "array"
        | "number"
        | "string"
        | "integer"
      )[];

  properties?: Record<string, JSONSchema2020_12>;

  items?: JSONSchema2020_12 | boolean;

  required?: string[];

  allOf?: JSONSchema2020_12[];
  anyOf?: JSONSchema2020_12[];
  oneOf?: JSONSchema2020_12[];

  not?: JSONSchema2020_12;

  $defs?: Record<string, JSONSchema2020_12>;

  description?: string;
  title?: string;
  default?: unknown;
  examples?: unknown[];

  [key: string]: unknown;
};

const JSONSchema2020_12Schema: z.ZodType<JSONSchema2020_12> = z.lazy(() =>
  z.looseObject({
    $schema: z.string().optional(),
    $id: z.string().optional(),
    $ref: z.string().optional(),

    type: z
      .union([
        z.enum([
          "null",
          "boolean",
          "object",
          "array",
          "number",
          "string",
          "integer",
        ]),
        z.array(
          z.enum([
            "null",
            "boolean",
            "object",
            "array",
            "number",
            "string",
            "integer",
          ]),
        ),
      ])
      .optional(),

    properties: z.record(z.string(), JSONSchema2020_12Schema).optional(),

    items: z.union([JSONSchema2020_12Schema, z.boolean()]).optional(),

    required: z.array(z.string()).optional(),

    allOf: z.array(JSONSchema2020_12Schema).optional(),
    anyOf: z.array(JSONSchema2020_12Schema).optional(),
    oneOf: z.array(JSONSchema2020_12Schema).optional(),

    not: JSONSchema2020_12Schema.optional(),

    $defs: z.record(z.string(), JSONSchema2020_12Schema).optional(),

    description: z.string().optional(),
    title: z.string().optional(),
    default: z.unknown().optional(),
    examples: z.array(z.unknown()).optional(),
  }).describe("Draft 2020-12")
  .meta({
    title: "JSONSchema.2020-12",
    description: "Draft 2020-12"
  }),
);

const JSONSchemas = {
  "2020-12": JSONSchema2020_12Schema,
  Document: JSONSchema2020_12Schema,
};

type Document = JSONSchema2020_12;

declare namespace JSONSchema {
  export type { JSONSchemas, JSONSchema2020_12, Document };
}

export type { JSONSchema, JSONSchema2020_12 };
export { JSONSchema2020_12Schema, JSONSchemas };
export default JSONSchemas;
