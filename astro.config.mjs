// @ts-check

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
      plugins: [
        starlightSidebarTopics([
          {
            label: "Docs",
            link: "/docs/",
            items: [
              { autogenerate: { directory: "docs" } },
              {
                label: "Recipes",
                items: [{ autogenerate: { directory: "recipes" } }],
              }
            ]
          },
          {
            label: "Components",
            link: "/components/",
            items: [
              {
                label: "Introduction",
                link: "/components/",
              },
              {
                label: "Layout",
                items: [{ autogenerate: { directory: "components/layout" } }],
              },
              {
                label: "Interaction",
                items: [{ autogenerate: { directory: "components/interaction" } }],           
              },
              {
                label: "Navigation",
                items: [{ autogenerate: { directory: "components/navigation" } }],     
              },
              {
                label: "Content",
                items: [{ autogenerate: { directory: "components/content" } }],     
              }
            ]
          },
          {
            label: "Widgets",
            badge: "new",
            link: "/widgets/",
            items: [
              {
                label: "Introduction",
                link: "/widgets/",
              },
              {
                label: "Medium",
                items: [{ autogenerate: { directory: "widgets/md" } }],
              }
            ]
          },
          {
            label: "Colors",
            link: "/colors/",
            items: [
              {
                label: "Introduction",
                link: "/colors/",
              },
              {
                label: "Palettes",
                items: [{ autogenerate: { directory: "colors/palettes" } }],
              },
            ]
          },
          {
            label: "Typography",
            link: "/typography/",
            items: [
              {
                label: "Introduction",
                link: "/typography/",
              },
              {
                label: "Typeset",
                link: "/typography/typeset",
              },
              {
                label: "Fonts",
                items: [{ autogenerate: { directory: "typography/fonts" } }],
              },
            ]
          },
          {
            label: "Icons",
            link: "/icons/",
            items: [
              {
                label: "Introduction",
                link: "/icons/",
              },
              {
                label: "Packs",
                items: [{ autogenerate: { directory: "icons/packs" } }],
              },
            ]
          },
          {
            label: "Backgrounds",
            link: "/backgrounds/",
            items: [
              {
                label: "Introduction",
                link: "/backgrounds/",
              },
              {
                label: "Patterns",
                items: [{ autogenerate: { directory: "backgrounds/patterns" } }],
              },
            ]
          },
          {
            label: "Displays",
            link: "/displays/",
            items: [
              {
                label: "Widgets",
                items: [{ autogenerate: { directory: "displays/widgets" } }],
              },
              {
                label: "Embedded Systems",
                items: [{ autogenerate: { directory: "displays/embedded" } }],
              },
              {
                label: "High-definition",
                items: [{ autogenerate: { directory: "displays/hd" } }],
              },
              {
                label: "Video Graphics Array",
                items: [{ autogenerate: { directory: "displays/vga" } }],
              },
              {
                label: "Extended Graphics Array",
                items: [{ autogenerate: { directory: "displays/xga" } }],
              },
            ]
          },
        ]),
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
        Sidebar: './app/components/starlight/Sidebar.astro',
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
