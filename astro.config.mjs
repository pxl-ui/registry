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
            href: `${baseUrl ?? ""}/fonts/Illusion_Book_Regular.ttf`,
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
              {
                label: "Introduction",
                link: "/docs"
              },
              {
                label: "Installation",
                link: "/docs/installation"
              },
              {
                label: "Recipes",
                items: [{ autogenerate: { directory: "recipes" } }],
              },
              {
                label: "Additional Resources",
                link: "/docs/additional-resources"
              },
            ]
          },
          {
            label: "Utilities",
            link: "/utilities/pixels",
            items: [
              { autogenerate: { directory: "utilities" }},
              {
                label: "Schemas",
                items: [
                  {
                    label: "Introduction",
                    link: "/schemas"
                  },
                  {
                    label: "Feeds",
                    items: [
                      { label: "Atom", link: "/schemas/atom"},
                      { label: "Rdf", link: "/schemas/rdf"},
                      { label: "Rss", link: "/schemas/rss"},
                      { label: "Opml", link: "/schemas/opml"},
                    ]
                  },
                  {
                    label: "Events",
                    items: [
                      { label: "GCalendar", link: "/schemas/gcalendar"}
                    ]
                  },
                  {
                    label: "Tasks",
                    items: [
                      { label: "TaskNotes", link: "/schemas/tasknotes"}
                    ]
                  },
                  {
                    label: "Notes",
                    items: [
                      { label: "Obsidian", link: "/schemas/obsidian"}
                    ]
                  },
                  {
                    label: "Mails",
                    items: [
                      { label: "ImapFlow", link: "/schemas/imapflow" },
                      { label: "MailParser", link: "/schemas/mailparser" }
                    ]
                  },
                  {
                    label: "Weather",
                    items: [
                      { label: "OpenMeteo", link: "/schemas/openmeteo" }
                    ]
                  },
                  {
                    label: "Maps",
                    items: [
                      { label: "OpenStreetMap", link: "/schemas/openstreetmap" }
                    ]
                  }
                ]
              },
              {
                label: "Displays",
                items: [
                  {
                    label: "Introduction",
                    link: "/displays"
                  },
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
            label: "Features",
            badge: "new",
            link: "/features",
            items: [
              {
                label: "Introduction",
                link: "/features/",
              },
              {
                label: "Magazine",
                items: [{ autogenerate: { directory: "features/magazine" } }],
              },
              {
                label: "Newspaper",
                items: [{ autogenerate: { directory: "features/newspaper" } }],
              },
              {
                label: "Conversation",
                items: [{ autogenerate: { directory: "features/conversation" } }],
              },
              {
                label: "Marketing",
                items: [{ autogenerate: { directory: "features/marketing" } }],
              },
            ]
          },
          {
            label: "Widgets",
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
            label: "Customization",
            link: "/customization",
            items: [
              {
                label: "Colors",
                items: [
                  { 
                    label: "Introduction",
                    link: "/colors"
                  },
                  {
                    label: "Complete Palettes",
                    items: [
                      { 
                        label: "DUEL",
                        link: "/colors/duel"
                      },
                      { 
                        label: "Flexoki",
                        link: "/colors/flexoki"
                      },
                      { 
                        label: "Catppuccin Frappe",
                        link: "/colors/catppuccin-frappe"
                      },
                      { 
                        label: "Catppuccin Latte",
                        link: "/colors/catppuccin-latte"
                      },
                      { 
                        label: "Catppuccin Macchiato",
                        link: "/colors/catppuccin-macchiato"
                      },
                      { 
                        label: "Catppuccin Mocha",
                        link: "/colors/catppuccin-mocha"
                      },
                      { 
                        label: "Nestopia",
                        link: "/colors/nestopia"
                      }
                    ]
                  },
                  {
                    label: "Base Palettes",
                    items: [
                      { 
                        label: "Paperback",
                        link: "/colors/paperback"
                      },
                      { 
                        label: "Gothic Bit",
                        link: "/colors/gothic-bit"
                      },
                      { 
                        label: "JustParchment8",
                        link: "/colors/justparchment8"
                      },
                      { 
                        label: "DMG-01",
                        link: "/colors/dmg-01"
                      },
                      { 
                        label: "Final Menu",
                        link: "/colors/final-menu"
                      },
                    ]
                  },
                  {
                    label: "Color Palettes",
                    items: [
                      {
                        label: "PICO-8",
                        link: "/colors/pico-8"
                      },
                      {
                        label: "FANTASY 24",
                        link: "/colors/fantasy-24"
                      },
                      {
                        label: "ARNE-16",
                        link: "/colors/arne-16"
                      },
                      {
                        label: "Vine's Flexible Linear Ramps",
                        link: "/colors/vines-flexible-linear-ramps"
                      }
                    ]
                  },
                  {
                    label: "Compat Palettes",
                    items: [
                      { 
                        label: "DUEL",
                        link: "/colors/duel-compat"
                      },
                      { 
                        label: "Flexoki",
                        link: "/colors/flexoki-compat"
                      },
                      { 
                        label: "Tailwind",
                        link: "/colors/tailwind"
                      },
                    ]
                  }
                ],
              },
              {
                label: "Typography",
                items: [
                  { 
                    label: "Introduction",
                    link: "/typography/"
                  },
                  {
                    label: "Headings",
                    items: [
                      {
                        label: "Pixel Digivolve",
                        link: "/typography/pixel-digivolve"
                      },
                      {
                        label: "Not Jam Blackletter 16",
                        link: "/typography/not-jam-blackletter-16"
                      },
                      {
                        label: "Jacquarda Bastarda 9",
                        link: "/typography/jacquarda-bastarda-9"
                      }
                    ]
                  },
                  {
                    label: "Sans",
                    items: [
                      {
                        label: "Able 5",
                        link: "/typography/able-5"
                      },
                      {
                        label: "Lieben Cloude",
                        link: "/typography/lieben-cloude"
                      },
                      {
                        label: "Pixelify Sans",
                        link: "/typography/pixelify-sans"
                      },
                      {
                        label: "Quanta Strike",
                        link: "/typography/quanta-strike"
                      },
                      {
                        label: "Tiny5",
                        link: "/typography/tiny5"
                      },
                      {
                        label: "Micro 5",
                        link: "/typography/micro-5"
                      },
                      {
                        label: "Geist Pixel",
                        link: "/typography/geist-pixel"
                      },
                      {
                        label: "DotGothic16",
                        link: "/typography/dotgothic16"
                      },
                      {
                        label: "Press Start 2P",
                        link: "/typography/press-start-2p"
                      }
                    ]
                  },
                  {
                    label: "Serif",
                    items: [
                      {
                        label: "Illusion Book",
                        link: "/typography/illusion-book"
                      },
                      {
                        label: "Pixel Serif",
                        link: "/typography/pixel-serif"
                      },
                      {
                        label: "Coral Pixels",
                        link: "/typography/coral-pixels"
                      }
                    ]
                  },
                  {
                    label: "Monospaced",
                    items: [
                      {
                        label: "Monogram",
                        link: "/typography/monogram"
                      },
                      {
                        label: "Bytesized",
                        link: "/typography/bytesized"
                      },
                      {
                        label: "VT323",
                        link: "/typography/vt323"
                      }
                    ]
                  }
                ]
              },
              {
                label: "Icons",
                items: [
                  {
                    label: "Introduction",
                    link: "/icons/",
                  },
                  {
                    label: "Cursors",
                    items: [
                      {
                        label: "Pixelarticons",
                        link: "/icons/pixelarticons-cursors"
                      },
                    ],
                  },
                  {
                    label: "Emojis",
                    items: [
                      {
                        label: "Dotto Emoji",
                        link: "/icons/dotto-emoji"
                      },
                    ],
                  },
                  {
                    label: "Flags",
                    items: [
                      {
                        label: "Terrabandiere",
                        link: "/icons/terrabandiere"
                      },
                    ],
                  },
                ]
              },
              {
                label: "Backgrounds",
                items: [
                  {
                    label: "Introduction",
                    link: "/backgrounds/",
                  },
                  {
                    label: "Patterns",
                    items: [
                      {
                        label: "Grid Pattern",
                        link: "/backgrounds/grid-pattern"
                      },
                      {
                        label: "Animated Grid Pattern",
                        link: "/backgrounds/animated-grid-pattern"
                      },
                      {
                        label: "Hexagon Pattern",
                        link: "/backgrounds/hexagon-pattern"
                      },
                      {
                        label: "Flickering Grid",
                        link: "/backgrounds/flickering-grid"
                      },
                      {
                        label: "Glyph Matrix",
                        link: "/backgrounds/glyph-matrix"
                      },
                    ],
                  },
                ]
              }
            ]
          },
        ]),
      ],
      customCss: ["./app/styles/global.css"],
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
