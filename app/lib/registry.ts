import root from "../../registry.json" with { type: "json" };

export type Registry = {
  name: string;
  items: RegistryItem[];
}

export type RegistryItem = {
  name: string;
  type: string;
  title: string;
  description: string;
  extends: string;
  files?: {
    type: string;
    path: string;
    target: string;
  }[];
  meta?: {
    hidden?: boolean;
    extends?: string[];
  }
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
  console.log(include);
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

export default registry;