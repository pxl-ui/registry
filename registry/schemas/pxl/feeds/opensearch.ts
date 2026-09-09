import z from "zod";

const QuerySchema = z.object({
  role: z.string(),
  searchTerms: z.string().optional(),
  count: z.number().optional(),
  startIndex: z.number().optional(),
  startPage: z.number().optional(),
  language: z.string().optional(),
  inputEncoding: z.string().optional(),
  outputEncoding: z.string().optional(),
});

const FeedSchema = z.object({
  totalResults: z.number().optional(),
  startIndex: z.number().optional(),
  itemsPerPage: z.number().optional(),
  queries: z.array(QuerySchema).optional(),
});

const OpenSearchSchemas = {
  Feed: FeedSchema,
};

type Query = z.infer<typeof QuerySchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace OpenSearch {
  export type { Feed };
}

export type { Feed, OpenSearch, Query };
export { FeedSchema, OpenSearchSchemas, QuerySchema };
