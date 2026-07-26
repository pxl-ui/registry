import uiRegistry from "@/registry.json" with { type: "json" };

const uiRegistryComponents = uiRegistry.items.filter(i => i.type === "registry:component");

export type RegistryEntry = (typeof uiRegistryComponents)[0];

export const registry: RegistryEntry[] = uiRegistryComponents;