import { z } from "zod";

import { filter } from "~/lib/registry";

type SchemaBundle = { [name: string]: z.ZodType | SchemaBundle };

const schemas = new Map<string, () => Promise<{ default: SchemaBundle }>>();

Object.entries(
  import.meta.glob<{ default: SchemaBundle }>("/registry/schemas/**/*.ts"),
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

function flattenSchemas(
  bundle: SchemaBundle,
  prefix = "",
): Record<string, z.ZodType> {
  return Object.fromEntries(
    Object.entries(bundle).flatMap(([name, value]) => {
      const key = prefix ? `${prefix}.${name}` : name;
      return value instanceof z.ZodType
        ? [[key, value] as const]
        : Object.entries(flattenSchemas(value, key));
    }),
  );
}

async function getSchemas(item: string) {
  const schemaImporter = schemas.get(item);
  if (schemaImporter) {
    return flattenSchemas((await schemaImporter()).default);
  }

  return null;
}

const lists = {
  all: filter({
    categories: ["schemas"],
  }),
};

export { getSchemas, lists };
