import { z } from "zod";

const MonetaryAmountSchema = z.looseObject({
  currency: z.string().optional(),
  value: z.string().optional(),
});

const QuantitativeValueSchema = z
  .looseObject({
    maxValue: z
      .number()
      .optional()
      .describe("The upper value of some characteristic or property."),
    minValue: z
      .number()
      .optional()
      .describe("The lower value of some characteristic or property."),
    unitCode: z
      .string()
      .optional()
      .describe(
        "The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.",
      ),
    unitText: z
      .string()
      .optional()
      .describe(
        "A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for unitCode.",
      ),
    value: z
      .number()
      .optional()
      .describe(
        "The value of a QuantitativeValue (including Observation) or property value node.",
      ),
  })
  .meta({
    title: "QuantitativeValue",
    description:
      "A point value or interval for product characteristics and other purposes.",
  });

const HowToItemSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    requiredQuantity: z
      .union([z.string(), z.number(), QuantitativeValueSchema])
      .optional()
      .describe("The required quantity of the item(s)."),
  })
  .meta({
    title: "HowToItem",
    description:
      "An item used as either a tool or supply when performing the instructions for how to achieve a result.",
  });

const HowToToolSchema = z
  .looseObject({
    ...HowToItemSchema.shape,
  })
  .meta({
    title: "HowToTool",
    description:
      "An item used as either a tool or supply when performing the instructions for how to achieve a result.",
  });

const HowToSupplySchema = z
  .looseObject({
    ...HowToItemSchema.shape,
    estimatedCost: z
      .union([MonetaryAmountSchema, z.string()])
      .optional()
      .describe(
        "The estimated cost of the supply or supplies consumed when performing instructions.",
      ),
  })
  .meta({
    title: "HowToSupply",
    description:
      "A supply consumed when performing the instructions for how to achieve a result.",
  });

const HowToStepSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    timeRequired: z.iso
      .duration()
      .optional()
      .describe(
        "Approximate or typical time it usually takes to work with or through the content of this work for the typical or target audience.",
      ),
    position: z
      .union([z.string(), z.number()])
      .optional()
      .describe("The position of an item in a series or sequence of items."),
  })
  .meta({
    title: "HowToStep",
    description:
      "A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.",
  });

const HowToSectionSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    position: z
      .union([z.string(), z.number()])
      .optional()
      .describe("The position of an item in a series or sequence of items."),
    get itemListElement() {
      return z
        .array(z.union([HowToSectionSchema, HowToStepSchema, z.string()]))
        .optional();
    },
  })
  .meta({
    title: "HowToSection",
    description:
      "A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).",
  });

const HowToSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    estimatedCost: z
      .union([MonetaryAmountSchema, z.string()])
      .optional()
      .describe(
        "The estimated cost of the supply or supplies consumed when performing instructions.",
      ),
    performTime: z.iso
      .duration()
      .optional()
      .describe(
        "The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in ISO 8601 duration format.",
      ),
    prepTime: z.iso
      .duration()
      .optional()
      .describe(
        "The length of time it takes to prepare the items to be used in instructions or a direction, in ISO 8601 duration format.",
      ),
    step: z
      .array(z.union([HowToSectionSchema, HowToStepSchema, z.string()]))
      .optional(),
    supply: z.array(z.union([HowToSupplySchema, z.string()])).optional(),
    tool: z.array(z.union([HowToToolSchema, z.string()])).optional(),
    totalTime: z.iso
      .duration()
      .optional()
      .describe(
        "The total time required to perform instructions or a direction (including time to prepare the supplies), in ISO 8601 duration format.",
      ),
    yield: z
      .array(z.union([QuantitativeValueSchema, z.string()]))
      .optional()
      .describe(
        "The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.",
      ),
  })
  .meta({
    title: "HowTo",
    description:
      "Instructions that explain how to achieve a result by performing a sequence of steps.",
  });

const HowToSchemas = {
  HowTo: HowToSchema,
  HowToSection: HowToSectionSchema,
  HowToStep: HowToStepSchema,
};

type HowTo = z.infer<typeof HowToSchema>;
type HowToSection = z.infer<typeof HowToSectionSchema>;
type HowToStep = z.infer<typeof HowToStepSchema>;

declare namespace HowTo {
  export type { HowTo, HowToSection, HowToStep };
}

export type { HowTo, HowToSection, HowToStep };
export { HowToSchema, HowToSchemas, HowToSectionSchema, HowToStepSchema };
export default HowToSchemas;
