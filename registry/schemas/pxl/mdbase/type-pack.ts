import { z } from "zod";

const EXTENSION_KEY_PATTERN = /^x-[A-Za-z][A-Za-z0-9._:-]{0,127}$/;

const DigestSchema = z.string().regex(/^sha256:[0-9a-f]{64}$/);

const SafeRelativePathSchema = z
  .string()
  .min(1)
  .regex(/^(?!\/)(?!.*(?:^|\/)\.\.(?:\/|$))(?!.*\\).+$/);

const ResourceSchema = z
  .object({
    kind: z.enum(["contract", "type", "schema"]),
    mode: z.enum(["managed", "seed"]),
    upgrade_from: z
      .strictObject({
        digest: DigestSchema,
        document: z.string().max(262144),
      })
      .optional(),
    source: SafeRelativePathSchema,
    target: SafeRelativePathSchema,
    digest: DigestSchema,
  })
  .strict();

const TypePackSchema = z
  .object({
    kind: z.literal("mdbase.type-pack"),
    id: z
      .string()
      .min(3)
      .max(128)
      .regex(/^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)+$/),
    version: z
      .string()
      .regex(
        /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,
      ),
    name: z.string().min(1).optional(),
    description: z.string().optional(),
    resources: z.array(ResourceSchema).min(1),
  })
  .catchall(z.unknown())
  .check((ctx) => {
    const known = new Set([
      "kind",
      "id",
      "version",
      "name",
      "description",
      "resources",
    ]);
    for (const key of Object.keys(ctx.value)) {
      if (!known.has(key) && !EXTENSION_KEY_PATTERN.test(key)) {
        ctx.issues.push({
          code: "custom",
          message: `Unrecognized key "${key}": additional properties must match ${EXTENSION_KEY_PATTERN}`,
          input: ctx.value,
          path: [key],
        });
      }
    }
  })
  .describe("mdbase v0.3 type pack manifest")
  .meta({
    title: "TypePack"
  });

type TypePack = z.infer<typeof TypePackSchema>;

export type { TypePack };
export { TypePackSchema };
