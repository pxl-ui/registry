import { z } from "zod";

/** Readium Annotations draft profile.
 * https://github.com/readium/annotations/blob/main/README.md
 * Relative publication URLs are supported. Publication membership, DRM rules
 * and the resolution of CSS/CFI expressions require a reading system.
 */
const UriSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9+.-]*:[^\s<>"{}|\\^`]+$/)
  .describe("An absolute resource identifier, including URNs.");

const SourceSchema = z
  .string()
  .min(1)
  .regex(/^[^\s<>"{}|\\^`]+$/)
  .describe(
    "An absolute or relative URL identifying an existing resource in the publication.",
  );

const ContextSchema = z
  .literal("http://www.w3.org/ns/anno.jsonld")
  .describe("The W3C annotation JSON-LD context.");

const DateTimeSchema = z.iso
  .datetime({ offset: true })
  .describe("An ISO 8601 datetime with a timezone.");

const CreatorSchema = z
  .looseObject({
    id: UriSchema.describe("The creator's identity."),
    type: z
      .enum(["Person", "Organization"])
      .describe("Whether the creator is a person or organization."),
    name: z.string().optional().describe("The creator's name."),
  })
  .describe("The person or organization that created the annotation.");

const TextQuoteSelectorSchema = z
  .looseObject({
    type: z.literal("TextQuoteSelector").describe("The selector class."),
    exact: z
      .string()
      .describe("The selected text, preserving source whitespace."),
    prefix: z
      .string()
      .optional()
      .describe(
        "Text immediately preceding the selection, preserving whitespace.",
      ),
    suffix: z
      .string()
      .optional()
      .describe(
        "Text immediately following the selection, preserving whitespace.",
      ),
  })
  .describe(
    "Selects text by quotation; DRM copy limits must be checked by the reading system.",
  );

const TextPositionSelectorSchema = z
  .looseObject({
    type: z.literal("TextPositionSelector").describe("The selector class."),
    start: z
      .int()
      .nonnegative()
      .describe("The inclusive starting offset in Unicode code points."),
    end: z
      .int()
      .nonnegative()
      .describe("The exclusive ending offset in Unicode code points."),
  })
  .refine((selector) => selector.end >= selector.start, {
    path: ["end"],
    message: "End must not precede start.",
  })
  .describe("A text range used to refine a CSS selection.");

const CssSelectorSchema = z
  .looseObject({
    type: z.literal("CssSelector").describe("The selector class."),
    value: z
      .string()
      .describe(
        "CSS selector for the closest common ancestor of the selected text.",
      ),
    refinedBy: TextPositionSelectorSchema.optional().describe(
      "A text range within the selected ancestor.",
    ),
  })
  .describe("Selects an element, optionally refined to a text range.");

const EPUBCFISelectorSchema = z
  .looseObject({
    type: z.literal("EPUBCFISelector").describe("The selector class."),
    value: z
      .string()
      .min(1)
      .describe(
        "A resource-local EPUB CFI without the epubcfi() wrapper or package path; CFI grammar is not validated here.",
      ),
  })
  .describe(
    "Selects a point or range using a resource-local EPUB Canonical Fragment Identifier.",
  );

const FragmentSelectorSchema = z
  .looseObject({
    type: z.literal("FragmentSelector").describe("The selector class."),
    conformsTo: z
      .literal("http://www.idpf.org/epub/linking/cfi/epub-cfi.html")
      .describe("The EPUB CFI specification for the legacy selector."),
    value: z
      .string()
      .regex(/^epubcfi\(.+\)$/)
      .describe("The legacy EPUB CFI, including its epubcfi() wrapper."),
  })
  .describe(
    "The legacy EPUB CFI fragment selector exported by Thorium 3.1 through 3.4.",
  );

const ProgressionSelectorSchema = z
  .looseObject({
    type: z.literal("ProgressionSelector").describe("The selector class."),
    value: z
      .number()
      .min(0)
      .max(1)
      .describe("The fractional position within the resource, from 0 to 1."),
  })
  .describe(
    "An approximate position used for ordering or as a fallback location.",
  );

const SelectorSchema = z
  .discriminatedUnion("type", [
    TextQuoteSelectorSchema,
    CssSelectorSchema,
    EPUBCFISelectorSchema,
    FragmentSelectorSchema,
    ProgressionSelectorSchema,
  ])
  .describe(
    "A publication selector supported by the Readium draft; text positions refine CSS selectors.",
  );

const TargetSchema = z
  .looseObject({
    source: SourceSchema,
    selector: z
      .array(SelectorSchema)
      .optional()
      .describe(
        "Alternative selectors for the same segment; omission targets the entire resource.",
      ),
    meta: z
      .looseObject({
        headings: z
          .array(
            z
              .looseObject({
                level: z
                  .number()
                  .optional()
                  .describe("The ancestor heading's level."),
                txt: z
                  .string()
                  .optional()
                  .describe("The ancestor heading's title."),
              })
              .describe("An ancestor heading used as a breadcrumb."),
          )
          .optional()
          .describe("Ancestor headings locating the annotation."),
        page: z
          .string()
          .optional()
          .describe("A synthetic or print-equivalent page label."),
      })
      .optional()
      .describe(
        "Breadcrumb metadata used to display the annotation's location.",
      ),
  })
  .describe("A segment or complete resource within the current publication.");

const BodySchema = z
  .looseObject({
    type: z.literal("TextualBody").describe("The embedded textual body class."),
    value: z.string().describe("The textual content of the annotation."),
    format: z
      .string()
      .optional()
      .describe(
        "The content's media type; text/plain is implicit and text/markdown recommended.",
      ),
    color: z
      .enum(["pink", "orange", "yellow", "green", "blue", "purple"])
      .optional()
      .describe("The annotation color; yellow is implicit."),
    highlight: z
      .enum(["solid", "underline", "strikethrough", "outline"])
      .optional()
      .describe("The highlight style; solid is implicit."),
    language: z
      .string()
      .optional()
      .describe("The language of the annotation, preferably a BCP 47 tag."),
    textDirection: z
      .enum(["ltr", "rtl"])
      .optional()
      .describe("The text direction; ltr is implicit."),
    tags: z
      .array(z.string())
      .optional()
      .describe("Free text tags categorizing the annotation."),
  })
  .describe(
    "A Readium textual body with optional presentation and categorization hints.",
  );

const AnnotationSchema = z
  .looseObject({
    "@context": ContextSchema,
    id: UriSchema.describe(
      "The annotation's identity; a UUID URN is recommended.",
    ),
    type: z.literal("Annotation").describe("The annotation class."),
    // The draft's table spells this 'hightlighting'; use the W3C vocabulary term.
    motivation: z
      .enum(["bookmarking", "highlighting", "commenting"])
      .optional()
      .describe(
        "The reason for the annotation: bookmark, highlight or comment.",
      ),
    created: DateTimeSchema.describe("When the annotation was created."),
    modified: DateTimeSchema.optional().describe(
      "When the annotation was modified after creation.",
    ),
    creator: CreatorSchema.optional().describe(
      "The creator of the annotation.",
    ),
    target: TargetSchema.describe("The target content in the publication."),
    body: BodySchema.optional().describe(
      "An optional comment body; highlights and bookmarks may omit it.",
    ),
  })
  .describe("A Readium annotation conforming to the draft's required fields.");

const AnnotationSetSchema = z
  .looseObject({
    "@context": ContextSchema,
    id: UriSchema.describe("The set's identity; a UUID URN is recommended."),
    type: z
      .literal("AnnotationSet")
      .describe("The Readium annotation set class."),
    generator: z
      .looseObject({
        id: UriSchema.describe(
          "The generating software's identity; its source repository URL is recommended.",
        ),
        type: z.literal("Software").describe("The software agent class."),
        name: z.string().describe("The generating software's name."),
        homepage: z.url().optional().describe("The software's home page."),
      })
      .optional()
      .describe(
        "Software responsible for generating the serialization; follows the normative table rather than sample 8's IRI shorthand.",
      ),
    about: z
      .looseObject({
        "dc:identifier": z
          .array(z.string())
          .optional()
          .describe("Publication identifiers; ISBNs are preferred."),
        "dc:title": z.string().optional().describe("The publication's title."),
        "dc:format": z
          .string()
          .optional()
          .describe("The publication's media type."),
        "dc:publisher": z.string().optional().describe("The publisher's name."),
        "dc:creator": z
          .array(z.string())
          .optional()
          .describe("The publication's authors."),
        "dc:date": z
          .string()
          .regex(/^\d{4}$/)
          .optional()
          .describe("The four-digit publication year."),
      })
      .describe(
        "Dublin Core metadata used to associate this set with its publication.",
      ),
    generated: DateTimeSchema.optional().describe(
      "When the set was generated.",
    ),
    title: z.string().optional().describe("A title helping identify the set."),
    items: z
      .array(AnnotationSchema)
      .describe("The annotations included in the set."),
  })
  .describe(
    "A Readium annotation set serialized as application/rd-annotations+json in a .annotation file.",
  );

const ReadiumAnnotationSchemas = {
  Annotation: AnnotationSchema,
  AnnotationSet: AnnotationSetSchema,
  Creator: CreatorSchema,
  Target: TargetSchema,
  Body: BodySchema,
  Selector: SelectorSchema,
  TextQuoteSelector: TextQuoteSelectorSchema,
  TextPositionSelector: TextPositionSelectorSchema,
  CssSelector: CssSelectorSchema,
  EPUBCFISelector: EPUBCFISelectorSchema,
  FragmentSelector: FragmentSelectorSchema,
  ProgressionSelector: ProgressionSelectorSchema,
};

type Annotation = z.infer<typeof AnnotationSchema>;
type AnnotationSet = z.infer<typeof AnnotationSetSchema>;
type Creator = z.infer<typeof CreatorSchema>;
type Target = z.infer<typeof TargetSchema>;
type Body = z.infer<typeof BodySchema>;
type Selector = z.infer<typeof SelectorSchema>;
type TextQuoteSelector = z.infer<typeof TextQuoteSelectorSchema>;
type TextPositionSelector = z.infer<typeof TextPositionSelectorSchema>;
type CssSelector = z.infer<typeof CssSelectorSchema>;
type EPUBCFISelector = z.infer<typeof EPUBCFISelectorSchema>;
type FragmentSelector = z.infer<typeof FragmentSelectorSchema>;
type ProgressionSelector = z.infer<typeof ProgressionSelectorSchema>;

declare namespace ReadiumAnnotation {
  export type {
    Annotation,
    AnnotationSet,
    Creator,
    Target,
    Body,
    Selector,
    TextQuoteSelector,
    TextPositionSelector,
    CssSelector,
    EPUBCFISelector,
    FragmentSelector,
    ProgressionSelector,
  };
}

export type {
  Annotation,
  AnnotationSet,
  Body,
  Creator,
  CssSelector,
  EPUBCFISelector,
  FragmentSelector,
  ProgressionSelector,
  ReadiumAnnotation,
  Selector,
  Target,
  TextPositionSelector,
  TextQuoteSelector,
};
export {
  AnnotationSchema,
  AnnotationSetSchema,
  BodySchema,
  CreatorSchema,
  CssSelectorSchema,
  EPUBCFISelectorSchema,
  FragmentSelectorSchema,
  ProgressionSelectorSchema,
  ReadiumAnnotationSchemas,
  SelectorSchema,
  TargetSchema,
  TextPositionSelectorSchema,
  TextQuoteSelectorSchema,
};

export default ReadiumAnnotationSchemas;
