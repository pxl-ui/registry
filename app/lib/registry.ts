import root from "../../registry.json" with { type: "json" };

export type RegistryEntry = {
  name: string;
  type: string;
  title: string;
  description: string;
  extends: string;
  files: {
    type: string;
    path: string;
    target: string;
  }[];
  meta?: {
    hidden?: boolean;
    extends?: string[];
  }
  /** Post-processing */
  registry?: string;
  extensions?: RegistryEntry[];
  preview: string | undefined;
  examples: {
    path: string;
    label: string;
  }[];
}

function registryPath(item: RegistryEntry) {
  return `/registry/${item.registry ?? "pxl-ui"}/${item.name}`;
}

function previewPath(item: RegistryEntry) {
  return `${registryPath(item)}/examples/${item.name}.tsx`;
}

async function loadRegistry() {
  const registries = await Promise.all(
    Object.entries(
      import.meta.glob<{ default: { name: string; items: RegistryEntry[] } }>(
        "/registry/**/**/registry.json",
      ),
    ).map(async ([path, m]) => {
      const data = (await m()).default;
      return {
        path,
        data,
      };
    }));

  const includeItems = root.include.flatMap(include => {
    const resolved = registries.find(r => r.path === `/${include}`);

    if (!resolved) {
      return [];
    }

    return resolved.data.items.map(item => {
      const out = { 
        ...item,
        registry: resolved.data.name
      };

      if (item.files) {
        out.files = item.files.map(f => ({
          ...f,
          // Include registries use relative path. Need to replace it for app rendering
          path: include.replace("registry.json", f.path)
        }));
      }

      return out;
    });
  });

  return {
    ...root,
    items: [
      ...includeItems,
      ...root.items,
    ]
  };
}

const registry = await loadRegistry();

const examples = await Promise.all(
  Object.entries(
    import.meta.glob<{ default: React.ComponentType }>(
      "/registry/**/**/examples/*.tsx",
    ),
  ).map(async ([path, m]) => {
    const component = (await m()).default;
    return {
      path,
      label: component.displayName ?? component.name,
    };
  }),
);

const items = registry.items.filter(
  (i) => !i.meta?.hidden,
).map((c) => {
  const path = registryPath(c as RegistryEntry);

  if (c.name === "day-view") {
  console.log(c)
  console.log(path)
  }

  const itemExamples = examples.filter((ex) => ex.path.startsWith(`${path}/examples`));

  const preview = itemExamples.find((ex) => ex.path === previewPath(c));

  if (preview) {
    itemExamples.splice(itemExamples.indexOf(preview), 1);
  }

  return {
    ...c,
    preview: preview?.path,
    examples: itemExamples,
  } as unknown as RegistryEntry;
});

export const components: RegistryEntry[] = [];
export const widgets: RegistryEntry[] = [];

for (const item of items) {
  if (item.type === "registry:component") {
    if (!item.meta?.extends) {
      item.extensions = components.filter((c) => c.meta?.extends?.includes(item.name));
      components.push(item);
    }
  }

  if (item.type === "registry:block") {
    widgets.push(item);
  }
}