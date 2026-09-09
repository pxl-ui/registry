import z from "zod";

const FeedSchema = z.object({
  errorReportsTo: z.string().optional(),
  generatorAgent: z.string().optional(),
});

const AdminSchemas = {
  Feed: FeedSchema,
};

type Feed = z.infer<typeof FeedSchema>;

declare namespace Admin {
  export type { Feed };
}

export type { Admin, Feed };
export { AdminSchemas, FeedSchema };
