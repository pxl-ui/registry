import { z } from "zod";

import { LinkSchema } from "@/schemas/pxl/opds/link";
import { MetadataSchema } from "@/schemas/pxl/opds/metadata";
import { hasUniqueItems } from "@/schemas/pxl/opds/shared";
import { SubcollectionSchema } from "@/schemas/pxl/opds/subcollection";

// The normative specification also permits download, omitted by the upstream JSON Schema.
const AcquisitionRelations = new Set([
  "acquisition",
  "borrow",
  "buy",
  "download",
  "preview",
  "subscribe",
  "http://opds-spec.org/acquisition",
  "http://opds-spec.org/acquisition/buy",
  "http://opds-spec.org/acquisition/open-access",
  "http://opds-spec.org/acquisition/borrow",
  "http://opds-spec.org/acquisition/sample",
  "http://opds-spec.org/acquisition/subscribe",
]);
const ImageMediaTypes = new Set([
  "image/jpeg",
  "image/webp",
  "image/avif",
  "image/png",
  "image/jxl",
  "image/gif",
]);

const PublicationSchema = z
  .looseObject({
    metadata: MetadataSchema.describe("Metadata describing the publication."),
    links: z
      .array(LinkSchema)
      .refine(
        (links) =>
          links.some((link) =>
            (Array.isArray(link.rel) ? link.rel : [link.rel]).some(
              (rel) => rel !== undefined && AcquisitionRelations.has(rel),
            ),
          ),
        { message: "A publication must contain at least one acquisition link" },
      )
      .describe("Publication links, including at least one acquisition link."),
    images: z
      .array(LinkSchema)
      .min(1)
      .refine(
        (images) =>
          images.some(
            (image) =>
              image.type !== undefined && ImageMediaTypes.has(image.type),
          ),
        { message: "At least one image must use a supported image media type" },
      )
      .describe("Images displayed when browsing publications.")
      .optional(),
  })
  .describe("An OPDS 2.0 publication.");

const ResourceLinksSchema = z
  .array(LinkSchema)
  .refine((links) => links.every((link) => link.type !== undefined), {
    message: "Each publication resource must contain a media type",
  })
  .refine(hasUniqueItems, { message: "Resources must be unique" });

const WebPublicationSchema = z
  .object({
    "@context": z
      .union([
        z.string(),
        z
          .array(z.string())
          .refine(hasUniqueItems, { message: "Contexts must be unique" }),
      ])
      .describe("JSON-LD context references.")
      .optional(),
    metadata: MetadataSchema.describe("Publication metadata."),
    links: z
      .array(LinkSchema)
      .refine(hasUniqueItems, { message: "Links must be unique" })
      .describe("Publication-level links.")
      .optional(),
    readingOrder: ResourceLinksSchema.describe("Resources in reading order."),
    resources: ResourceLinksSchema.describe(
      "Additional resources needed for rendering.",
    ).optional(),
    toc: z
      .array(LinkSchema)
      .describe("The publication's table of contents.")
      .optional(),
  })
  .catchall(SubcollectionSchema)
  .describe(
    "A Readium Web Publication Manifest, permitted in OPDS feeds for publications with unrestricted access.",
  );

type WebPublication = z.infer<typeof WebPublicationSchema>;
type Publication = z.infer<typeof PublicationSchema>;

export type { Publication, WebPublication };
export { PublicationSchema, WebPublicationSchema };
