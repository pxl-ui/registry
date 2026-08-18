// @ts-check

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://pxl-ui.github.io",
  base: process.env.NODE_ENV === "development" ? undefined : "/registry",
  srcDir: "./app",
  publicDir: "./app/public",
  integrations: [
    react(),
    starlight({
      title: "PXL UI",
      // logo: {
      //   src: './app/assets/logo.png',
      // },
      expressiveCode: {
        shiki: {
          bundledLangs: ["sh", "bash", "typescript", "tsx"],
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pxl-ui/registry",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [{ autogenerate: { directory: "guides" } }],
        },
        {
          label: "Utilities",
          items: [{ autogenerate: { directory: "utilities" } }],
        },
        {
          label: "Layouts",
          items: [{ autogenerate: { directory: "layouts" } }],
        },
        {
          label: "Components",
          items: [{ autogenerate: { directory: "components" } }],
        },
        {
          label: "Widgets",
          items: [{ autogenerate: { directory: "widgets" } }],
        },
        {
          label: "Recipes",
          items: [{ autogenerate: { directory: "recipes" } }],
        },
        {
          label: "Additional Resources",
          link: "additional-resources"
        }
      ],
      customCss: ["./app/styles/starlight.css"],
      components: {
        Header: './app/components/Header.astro',
        Hero: './app/components/Hero.astro',
        Search: './app/components/Search.astro',
        SocialIcons: './app/components/SocialIcons.astro',
        ThemeSelect: './app/components/ThemeSelect.astro',
        Footer: './app/components/Footer.astro'
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
