import {
  configLoader,
  configSchema,
  docsLoader,
  docsSchema,
  i18nLoader,
  i18nSchema,
} from "./lib/starlight";
import { defineCollection } from "astro:content";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema(),
  }),
  config: defineCollection({
    loader: configLoader(),
    schema: configSchema(),
  }),
};
