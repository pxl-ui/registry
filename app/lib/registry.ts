import root from "../../registry.json" with { type: "json" };
import { files } from "./files";
import { url } from "./utils";

const KIND_CATEGORIES = {
  COLOR: "color-palette",
  ICON: "icons",
  FONT: "font-family",
  WIDGETS: "widgets",
};

const REGISTRY_URL_GROUPS: Record<string, { prefix?: string }> = {
  colors: { prefix: "colors-" },
  fonts: { prefix: "fonts-" },
  components: {},
  layout: {},
  interaction: {},
  navigation: {},
  content: {},
  widgets: {},
};

export type Registry = {
  name: string;
  items: RegistryItem[];
};

export type RegistryItem = {
  name: string;
  type: string;
  title: string;
  description?: string;
  author?: string;
  categories?: string[];
  dependencies?: string[];
  registryDependencies?: string[];
  files?: {
    type: string;
    path: string;
    target: string;
  }[];
  meta?: {
    hidden?: boolean;
    license?: string;
    extends?: string[];
    order?: number;
  };
};

const registry = new Map<string, RegistryItem>();

const registryFiles = new Map<
  string,
  { path: string; content: string; target: string }[]
>();

const definitions = await Promise.all(
  Object.entries(
    import.meta.glob<{ default: Registry }>("/registry/**/**/registry.json"),
  ).map(async ([path, m]) => {
    const data = (await m()).default;
    return {
      path,
      data,
    };
  }),
);

for (const include of root.include) {
  const resolved = definitions.find((r) => r.path === `/${include}`);

  if (!resolved) {
    continue;
  }

  const basePath = resolved.path.replace("registry.json", "");

  for (const item of resolved.data.items) {
    registry.set(item.name, item);
    if (item.files) {
      registryFiles.set(
        item.name,
        item.files.map((f) => ({
          path: `${basePath}${f.path}`,
          content: files.get(`${basePath}${f.path}`) ?? "",
          target: f.target,
        })),
      );
    }
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
  const categoriesArr =
    typeof categories === "string" ? [categories] : categories;

  return Array.from(registry.values())
    .filter((val) => {
      if (
        categoriesArr &&
        categoriesArr.length > 0 &&
        categoriesArr.some((cat) => !val.categories?.includes(cat))
      ) {
        return false;
      }

      return true;
    })
    .sort((aObj, bObj) => {
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
    });
}

function kind(itemName: string): "color" | "font" | "icon" | "component" | "widget" {
  const item = registry.get(itemName);

  if (!item) {
    throw new Error(`Item "${itemName}" not found`);
  }

  if (item.categories?.includes(KIND_CATEGORIES.COLOR)) {
    return "color";
  }

  if (item.categories?.includes(KIND_CATEGORIES.FONT)) {
    return "font";
  }

  if (item.categories?.includes(KIND_CATEGORIES.ICON)) {
    return "icon";
  }

  if (item.categories?.includes(KIND_CATEGORIES.WIDGETS)) {
    return "widget";
  }

  return "component";
}

/**
 * Removes kind prefixes from registry item. Eg: from "fonts-able-5" to "able-5".
 */
function basename(itemName: string) {
  const item = registry.get(itemName);

  if (!item) {
    throw new Error(`Item "${itemName}" not found`);
  }

  if (item.categories?.includes(KIND_CATEGORIES.COLOR)) {
    return itemName.replace("colors-", "");
  }

  if (item.categories?.includes(KIND_CATEGORIES.ICON)) {
    return itemName
      .replace("icons-", "")
      .replace("flags-", "")
      .replace("cursors-", "");
  }

  if (item.categories?.includes(KIND_CATEGORIES.FONT)) {
    return itemName.replace("fonts-", "");
  }

  return itemName;
}

function fromRouteId(routeId: string) {
  const group = Object.keys(REGISTRY_URL_GROUPS).find((group) =>
    routeId.startsWith(group),
  );

  if (!group) {
    return null;
  }

  const baseName = routeId.split("/").reverse()[0];

  const itemName = REGISTRY_URL_GROUPS[group].prefix
    ? `${REGISTRY_URL_GROUPS[group].prefix}${baseName}`
    : baseName;

  return registry.get(itemName) ?? null;
}

function toRouteId(itemName: string) {
  const baseName = basename(itemName);
  const itemKind = kind(itemName);

  if (itemKind === "color") {
    return url(`colors/${baseName}`);
  }

  if (itemKind === "font") {
    return url(`fonts/${baseName}`);
  }

  if (itemKind === "icon") {
    return url(`icons/${baseName}`);
  }

  // TODO: Implement component subcategories
  throw new Error("Not implemented");
}

export default registry;

export {
  basename,
  filter,
  fromRouteId,
  kind,
  registryFiles as files,
  toRouteId,
};
