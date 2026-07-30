import uiRegistry from "@/registry.json" with { type: "json" };

const uiRegistryComponents = uiRegistry.items.filter(i => i.type === "registry:component" && !i.meta?.hidden);

export type RegistryEntry = (typeof uiRegistryComponents)[0];

export const registry: RegistryEntry[] = uiRegistryComponents.filter(i => !i.meta?.extends);

export function registryExtensions(item: string) {
  return uiRegistryComponents.filter(c => c.meta?.extends?.includes(item));
}

export function exampleFilePath(item: { name: string }) {
  return `/registry/pxl-ui/${item.name}/examples/${item.name}.tsx`;
}