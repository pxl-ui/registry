import z from "zod";

const FeedSchema = z.object({
  updatePeriod: z.string().optional(),
  updateFrequency: z.number().optional(),
  updateBase: z.string().optional(),
});

const SySchemas = {
  Feed: FeedSchema,
};

type Feed = z.infer<typeof FeedSchema>;

declare namespace Sy {
  export type { Feed };
}

export type { Feed, Sy };
export { FeedSchema, SySchemas };
