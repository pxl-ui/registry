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
        { autogenerate: { directory: "docs" } },
        {
          label: "Layout",
          items: [{ autogenerate: { directory: "layout" } }],
        },
        {
          label: "Interaction",
          items: [{ autogenerate: { directory: "interaction" } }],           
        },
        {
          label: "Navigation",
          items: [{ autogenerate: { directory: "navigation" } }],     
        },
        {
          label: "Content",
          items: [{ autogenerate: { directory: "content" } }],     
        },
        {
          label: "Widgets",
          items: [{ autogenerate: { directory: "widgets" } }],
        },
        {
          label: "Recipes",
          items: [{ autogenerate: { directory: "recipes" } }],
        }
      ],
      customCss: ["./app/styles/starlight.css"],
      components: {
        Header: './app/components/Header.astro',
        Hero: './app/components/Hero.astro',
        Search: './app/components/Search.astro',
        SocialIcons: './app/components/SocialIcons.astro',
        ThemeSelect: './app/components/ThemeSelect.astro',
        Footer: './app/components/Footer.astro',
        Pagination: './app/components/Pagination.astro',
        PageTitle: './app/components/PageTitle.astro'
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
