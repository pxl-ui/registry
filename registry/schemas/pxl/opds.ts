import { z } from "zod";

import type { Feed } from "@/schemas/pxl/atom";
import { FeedSchema } from "@/schemas/pxl/atom";

const CatalogSchema = z.object({
  ...FeedSchema.shape,
}).describe("An OPDF Catalog from an Atom Feed");

const OPDSSchemas = {
  Catalog: CatalogSchema,
};

type Catalog = Feed;

declare namespace OPDS {
  export type { Catalog };
}

export type { Catalog, OPDS };
export { CatalogSchema, OPDSSchemas };
export default OPDSSchemas;
