import type z from "zod";

import { filter } from "~/lib/registry";

const schemas = new Map<
  string,
  () => Promise<{ default: Record<string, z.ZodType> }>
>();

Object.entries(
  import.meta.glob<{ default: Record<string, z.ZodType> }>(
    "/registry/schemas/**/*.ts",
  ),
).forEach(([path, schema]) => {
  schemas.set(
    path.replace("/registry/schemas/pxl/", "schemas/").replace(".ts", ""),
    schema,
  );
});

async function getSchemas(item: string) {
  const schemaImporter = schemas.get(item);
  if (schemaImporter) {
    return (await schemaImporter()).default;
  }

  return null;
}

const lists = {
  all: filter({
    categories: ["schemas"],
  }),
};

export { getSchemas, lists };
