import { z } from "zod";

const IdentifierSchema = z
  .string()
  .min(3)
  .max(150)
  .regex(/^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)+$/);

const SafeRelativePathSchema = z
  .string()
  .min(1)
  .regex(/^(?!\/)(?!.*(?:^|\/)\.\.(?:\/|$))(?!.*\\).+$/);

const DigestSchema = z.string().regex(/^sha256:[0-9a-f]{64}$/);

const ResourceSchema = z.strictObject({
  kind: z.enum(["contract", "type", "schema"]),
  mode: z.enum(["managed", "seed"]),
  source: SafeRelativePathSchema,
  target: SafeRelativePathSchema,
  digest: DigestSchema,
});

const ReceiptSchema = z.strictObject({
  id: IdentifierSchema,
  version: z
    .string()
    .regex(
      /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,
    ),
  digest: DigestSchema,
  installed_by: IdentifierSchema,
  resources: z.array(ResourceSchema),
});

const TypePackLockSchema = z
  .strictObject({
    kind: z.literal("mdbase.type-pack-lock"),
    lock_version: z.literal(1),
    packs: z.array(ReceiptSchema),
  })
  .describe("mdbase v0.3 managed type-pack lock")
  .meta({
    title: "TypePackLock"
  });

type TypePackLock = z.infer<typeof TypePackLockSchema>;

export type { TypePackLock };
export { TypePackLockSchema };
