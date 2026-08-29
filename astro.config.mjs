// @ts-check

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const baseUrl = process.env.NODE_ENV === "development" ? undefined : "/registry";

// https://astro.build/config
export default defineConfig({
  site: "https://pxl-ui.github.io",
  base: baseUrl,
  srcDir: "./app",
  publicDir: "./app/public",
  integrations: [
    react(),
    starlight({
      title: "PXL UI",
      description: "A UI kit for people making things that blink, bounce, and beep. Sharp pixel edges paired with fluid, modern interaction — nothing here looks like a template, and nothing here should stay looking like ours once you're done with it.",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preload",
            as: "font",
            crossorigin: "anonymous",
            href: `${baseUrl ?? ""}/fonts/Able_5.ttf`,
            type: "font/ttf"
          }
        },
        {
          tag: "link",
          attrs: {
            rel: "preload",
            as: "font",
            crossorigin: "anonymous",
            href: `${baseUrl ?? ""}/fonts/Pixel_Digivolve.otf`,
            type: "font/otf"
          }
        },
        {
          tag: "link",
          attrs: {
            rel: "preload",
            as: "font",
            crossorigin: "anonymous",
            href: `${baseUrl ?? ""}/fonts/Monogram_Extended.ttf`,
            type: "font/ttf"
          }
        }
      ],
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
        PageSidebar: './app/components/starlight/PageSidebar.astro',
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
