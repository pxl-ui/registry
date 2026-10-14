import { z } from "zod";

const DefinedTermSchema = z
  .looseObject({
    "@context": z.literal("https://schema.org").optional(),
    "@type": z.literal("DefinedTerm").optional(),
    "@id": z.string().optional(),
    name: z.string().optional(),
    termCode: z
      .string()
      .optional()
      .describe(
        "A code that identifies this DefinedTerm within a DefinedTermSet.",
      ),
    identifier: z.union([z.string(), z.array(z.string())]),
    sameAs: z.union([z.string(), z.array(z.string())]),
  })
  .meta({
    title: "DefinedTerm",
    description:
      "A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term. Use the about property to specify what the term is about.",
  });

const DefinedTermSetSchema = z
  .looseObject({
    "@context": z.literal("https://schema.org").optional(),
    "@type": z.literal("DefinedTermSet").optional(),
    "@id": z.string().optional(),
    name: z.string().optional(),
    hasDefinedTerm: z.array(z.union([z.string(), DefinedTermSchema])),
  })
  .meta({
    title: "DefinedTermSet",
    description:
      "A set of defined terms, for example a set of categories or a classification scheme, a glossary, dictionary or enumeration. Use the about property to specify what the term set is about.",
  });

const DefinedTermSetSchemas = {
  DefinedTermSet: DefinedTermSetSchema,
  DefinedTerm: DefinedTermSchema,
};

type DefinedTermSet = z.infer<typeof DefinedTermSetSchema>;
type DefinedTerm = z.infer<typeof DefinedTermSchema>;

declare namespace DefinedTermSet {
  export type { DefinedTermSet, DefinedTerm };
}

export type { DefinedTerm, DefinedTermSet };
export { DefinedTermSchema, DefinedTermSetSchema, DefinedTermSetSchemas };
export default DefinedTermSetSchemas;
