import { z } from "zod";

import {
  CategorySchema,
  ImageSchema,
  ItemAvailabilitySchema,
  ItemConditionSchema,
  ItemListOrderTypeSchema,
  PriceSchema,
  PropertyValueSchema,
  QuantitativeValueSchema,
  SizeSpecificationSchema,
  TextSchema,
  UnitPriceSpecificationSchema,
  VideoSchema,
} from "@/lib/schemas/pxl/schemaorg/datatypes";

const ActionSchema = z
  .object({
    identifier: z
      .string()
      .optional()
      .describe(
        "The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See background notes for more details.",
      ),
    name: z.string().optional().describe("The name of the item."),
    description: z.string().optional().describe("The description of the item."),
    target: z
      .string()
      .optional()
      .describe("Indicates a target EntryPoint, or url, for an Action."),
  })
  .meta({
    title: "Action",
    description:
      "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.",
  });

const BrandSchema = z
  .object({
    name: z.string().optional().describe("The name of the item."),
  })
  .meta({
    title: "Brand",
    description:
      "A brand is a name used by an organization or business person for labeling a product, product group, or similar.",
  });

const MerchantReturnPolicySchema = z.object({}).meta({
  title: "MerchantReturnPolicy",
  description:
    "A MerchantReturnPolicy provides information about product return policies associated with an Organization, Product, or Offer.",
});

/** La oferta de compra/venta **/
const OfferSchema = z
  .object({
    availability: ItemAvailabilitySchema.optional().describe(
      "The availability of this item—for example In stock, Out of stock, Pre-order, etc.",
    ),
    condition: ItemConditionSchema.optional().describe(
      "A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.",
    ),
    category: CategorySchema.optional().describe(
      "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
    ),
    eligibleQuantity: QuantitativeValueSchema.optional().describe(
      "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.",
    ),
    inventoryLevel: QuantitativeValueSchema.optional().describe(
      "The current approximate inventory level for the item or items.",
    ),
    price: PriceSchema.optional(),
    priceSpecification: z.array(UnitPriceSpecificationSchema).optional(),
    priceCurrency: z
      .string()
      .optional()
      .describe(
        `The currency of the price, or a price component when attached to PriceSpecification and its subtypes.

Use standard formats: ISO 4217 currency format, e.g. "USD"; Ticker symbol for cryptocurrencies, e.g. "BTC"; well known names for Local Exchange Trading Systems (LETS) and other currency types, e.g. "Ithaca HOUR".`,
      ),
    priceValidUntil: z.iso
      .date()
      .optional()
      .describe("The date after which the price is no longer available."),
  })
  .meta({
    title: "Offer",
    description: `An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book. Note: As the businessFunction property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.`,
  });

/** Un producto concreto **/
const ProductSchema = z
  .object({
    brand: BrandSchema.optional().describe(
      "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.",
    ),
    category: CategorySchema.optional().describe(
      "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
    ),
    color: z.string().optional().describe("The color of the product."),
    consumerNotice: TextSchema.optional().describe(
      "A consumer notice, such as a safety warning or mandatory information, related to the product.",
    ),
    description: z.string().optional().describe("A description of the item."),
    hasMerchantReturnPolicy: MerchantReturnPolicySchema.optional(),
    image: ImageSchema.optional().describe(
      "An image of the item. This can be a URL or a fully described ImageObject.",
    ),
    inProductGroupWithID: z
      .string()
      .optional()
      .describe(
        "Indicates the productGroupID for a ProductGroup that this product isVariantOf.",
      ),
    get isAccessoryOrSparePartFor() {
      return z
        .union([ProductSchema, z.array(ProductSchema)])
        .describe(
          "A pointer to another product (or multiple products) for which this product is an accessory or spare part.",
        )
        .optional();
    },
    get isOftenBoughtWith() {
      return z
        .union([ProductSchema, z.array(ProductSchema)])
        .describe(
          "Indicates a product that is often bought with the described product.",
        )
        .optional();
    },
    get isRelatedTo() {
      return z
        .union([ProductSchema, z.array(ProductSchema)])
        .describe(
          "A pointer to another, somehow related product (or multiple products).",
        )
        .optional();
    },
    get isSimilarTo() {
      return z
        .union([ProductSchema, z.array(ProductSchema)])
        .describe(
          "A pointer to another, functionally similar product (or multiple products).",
        )
        .optional();
    },
    get isVariantOf() {
      return ProductGroupSchema.describe(
        "Indicates the kind of product that this is a variant of. In the case of ProductModel, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a ProductGroup, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with ProductGroup, this property can apply to any Product included in the group.",
      ).optional();
    },
    keywords: z
      .string()
      .optional()
      .describe(
        "Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.",
      ),
    material: z
      .string()
      .optional()
      .describe(
        "A material that something is made from, e.g. leather, wool, cotton, paper.",
      ),
    name: z.string().optional().describe("The name of the item."),
    productId: z
      .string()
      .optional()
      .describe(
        `The product identifier, such as ISBN. For example: meta itemprop="productID" content="isbn:123-456-789".`,
      ),
    releaseDate: z.iso
      .date()
      .optional()
      .describe(
        "The release date of a product or product model. This can be used to distinguish the exact variant of a product.",
      ),
    sameAs: z
      .array(z.string())
      .optional()
      .describe(
        "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.",
      ),
    size: z
      .union([SizeSpecificationSchema, z.array(SizeSpecificationSchema)])
      .optional(),
    sku: z
      .string()
      .optional()
      .describe(
        "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
      ),
    slogan: z
      .string()
      .optional()
      .describe("A slogan or motto associated with the item."),
    specification: z
      .array(PropertyValueSchema)
      .optional()
      .describe(
        "A specification of the product, often grouped by a section header/name. This is a cleaner alternative to additionalProperty for strict retail product specifications.",
      ),
    offers: z
      .array(OfferSchema)
      .optional()
      .describe(
        "An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use businessFunction to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a Demand. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.",
      ),
    potentialAction: z
      .array(ActionSchema)
      .optional()
      .describe(
        "Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.",
      ),
    url: z.string().optional().describe("URL of the item."),
    video: VideoSchema.optional().describe(
      "A video of the item. This can be a URL or a fully described VideoObject.",
    ),
  })
  .meta({
    title: "Product",
    description:
      "Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.",
    examples: [
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        sku: "44E01-M11000",
        inProductGroupWithID: "44E01",
        gtin14: "12345678901231",
        image: "https://www.example.com/jacket_large_green.jpg",
        name: "Large green jacket",
        description: "Large wool green jacket for the winter months",
        brand: {
          "@type": "Brand",
          name: "A fashion brand",
        },
        color: "green",
        size: {
          "@type": "SizeSpecification",
          sizeSystem: "https://schema.org/WearableSizeSystemUS",
          sizeGroup: [
            "https://schema.org/WearableSizeGroupMens",
            "https://schema.org/WearableSizeGroupBig",
            "https://schema.org/WearableSizeGroupTall",
          ],
          name: "3XL",
          hasMeasurement: [
            {
              "@type": "QuantitativeValue",
              valueReference:
                "https://schema.org/WearableMeasurementChestOrBust",
              unitCode: "INH",
              value: 52,
            },
            {
              "@type": "QuantitativeValue",
              valueReference: "https://schema.org/WearableMeasurementLength",
              unitCode: "INH",
              value: 42,
            },
          ],
          suggestedGender: "male",
          suggestedAge: {
            "@type": "QuantitativeValue",
            name: "adult",
            unitCode: "ANN",
            minValue: 13,
          },
          suggestedMeasurement: [
            {
              "@type": "QuantitativeValue",
              valueReference: "https://schema.org/BodyMeasurementChest",
              unitCode: "INH",
              minValue: 51,
              maxValue: 54,
            },
            {
              "@type": "QuantitativeValue",
              valueReference: "https://schema.org/BodyMeasurementHeight",
              unitCode: "FOT",
              minValue: 6,
              maxValue: 6.3,
            },
          ],
        },
        offers: {
          "@type": "Offer",
          url: "https://www.example.com/jacket?s=l&c=g",
          priceCurrency: "USD",
          price: 239.99,
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  });

/** Un producto con todas sus variantes (colores, tamaños...) **/
const ProductGroupSchema = z
  .object({
    hasVariant: z
      .array(ProductSchema)
      .optional()
      .describe(
        "Indicates a Product that is a member of this ProductGroup (or ProductModel). Inverse property: isVariantOf",
      ),
    productGroupId: z
      .string()
      .optional()
      .describe("Indicates a textual identifier for a ProductGroup."),
    variesBy: z
      .array(z.union([PropertyValueSchema, z.string()]))
      .describe(
        `Indicates the property or properties by which the variants in a ProductGroup vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs. Variant properties can be provided using PropertyValue instead of plain Text, to allow specification of the values available for a variant property.`,
      ),
  })
  .meta({
    title: "ProductGroup",
    description: `A ProductGroup represents a group of Products that vary only in certain well-described ways, such as by size, color, material etc. While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an isVariantOf relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties variesBy, hasVariant, url.`,
  });

/** Un producto dentro de un pack */
const TypeAndQuantityNode = z
  .object({
    amountOfThisGood: z
      .number()
      .optional()
      .describe("The quantity of the goods included in the offer."),
    typeOfGood: ProductSchema.optional().describe(
      "The product that this structured value is referring to.",
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
    title: "TypeAndQuantityNode",
    description:
      "A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.",
  });

/** Un pack de productos **/
const ProductCollectionSchema = z
  .object({
    url: z.string().optional(),
    image: ImageSchema.optional(),
    collectionSize: z
      .number()
      .optional()
      .describe("The number of items in the Collection."),
    description: z.string().optional().describe("A description of the item."),
    includesObject: z
      .array(TypeAndQuantityNode)
      .optional()
      .describe(
        "This links to a node or nodes indicating the exact quantity of the products included in an Offer or ProductCollection.",
      ),
    name: z.string().optional().describe("The name of the item."),
    video: z.array(VideoSchema).optional(),
  })
  .meta({
    title: "ProductCollection",
    description:
      "A set of products (either ProductGroups or specific variants) that are listed together e.g. in an Offer.",
  });

const ProductListItemSchema = z
  .object({
    item: ProductSchema.optional().describe(
      "An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').",
    ),
    get nextItem() {
      return ProductListItemSchema.optional().describe(
        "A link to the ProductListItem that follows the current one.",
      );
    },
    position: z
      .number()
      .optional()
      .describe("The position of an item in a series or sequence of items."),
    get previousItem() {
      return ProductListItemSchema.optional().describe(
        "A link to the ProductListItem that precedes the current one.",
      );
    },
  })
  .meta({
    title: "ProductListItem",
    description:
      "A product list item, e.g. a step in a checklist or how-to description.",
  });

const ProductItemListSchema = z
  .object({
    itemListElement: z
      .array(ProductListItemSchema)
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
    title: "ProductItemList",
    description: `A list of product items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.`,
  });

const ProductSchemas = {
  Offer: OfferSchema,
  Product: ProductSchema,
  ProductCollection: ProductCollectionSchema,
  ProductGroup: ProductGroupSchema,
  ProductItemList: ProductItemListSchema,
  ProductListItem: ProductListItemSchema,
};

type Action = z.infer<typeof ActionSchema>;
type Offer = z.infer<typeof OfferSchema>;
type Product = z.infer<typeof ProductSchema>;
type ProductCollection = z.infer<typeof ProductCollectionSchema>;
type ProductGroup = z.infer<typeof ProductGroupSchema>;
type ProductItemList = z.infer<typeof ProductItemListSchema>;
type ProductListItem = z.infer<typeof ProductListItemSchema>;

declare namespace Product {
  export type {
    Action,
    Offer,
    Product,
    ProductCollection,
    ProductGroup,
    ProductItemList,
    ProductListItem,
  };
}

export type {
  Action,
  Offer,
  Product,
  ProductCollection,
  ProductGroup,
  ProductItemList,
  ProductListItem,
};
export {
  ActionSchema,
  OfferSchema,
  ProductCollectionSchema,
  ProductGroupSchema,
  ProductItemListSchema,
  ProductListItemSchema,
  ProductSchema,
  ProductSchemas,
};

export default ProductSchemas;
