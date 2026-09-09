import z from "zod";

const ControlSchema = z.object({
  draft: z.boolean().optional(),
});
const EntrySchema = z.object({
  edited: z.string().optional(),
  control: ControlSchema.optional(),
});

const AppSchemas = {
  Control: ControlSchema,
  Entry: EntrySchema,
}

type Control = z.infer<typeof ControlSchema>;
type Entry = z.infer<typeof EntrySchema>;

declare namespace App {
  export type { Control, Entry }
}

export type { App, Control, Entry };
export { AppSchemas, ControlSchema, EntrySchema };
