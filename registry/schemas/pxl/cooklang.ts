import z from "zod";

const MetadataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  author: z
    .object({
      name: z.string().optional(),
      url: z.string().optional(),
    })
    .optional(),
  source: z
    .object({
      name: z.string().optional(),
      url: z.string().optional(),
    })
    .optional(),
  course: z.any().optional(),
  time: z
    .union([
      z.number(),
      z.object({
        prep_time: z.number().optional(),
        cook_time: z.number().optional(),
      }),
    ])
    .optional(),
  servings: z.union([z.string(), z.number()]).optional(),
  difficulty: z.any().optional(),
  cuisine: z.any().optional(),
  diet: z.any().optional(),
  images: z.any().optional(),
  locale: z.tuple([z.string(), z.string().nullable()]).optional(),
  custom: z.record(z.string(), z.any()),
});

/** cooklang uses Number instead of number, so we need to cast during the implementation */
const QuantitySchema = z.object({
  value: z.union([
    z.object({ type: z.literal("number"), value: z.number() }),
    z.object({
      type: z.literal("range"),
      value: z.object({ start: z.number(), end: z.number() }),
    }),
    z.object({ type: z.literal("text"), value: z.string() }),
  ]),
  unit: z.string().nullable(),
  scalable: z.boolean(),
});

const CookwareSchema = z
  .object({
    name: z.string(),
    alias: z.string().nullable(),
    quantity: QuantitySchema.describe(
      "Amount needed. Note that this is a value, not a quantity, so it doesn't have units.",
    ).nullable(),
    note: z.string().nullable(),
    relation: z
      .union([
        z.object({
          type: z.literal("definition"),
          referenced_from: z.array(z.number()),
          defined_in_step: z.boolean(),
        }),
        z.object({ type: z.literal("reference"), references_to: z.number() }),
      ])
      .describe("How the cookware is related to others"),
  })
  .describe("A recipe cookware item");

const IngredientSchema = z
  .object({
    name: z
      .string()
      .describe(
        "This can have the form of a path if the ingredient references a recipe.",
      ),
    alias: z.string().nullable(),
    quantity: QuantitySchema,
    note: z.string().nullable(),
    reference: z
      .object({
        name: z.string(),
        components: z.array(z.string()),
      })
      .nullable(),
    relation: z.object({
      relation: z.union([
        z.object({
          type: z.literal("definition"),
          referenced_from: z.array(z.number()),
          defined_in_step: z.boolean(),
        }),
        z.object({ type: z.literal("reference"), references_to: z.number() }),
      ]),
      reference_target: z
        .union([
          z.literal("ingredient"),
          z.literal("step"),
          z.literal("section"),
        ])
        .nullable(),
    }),
  })
  .describe("A recipe ingredient");

const StepSchema = z.object({
  items: z.array(
    z.union([
      z.object({ type: z.literal("text"), value: z.string() }),
      z.object({ type: z.literal("ingredient"), index: z.number() }),
      z.object({ type: z.literal("cookware"), index: z.number() }),
      z.object({ type: z.literal("timer"), index: z.number() }),
      z.object({ type: z.literal("inlineQuantity"), index: z.number() }),
    ]),
  ),
  number: z
    .number()
    .describe(
      "The step numbers start at 1 in each section and increase with non text step",
    ),
});

const SectionSchema = z.object({
  name: z.string(),
  content: z.array(
    z.union([
      z.object({ type: z.literal("step"), value: StepSchema }),
      z.object({ type: z.literal("text"), value: z.string() }),
    ]),
  ),
});

const TimerSchema = z.object({
  name: z.string().nullable(),
  quantity: QuantitySchema.nullable(),
});

const RecipeSchema = z.object({
  cookware: z.array(CookwareSchema),
  ingredients: z.array(IngredientSchema),
  inline_quantities: z.array(QuantitySchema),
  raw_metadata: z.object({
    map: z.record(z.any(), z.any()),
  }),
  sections: z.array(SectionSchema),
  timers: z.array(TimerSchema),
});

const DocumentSchema = z.object({
  metadata: MetadataSchema,
  recipe: RecipeSchema,
  report: z.string(),
});

const CooklangSchemas = {
  Metadata: MetadataSchema,
  Recipe: RecipeSchema,
  Document: DocumentSchema,
};

type Metadata = z.infer<typeof MetadataSchema>;
type Recipe = z.infer<typeof RecipeSchema>;
type Document = z.infer<typeof DocumentSchema>;

declare namespace Cooklang {
  export type { Metadata, Recipe, Document };
}

export type { Cooklang, Document, Metadata, Recipe };
export { CooklangSchemas, DocumentSchema, MetadataSchema, RecipeSchema };
export default CooklangSchemas;