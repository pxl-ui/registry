import { z } from "zod";

const extensionKeyPattern = /^x-[A-Za-z0-9._:-]+$/;

const isUnique = (items: readonly unknown[]) =>
  new Set(items).size === items.length;

function allowExtensionKeys<T extends z.ZodObject>(schema: T) {
  const known = new Set(Object.keys(schema.shape));
  return schema.superRefine((value, ctx) => {
    for (const key of Object.keys(value)) {
      if (!known.has(key) && !extensionKeyPattern.test(key)) {
        ctx.addIssue({
          code: "custom",
          message: `Unrecognized key "${key}"`,
          path: [key],
        });
      }
    }
  });
}

const IdentifierSchema = z.string().regex(/^[A-Za-z][A-Za-z0-9._:/-]*$/);

const ProfileSchema = z.enum([
  "core_read",
  "collection_semantics",
  "data_contracts",
  "cel",
  "cel_match",
  "cel_query",
  "links",
  "core_write",
  "type_packs",
  "lifecycle",
  "event_action_interop/0.1",
  "runtime/0.2",
  "watch",
]);

type Profile = z.infer<typeof ProfileSchema>;

/** Profiles that must also be declared when a given profile is declared. */
const profileRequirements: Partial<Record<Profile, Profile[]>> = {
  collection_semantics: ["core_read"],
  cel_match: ["core_read", "cel"],
  cel_query: ["collection_semantics", "cel"],
  links: ["collection_semantics", "cel"],
  data_contracts: ["core_read"],
  type_packs: ["data_contracts", "core_write"],
  core_write: ["collection_semantics"],
  lifecycle: ["core_write", "cel"],
  "runtime/0.2": ["data_contracts", "event_action_interop/0.1", "cel"],
  watch: ["collection_semantics"],
};

const ConformanceClaimSchema = allowExtensionKeys(
  z.looseObject({
    kind: z.literal("mdbase.conformance"),
    status: z.literal("verified"),
    implementation: allowExtensionKeys(
      z.looseObject({
        id: IdentifierSchema,
        name: z.string().min(1),
        version: z.string().min(1),
        language: z.string().min(1).optional(),
        target: z.string().min(1).optional(),
        url: z.url().optional(),
      }),
    ),
    spec_version: z
      .string()
      .regex(/^0\.3\.0(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/),
    runtime_profile_version: z.literal("0.2").optional(),
    interop_profile_version: z.literal("0.1").optional(),
    profiles: z
      .array(ProfileSchema)
      .min(1)
      .refine(isUnique, { message: "Items must be unique" }),
    optional_features: z
      .array(IdentifierSchema)
      .refine(isUnique, { message: "Items must be unique" })
      .optional(),
    json_schema: z.strictObject({
      dialect: z.literal("https://json-schema.org/draft/2020-12/schema"),
      keywords: z
        .array(z.string().min(1))
        .refine(isUnique, { message: "Items must be unique" }),
      formats: z
        .array(z.string().min(1))
        .refine(isUnique, { message: "Items must be unique" }),
      remote_refs: z.literal(false),
    }),
    compatibility: z
      .strictObject({
        v0_2_read: z.boolean().optional(),
        v0_2_migrate: z.boolean().optional(),
      })
      .optional(),
    limits: z.record(
      z.string(),
      z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.union([z.string(), z.number(), z.boolean()])),
      ]),
    ),
    evidence: z
      .array(
        z
          .strictObject({
            kind: z.enum([
              "conformance_suite",
              "test_suite",
              "package_smoke",
              "manual_smoke",
              "testbed_transcript",
            ]),
            command: z.string().min(1),
            result: z.literal("pass"),
            verified_at: z.iso.datetime({ offset: true }),
            artifact: z.string().min(1).optional(),
            environment: z.string().min(1).optional(),
            testbed_protocol_version: z.literal("0.1").optional(),
            scenario_ids: z
              .array(z.string().regex(/^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)+$/))
              .min(1)
              .refine(isUnique, { message: "Items must be unique" })
              .optional(),
            evidence_digest: z
              .string()
              .regex(/^sha256:[0-9a-f]{64}$/)
              .optional(),
          })
          .superRefine((value, ctx) => {
            if (value.kind !== "testbed_transcript") return;
            const required = [
              "artifact",
              "testbed_protocol_version",
              "scenario_ids",
              "evidence_digest",
            ] as const;
            for (const key of required) {
              if (value[key] === undefined) {
                ctx.addIssue({
                  code: "custom",
                  message: `"${key}" is required when kind is "testbed_transcript"`,
                  path: [key],
                });
              }
            }
          }),
      )
      .min(1),
  }),
)
  .superRefine((value, ctx) => {
    for (const profile of value.profiles) {
      for (const required of profileRequirements[profile] ?? []) {
        if (!value.profiles.includes(required)) {
          ctx.addIssue({
            code: "custom",
            message: `Profile "${profile}" requires profile "${required}"`,
            path: ["profiles"],
          });
        }
      }
    }

    if (
      value.profiles.includes("event_action_interop/0.1") &&
      value.interop_profile_version === undefined
    ) {
      ctx.addIssue({
        code: "custom",
        message:
          '"interop_profile_version" is required with profile "event_action_interop/0.1"',
        path: ["interop_profile_version"],
      });
    }

    if (value.profiles.includes("runtime/0.2")) {
      if (value.runtime_profile_version === undefined) {
        ctx.addIssue({
          code: "custom",
          message:
            '"runtime_profile_version" is required with profile "runtime/0.2"',
          path: ["runtime_profile_version"],
        });
      }
      if (value.interop_profile_version === undefined) {
        ctx.addIssue({
          code: "custom",
          message:
            '"interop_profile_version" is required with profile "runtime/0.2"',
          path: ["interop_profile_version"],
        });
      }
    }
  })
  .describe("mdbase v0.3 conformance claim")
  .meta({
    title: "ConformanceClaim"
  });

type ConformanceClaim = z.infer<typeof ConformanceClaimSchema>;

export type { ConformanceClaim };
export { ConformanceClaimSchema };
