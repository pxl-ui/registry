import z from "zod";

const ItemOrFeedSchema = z.object({
  abstracts: z.array(z.string()).optional(),
  accrualMethods: z.array(z.string()).optional(),
  accrualPeriodicities: z.array(z.string()).optional(),
  accrualPolicies: z.array(z.string()).optional(),
  alternatives: z.array(z.string()).optional(),
  audiences: z.array(z.string()).optional(),
  bibliographicCitations: z.array(z.string()).optional(),
  contributors: z.array(z.string()).optional(),
  coverages: z.array(z.string()).optional(),
  creators: z.array(z.string()).optional(),
  dates: z.array(z.string()).optional(),
  descriptions: z.array(z.string()).optional(),
  educationLevels: z.array(z.string()).optional(),
  extents: z.array(z.string()).optional(),
  formats: z.array(z.string()).optional(),
  hasFormats: z.array(z.string()).optional(),
  hasParts: z.array(z.string()).optional(),
  hasVersions: z.array(z.string()).optional(),
  identifiers: z.array(z.string()).optional(),
  instructionalMethods: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  licenses: z.array(z.string()).optional(),
  mediators: z.array(z.string()).optional(),
  mediums: z.array(z.string()).optional(),
  provenances: z.array(z.string()).optional(),
  publishers: z.array(z.string()).optional(),
  relations: z.array(z.string()).optional(),
  rightsHolders: z.array(z.string()).optional(),
  sources: z.array(z.string()).optional(),
  spatials: z.array(z.string()).optional(),
  subjects: z.array(z.string()).optional(),
  temporals: z.array(z.string()).optional(),
  titles: z.array(z.string()).optional(),
  types: z.array(z.string()).optional(),
  abstract: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `abstracts` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  accessRights: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  accrualMethod: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `accrualMethod` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  accrualPeriodicity: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `accrualPeriodicities` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  accrualPolicy: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `accrualPolicies` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  alternative: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `alternatives` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  audience: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  available: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `abstracts` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  bibliographicCitation: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `bibliographicCitations` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  conformsTo: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  contributor: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `contributors` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  coverage: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `coverages` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  created: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  creator: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `creators` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  date: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `dates` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  dateAccepted: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  dateCopyrighted: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  dateSubmitted: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  description: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `descriptions` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  educationLevel: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `educationLevels` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  extent: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `extents` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  format: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `formats` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  hasFormat: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `hasFormats` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  hasPart: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `hasParts` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  hasVersion: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `hasVersions` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  identifier: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `identifiers` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  instructionalMethod: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `instructionalMethods` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  isFormatOf: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  isPartOf: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  isReferencedBy: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  isReplacedBy: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  isRequiredBy: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  issued: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  isVersionOf: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  language: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `languages` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  license: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `licenses` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  mediator: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `mediators` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  medium: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `mediums` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  modified: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  provenance: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `provenances` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  publisher: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `publishers` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  references: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  relation: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `relations` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  replaces: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  requires: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  rights: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  rightsHolder: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `rightsHolders` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  source: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `sources` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  spatial: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `spatials` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  subject: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `subjects` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  tableOfContents: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
  temporal: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `temporals` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  title: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `titles` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  type: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `types` (array) instead. Dublin Core Terms fields are repeatable.",
  }),
  valid: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core Terms fields are repeatable.",
  }),
});

const DcTermsSchemas = {
  ItemOrFeed: ItemOrFeedSchema,
};

type ItemOrFeed = z.infer<typeof ItemOrFeedSchema>;

declare namespace DcTerms {
  export type { ItemOrFeed }
}

export type { DcTerms, ItemOrFeed };
export { DcTermsSchemas, ItemOrFeedSchema };
