import { glob } from "astro/loaders";

import { z } from "./schemas/zod";

export { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";

export * from "./icons";
export * from "./schemas";

const DEFAULT_CONFIG_BASE = "app/content/config";
export const configLoader = ({ base = DEFAULT_CONFIG_BASE }: { base: string } = { base: DEFAULT_CONFIG_BASE }) =>
  glob({ base, pattern: '**/*.{yml,json}' });

const creditSchema = z
  .union([
    z.string(),
    z.object({
      name: z.string(),
      email: z.email().optional(),
      url: z.url().optional(),
    }),
  ])
  .transform((author) => {
    if (typeof author !== "string") {
      return author;
    }

    const match = author.match(/^(.+?)(?:\s*<([^>]+)>)?(?:\s*\(([^)]+)\))?$/);

    if (!match) {
      return { name: author };
    }

    const [, name, email, url] = match;

    return {
      name: name.trim(),
      ...(email && { email: email.trim() }),
      ...(url && { url: url.trim() }),
    };
  });

export const configSchema = () =>
  z.object({
    header: z.object({
      nav: z.object({
        link: z.string(),
        text: z.string(),
      }).array().default([]) 
    }),
    footer: z.object({
      author: creditSchema,
      company: creditSchema,
      repository: creditSchema,
    }),
  });
