import root from "../../registry.json" with { type: "json" };
import { files } from "./files";
import type { Badge } from "./starlight/schemas/badge";
import type { LinkHTMLAttributes } from "./starlight/schemas/sidebar";
import { url } from "./utils";

/** Registry item meta kinds */
type Kind = "background" | "color" | "display" | "font" | "icon" | "component" | "widget";
type ComponentKind = "content" | "interaction" | "layout" | "navigation";
type DisplayKind = "embedded" | "hd" | "vga" | "widget" | "xga";
type WidgetKind = "small" | "medium" | "large" | "extralarge";

const KIND_CATEGORIES = {
  background: "background",
  color: "color-palette",
  display: "displays",
  icon: "icons",
  font: "font-family",
  widget: "widgets",
} satisfies Partial<Record<Kind, string>>;

const COMPONENT_KIND_CATEGORIES = {
  content: "content",
  interaction: "interaction",
  layout: "layout",
  navigation: "navigation",
} satisfies Partial<Record<ComponentKind, string>>;

const DISPLAY_KIND_CATEGORIES = {
  embedded: "displays-embedded",
  hd: "displays-hd",
  vga: "displays-vga",
  widget: "displays-widget",
  xga: "displays-xga"
} satisfies Partial<Record<DisplayKind, string>>;

const WIDGET_KIND_CATEGORIES = {
  small: "widget-sm",
  medium: "widget-md",
  large: "widget-lg",
  extralarge: "widget-xl",
} satisfies Partial<Record<WidgetKind, string>>;

const REGISTRY_URL_GROUPS: Record<string, { prefix?: string }> = {
  backgrounds: { prefix: "backgrounds-" },
  colors: { prefix: "colors-" },
  displays: { prefix: "displays/" },
  typography: { prefix: "fonts-" },
  icons: { prefix: "icons-" },
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
  cssVars?: {
    theme?: Record<string, string>;
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
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
    console.warn(`Failed to include "${include}" from registry root`);
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

function kind(itemName: string): Kind {
  const item = registry.get(itemName);

  if (!item) {
    throw new Error(`Item "${itemName}" not found`);
  }

  if (!item.categories || item.categories.length === 0) {
    throw new Error(`Item "${itemName}" has no categories`);
  }

  for (const [kind, category] of Object.entries(KIND_CATEGORIES)) {
    if (item.categories?.includes(category)) {
      return kind as Kind;
    }
  }

  return "component";
}

function componentKind(itemName: string): ComponentKind {
  const item = registry.get(itemName);

  if (!item) {
    throw new Error(`Item "${itemName}" not found`);
  }

  if (!item.categories || item.categories.length === 0) {
    throw new Error(`Unable to resolve kind for component: "${itemName}". Reason: Component has no categories`);
  }

  for (const [kind, category] of Object.entries(COMPONENT_KIND_CATEGORIES)) {
    if (item.categories?.includes(category)) {
      return kind as ComponentKind;
    }
  }

  throw new Error(`Unable to resolve kind for component: "${itemName}". Reason: Component has no kind category`);
}

function displayKind(itemName: string): DisplayKind {
  const item = registry.get(itemName);

  if (!item) {
    throw new Error(`Item "${itemName}" not found`);
  }

  if (!item.categories || item.categories.length === 0) {
    throw new Error(`Unable to resolve kind for component: "${itemName}". Reason: Component has no categories`);
  }

  for (const [kind, category] of Object.entries(DISPLAY_KIND_CATEGORIES)) {
    if (item.categories?.includes(category)) {
      return kind as DisplayKind;
    }
  }

  throw new Error(`Unable to resolve kind for component: "${itemName}". Reason: Component has no kind category`);
}

function widgetKind(itemName: string): WidgetKind {
  const item = registry.get(itemName);

  if (!item) {
    throw new Error(`Item "${itemName}" not found`);
  }

  if (!item.categories || item.categories.length === 0) {
    throw new Error(`Unable to resolve kind for component: "${itemName}". Reason: Component has no categories`);
  }

  for (const [kind, category] of Object.entries(WIDGET_KIND_CATEGORIES)) {
    if (item.categories?.includes(category)) {
      return kind as WidgetKind;
    }
  }

  throw new Error(`Unable to resolve kind for component: "${itemName}". Reason: Component has no kind category`);
}

/**
 * Removes kind prefixes from registry item. Eg: from "fonts-able-5" to "able-5".
 */
function basename(itemName: string) {
  const item = registry.get(itemName);

  if (!item) {
    throw new Error(`Item "${itemName}" not found`);
  }

  if (item.categories?.includes(KIND_CATEGORIES.background)) return itemName.replace("backgrounds-", "");
  if (item.categories?.includes(KIND_CATEGORIES.display)) return itemName.replace("displays/", "");
  if (item.categories?.includes(KIND_CATEGORIES.color)) return itemName.replace("colors-", "");
  if (item.categories?.includes(KIND_CATEGORIES.icon)) return itemName.replace("icons-", "").replace("flags-", "").replace("cursors-", "");
  if (item.categories?.includes(KIND_CATEGORIES.font)) return itemName.replace("fonts-", "");

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

  if (itemKind === "background") return url(`backgrounds/patterns/${baseName}`);
  if (itemKind === "color") return url(`colors/palettes/${baseName}`);
  if (itemKind === "font") return url(`typography/fonts/${baseName}`);
  if (itemKind === "icon") return url(`icons/packs/${baseName}`);

  if (itemKind === "component") {
    const itemComponentKind = componentKind(itemName);
    
    if (itemComponentKind === "content") return url(`components/content/${baseName}`);
    if (itemComponentKind === "interaction") return url(`components/interaction/${baseName}`);
    if (itemComponentKind === "layout") return url(`components/layout/${baseName}`);
    if (itemComponentKind === "navigation") return url(`components/navigation/${baseName}`);
  }

  if (itemKind === "display") {
    const itemDisplayKind = displayKind(itemName);
    
    if (itemDisplayKind === "embedded") return url(`displays/embedded/${baseName}`);
    if (itemDisplayKind === "hd") return url(`displays/hd/${baseName}`);
    if (itemDisplayKind === "vga") return url(`displays/vga/${baseName}`);
    if (itemDisplayKind === "widget") return url(`displays/widget/${baseName}`);
    if (itemDisplayKind === "xga") return url(`displays/xga/${baseName}`);
  }

  if (itemKind === "widget") {
    const itemWidgetKind = widgetKind(itemName);
    
    if (itemWidgetKind === "small") return url(`widgets/sm/${baseName}`);
    if (itemWidgetKind === "medium") return url(`widgets/md/${baseName}`);
    if (itemWidgetKind === "large") return url(`widgets/lg/${baseName}`);
    if (itemWidgetKind === "extralarge") return url(`widgets/xl/${baseName}`);
  }

  // TODO: Implement component subcategories
  throw new Error(`Method toRouteId not implemented for kind "${itemKind}"`);
}

function pages(itemName: string): {
  next: {
    type: 'link';
    label: string;
    href: string;
    isCurrent: boolean;
    badge: Badge | undefined;
    attrs: LinkHTMLAttributes;
  } | undefined;
  prev: {
	type: 'link';
	label: string;
	href: string;
	isCurrent: boolean;
	badge: Badge | undefined;
	attrs: LinkHTMLAttributes;
} | undefined;
} {
  let next: {
    type: 'link';
    label: string;
    href: string;
    isCurrent: boolean;
    badge: Badge | undefined;
    attrs: LinkHTMLAttributes;
  } | undefined;
  let prev: {
    type: 'link';
    label: string;
    href: string;
    isCurrent: boolean;
    badge: Badge | undefined;
    attrs: LinkHTMLAttributes;
  } | undefined;
  const itemKind = kind(itemName);

  console.log(itemName, itemKind);

  if (!(itemKind in KIND_CATEGORIES)) {
    return {
      next,
      prev,
    };
  }

  const categories = [KIND_CATEGORIES[itemKind as keyof typeof KIND_CATEGORIES]];


  const items = filter({ categories });

  const index = items.findIndex(i => i.name === itemName);

  if (index > 0) {
    const prevItem = items[index - 1];

    prev = {
      type: "link",
      label: prevItem.title ?? prevItem.name,
      href: toRouteId(prevItem.name),
      isCurrent: false,
      badge: undefined,
      attrs: {}
    };
  }

  if (index < items.length - 1) {
    const nextItem = items[index + 1];

    next = {
      type: "link",
      label: nextItem.title ?? nextItem.name,
      href: toRouteId(nextItem.name),
      isCurrent: false,
      badge: undefined,
      attrs: {}
    };
  }

  return {
    next,
    prev,
  };
}

export default registry;

export {
  basename,
  filter,
  fromRouteId,
  kind,
  pages,
  registry,
  registryFiles as files,
  toRouteId,
};
