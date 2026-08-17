
import type { ComponentType } from "react";

const components = new Map<string, ComponentType>();
const sources = new Map<string, string>();

Object.entries(
  import.meta.glob<ComponentType>("/examples/**/*.tsx", {
    import: "default",
    eager: true,
  }),
).forEach(([path, component]) => {
  components.set(
    path.replace("/examples/", "").replace(".tsx", ""),
    component,
  );
});

Object.entries(
  import.meta.glob<string>("/examples/**/*.tsx", {
    query: "?raw",
    import: "default",
    eager: true
  }),
).forEach(([path, content]) => {
  sources.set(
    path.replace("/examples/", "").replace(".tsx", ""),
    content,
  );
});

export default {
  components,
  sources,
};