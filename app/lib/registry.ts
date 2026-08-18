import root from "../../registry.json" with { type: "json" };

export type Registry = {
  name: string;
  items: RegistryItem[];
}

export type RegistryItem = {
  name: string;
  type: string;
  title: string;
  description?: string;
  author?: string;
  categories?: string[];
  files?: {
    type: string;
    path: string;
    target: string;
  }[];
  meta?: {
    hidden?: boolean;
    extends?: string[];
    order?: number;
  };
}

const registry = new Map<string, RegistryItem>();

const definitions = await Promise.all(
  Object.entries(
    import.meta.glob<{ default: Registry; }>(
      "/registry/**/**/registry.json",
    ),
  ).map(async ([path, m]) => {
    const data = (await m()).default;
    return {
      path,
      data,
    };
  }));

for (const include of root.include) {
  const resolved = definitions.find(r => r.path === `/${include}`);

  if (!resolved) {
    continue;
  }

  for (const item of resolved.data.items) {
    registry.set(item.name, item);
  }
} 

for (const item of root.items) {
  registry.set(item.name, item);
}


function filter({
  categories,
}: {
  categories?: string | string[];
}): RegistryItem[] {
  const categoriesArr = typeof categories === "string" ? [categories] : categories;

  return Array.from(registry.values()).filter(val => {
    if (
      categoriesArr && 
      categoriesArr.length > 0 &&
      categoriesArr.some(cat => !val.categories?.includes(cat))
    ) {
      return false;
    }

    return true;
  }).sort((aObj, bObj) => {
    const a = aObj.meta?.order;
    const b = bObj.meta?.order;

    if (a && b) {
      if (a - b !== 0) return a - b;
      return aObj.name.localeCompare(bObj.name);
    }

    if (a) {
      return -1;
    }

    if (b) {
      return 1;
    }

    return aObj.name.localeCompare(bObj.name);
  })
}

export default registry;

export {
  filter,
}