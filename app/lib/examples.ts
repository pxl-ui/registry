
import type { ComponentType } from "react";

const components = new Map<string, () => Promise<{ default: ComponentType }>>();

const sourceGlobs = import.meta.glob<string>("/examples/**/*.tsx", {
  query: "?raw",
  import: "default",
});

Object.entries(
  import.meta.glob<{ default: ComponentType }>("/examples/**/*.tsx"),
).forEach(([path, component]) => {
  components.set(
    path.replace("/examples/", "").replace(".tsx", ""),
    component,
  );
});

async function getSource(path: string): Promise<string | undefined> {
  const key = `/examples/${path}.tsx`;
  const importer = sourceGlobs[key];
  if (!importer) return undefined;
  return importer();
}

function getExamplesSlugs(): string[] {
  return Object.keys(sourceGlobs).map(s => s
    .replace("/examples/", "")
    .replace(".tsx", "")
  );
}

export {
  components,
  getExamplesSlugs,
  getSource,
};

export default {
  components,
  getSource,
};