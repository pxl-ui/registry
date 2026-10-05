import { z } from "zod";

import { FeedMetadataSchema } from "@/schemas/pxl/opds/feed-metadata";
import { LinkSchema } from "@/schemas/pxl/opds/link";
import { PublicationSchema, WebPublicationSchema } from "@/schemas/pxl/opds/publication";
import { hasUniqueItems } from "@/schemas/pxl/opds/shared";
import { SubcollectionSchema } from "@/schemas/pxl/opds/subcollection";

const LinksSchema = z
  .array(LinkSchema)
  .min(1)
  .refine(hasUniqueItems, { message: "Links must be unique" });
const PublicationsSchema = z
  .array(z.union([PublicationSchema, WebPublicationSchema]))
  .min(1)
  .refine(hasUniqueItems, { message: "Publications must be unique" });
const NavigationSchema = LinksSchema.refine(
  (links) => links.every((link) => link.title !== undefined),
  { message: "Each navigation link must contain a title" },
);

const FeedSchema = z
  .object({
    metadata: FeedMetadataSchema.describe(
      "Feed-level metadata such as title or number of items.",
    ),
    links: LinksSchema.refine(
      (links) =>
        links.some((link) =>
          Array.isArray(link.rel)
            ? link.rel.includes("self")
            : link.rel === "self",
        ),
      { message: "A feed must contain a self link" },
    ).describe("Feed-level links such as search or pagination."),
    publications: PublicationsSchema.describe(
      "Publications that can be acquired.",
    ).optional(),
    navigation: NavigationSchema.describe(
      "Links for browsing the catalog.",
    ).optional(),
    facets: z
      .array(
        z.looseObject({
          metadata: FeedMetadataSchema.describe(
            "Facet metadata, including its title.",
          ),
          links: LinksSchema.describe(
            "Links to reorder or filter the publication list.",
          ),
        }),
      )
      .min(1)
      .refine(hasUniqueItems, { message: "Facets must be unique" })
      .describe("Facet groups for filtering or reordering publications.")
      .optional(),
    groups: z
      .array(
        z.looseObject({
          metadata: FeedMetadataSchema.describe(
            "Group metadata, including its title.",
          ),
          links: LinksSchema.describe("Group-level links.").optional(),
          publications: PublicationsSchema.describe(
            "Publications in the group.",
          ).optional(),
          navigation: NavigationSchema.describe(
            "Navigation links in the group.",
          ).optional(),
        }),
      )
      .describe("Curated groups of publications or navigation links.")
      .optional(),
  })
  .catchall(SubcollectionSchema)
  .refine(
    (feed) =>
      feed.publications !== undefined ||
      feed.navigation !== undefined ||
      feed.groups !== undefined,
    { message: "A feed must contain publications, navigation or groups" },
  )
  .describe("An OPDS 2.0 catalog feed.");

type Feed = z.infer<typeof FeedSchema>;

export type { Feed };
export { FeedSchema };
