import { z } from "zod";

import {
  ImageSchema,
  ItemListSchema,
} from "@/lib/schemas/pxl/schemaorg/datatypes";

const BreadcrumbListSchema = z
  .object({
    ...ItemListSchema.shape,
  })
  .meta({
    title: "BreadcrumbList",
    description: `A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.

The position property is used to reconstruct the order of the items in a BreadcrumbList. The convention is that a breadcrumb list has an itemListOrder of ItemListOrderAscending (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.`,
    examples: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://example.com/dresses",
              name: "Dresses",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://example.com/dresses/real",
              name: "Real Dresses",
            },
          },
        ],
      },
    ],
  });

const SiteNavigationElementSchema = z
  .object({
    description: z.string().optional().describe("A description of the item."),
    get hasPart() {
      return z
        .array(SiteNavigationElementSchema)
        .optional()
        .describe(
          "Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense). Inverse property: isPartOf.",
        );
    },
    get isPartOf() {
      return SiteNavigationElementSchema.optional().describe(
        "Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of. Inverse property: hasPart",
      );
    },
    name: z.string().optional().describe("The name of the item."),
    url: z.string().optional().describe("URL of the item."),
  })
  .meta({
    title: "SiteNavigationElement",
    description: "A navigation element of the page.",
  });

const WebPageSchema = z
  .object({
    breadcrumb: BreadcrumbListSchema.optional().describe(
      "A set of links that can help a user understand and navigate a website hierarchy.",
    ),
    name: z.string().optional().describe("The name of the item."),
    url: z.string().optional().describe("URL of the item."),
  })
  .meta({
    title: "WebPage",
    description:
      "A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.",
  });

const ItemPageSchema = z
  .object({
    breadcrumb: BreadcrumbListSchema.optional().describe(
      "A set of links that can help a user understand and navigate a website hierarchy.",
    ),
    description: z.string().optional().describe("A description of the item."),
    image: ImageSchema.optional().describe(
      "An image of the item. This can be a URL or a fully described ImageObject.",
    ),
    name: z.string().optional().describe("The name of the item."),
    mainEntity: z
      .any()
      .optional()
      .describe(
        "Indicates the primary entity described in some page or other CreativeWork.",
      ),
  })
  .meta({
    title: "ItemPage",
    description:
      "A page devoted to a single item, such as a particular product or hotel.",
  });

const CollectionPageSchema = z
  .object({
    breadcrumb: BreadcrumbListSchema.optional().describe(
      "A set of links that can help a user understand and navigate a website hierarchy.",
    ),
    description: z.string().optional().describe("A description of the item."),
    image: ImageSchema.optional().describe(
      "An image of the item. This can be a URL or a fully described ImageObject.",
    ),
    name: z.string().optional().describe("The name of the item."),
    mainEntity: ItemListSchema.optional().describe(
      "Indicates the primary entity described in some page or other CreativeWork.",
    ),
  })
  .meta({
    title: "CollectionPage",
    description: "Web page type: Collection page.",
  });

const SearchResultsPageSchema = z.object({}).meta({
  title: "SearchResultsPage",
  description: "Web page type: Search results page.",
});

const WebSiteSchemas = {
  BreadcrumbList: BreadcrumbListSchema,
  CollectionPage: CollectionPageSchema,
  ItemPage: ItemPageSchema,
  SearchResultsPage: SearchResultsPageSchema,
  WebPage: WebPageSchema,
};

type BreadcrumbList = z.infer<typeof BreadcrumbListSchema>;
type CollectionPage = z.infer<typeof CollectionPageSchema>;
type ItemPage = z.infer<typeof ItemPageSchema>;
type SearchResultsPage = z.infer<typeof SearchResultsPageSchema>;
type SiteNavigationElement = z.infer<typeof SiteNavigationElementSchema>;
type WebPage = z.infer<typeof WebPageSchema>;

declare namespace WebSite {
  export type {
    BreadcrumbList,
    CollectionPage,
    ItemPage,
    SearchResultsPage,
    SiteNavigationElement,
    WebPage,
  };
}

export type {
  BreadcrumbList,
  CollectionPage,
  ItemPage,
  SearchResultsPage,
  SiteNavigationElement,
  WebPage,
  WebSite,
};
export {
  BreadcrumbListSchema,
  CollectionPageSchema,
  ItemPageSchema,
  SearchResultsPageSchema,
  SiteNavigationElementSchema,
  WebPageSchema,
  WebSiteSchemas,
};

export default WebSiteSchemas;
