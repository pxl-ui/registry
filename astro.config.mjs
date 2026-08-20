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
        Footer: './app/components/starlight/Footer.astro',
        Header: './app/components/starlight/Header.astro',
        Hero: './app/components/starlight/Hero.astro',
        MobileMenuToggle: './app/components/starlight/MobileMenuToggle.astro',
        Pagination: './app/components/starlight/Pagination.astro',
        PageFrame: './app/components/starlight/PageFrame.astro',
        PageTitle: './app/components/starlight/PageTitle.astro',
        Search: './app/components/starlight/Search.astro',
        SocialIcons: './app/components/starlight/SocialIcons.astro',
        ThemeSelect: './app/components/starlight/ThemeSelect.astro',
      },
      routeMiddleware: './app/routeMiddleware.ts'
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
