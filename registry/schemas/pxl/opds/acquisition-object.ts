import { z } from "zod";

const AcquisitionObjectSchema = z
  .looseObject({
    type: z
      .string()
      .describe(
        "Media type in which the publication can be indirectly acquired.",
      ),
    get child() {
      return z
        .array(AcquisitionObjectSchema)
        .describe("An additional level of acquisition indirection.")
        .optional();
    },
  })
  .describe("An OPDS indirect acquisition object.");

type AcquisitionObject = z.infer<typeof AcquisitionObjectSchema>;

export type { AcquisitionObject };
export { AcquisitionObjectSchema };
