// @ts-check

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://pxl-ui.github.io',
  base: '/registry',
  srcDir: "./app",
  publicDir: "./app/public",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
