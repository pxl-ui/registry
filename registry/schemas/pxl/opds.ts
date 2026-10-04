import type { Feed } from "@/schemas/pxl/atom";
import { FeedSchema } from "@/schemas/pxl/atom";

const CatalogSchema = FeedSchema;

const OPDSSchemas = {
  Catalog: CatalogSchema,
};

type Catalog = Feed;

declare namespace OPDS {
  export type { Catalog };
}

export type { Catalog, OPDS };
export { CatalogSchema, OPDSSchemas };
