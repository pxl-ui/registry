
const fileGlobs = import.meta.glob<string>("/registry/**/*", {
  query: "?raw",
  import: "default",
});

async function getFile(path: string): Promise<string> {
  const importer = fileGlobs[path];
  if (!importer) return "";
  return importer();
}

export { getFile };

export default {
  getFile,
};
