import { defineEcConfig } from "@astrojs/starlight/expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  themes: ["vitesse-dark", "vitesse-light"],
  shiki: {
    bundledLangs: [
      "bash",
      "css",
      "html",
      "sh",
      "tsx",
      "typescript",
    ],
  },
  defaultProps: {
    showLineNumbers: false
  },
});
