import { z } from "zod";

import { FeedSchema as AtomFeedSchema } from "@/schemas/pxl/atom";

const FeedSchema = z
  .object({
    ...AtomFeedSchema.shape,
  })
  .describe("OPDS 1.2 Catalog (Atom Feed)")
  .meta({
    title: "OPDS1.2.Catalog",
    description: "OPDS 1.2 Catalog (Atom Feed)",
    version: 1.2,
  })
  .describe("An OPDF Catalog from an Atom Feed");

const OPDS_1_2_Schemas = {
  Feed: FeedSchema,
};

type Feed = z.infer<typeof FeedSchema>;

declare namespace OPDS_1_2 {
  export type { Feed }
}

export type { Feed };
export { FeedSchema, OPDS_1_2_Schemas };
export default OPDS_1_2_Schemas;
