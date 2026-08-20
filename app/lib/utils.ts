
export const baseUrl = import.meta.env.BASE_URL;

/**
 * The route groups that represent registry items. Eg "colors/<color-name>" belongs to a registry item
 */

const REGISTRY_URL_GROUPS: Record<string, { prefix?: string; }> = {
  colors: { prefix: "colors-" },
  fonts: { prefix: "fonts-" },
  components: {},
  layout: {},
  interaction: {},
  navigation: {},
  content: {},
  widgets: {},
}

export function url(path: string) {
  if (baseUrl === "/") {
    return `${baseUrl}${path}`;
  }

  return [baseUrl, path].join("/");
}

export function registryItemFromRouteId(routeId: string) {
  const group = Object.keys(REGISTRY_URL_GROUPS).find(group => routeId.startsWith(group));

  if (!group) {
    return null;
  }

  const itemName = routeId.split("/").reverse()[0];

  return REGISTRY_URL_GROUPS[group].prefix ?
    `${REGISTRY_URL_GROUPS[group].prefix}${itemName}` : itemName;
}

export function routeFromRegistryItem(registryItem: string, groupName: string) {
  const group = REGISTRY_URL_GROUPS[groupName];

  if (!group) {
    return null;
  }

  return url(
    group.prefix ? 
      `${groupName}/${registryItem.replace(group.prefix, "")}` :
      `${groupName}/${registryItem}`
  );
}