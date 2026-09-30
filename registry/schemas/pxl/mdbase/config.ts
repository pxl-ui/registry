import { z } from "zod";

const SettingsSchema = z
  .object({
    timezone: z
      .string()
      .min(1)
      .describe(
        "Durable IANA timezone for collection-authority calendar semantics",
      ),
    types_folder: z.string().min(1),
    contracts_folder: z.string().min(1),
    record_extensions: z
      .array(z.string().regex(/^[A-Za-z0-9]+$/))
      .min(1)
      .refine((value) => new Set(value).size === value.length, {
        message: "Array items must be unique",
      }),
    validation: z.enum(["off", "warn", "error"]),
    explicit_type_keys: z
      .array(z.string().min(1))
      .refine((value) => new Set(value).size === value.length, {
        message: "Array items must be unique",
      }),
    id_field: z.string().min(1),
    exclude: z.array(z.string().min(1)),
  })
  .catchall(z.unknown())
  .describe("Collection configuration settings.")
  .meta({
    title: "Settings"
  });

const ConfigSchema = z
  .object({
    spec_version: z.literal("0.3.0"),
    settings: SettingsSchema.optional(),
  })
  .catchall(z.unknown())
  .describe("mdbase v0.3 collection configuration.")
  .meta({
    title: "Config"
  });

type Settings = z.infer<typeof SettingsSchema>;
type Config = z.infer<typeof ConfigSchema>;

export type { Config, Settings };
export { ConfigSchema, SettingsSchema };
