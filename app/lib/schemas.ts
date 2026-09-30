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
  const base = path
    .replace("/registry/schemas/pxl/", "schemas/")
    .replace(".ts", "");

  const ns = base.split("/")?.[1];

  let key: string | null = base;

  if (!key.endsWith(ns)) {
    if (key.endsWith("index")) {
      key = key.replace("/index", "");
    } else {
      key = null;
    }
  }

  if (key) {
    schemas.set(key, schema);
  }
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
