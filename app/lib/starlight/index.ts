import { glob } from "astro/loaders";

import { creditsSchema } from "./schemas/credits";
import { z } from "./schemas/zod";

export { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";

export * from "./icons";
export * from "./schemas";
export { z } from "./schemas/zod";

const DEFAULT_CONFIG_BASE = "app/content/config";
export const configLoader = (
  { base = DEFAULT_CONFIG_BASE }: { base: string } = {
    base: DEFAULT_CONFIG_BASE,
  },
) => glob({ base, pattern: "**/*.{yml,json}" });

export const configSchema = () =>
  z.object({
    header: z.object({
      nav: z
        .object({
          link: z.string(),
          text: z.string(),
        })
        .array()
        .default([]),
    }),
    footer: z.object({
      author: creditsSchema,
      company: creditsSchema,
      repository: creditsSchema,
    }),
  });
