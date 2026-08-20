
const files = new Map<string, string>();

Object.entries(
  import.meta.glob<string>("/registry/**/*", {
    query: "?raw",
    eager: true,
    import: "default",
  }),
).forEach(([path, content]) => {
  files.set(path, content);
});

export { files };

export default {
  files
};
