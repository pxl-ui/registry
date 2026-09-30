import z from "zod";

type Actor = `human:${string}` | `process:${string}` | `${string}/${string}`;

const TrustTierSchema = z.union([
  z.literal("unverified").describe("No verified key"),
  z.literal("machine-confirmed").describe("Verified by non-human: actors only"),
  z.literal("human-reviewed").describe("Verified by a human:<id> actor"),
]).describe("A level derived from a concept's verified field: unverified, machine-confirmed, or human-reviewed");

const ActorSchema = z
  .string()
  .refine(
    (value): value is Actor =>
      /^human:[^:]+$/.test(value) ||
      /^process:[^:]+$/.test(value) ||
      /^[^/]+\/[^/]+$/.test(value),
    "Invalid OKF actor",
  )
  .describe("A string identifying who or what performed an action, using the convention <producer>/<version> for agents, human:<id> for people, and process:<id> for automated processes.");

const StatusSchema = z.union([
  z.literal("draft").describe("Not yet reviewed; possibly incomplete."),
  z.literal("stable").describe("Default; ready for consumption."),
  z
    .literal("deprecated")
    .describe("Kept for links and history; no longer current."),
]);

const DateTimeSchema = z.iso.datetime({
  offset: true,
});

const ResourceSchema = z
  .string()
  .describe(
    "Names either a concrete artifact a consumer can follow (an absolute URL, a bundle-relative path, or a path into a references/ subdirectory) or a population or scope descriptor it cannot (for example all queries in BigQuery project X).",
  );

const UsageWindowSchema = z
  .object({
    from: DateTimeSchema,
    to: DateTimeSchema,
  })
  .describe(
    "Written once as a sibling of sources, it frames every usage_count with a datetime range. A single entry MAY carry its own usage_window to override the shared one.",
  );

const SourceSchema = z
  .looseObject({
    resource: ResourceSchema,
    id: z
      .string()
      .optional()
      .describe(
        "A stable key used to attribute individual claims (see below). SHOULD be present when the body cites the source.",
      ),
    title: z
      .string()
      .optional()
      .describe("Human-readable label for the source."),
    author: ActorSchema.optional().describe(
      "Who or what produced the source, in the actor convention. An authority signal.",
    ),
    usage_count: z
      .number()
      .optional()
      .describe(
        "How often resource was exercised (dashboard views, query executions, page reads) over usage_window. An adoption and liveness signal. For a single artifact it is that artifact's own exercise count; for a scope descriptor it is the number of exercises within the scope that touch the concept.",
      ),
    last_modified: z
      .string()
      .optional()
      .describe(
        " When the source itself last changed. A recency signal, distinct from generated.ag, which records when the concept was written.",
      ),
    usage_window: UsageWindowSchema.optional(),
  })
  .describe(
    "Records the materials a concept derives from, external or internal to the bundle.",
  );

const ProvenanceSchema = z
  .object({
    sources: z
      .array(SourceSchema)
      .describe(
        "sources records the materials a concept derives from, external or internal to the bundle.",
      ).optional(),
    usage_window: UsageWindowSchema.optional(),
  })
  .describe("The set of sources a concept derives from.");

const GeneratedSchema = z
  .object({
    by: ActorSchema.describe("An actor."),
    at: DateTimeSchema.describe(
      "An ISO 8601 datetime marking the content's last meaningful change. Consumers use it to tell a recent edit from a stale fact.",
    ),
  })
  .describe(
    "Records how the current content was produced. verified records who or what has confirmed the content against its sources or resource. They are kept distinct because who wrote a concept need not be who confirmed it.",
  );

const VerificationSchema = z.object({
  by: ActorSchema.describe("An actor."),
  at: DateTimeSchema.describe(
    "An ISO 8601 datetime marking the verification date.",
  ),
});

const TrustSchema = z.object({
  generated: GeneratedSchema.optional(),

  verified: z
    .union([VerificationSchema, z.array(VerificationSchema).min(1)])
    .optional(),
});

const LifecycleSchema = z.object({
  status: StatusSchema.optional(),
  stale_after: z
    .string()
    .describe(
      " An absolute instant. A concept is stale when now >= stale_after. An absolute instant, not a relative TTL, keeps the staleness decision a plain comparison with no reference to when the concept was read.",
    )
    .optional(),
});

const CorePropertiesSchema = z.object({
  type: z
    .string()
    .min(1)
    .describe(
      "A short string identifying the kind of concept. Consumers use it for routing, filtering, and presentation. Example values: BigQuery Table, BigQuery Dataset, API Endpoint, Metric, Playbook, Reference, Attested Computation.",
    ),
  title: z
    .string()
    .optional()
    .describe(
      "Human-readable display name. If omitted, consumers MAY derive a title from the filename.",
    ),
  description: z
    .string()
    .optional()
    .describe(
      "A single sentence summarizing the concept. Used by index.md generators, search snippets, and previews.",
    ),
  resource: ResourceSchema.optional().describe(
    "A URI that uniquely identifies the underlying asset the concept describes. Absent for concepts that describe abstract ideas rather than physical resources.",
  ),
  tags: z
    .array(z.string())
    .optional()
    .describe("A YAML list of short strings for cross-cutting categorization."),
});

const BaseConceptSchema = z
  .looseObject({
    ...CorePropertiesSchema.shape,
    ...ProvenanceSchema.shape,
    ...TrustSchema.shape,
    ...LifecycleSchema.shape,
  })
  .describe(
    "A single unit of knowledge within a bundle, represented as one markdown document. It may describe a tangible asset (a table, an API), an abstract idea (a metric, a business process), or anything in between.",
  );

const ParameterSchema = z
  .object({
    name: z.string().min(1),
    type: z.string().min(1),
    required: z.boolean(),
  })
  .describe(
    "The typed, named holes the agent may fill. Binding semantics follow runtime.",
  );

const ExecutorSchema = z
  .object({
    resource: z
      .string()
      .describe(
        "Names run instructions or code; a runner (an agent, or deterministic consumer code) follows it.",
      ),
    receipt: z.array(z.string().min(1))
      .describe(
        "Declares the fields (evidence) a run must return; a runtime artifact, not stored in the bundle.",
      ),
  })
  .describe("Run instructions or code that executes a computation and returns a receipt.");

const AttesterSchema = z
  .object({
    resource: z
      .string()
      .describe(
        "Names code (no LLM) that takes a receipt and returns a verdict. It is meant to run consumer-side.",
      ),
  })
  .describe("Deterministic (no-LLM) code that inspects a receipt and returns a verdict.");

const GenericConceptSchema = BaseConceptSchema.extend({
  type: z
    .string()
    .min(1)
    .refine((value) => value !== "Attested Computation"),
});

const AttestedComputationSchema = BaseConceptSchema.extend({
  type: z.literal("Attested Computation"),

  runtime: z
    .string()
    .min(1)
    .describe(
      "The single field that says how to run the computation, and so how the executor and attester interpret it and what parameters mean. Example values: bigquery, postgres, dbt, python, Looker.",
    ),

  parameters: z.array(ParameterSchema)
  .superRefine((parameters, ctx) => {
    const seen = new Set<string>();

    parameters.forEach((parameter, index) => {
      if (seen.has(parameter.name)) {
        ctx.addIssue({
          code: "custom",
          path: [index, "name"],
          message: `Duplicate parameter: ${parameter.name}`,
        });
      }

      seen.add(parameter.name);
    });
  }),

  computation: ResourceSchema.optional().describe(
    "A path to a file holding the computation, used instead of an inline body fence. Absent ⇒ the body # Computation fence is the computation.",
  ),

  executor: ExecutorSchema.optional(),

  attester: AttesterSchema.optional(),
}).describe("A concept (type: Attested Computation) carrying a sanctioned way to compute a value, so a consumer can confirm the value was produced by running it.");

const ConceptSchema = z
  .union([AttestedComputationSchema, GenericConceptSchema])
  .describe(
    "A single unit of knowledge within a bundle, represented as one markdown document. It may describe a tangible asset (a table, an API), an abstract idea (a metric, a business process), or anything in between.",
  );

const OpenKnowledgeSchemas = {
  Actor: ActorSchema,
  Concept: ConceptSchema,
  AttestedComputation: AttestedComputationSchema,
  TrustTier: TrustTierSchema,
};

type Concept = z.infer<typeof ConceptSchema>;
type AttestedComputation = z.infer<typeof AttestedComputationSchema>;
type TrustTier = z.infer<typeof TrustTierSchema>;

declare namespace OpenKnowledge {
  export type { Actor, Concept, TrustTier, AttestedComputation };
}

function isHumanActor(actor: Actor): actor is `human:${string}` {
  return actor.startsWith("human:");
}

function getStatus(concept: Concept) {
  return concept.status ?? "stable";
}

function getTrustTier(concept: Concept): TrustTier {
  if (concept.verified === undefined) {
    return "unverified";
  }

  const verifications = Array.isArray(concept.verified)
    ? concept.verified
    : [concept.verified];

  if (verifications.some(({ by }) => by.startsWith("human:"))) {
    return "human-reviewed";
  }

  return "machine-confirmed";
}

export type { Actor, AttestedComputation, Concept, OpenKnowledge, TrustTier };
export {
  ActorSchema,
  AttestedComputationSchema,
  ConceptSchema,
  getStatus,
  getTrustTier,
  isHumanActor,
  OpenKnowledgeSchemas,
  TrustTierSchema,
};
export default OpenKnowledgeSchemas;