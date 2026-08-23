import { z } from "./zod";

export const creditsSchema = z
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

export type Credits = z.infer<typeof creditsSchema>;