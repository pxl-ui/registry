import { z } from "zod";

/** Compact JSON-LD serialization of the W3C Recommendation (23 February 2017).
 * https://www.w3.org/TR/2017/REC-annotation-model-20170223/
 * Extension properties are preserved. This validates structure, not JSON-LD
 * expansion, selector execution, SVG XML syntax or remote resource contents.
 */
const IriSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z0-9+.-]*:[^\s<>"{}|\\^`]+$/)
  .describe("An absolute IRI, including Unicode identifiers and URNs.");

const DateTimeSchema = z.iso
  .datetime()
  .describe("An xsd:dateTime timestamp in UTC, ending in Z.");

const oneOrMany = <T extends z.ZodType>(schema: T) =>
  z.union([schema, z.array(schema)]);

const oneOrMore = <T extends z.ZodType>(schema: T) =>
  z.union([schema, z.array(schema).min(1)]);

const TypeSchema = oneOrMore(z.string().min(1)).describe(
  "One or more compact class names or class IRIs.",
);

const requiredType = (name: string) =>
  z.union([
    z.literal(name),
    z
      .array(z.string().min(1))
      .min(1)
      .refine((types) => types.includes(name), `Must include ${name}.`),
  ]);

const ContextSchema = z
  .union([
    z.literal("http://www.w3.org/ns/anno.jsonld"),
    z
      .array(z.union([IriSchema, z.record(z.string(), z.json())]))
      .min(2)
      .refine(
        (contexts) => contexts.includes("http://www.w3.org/ns/anno.jsonld"),
        "Must include the W3C annotation context.",
      ),
  ])
  .describe(
    "JSON-LD context including the W3C annotation context; a single context is a string.",
  );

const ReferenceSchema = z
  .looseObject({
    id: IriSchema.describe("The referenced resource's identity."),
    type: z.never().optional(),
  })
  .describe("An identified resource without a declared class.");

const ResourceReferenceSchema = z.union([IriSchema, ReferenceSchema]);

const MotivationSchema = z
  .union([
    z.enum([
      "assessing",
      "bookmarking",
      "classifying",
      "commenting",
      "describing",
      "editing",
      "highlighting",
      "identifying",
      "linking",
      "moderating",
      "questioning",
      "replying",
      "tagging",
    ]),
    ResourceReferenceSchema,
  ])
  .describe(
    "A standard motivation or a reference to a motivation from another vocabulary.",
  );

const AgentSchema = z
  .looseObject({
    id: IriSchema.optional().describe("The agent's identity."),
    type: TypeSchema.optional().describe(
      "Agent classes, normally Person, Organization or Software.",
    ),
    name: oneOrMany(z.string()).optional().describe("Names of the agent."),
    nickname: z.string().optional().describe("A nickname for the agent."),
    email: oneOrMany(IriSchema.regex(/^mailto:/))
      .optional()
      .describe("Email addresses expressed as mailto IRIs."),
    email_sha1: oneOrMany(z.string().regex(/^[0-9a-fA-F]{40}$/))
      .optional()
      .describe("SHA-1 hashes of email IRIs."),
    homepage: oneOrMany(ResourceReferenceSchema)
      .optional()
      .describe("Home pages for the agent."),
  })
  .describe("A person, organization or software agent.");

const AgentReferenceSchema = z.union([IriSchema, AgentSchema]);

const lifecycleShape = {
  creator: oneOrMany(AgentReferenceSchema)
    .optional()
    .describe("Agents responsible for creating the resource."),
  created: DateTimeSchema.optional().describe("When the resource was created."),
  modified: DateTimeSchema.optional().describe(
    "When the resource was modified.",
  ),
  rights: oneOrMany(IriSchema)
    .optional()
    .describe("Rights statements or licenses for the resource."),
  canonical: IriSchema.optional().describe(
    "The stable canonical identity of the resource.",
  ),
  via: oneOrMany(IriSchema)
    .optional()
    .describe("Locations from which the resource was obtained."),
};

const contentShape = {
  ...lifecycleShape,
  format: oneOrMany(z.string())
    .optional()
    .describe("Media types of the resource's content."),
  language: oneOrMany(z.string())
    .optional()
    .describe("Languages of the content, preferably BCP 47 tags."),
  processingLanguage: z
    .string()
    .optional()
    .describe("The language used for text processing."),
  textDirection: z
    .enum(["ltr", "rtl", "auto"])
    .optional()
    .describe("The base direction of the text."),
  accessibility: oneOrMany(z.string())
    .optional()
    .describe("Accessibility features of the content."),
};

const ExternalResourceSchema = z
  .looseObject({
    ...contentShape,
    id: IriSchema.describe("The external resource's identity."),
    type: TypeSchema.optional(),
    source: z.never().optional(),
    value: z.never().optional(),
  })
  .refine((resource) => {
    const types =
      typeof resource.type === "string"
        ? [resource.type]
        : (resource.type ?? []);
    return !types.some((type) =>
      ["TextualBody", "SpecificResource", "Choice"].includes(type),
    );
  }, "Specialized resources must satisfy their own schema.")
  .describe(
    "An external body or target, optionally described with content metadata.",
  );

const TextualBodySchema = z
  .looseObject({
    ...contentShape,
    id: IriSchema.optional().describe(
      "An optional identity for the embedded body.",
    ),
    type: TypeSchema.optional().describe(
      "Classes of the body, normally including TextualBody.",
    ),
    value: z.string().describe("The embedded textual content."),
    purpose: oneOrMany(MotivationSchema)
      .optional()
      .describe("Reasons for including this body."),
  })
  .describe(
    "An embedded textual body. TextualBody typing is recommended, not mandatory.",
  );

// Recursive selector relationships retain their discriminated TypeScript types.
const selectorIdentityShape = {
  id: IriSchema.optional().describe("An optional identity for the selector."),
};

const FragmentValueSchema = z
  .looseObject({
    ...selectorIdentityShape,
    type: z.literal("FragmentSelector").describe("The selector class."),
    value: z.string().describe("A fragment component without the leading #."),
    conformsTo: ResourceReferenceSchema.optional().describe(
      "The specification defining the fragment syntax.",
    ),
  })
  .describe("Selects a segment using a fragment identifier.");

const CssValueSchema = z
  .looseObject({
    ...selectorIdentityShape,
    type: z.literal("CssSelector").describe("The selector class."),
    value: z.string().describe("A CSS selector identifying elements."),
  })
  .describe("Selects elements using CSS.");

const XPathValueSchema = z
  .looseObject({
    ...selectorIdentityShape,
    type: z.literal("XPathSelector").describe("The selector class."),
    value: z.string().describe("An XPath identifying the segment."),
  })
  .describe("Selects a segment using XPath.");

const TextQuoteValueSchema = z
  .looseObject({
    ...selectorIdentityShape,
    type: z.literal("TextQuoteSelector").describe("The selector class."),
    exact: z
      .string()
      .describe("The selected text after W3C text normalization."),
    prefix: z
      .string()
      .optional()
      .describe("Text immediately preceding the selection."),
    suffix: z
      .string()
      .optional()
      .describe("Text immediately following the selection."),
  })
  .describe("Selects text using a quotation and optional surrounding context.");

const positionShape = {
  ...selectorIdentityShape,
  start: z
    .int()
    .nonnegative()
    .describe("The inclusive starting offset, counted from zero."),
  end: z.int().nonnegative().describe("The exclusive ending offset."),
};

const TextPositionValueSchema = z
  .looseObject({
    ...positionShape,
    type: z.literal("TextPositionSelector").describe("The selector class."),
  })
  .describe(
    "Selects a range measured in Unicode code points, not UTF-16 code units.",
  );

const DataPositionValueSchema = z
  .looseObject({
    ...positionShape,
    type: z.literal("DataPositionSelector").describe("The selector class."),
  })
  .describe("Selects a range measured in bytes.");

const SvgValueSchema = z
  .looseObject({
    ...selectorIdentityShape,
    type: z.literal("SvgSelector").describe("The selector class."),
    value: z
      .string()
      .optional()
      .describe(
        "An embedded SVG XML region; XML syntax is not validated here.",
      ),
  })
  .describe(
    "Selects a region described by embedded or externally identified SVG.",
  );

const SimpleSelectorSchema = z.discriminatedUnion("type", [
  FragmentValueSchema,
  CssValueSchema,
  XPathValueSchema,
  TextQuoteValueSchema,
  TextPositionValueSchema,
  DataPositionValueSchema,
  SvgValueSchema,
]);

type SelectorReference = string | z.infer<typeof ReferenceSchema> | Selector;

type Selector = (
  | z.infer<typeof SimpleSelectorSchema>
  | {
      id?: string;
      type: "RangeSelector";
      startSelector: SelectorReference;
      endSelector: SelectorReference;
    }
) & { refinedBy?: SelectorReference | SelectorReference[] };

const SelectorReferenceSchema: z.ZodType<SelectorReference> = z.lazy(() =>
  z.union([IriSchema, ReferenceSchema, SelectorSchema]),
);

const selectorRefinementShape = {
  refinedBy: oneOrMore(SelectorReferenceSchema)
    .optional()
    .describe("Alternative selectors refining the result of this selector."),
};

const FragmentSelectorSchema = FragmentValueSchema.extend(
  selectorRefinementShape,
);

const CssSelectorSchema = CssValueSchema.extend(selectorRefinementShape);

const XPathSelectorSchema = XPathValueSchema.extend(selectorRefinementShape);

const TextQuoteSelectorSchema = TextQuoteValueSchema.extend(
  selectorRefinementShape,
);

const TextPositionSelectorSchema = TextPositionValueSchema.extend(
  selectorRefinementShape,
).refine((value) => value.end >= value.start, {
  path: ["end"],
  message: "End must not precede start.",
});

const DataPositionSelectorSchema = DataPositionValueSchema.extend(
  selectorRefinementShape,
).refine((value) => value.end >= value.start, {
  path: ["end"],
  message: "End must not precede start.",
});

const SvgSelectorSchema = SvgValueSchema.extend(selectorRefinementShape);

const RangeSelectorSchema = z
  .looseObject({
    ...selectorIdentityShape,
    ...selectorRefinementShape,
    type: z.literal("RangeSelector").describe("The selector class."),
    startSelector: SelectorReferenceSchema.describe(
      "The inclusive starting point of the range.",
    ),
    endSelector: SelectorReferenceSchema.describe(
      "The exclusive ending point of the range.",
    ),
  })
  .describe("Selects a range whose endpoints are described by selectors.");

const SelectorSchema: z.ZodType<Selector> = z
  .discriminatedUnion("type", [
    FragmentSelectorSchema,
    CssSelectorSchema,
    XPathSelectorSchema,
    TextQuoteSelectorSchema,
    TextPositionSelectorSchema,
    DataPositionSelectorSchema,
    SvgSelectorSchema,
    RangeSelectorSchema,
  ])
  .describe(
    "One of the eight W3C selector classes, with optional recursive refinements.",
  );

const TimeStateValueSchema = z.looseObject({
  id: IriSchema.optional().describe("The state's identity."),
  type: z.literal("TimeState").describe("The state class."),
  sourceDate: oneOrMany(DateTimeSchema)
    .optional()
    .describe("Alternative timestamps for the source representation."),
  sourceDateStart: DateTimeSchema.optional().describe(
    "The beginning of an applicable time interval.",
  ),
  sourceDateEnd: DateTimeSchema.optional().describe(
    "The end of an applicable time interval.",
  ),
  cached: oneOrMany(ResourceReferenceSchema)
    .optional()
    .describe("Cached copies of the source representation."),
});
const HttpRequestStateValueSchema = z.looseObject({
  id: IriSchema.optional().describe("The state's identity."),
  type: z.literal("HttpRequestState").describe("The state class."),
  value: z
    .string()
    .describe("The complete HTTP request headers as a single string."),
});

type StateReference = string | z.infer<typeof ReferenceSchema> | State;

type State = (
  | z.infer<typeof TimeStateValueSchema>
  | z.infer<typeof HttpRequestStateValueSchema>
) & {
  refinedBy?:
    | StateReference
    | SelectorReference
    | (StateReference | SelectorReference)[];
};

const StateReferenceSchema: z.ZodType<StateReference> = z.lazy(() =>
  z.union([IriSchema, ReferenceSchema, StateSchema]),
);

const stateRefinementShape = {
  refinedBy: oneOrMore(z.union([StateReferenceSchema, SelectorReferenceSchema]))
    .optional()
    .describe("Alternative states or selectors refining this representation."),
};

const TimeStateSchema = TimeStateValueSchema.extend(stateRefinementShape)
  .superRefine((state, ctx) => {
    if (
      (state.sourceDateStart === undefined) !==
      (state.sourceDateEnd === undefined)
    )
      ctx.addIssue({
        code: "custom",
        path: ["sourceDateEnd"],
        message: "Both interval endpoints are required.",
      });
    if (
      state.sourceDate !== undefined &&
      (state.sourceDateStart !== undefined || state.sourceDateEnd !== undefined)
    )
      ctx.addIssue({
        code: "custom",
        path: ["sourceDate"],
        message: "A timestamp and a time interval are mutually exclusive.",
      });
    if (
      state.sourceDateStart &&
      state.sourceDateEnd &&
      Date.parse(state.sourceDateEnd) < Date.parse(state.sourceDateStart)
    )
      ctx.addIssue({
        code: "custom",
        path: ["sourceDateEnd"],
        message: "End must not precede start.",
      });
  })
  .describe(
    "Describes a source representation using timestamps, an interval or cached copies.",
  );

const HttpRequestStateSchema = HttpRequestStateValueSchema.extend(
  stateRefinementShape,
).describe("Describes a representation using HTTP request headers.");

const StateSchema: z.ZodType<State> = z
  .discriminatedUnion("type", [TimeStateSchema, HttpRequestStateSchema])
  .describe(
    "A W3C representation state, optionally refined by states or selectors.",
  );

const SpecificResourceSchema = z
  .looseObject({
    ...lifecycleShape,
    id: IriSchema.optional().describe(
      "The identity of the specific resource, distinct from its source.",
    ),
    type: TypeSchema.optional().describe(
      "Classes of the resource, normally including SpecificResource.",
    ),
    source: z
      .union([IriSchema, ExternalResourceSchema])
      .describe("The external resource being constrained."),
    purpose: oneOrMany(MotivationSchema)
      .optional()
      .describe("Reasons for including the resource."),
    selector: oneOrMany(SelectorReferenceSchema)
      .optional()
      .describe("Alternative descriptions of the selected segment."),
    state: oneOrMany(StateReferenceSchema)
      .optional()
      .describe("Alternative descriptions of the intended representation."),
    styleClass: oneOrMany(z.string())
      .optional()
      .describe("CSS classes applied using the annotation's stylesheet."),
    renderedVia: oneOrMany(AgentReferenceSchema)
      .optional()
      .describe("Software used to render the target."),
    scope: oneOrMany(z.union([IriSchema, ExternalResourceSchema]))
      .optional()
      .describe("Resources providing the annotation context."),
  })
  .describe(
    "A source resource constrained by selection, state, purpose, style or scope.",
  );

const TargetSchema = z
  .union([IriSchema, SpecificResourceSchema, ExternalResourceSchema])
  .describe(
    "An external target, optionally constrained as a specific resource.",
  );

const BodyResourceSchema = z.union([
  IriSchema,
  SpecificResourceSchema,
  TextualBodySchema,
  ExternalResourceSchema,
]);

const ChoiceSchema = z
  .looseObject({
    id: IriSchema.optional().describe("The choice's identity."),
    type: z.literal("Choice").describe("The choice class."),
    items: z
      .array(BodyResourceSchema)
      .describe("Alternative bodies, ordered from most to least preferred."),
  })
  .describe("An ordered choice of bodies from which a client selects one.");

const BodySchema = z
  .union([ChoiceSchema, BodyResourceSchema])
  .describe(
    "An external, specific or embedded body, or an ordered choice of bodies.",
  );

const CssStylesheetSchema = z
  .looseObject({
    id: IriSchema.optional().describe("The stylesheet's identity."),
    type: z
      .literal("CssStylesheet")
      .optional()
      .describe("The stylesheet class."),
    value: z.string().optional().describe("Embedded CSS rendering hints."),
  })
  .describe("An embedded or externally identified CSS stylesheet.");

const AnnotationObjectSchema = z.looseObject({
  ...lifecycleShape,
  "@context": ContextSchema.optional(),
  id: IriSchema.describe("The annotation's identity."),
  type: requiredType("Annotation").describe("Classes including Annotation."),
  body: oneOrMany(BodySchema)
    .optional()
    .describe("Bodies related to every target."),
  bodyValue: z
    .string()
    .optional()
    .describe("A plain text body, mutually exclusive with body."),
  target: oneOrMore(TargetSchema).describe(
    "One or more targets of the annotation.",
  ),
  motivation: oneOrMany(MotivationSchema)
    .optional()
    .describe("Reasons for creating the annotation."),
  generator: oneOrMany(AgentReferenceSchema)
    .optional()
    .describe("Agents generating the serialization."),
  generated: DateTimeSchema.optional().describe(
    "When the serialization was generated.",
  ),
  audience: oneOrMany(
    z.union([
      IriSchema,
      z.looseObject({
        id: IriSchema.optional().describe("The audience's identity."),
        type: TypeSchema.optional().describe(
          "Audience classes, normally prefixed with schema:.",
        ),
      }),
    ]),
  )
    .optional()
    .describe("Intended audiences, described with schema.org properties."),
  stylesheet: z
    .union([IriSchema, CssStylesheetSchema])
    .optional()
    .describe("Rendering hints for the annotation's resources."),
});

const exclusiveBody = (annotation: { body?: unknown; bodyValue?: string }) =>
  annotation.body === undefined || annotation.bodyValue === undefined;

const EmbeddedAnnotationSchema = AnnotationObjectSchema.refine(
  exclusiveBody,
  "body and bodyValue are mutually exclusive.",
);

const AnnotationSchema = AnnotationObjectSchema.extend({
  "@context": ContextSchema,
})
  .refine(exclusiveBody, "body and bodyValue are mutually exclusive.")
  .describe("A standalone W3C Web Annotation in compact JSON-LD.");

const PageObjectSchema = z.looseObject({
  "@context": ContextSchema.optional(),
  id: IriSchema.describe("The page's identity."),
  type: requiredType("AnnotationPage").describe(
    "Classes including AnnotationPage.",
  ),
  partOf: z
    .union([
      IriSchema,
      z.looseObject({
        id: IriSchema.describe("The containing collection's identity."),
        type: requiredType("AnnotationCollection")
          .optional()
          .describe("The collection's classes."),
        label: oneOrMany(z.string())
          .optional()
          .describe("Human readable collection names."),
        total: z
          .int()
          .nonnegative()
          .optional()
          .describe("The number of annotations in the collection."),
      }),
    ])
    .optional()
    .describe("The collection containing this page."),
  items: z
    .array(z.union([IriSchema, EmbeddedAnnotationSchema]))
    .min(1)
    .describe("An ordered, nonempty list of annotations."),
  next: IriSchema.optional().describe("The next page's identity."),
  prev: IriSchema.optional().describe("The previous page's identity."),
  startIndex: z
    .int()
    .nonnegative()
    .optional()
    .describe("The zero-based collection index of the first item."),
});

const EmbeddedAnnotationPageSchema = PageObjectSchema.describe(
  "An annotation page inheriting its collection's JSON-LD context.",
);

const AnnotationPageSchema = PageObjectSchema.extend({
  "@context": ContextSchema,
}).describe("A standalone page of W3C annotations.");

const AnnotationCollectionSchema = z
  .looseObject({
    ...lifecycleShape,
    "@context": ContextSchema,
    id: IriSchema.describe("The collection's identity."),
    type: requiredType("AnnotationCollection").describe(
      "Classes including AnnotationCollection.",
    ),
    label: oneOrMany(z.string())
      .optional()
      .describe("Human readable collection names."),
    total: z
      .int()
      .nonnegative()
      .optional()
      .describe("The total number of annotations."),
    first: z
      .union([IriSchema, EmbeddedAnnotationPageSchema])
      .optional()
      .describe("The first page, embedded or referenced."),
    last: z
      .union([IriSchema, EmbeddedAnnotationPageSchema])
      .optional()
      .describe("The last page, embedded or referenced."),
  })
  .refine((collection) => !collection.total || collection.first !== undefined, {
    path: ["first"],
    message: "A nonempty collection must identify its first page.",
  })
  .describe("An ordered, potentially paginated collection of W3C annotations.");

type Annotation = z.infer<typeof AnnotationSchema>;
type AnnotationCollection = z.infer<typeof AnnotationCollectionSchema>;
type AnnotationPage = z.infer<typeof AnnotationPageSchema>;
type Agent = z.infer<typeof AgentSchema>;
type Body = z.infer<typeof BodySchema>;
type Target = z.infer<typeof TargetSchema>;
type SpecificResource = z.infer<typeof SpecificResourceSchema>;
type TextualBody = z.infer<typeof TextualBodySchema>;
type Choice = z.infer<typeof ChoiceSchema>;
type ExternalResource = z.infer<typeof ExternalResourceSchema>;
type Motivation = z.infer<typeof MotivationSchema>;
type FragmentSelector = z.infer<typeof FragmentSelectorSchema>;
type CssSelector = z.infer<typeof CssSelectorSchema>;
type XPathSelector = z.infer<typeof XPathSelectorSchema>;
type TextQuoteSelector = z.infer<typeof TextQuoteSelectorSchema>;
type TextPositionSelector = z.infer<typeof TextPositionSelectorSchema>;
type DataPositionSelector = z.infer<typeof DataPositionSelectorSchema>;
type SvgSelector = z.infer<typeof SvgSelectorSchema>;
type RangeSelector = z.infer<typeof RangeSelectorSchema>;
type TimeState = z.infer<typeof TimeStateSchema>;
type HttpRequestState = z.infer<typeof HttpRequestStateSchema>;
type CssStylesheet = z.infer<typeof CssStylesheetSchema>;
type EmbeddedAnnotationPage = z.infer<typeof EmbeddedAnnotationPageSchema>;

export type {
  Agent,
  Annotation,
  AnnotationCollection,
  AnnotationPage,
  Body,
  Choice,
  CssSelector,
  CssStylesheet,
  DataPositionSelector,
  EmbeddedAnnotationPage,
  ExternalResource,
  FragmentSelector,
  HttpRequestState,
  Motivation,
  RangeSelector,
  Selector,
  SelectorReference,
  SpecificResource,
  State,
  StateReference,
  SvgSelector,
  Target,
  TextPositionSelector,
  TextQuoteSelector,
  TextualBody,
  TimeState,
  XPathSelector,
};
export {
  AgentSchema,
  AnnotationCollectionSchema,
  AnnotationPageSchema,
  AnnotationSchema,
  BodySchema,
  ChoiceSchema,
  CssSelectorSchema,
  CssStylesheetSchema,
  DataPositionSelectorSchema,
  EmbeddedAnnotationPageSchema,
  ExternalResourceSchema,
  FragmentSelectorSchema,
  HttpRequestStateSchema,
  MotivationSchema,
  RangeSelectorSchema,
  SelectorSchema,
  SpecificResourceSchema,
  StateSchema,
  SvgSelectorSchema,
  TargetSchema,
  TextPositionSelectorSchema,
  TextQuoteSelectorSchema,
  TextualBodySchema,
  TimeStateSchema,
  XPathSelectorSchema,
};
