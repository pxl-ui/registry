import z from "zod";

const HeadSchema = z.object({
  title: z.string().optional(),
  dateCreated: z.string().optional(),
  dateModified: z.string().optional(),
  ownerName: z.string().optional(),
  ownerEmail: z.email().optional(),
  ownerId: z.string().optional(),
  docs: z.string().optional(),
  expansionState: z.array(z.number()).optional(),
  vertScrollState: z.number().optional(),
  windowTop: z.number().optional(),
  windowLeft: z.number().optional(),
  windowBottom: z.number().optional(),
  windowRight: z.number().optional(),
});

const OutlineSchema: z.ZodType<Outline> = z.lazy(() =>
  z.object({
    text: z.string(),
    type: z.string().optional(),
    isComment: z.boolean().optional(),
    isBreakpoint: z.boolean().optional(),
    created: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    xmlUrl: z.string().optional(),
    htmlUrl: z.string().optional(),
    language: z.string().optional(),
    title: z.string().optional(),
    version: z.string().optional(),
    url: z.url().optional(),
    outlines: z.array(OutlineSchema).optional(),
  }),
);

const BodySchema = z.object({
  outlines: z.array(OutlineSchema).optional(),
});

const DocumentSchema = z.object({
  head: HeadSchema.optional(),
  body: BodySchema.optional(),
});

const OpmlSchemas = {
  Document: DocumentSchema,
  Outline: OutlineSchema,
};

type Head = z.infer<typeof HeadSchema>;
type Body = z.infer<typeof BodySchema>;
type Document = z.infer<typeof DocumentSchema>;

type Outline = {
  text: string;
  type?: string;
  isComment?: boolean;
  isBreakpoint?: boolean;
  created?: string;
  category?: string;
  description?: string;
  xmlUrl?: string;
  htmlUrl?: string;
  language?: string;
  title?: string;
  version?: string;
  url?: string;
  outlines?: Outline[];
};

declare namespace Opml {
  export type { Document, Outline, Head, BodySchema };
}

export type { Body, Document, Head, Opml, Outline };
export { BodySchema, DocumentSchema, HeadSchema, OpmlSchemas, OutlineSchema };
export default OpmlSchemas;