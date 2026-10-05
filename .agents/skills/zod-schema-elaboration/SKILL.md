---
name: zod-schema-elaboration
description: Elaborate Zod Schemas from types, json-schemas, data or any kind of content.
license: MIT
---

# Zod Schema Elaboration

When the user asks you to elaborate a Zod Schema, follow these rules.

## Rules

- Use `zod@4.6`'s syntax.
- Use named import for zod.
- Suffix the schema names with `Schema`.
- Do not include unnecessary schemas. If an object is small and is not used more than once, include it inline within the parent schema.
- Do not include unused schemas.
- Include descriptions for both properties and schemas when available
- All the exports must go at the bottom of the file.
- Infer types of the main schemas when possible
- Define constant with the main schemas.
- Declare namespace with the main types.
- Export the namespace and main types.
- Export the main schemas
- Default export the constant with the main schemas.

## Example

```ts
import { z } from "zod";

const AuthorSchema = z.object({
  name: z.string()
    .describe("The author's name"),
  url: z.string()
    .describe("The author's url")
    .optional()
}).describe("An author.");

const AppSchemas = {
  Author: AuthorSchema,
};

type Author = z.infer<typeof AuthorSchema>;

declare namespace App {
  export type { Author }
}

export type { App, Author }
export { AppSchemas, AuthorSchema }
export default AppSchemas;
```
