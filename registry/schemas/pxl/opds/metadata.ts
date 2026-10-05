import { z } from "zod";

import { type Link, LinkSchema } from "@/schemas/pxl/opds/link";
import { LanguageMapSchema, LanguageTagSchema } from "@/schemas/pxl/opds/shared";

type LanguageMap = z.infer<typeof LanguageMapSchema>;
const AlternateIdentifiersSchema = z
  .array(
    z.union([
      z.url(),
      z.looseObject({
        value: z.string(),
        scheme: z.url().optional(),
      }),
    ]),
  )
  .min(1)
  .describe("Alternate publication identifiers.");
type AlternateIdentifiers = z.infer<typeof AlternateIdentifiersSchema>;

type ContributorObject = {
  name: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  role?: string | string[];
  links?: Link[];
  [key: string]: unknown;
};
type Contributor = string | (string | ContributorObject)[] | ContributorObject;
const ContributorObjectSchema: z.ZodType<ContributorObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema,
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      role: z.union([z.string(), z.array(z.string())]).optional(),
      links: z.array(LinkSchema).optional(),
    }),
  )
  .describe("Contributor metadata object.");
const ContributorSchema: z.ZodType<Contributor> = z
  .lazy(() =>
    z.union([
      z.string(),
      z.array(z.union([z.string(), ContributorObjectSchema])),
      ContributorObjectSchema,
    ]),
  )
  .describe("Contributor.");

type SubjectObject = {
  name: LanguageMap;
  sortAs?: LanguageMap;
  code?: string;
  scheme?: string;
  links?: Link[];
  [key: string]: unknown;
};
type Subject = string | (string | SubjectObject)[] | SubjectObject;
const SubjectObjectSchema: z.ZodType<SubjectObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema,
      sortAs: LanguageMapSchema.optional(),
      code: z.string().optional(),
      scheme: z.url().optional(),
      links: z.array(LinkSchema).optional(),
    }),
  )
  .describe("Subject metadata object.");
const SubjectSchema: z.ZodType<Subject> = z
  .lazy(() =>
    z.union([
      z.string(),
      z.array(z.union([z.string(), SubjectObjectSchema])),
      SubjectObjectSchema,
    ]),
  )
  .describe("Subject.");

type CollectionObject = {
  name: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position?: number;
  links?: Link[];
  [key: string]: unknown;
};
type Collection = string | (string | CollectionObject)[] | CollectionObject;
const CollectionObjectSchema: z.ZodType<CollectionObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema,
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number().optional(),
      links: z.array(LinkSchema).optional(),
    }),
  )
  .describe("Collection metadata object.");
const CollectionSchema: z.ZodType<Collection> = z
  .lazy(() =>
    z.union([
      z.string(),
      z.array(z.union([z.string(), CollectionObjectSchema])),
      CollectionObjectSchema,
    ]),
  )
  .describe("Collection.");

type PeriodicalObject = {
  name: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position?: number;
  links?: Link[];
  issue?: Issue;
  volume?: Volume;
  [key: string]: unknown;
};
type Periodical = string | (string | PeriodicalObject)[] | PeriodicalObject;
const PeriodicalObjectSchema: z.ZodType<PeriodicalObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema,
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number().optional(),
      links: z.array(LinkSchema).optional(),
      issue: IssueSchema.optional(),
      volume: VolumeSchema.optional(),
    }),
  )
  .describe("Periodical metadata object.");
const PeriodicalSchema: z.ZodType<Periodical> = z
  .lazy(() =>
    z.union([
      z.string(),
      z.array(z.union([z.string(), PeriodicalObjectSchema])),
      PeriodicalObjectSchema,
    ]),
  )
  .describe("Periodical.");

type ArticleObject = {
  name: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  author?: Contributor;
  translator?: Contributor;
  editor?: Contributor;
  artist?: Contributor;
  illustrator?: Contributor;
  contributor?: Contributor;
  description?: string;
  numberOfPages?: number;
  position?: number;
  links?: Link[];
  [key: string]: unknown;
};
type Article = string | (string | ArticleObject)[] | ArticleObject;
const ArticleObjectSchema: z.ZodType<ArticleObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema,
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      author: ContributorSchema.optional(),
      translator: ContributorSchema.optional(),
      editor: ContributorSchema.optional(),
      artist: ContributorSchema.optional(),
      illustrator: ContributorSchema.optional(),
      contributor: ContributorSchema.optional(),
      description: z.string().optional(),
      numberOfPages: z.number().int().gt(0).optional(),
      position: z.number().optional(),
      links: z.array(LinkSchema).optional(),
    }),
  )
  .describe("Article metadata object.");
const ArticleSchema: z.ZodType<Article> = z
  .lazy(() =>
    z.union([
      z.string(),
      z.array(z.union([z.string(), ArticleObjectSchema])),
      ArticleObjectSchema,
    ]),
  )
  .describe("Article.");

type ChapterObject = {
  name?: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position: number;
  series?: Series;
  links?: Link[];
  [key: string]: unknown;
};
type Chapter = number | (number | ChapterObject)[] | ChapterObject;
const ChapterObjectSchema: z.ZodType<ChapterObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema.optional(),
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number(),
      series: SeriesSchema.optional(),
      links: z.array(LinkSchema).optional(),
    }),
  )
  .describe("Chapter metadata object.");
const ChapterSchema: z.ZodType<Chapter> = z
  .lazy(() =>
    z.union([
      z.number(),
      z.array(z.union([z.number(), ChapterObjectSchema])),
      ChapterObjectSchema,
    ]),
  )
  .describe("Chapter.");

type EpisodeObject = {
  name?: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position: number;
  links?: Link[];
  [key: string]: unknown;
};
type Episode = number | (number | EpisodeObject)[] | EpisodeObject;
const EpisodeObjectSchema: z.ZodType<EpisodeObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema.optional(),
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number(),
      links: z.array(LinkSchema).optional(),
    }),
  )
  .describe("Episode metadata object.");
const EpisodeSchema: z.ZodType<Episode> = z
  .lazy(() =>
    z.union([
      z.number(),
      z.array(z.union([z.number(), EpisodeObjectSchema])),
      EpisodeObjectSchema,
    ]),
  )
  .describe("Episode.");

type IssueObject = {
  name?: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position: number;
  links?: Link[];
  article?: Article;
  chapter?: Chapter;
  [key: string]: unknown;
};
type Issue = number | (number | IssueObject)[] | IssueObject;
const IssueObjectSchema: z.ZodType<IssueObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema.optional(),
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number(),
      links: z.array(LinkSchema).optional(),
      article: ArticleSchema.optional(),
      chapter: ChapterSchema.optional(),
    }),
  )
  .describe("Issue metadata object.");
const IssueSchema: z.ZodType<Issue> = z
  .lazy(() =>
    z.union([
      z.number(),
      z.array(z.union([z.number(), IssueObjectSchema])),
      IssueObjectSchema,
    ]),
  )
  .describe("Issue.");

type SeasonObject = {
  name?: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position: number;
  links?: Link[];
  episode?: Episode;
  [key: string]: unknown;
};
type Season = number | (number | SeasonObject)[] | SeasonObject;
const SeasonObjectSchema: z.ZodType<SeasonObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema.optional(),
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number(),
      links: z.array(LinkSchema).optional(),
      episode: EpisodeSchema.optional(),
    }),
  )
  .describe("Season metadata object.");
const SeasonSchema: z.ZodType<Season> = z
  .lazy(() =>
    z.union([
      z.number(),
      z.array(z.union([z.number(), SeasonObjectSchema])),
      SeasonObjectSchema,
    ]),
  )
  .describe("Season.");

type SeriesObject = {
  name: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position?: number | string;
  links?: Link[];
  chapter?: Chapter;
  episode?: Episode;
  issue?: Issue;
  season?: Season;
  storyArc?: StoryArc;
  volume?: Volume;
  [key: string]: unknown;
};
type Series = string | (string | SeriesObject)[] | SeriesObject;
const SeriesObjectSchema: z.ZodType<SeriesObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema,
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.union([z.string(), z.number()]).optional(),
      links: z.array(LinkSchema).optional(),
      chapter: ChapterSchema.optional(),
      episode: EpisodeSchema.optional(),
      issue: IssueSchema.optional(),
      season: SeasonSchema.optional(),
      storyArc: StoryArcSchema.optional(),
      volume: VolumeSchema.optional(),
    }),
  )
  .describe("Series metadata object.");
const SeriesSchema: z.ZodType<Series> = z
  .lazy(() =>
    z.union([
      z.string(),
      z.array(z.union([z.string(), SeriesObjectSchema])),
      SeriesObjectSchema,
    ]),
  )
  .describe("Series.");

type StoryArcObject = {
  name: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position?: number;
  links?: Link[];
  chapter?: Chapter;
  episode?: Episode;
  issue?: Issue;
  [key: string]: unknown;
};
type StoryArc = number | (number | StoryArcObject)[] | StoryArcObject;
const StoryArcObjectSchema: z.ZodType<StoryArcObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema,
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number().optional(),
      links: z.array(LinkSchema).optional(),
      chapter: ChapterSchema.optional(),
      episode: EpisodeSchema.optional(),
      issue: IssueSchema.optional(),
    }),
  )
  .describe("Story Arc metadata object.");
const StoryArcSchema: z.ZodType<StoryArc> = z
  .lazy(() =>
    z.union([
      z.number(),
      z.array(z.union([z.number(), StoryArcObjectSchema])),
      StoryArcObjectSchema,
    ]),
  )
  .describe("Story Arc.");

type VolumeObject = {
  name?: LanguageMap;
  identifier?: string;
  altIdentifier?: AlternateIdentifiers;
  sortAs?: LanguageMap;
  position: number;
  links?: Link[];
  chapter?: Chapter;
  issue?: Issue;
  storyArc?: StoryArc;
  [key: string]: unknown;
};
type Volume = number | (number | VolumeObject)[] | VolumeObject;
const VolumeObjectSchema: z.ZodType<VolumeObject> = z
  .lazy(() =>
    z.looseObject({
      name: LanguageMapSchema.optional(),
      identifier: z.url().optional(),
      altIdentifier: AlternateIdentifiersSchema.optional(),
      sortAs: LanguageMapSchema.optional(),
      position: z.number(),
      links: z.array(LinkSchema).optional(),
      chapter: ChapterSchema.optional(),
      issue: IssueSchema.optional(),
      storyArc: StoryArcSchema.optional(),
    }),
  )
  .describe("Volume metadata object.");
const VolumeSchema: z.ZodType<Volume> = z
  .lazy(() =>
    z.union([
      z.number(),
      z.array(z.union([z.number(), VolumeObjectSchema])),
      VolumeObjectSchema,
    ]),
  )
  .describe("Volume.");

const AccessibilitySchema = z
  .looseObject({
    conformsTo: z.union([z.url(), z.array(z.url())]).optional(),
    exemption: z
      .enum([
        "eaa-disproportionate-burden",
        "eaa-fundamental-alteration",
        "eaa-microenterprise",
      ])
      .optional(),
    accessMode: z
      .array(
        z.enum([
          "auditory",
          "chartOnVisual",
          "chemOnVisual",
          "colorDependent",
          "diagramOnVisual",
          "mathOnVisual",
          "musicOnVisual",
          "tactile",
          "textOnVisual",
          "textual",
          "visual",
        ]),
      )
      .optional(),
    accessModeSufficient: z
      .array(
        z.union([
          z.enum(["auditory", "tactile", "textual", "visual"]),
          z.array(z.enum(["auditory", "tactile", "textual", "visual"])),
        ]),
      )
      .optional(),
    feature: z
      .array(
        z.enum([
          "annotations",
          "ARIA",
          "bookmarks",
          "index",
          "pageBreakMarkers",
          "printPageNumbers",
          "pageNavigation",
          "readingOrder",
          "structuralNavigation",
          "tableOfContents",
          "taggedPDF",
          "alternativeText",
          "audioDescription",
          "closedCaptions",
          "captions",
          "describedMath",
          "longDescription",
          "openCaptions",
          "signLanguage",
          "transcript",
          "displayTransformability",
          "synchronizedAudioText",
          "timingControl",
          "unlocked",
          "ChemML",
          "latex",
          "latex-chemistry",
          "MathML",
          "MathML-chemistry",
          "ttsMarkup",
          "highContrastAudio",
          "highContrastDisplay",
          "largePrint",
          "braille",
          "tactileGraphic",
          "tactileObject",
          "fullRubyAnnotations",
          "horizontalWriting",
          "rubyAnnotations",
          "verticalWriting",
          "withAdditionalWordSegmentation",
          "withoutAdditionalWordSegmentation",
          "none",
          "unknown",
        ]),
      )
      .optional(),
    hazard: z
      .array(
        z.enum([
          "flashing",
          "motionSimulation",
          "sound",
          "none",
          "noFlashingHazard",
          "noMotionSimulationHazard",
          "noSoundHazard",
          "unknown",
          "unknownFlashingHazard",
          "unknownMotionSimulationHazard",
          "unknownSoundHazard",
        ]),
      )
      .optional(),
    certification: z
      .looseObject({
        certifiedBy: z.string().optional(),
        credential: z.string().optional(),
        report: z.string().optional(),
      })
      .optional(),
    summary: z.string().optional(),
  })
  .describe("Publication accessibility metadata.");

const MetadataSchema = z
  .looseObject({
    "@type": z.url().optional(),
    conformsTo: z.union([z.url(), z.array(z.url())]).optional(),
    title: LanguageMapSchema,
    sortAs: LanguageMapSchema.optional(),
    subtitle: LanguageMapSchema.optional(),
    identifier: z.url().optional(),
    altIdentifier: AlternateIdentifiersSchema.optional(),
    accessibility: AccessibilitySchema.optional(),
    modified: z.iso.datetime({ offset: true }).optional(),
    published: z
      .union([z.iso.date(), z.iso.datetime({ offset: true })])
      .optional(),
    language: z
      .union([
        LanguageTagSchema.describe("The language must be a valid BCP 47 tag."),
        z
          .array(LanguageTagSchema)
          .describe("The language must be a valid BCP 47 tag."),
      ])
      .describe("The language must be a valid BCP 47 tag.")
      .optional(),
    author: ContributorSchema.optional(),
    translator: ContributorSchema.optional(),
    editor: ContributorSchema.optional(),
    artist: ContributorSchema.optional(),
    illustrator: ContributorSchema.optional(),
    letterer: ContributorSchema.optional(),
    penciler: ContributorSchema.optional(),
    colorist: ContributorSchema.optional(),
    inker: ContributorSchema.optional(),
    narrator: ContributorSchema.optional(),
    contributor: ContributorSchema.optional(),
    publisher: ContributorSchema.optional(),
    imprint: ContributorSchema.optional(),
    subject: SubjectSchema.optional(),
    layout: z
      .enum(["fixed", "reflowable", "scrolled"])
      .describe("Hints how the layout of the publication should be presented")
      .optional(),
    readingProgression: z.enum(["rtl", "ltr"]).optional(),
    description: z.string().optional(),
    duration: z.number().gt(0).optional(),
    numberOfPages: z.number().int().gt(0).optional(),
    belongsTo: z
      .looseObject({
        collection: CollectionSchema.optional(),
        journal: PeriodicalSchema.optional(),
        magazine: PeriodicalSchema.optional(),
        newspaper: PeriodicalSchema.optional(),
        periodical: PeriodicalSchema.optional(),
        season: SeasonSchema.optional(),
        series: SeriesSchema.optional(),
        storyArc: StoryArcSchema.optional(),
        volume: VolumeSchema.optional(),
      })
      .optional(),
    contains: z
      .looseObject({
        article: ArticleSchema.optional(),
        chapter: ChapterSchema.optional(),
        episode: EpisodeSchema.optional(),
        issue: IssueSchema.optional(),
        season: SeasonSchema.optional(),
        series: SeriesSchema.optional(),
        storyArc: StoryArcSchema.optional(),
        volume: VolumeSchema.optional(),
      })
      .optional(),
    tdm: z
      .looseObject({
        reservation: z.enum(["all", "none"]),
        policy: z.url().optional(),
      })
      .optional(),
    mediaOverlay: z
      .looseObject({
        activeClass: z
          .string()
          .describe(
            "Author-defined CSS class name to apply to the currently-playing EPUB Content Document element.",
          )
          .optional(),
        playbackActiveClass: z
          .string()
          .describe(
            "Author-defined CSS class name to apply to the EPUB Content Document's document element when playback is active.",
          )
          .optional(),
      })
      .optional(),
  })
  .describe("Readium publication metadata with OPDS contributor links.");

type Metadata = z.infer<typeof MetadataSchema>;

export type { Metadata };
export { MetadataSchema };
