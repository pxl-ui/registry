import { z } from "zod";

const ImageObjectSchema = z
  .looseObject({
    contentUrl: z.string().optional(),
    name: z.string().optional(),
    width: z.string().optional(),
    height: z.string().optional(),
  })
  .meta({
    title: "ImageObject",
    description: "An image file.",
  });
const ImageSchema = z.union([
  z.string(),
  ImageObjectSchema,
  z.array(z.union([z.string(), ImageObjectSchema])),
]);

const ItemAvailabilitySchema = z
  .union([
    z
      .literal("Discontinued")
      .describe("Indicates that the item has been discontinued."),
    z.literal("InStock").describe("Indicates that the item is in stock."),
    z
      .literal("LimitedAvailability")
      .describe("Indicates that the item has limited availability."),
    z
      .literal("MadeToOrder")
      .describe("Indicates that the item is made to order (custom made)."),
    z
      .literal("OutOfStock")
      .describe("Indicates that the item is out of stock."),
    z.literal("SoldOut").describe("Indicates that the item has sold out."),
  ])
  .meta({
    title: "ItemAvailability",
    description: "A list of possible product availability options.",
  });

const CategoryCodeSchema = z
  .object({
    codeValue: z
      .string()
      .optional()
      .describe("A short textual code that uniquely identifies the value."),
  })
  .meta({
    title: "CategoryCode",
    description: "A Category Code.",
  });

const CategorySchema = z
  .union([
    CategoryCodeSchema,
    z.array(CategoryCodeSchema),
    z.string(),
    z.array(z.string()),
  ])
  .meta({
    title: "Category",
    description:
      "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
  });

const PriceSchema = z.union([z.number(), z.string()]).meta({
  title: "Price",
  description: `The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.

Usage guidelines:

- Use the priceCurrency property (with standard formats: ISO 4217 currency format, e.g. "USD"; Ticker symbol for cryptocurrencies, e.g. "BTC"; well known names for Local Exchange Trading Systems (LETS) and other currency types, e.g. "Ithaca HOUR") instead of including ambiguous symbols such as '$' in the value.
- Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
- Note that both RDFa and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
- Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
`,
});

const NutritionInformationSchema = z
  .looseObject({
    calories: z.string().optional().describe("The number of calories."),
    carbohydrateContent: z
      .string()
      .optional()
      .describe("The number of grams of carbohydrates."),
    cholesterolContent: z
      .string()
      .optional()
      .describe("The number of milligrams of cholesterol."),
    fatContent: z.string().optional().describe("The number of grams of fat."),
    fiberContent: z
      .string()
      .optional()
      .describe("The number of grams of fiber."),
    proteinContent: z
      .string()
      .optional()
      .describe("The number of grams of protein."),
    saturatedFatContent: z
      .string()
      .optional()
      .describe("The number of grams of saturated fat."),
    servingSize: z
      .string()
      .optional()
      .describe("The serving size, in terms of the number of volume or mass."),
    sodiumContent: z
      .string()
      .optional()
      .describe("The number of milligrams of sodium."),
    sugarContent: z
      .string()
      .optional()
      .describe("The number of grams of sugar."),
    transFatContent: z
      .string()
      .optional()
      .describe("The number of grams of trans fat."),
    unsaturatedFatContent: z
      .string()
      .optional()
      .describe("The number of grams of unsaturated fat."),
  })
  .meta({
    title: "NutritionInformation",
    description: "Nutritional information about the recipe.",
  });

const DietSchema = z
  .looseObject({
    dietFeatures: z
      .union([z.string(), z.array(z.string())])
      .describe(
        "Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.",
      ),
    expertConsiderations: z
      .union([z.string(), z.array(z.string())])
      .describe("Medical expert advice related to the plan."),
    physiologicalBenefits: z
      .union([z.string(), z.array(z.string())])
      .describe("Specific physiologic benefits associated to the plan."),
    risks: z
      .union([z.string(), z.array(z.string())])
      .describe("Specific physiologic risks associated to the diet plan."),
  })
  .meta({
    title: "Diet",
    description:
      "A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.",
  });

const RestrictedDietSchema = z
  .union([
    z
      .literal("DiabeticDiet")
      .describe("A diet appropriate for people with diabetes."),
    z.literal("GlutenFreeDiet").describe("A diet exclusive of gluten."),
    z
      .literal("HalalDiet")
      .describe("A diet conforming to Islamic dietary practices."),
    z
      .literal("HinduDiet")
      .describe(
        "A diet conforming to Hindu dietary practices, in particular, beef-free.",
      ),
    z
      .literal("KosherDiet")
      .describe("A diet conforming to Jewish dietary practices."),
    z
      .literal("LowCalorieDiet")
      .describe("A diet focused on reduced calorie intake."),
    z
      .literal("LowFatDiet")
      .describe("A diet focused on reduced fat and cholesterol intake."),
    z
      .literal("LowLactoseDiet")
      .describe("A diet appropriate for people with lactose intolerance."),
    z
      .literal("LowSaltDiet")
      .describe("A diet focused on reduced sodium intake."),
    z.literal("VeganDiet").describe("A diet exclusive of all animal products."),
    z.literal("VegetarianDiet").describe("A diet exclusive of animal meat."),
  ])
  .meta({
    title: "RestrictedDiet",
    description:
      "A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.",
  });

const OfferSchema = z
  .looseObject({
    availability: ItemAvailabilitySchema.optional(),
    category: CategorySchema.optional(),
    price: PriceSchema.optional(),
    priceCurrency: z
      .string()
      .optional()
      .describe(
        `The currency of the price, or a price component when attached to PriceSpecification and its subtypes.

Use standard formats: ISO 4217 currency format, e.g. "USD"; Ticker symbol for cryptocurrencies, e.g. "BTC"; well known names for Local Exchange Trading Systems (LETS) and other currency types, e.g. "Ithaca HOUR".`,
      ),
  })
  .meta({
    title: "Offer",
    description:
      "An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.",
  });

const AllergenSchema = z
  .looseObject({
    propertyID: z.literal("allergen"),
    name: z.string().optional(),
    value: z.union([z.literal("contains"), z.literal("mayContain")]),
    identifier: z.union([z.string(), z.array(z.string())]).optional(),
    sameAs: z.union([z.string(), z.array(z.string())]).optional(),
  })
  .meta({
    title: "Allergen",
    description:
      "An allergen. This is outside the schemaorg spec so we use PropertyValue",
  });

const MenuItemSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    identifier: z.union([z.string(), z.array(z.string())]).optional(),
    image: ImageSchema.optional(),
    offers: OfferSchema.optional(),
    nutrition: NutritionInformationSchema.optional(),
    suitableForDiet: z
      .array(z.union([DietSchema, RestrictedDietSchema]))
      .optional(),
    additionalProperty: z.array(AllergenSchema).optional(),
    get menuAddon() {
      return z.array(MenuItemSchema).optional();
    },
  })
  .meta({
    title: "MenuItem",
    description: "A food or drink item listed in a menu or menu section.",
  });

const MenuSectionSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    identifier: z.union([z.string(), z.array(z.string())]).optional(),
    image: ImageSchema.optional(),
    hasMenuItem: z.array(MenuItemSchema).optional(),
    get hasMenuSection() {
      return z.array(MenuSectionSchema).optional();
    },
  })
  .meta({
    title: "MenuSection",
    description:
      "A subgrouping of the menu (by dishes, course, serving time period, etc.).",
  });

const MenuSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    identifier: z.union([z.string(), z.array(z.string())]).optional(),
    image: ImageSchema.optional(),
    hasMenuItem: z.array(MenuItemSchema).optional(),
    hasMenuSection: z.array(MenuSectionSchema).optional(),
  })
  .meta({
    title: "Menu",
    description:
      "A structured representation of food or drink items available from a FoodEstablishment.",
  });

const FoodEstablishmentSchema = z
  .looseObject({
    name: z.string().optional(),
    description: z.string().optional(),
    identifier: z.union([z.string(), z.array(z.string())]).optional(),
    image: ImageSchema.optional(),
    hasMenu: MenuSchema.optional(),
  })
  .meta({
    title: "FoodEstablishment",
    description: "A food-related business.",
  });

const FoodEstablishmentSchemas = {
  FoodEstablishment: FoodEstablishmentSchema,
  Menu: MenuSchema,
  MenuItem: MenuItemSchema,
};

type FoodEstablishment = z.infer<typeof FoodEstablishmentSchema>;
type Menu = z.infer<typeof MenuSchema>;
type MenuItem = z.infer<typeof MenuItemSchema>;
type MenuSection = z.infer<typeof MenuSectionSchema>;

declare namespace FoodEstablishment {
  export type { FoodEstablishment, Menu, MenuItem, MenuSection };
}

export type { FoodEstablishment, Menu, MenuItem, MenuSection };
export {
  FoodEstablishmentSchema,
  FoodEstablishmentSchemas,
  MenuItemSchema,
  MenuSchema,
  MenuSectionSchema,
};
export default FoodEstablishmentSchemas;
