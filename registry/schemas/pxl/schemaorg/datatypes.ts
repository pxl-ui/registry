import { z } from "zod";

const ImageObjectSchema = z
  .object({
    caption: z
      .string()
      .optional()
      .describe(
        "The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the encodingFormat.",
      ),
    author: z
      .string()
      .optional()
      .describe(
        "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.",
      ),
    contentUrl: z
      .string()
      .optional()
      .describe(
        "Actual bytes of the media object, for example the image file or video file.",
      ),
    datePublished: z.iso
      .date()
      .optional()
      .describe(
        "Date of first publication or broadcast. For example the date a CreativeWork was broadcast or a Certification was issued.",
      ),
    description: z.string().optional().describe("A description of the item."),
    name: z.string().optional().describe("The name of the item."),
    width: z.string().optional().describe("The width of the item."),
    height: z.string().optional().describe("The height of the item."),
  })
  .meta({
    title: "ImageObject",
    description: "An image file.",
    examples: [
      {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        author: "Jane Doe",
        contentLocation: "Puerto Vallarta, Mexico",
        contentUrl: "mexico-beach.jpg",
        datePublished: "2008-01-25",
        description: "I took this picture while on vacation last year.",
        name: "Beach in Mexico",
      },
    ],
  });
const ImageSchema = z.union([
  z.string(),
  ImageObjectSchema,
  z.array(z.union([z.string(), ImageObjectSchema])),
]);

const VideoObjectSchema = z.object({
  contentUrl: z.string().min(1),
  name: z.string().min(1),
  thumbnailUrl: z.string().optional(),
});
const VideoSchema = z.union([
  z.string(),
  VideoObjectSchema,
  z.array(z.union([z.string(), VideoObjectSchema])),
]);

const CategoryCodeSchema = z
  .object({
    codeValue: z
      .string()
      .optional()
      .describe("A short textual code that uniquely identifies the value."),
    description: z.string().optional().describe("A description of the item."),
    name: z.string().optional().describe("The name of the item."),
    image: ImageSchema.optional().describe(
      "An image of the item. This can be a URL or a fully described ImageObject.",
    ),
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

const ItemConditionSchema = z
  .union([
    z
      .literal("DamagedCondition")
      .describe("Indicates that the item is damaged."),
    z.literal("NewCondition").describe("Indicates that the item is new."),
    z
      .literal("RefurbishedCondition")
      .describe("Indicates that the item is refurbished."),
    z.literal("UsedCondition").describe("Indicates that the item is used."),
  ])
  .meta({
    title: "ItemCondition",
    description: "A list of possible conditions for the item.",
  });

const ItemListOrderTypeSchema = z
  .union([
    z
      .literal("ItemListOrderAscending")
      .describe("An ItemList ordered with lower values listed first."),
    z
      .literal("ItemListOrderDescending")
      .describe("An ItemList ordered with higher values listed first."),
    z
      .literal("ItemListUnordered")
      .describe("An ItemList ordered with no explicit order."),
  ])
  .meta({
    title: "ItemListOrderType",
    description:
      "Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.",
  });

const ListItemSchema = z
  .object({
    item: z
      .any()
      .optional()
      .describe(
        "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').",
      ),
    get nextItem() {
      return ListItemSchema.optional().describe(
        "A link to the ListItem that follows the current one.",
      );
    },
    position: z
      .number()
      .optional()
      .describe("The position of an item in a series or sequence of items."),
    get previousItem() {
      return ListItemSchema.optional().describe(
        "A link to the ListItem that precedes the current one.",
      );
    },
  })
  .meta({
    title: "ListItem",
    description:
      "An list item, e.g. a step in a checklist or how-to description.",
  });

const ItemListSchema = z
  .object({
    itemListElement: z
      .array(ListItemSchema)
      .optional()
      .describe(`For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.

Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.

Note: The order of elements in your mark-up is not sufficient for indicating the order or elements. Use ListItem with a 'position' property in such cases.`),
    itemListOrder: ItemListOrderTypeSchema.optional().describe(
      "Type of ordering (e.g. Ascending, Descending, Unordered).",
    ),
    numberOfItems: z
      .number()
      .optional()
      .describe(
        "The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.",
      ),
  })
  .meta({
    title: "ItemList",
    description: `A list of items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.`,
  });

const SizeSpecificationSchema = z
  .object({
    name: z
      .union([z.array(z.string()), z.string()])
      .optional()
      .describe("The name of the item."),
    sizeSystem: z
      .string()
      .optional()
      .describe(
        'The size system used to identify a product\'s size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").',
      ),
    sizeGroup: z
      .string()
      .optional()
      .describe(
        'The size group (also known as "size type") for a product\'s size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men\'s big and tall", "petite maternity" or "regular".',
      ),
  })
  .meta({
    title: "SizeSpecification",
    description:
      "Size related properties of a product, typically a size code (name) and optionally a sizeSystem, sizeGroup, and product measurements (hasMeasurement). In addition, the intended audience can be defined through suggestedAge, suggestedGender, and suggested body measurements (suggestedMeasurement).",
    examples: [
      {
        "@type": "SizeSpecification",
        name: ["XS", "S"],
        sizeSystem: "https://schema.org/WearableSizeSystemUS",
        sizeGroup: "https://schema.org/WearableSizeGroupPetite",
      },
      {
        "@type": "SizeSpecification",
        name: ["M", "L"],
        sizeSystem: "https://schema.org/WearableSizeSystemUS",
        sizeGroup: "https://schema.org/WearableSizeGroupRegular",
      },
      {
        "@type": "SizeSpecification",
        name: "XL",
        sizeSystem: "https://schema.org/WearableSizeSystemUS",
        sizeGroup: "https://schema.org/WearableSizeGroupPlus",
      },
      {
        "@type": "SizeSpecification",
        name: ["XXL", "XXXL"],
        sizeSystem: "https://schema.org/WearableSizeSystemUS",
        sizeGroup: "https://schema.org/WearableSizeGroupBig",
      },
    ],
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

const PriceTypeEnumerationSchema = z
  .union([
    z
      .literal("ListPrice")
      .describe(
        "Represents the list price of an offered product. Typically the same as the MSRP.",
      ),
    z
      .literal("RegularPrice")
      .describe(
        "Represents the regular price of an offered product. This is usually the advertised price before a temporary sale. Once the sale period ends the advertised price will go back to the regular price.",
      ),
    z
      .literal("SalePrice")
      .describe(
        "Represents a sale price (usually active for a limited period) of an offered product.",
      ),
    z
      .literal("StrikethroughPrice")
      .describe(
        "Represents the strikethrough price (the previous advertised price) of an offered product.",
      ),
  ])
  .meta({
    title: "PriceTypeEnumeration",
    description:
      "Enumerates different price types, for example list price, invoice price, and sale price.",
  });

const UnitPriceSpecificationSchema = z.object({
  price: PriceSchema.describe(
    "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.",
  ),
  priceCurrency: z
    .string()
    .describe(
      "The currency of the price, or a price component when attached to PriceSpecification and its subtypes.",
    ),
  priceType: PriceTypeEnumerationSchema.optional().describe(
    "Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the priceType property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or, a UN/EDIFACT 5387 code, or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.",
  ),
});

const PropertyValueSchema = z
  .object({
    name: z.string().optional().describe("The name of the item."),
    value: z
      .array(
        z.union([SizeSpecificationSchema, z.string(), z.number(), z.null()]),
      )
      .optional()
      .describe(`The value of a QuantitativeValue (including Observation) or property value node.
    
- For QuantitativeValue and MonetaryAmount, the recommended type for values is 'Number'.
- For PropertyValue, it can be 'Text', 'Number', 'Boolean', 'StructuredValue' or 'QualitativeValue'.
- Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
- Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.`),
    valueGroup: z
      .string()
      .optional()
      .describe(
        "A header or section name for grouping related property values.",
      ),
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
  })
  .meta({
    title: "PropertyValue",
    description:
      "A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property. Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.",
    examples: [
      {
        "@type": "PropertyValue",
        name: "color",
        value: ["black", "silver"],
      },
      {
        "@type": "PropertyValue",
        name: "material",
        value: ["plastic", "aluminum"],
      },
      {
        "@type": "PropertyValue",
        name: "size",
        value: [
          {
            "@type": "SizeSpecification",
            name: ["XS", "S"],
            sizeSystem: "https://schema.org/WearableSizeSystemUS",
            sizeGroup: "https://schema.org/WearableSizeGroupPetite",
          },
          {
            "@type": "SizeSpecification",
            name: ["M", "L"],
            sizeSystem: "https://schema.org/WearableSizeSystemUS",
            sizeGroup: "https://schema.org/WearableSizeGroupRegular",
          },
          {
            "@type": "SizeSpecification",
            name: "XL",
            sizeSystem: "https://schema.org/WearableSizeSystemUS",
            sizeGroup: "https://schema.org/WearableSizeGroupPlus",
          },
          {
            "@type": "SizeSpecification",
            name: ["XXL", "XXXL"],
            sizeSystem: "https://schema.org/WearableSizeSystemUS",
            sizeGroup: "https://schema.org/WearableSizeGroupBig",
          },
        ],
      },
    ],
  });

const QuantitativeValueSchema = z
  .object({
    maxValue: z
      .number()
      .optional()
      .describe("The upper value of some characteristic or property."),
    minValue: z
      .number()
      .optional()
      .describe("The lower value of some characteristic or property."),
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

const TextObjectSchema = z
  .object({
    name: z.string().optional().describe("The name of the item."),
    text: z
      .string()
      .optional()
      .describe("The textual content of this CreativeWork."),
  })
  .meta({
    title: "TextObject",
    description:
      "A text file. The text can be unformatted or contain markup, html, etc.",
  });
const TextSchema = z.union([
  z.string(),
  TextObjectSchema,
  z.array(z.union([z.string(), TextObjectSchema])),
]);

const DatatypesSchemas = {
  CategoryCode: CategoryCodeSchema,
  Category: CategorySchema,
  ImageObject: ImageObjectSchema,
  Image: ImageSchema,
  ItemAvailability: ItemAvailabilitySchema,
  ItemCondition: ItemConditionSchema,
  ItemList: ItemListSchema,
  ItemListOrderType: ItemListOrderTypeSchema,
  ListItem: ListItemSchema,
  Price: PriceSchema,
  PropertyValue: PropertyValueSchema,
  QuantitativeValue: QuantitativeValueSchema,
  SizeSpecification: SizeSpecificationSchema,
  TextObject: TextObjectSchema,
  Text: TextSchema,
  VideoObject: VideoObjectSchema,
  Video: VideoSchema,
};

type CategoryCode = z.infer<typeof CategoryCodeSchema>;
type Category = z.infer<typeof CategorySchema>;
type ImageObject = z.infer<typeof ImageObjectSchema>;
type Image = z.infer<typeof ImageSchema>;
type ItemAvailability = z.infer<typeof ItemAvailabilitySchema>;
type ItemCondition = z.infer<typeof ItemConditionSchema>;
type ItemList = z.infer<typeof ItemListSchema>;
type ItemListOrderType = z.infer<typeof ItemListOrderTypeSchema>;
type ListItem = z.infer<typeof ListItemSchema>;
type Price = z.infer<typeof PriceSchema>;
type PriceTypeEnumeration = z.infer<typeof PriceTypeEnumerationSchema>;
type PropertyValue = z.infer<typeof PropertyValueSchema>;
type QuantitativeValue = z.infer<typeof QuantitativeValueSchema>;
type SizeSpecification = z.infer<typeof SizeSpecificationSchema>;
type TextObject = z.infer<typeof TextObjectSchema>;
type Text = z.infer<typeof TextSchema>;
type UnitPriceSpecification = z.infer<typeof UnitPriceSpecificationSchema>;
type VideoObject = z.infer<typeof VideoObjectSchema>;
type Video = z.infer<typeof VideoSchema>;

declare namespace Datatypes {
  export type {
    Category,
    CategoryCode,
    ImageObject,
    Image,
    ItemAvailability,
    ItemCondition,
    ItemList,
    ItemListOrderType,
    ListItem,
    Price,
    PriceTypeEnumeration,
    PropertyValue,
    QuantitativeValue,
    SizeSpecification,
    Text,
    TextObject,
    UnitPriceSpecification,
    VideoObject,
    Video,
  };
}

export type {
  Category,
  CategoryCode,
  Datatypes,
  Image,
  ImageObject,
  ItemAvailability,
  ItemCondition,
  ItemList,
  ItemListOrderType,
  ListItem,
  Price,
  PriceTypeEnumeration,
  PropertyValue,
  QuantitativeValue,
  SizeSpecification,
  Text,
  TextObject,
  UnitPriceSpecification,
  Video,
  VideoObject,
};
export {
  CategoryCodeSchema,
  CategorySchema,
  ImageObjectSchema,
  ImageSchema,
  ItemAvailabilitySchema,
  ItemConditionSchema,
  ItemListOrderTypeSchema,
  ItemListSchema,
  ListItemSchema,
  PriceSchema,
  PriceTypeEnumerationSchema,
  PropertyValueSchema,
  QuantitativeValueSchema,
  SizeSpecificationSchema,
  TextObjectSchema,
  TextSchema,
  UnitPriceSpecificationSchema,
  VideoObjectSchema,
  VideoSchema,
};

export default DatatypesSchemas;
