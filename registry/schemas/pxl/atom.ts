import z from "zod";

// #region MODULES

const AdminSchema = z.object({
  errorReportsTo: z.string().optional(),
  generatorAgent: z.string().optional(),
});

const AppSchema = z.object({
  edited: z.string().optional(),
  control: z
    .object({
      draft: z.boolean().optional(),
    })
    .optional(),
});

const ARXIVSchema = z.object({
  comment: z.string().optional(),
  journalRef: z.string().optional(),
  doi: z.string().optional(),
  primaryCategory: z.object({
    term: z.string().optional(),
    scheme: z.string().optional(),
    label: z.string().optional(),
  }),
});

const CreativeCommonsSchema = z.object({
  license: z.string().optional(),
  morePermissions: z.string().optional(),
  attributionName: z.string().optional(),
  attributionURL: z.string().optional(),
  useGuidelines: z.string().optional(),
  permits: z.string().optional(),
  requires: z.string().optional(),
  prohibits: z.string().optional(),
  jurisdiction: z.string().optional(),
  legalcode: z.string().optional(),
  deprecatedOn: z.string().optional(),
});

const DublinCoreSchema = z.object({
  titles: z.array(z.string()).optional(),
  creators: z.array(z.string()).optional(),
  subjects: z.array(z.string()).optional(),
  descriptions: z.array(z.string()).optional(),
  publishers: z.array(z.string()).optional(),
  contributors: z.array(z.string()).optional(),
  dates: z.array(z.string()).optional(),
  types: z.array(z.string()).optional(),
  formats: z.array(z.string()).optional(),
  identifiers: z.array(z.string()).optional(),
  sources: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  relations: z.array(z.string()).optional(),
  title: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `titles` (array) instead. Dublin Core fields are repeatable.",
  }),
  creator: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `creators` (array) instead. Dublin Core fields are repeatable.",
  }),
  subject: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `subjects` (array) instead. Dublin Core fields are repeatable.",
  }),
  description: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `descriptions` (array) instead. Dublin Core fields are repeatable.",
  }),
  publisher: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `publishers` (array) instead. Dublin Core fields are repeatable.",
  }),
  contributor: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `contributors` (array) instead. Dublin Core fields are repeatable.",
  }),
  date: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `dates` (array) instead. Dublin Core fields are repeatable.",
  }),
  type: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `types` (array) instead. Dublin Core fields are repeatable.",
  }),
  format: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `formats` (array) instead. Dublin Core fields are repeatable.",
  }),
  identifier: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `identifiers` (array) instead. Dublin Core fields are repeatable.",
  }),
  source: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `sources` (array) instead. Dublin Core fields are repeatable.",
  }),
  language: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `languages` (array) instead. Dublin Core fields are repeatable.",
  }),
  relation: z.string().optional().meta({
    deprecated: true,
    description:
      "Use `relations` (array) instead. Dublin Core fields are repeatable.",
  }),
  coverage: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core fields are repeatable.",
  }),
  rights: z.string().optional().meta({
    deprecated: true,
    description:
      "This field type will be changed to array in the next major version of the package. Dublin Core fields are repeatable.",
  }),
});

const DublinCoreTermsSchema = z.object({
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

const GeoSchema = z.object({
  lat: z.number().optional(),
  long: z.number().optional(),
  alt: z.number().optional(),
});

const GeoRssSchema = z.object({
  point: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .optional(),
  line: z
    .object({
      points: z.array(
        z.object({
          lat: z.number(),
          lng: z.number(),
        }),
      ),
    })
    .optional(),
  polygon: z
    .object({
      points: z
        .array(
          z.object({
            lat: z.number(),
            lng: z.number(),
          }),
        )
        .optional(),
    })
    .optional(),
  box: z.object({
    lowerCorner: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    upperCorner: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  featureTypeTag: z.string().optional(),
  relationshipTag: z.string().optional(),
  featureName: z.string().optional(),
  elev: z.number().optional(),
  floor: z.number().optional(),
  radius: z.number().optional(),
});

const GooglePlayItemSchema = z.object({
  author: z.string().optional(),
  description: z.string().optional(),
  explicit: z.union([z.boolean(), z.literal("clean")]).optional(),
  block: z.boolean().optional(),
  image: z
    .object({
      href: z.url(),
    })
    .optional(),
});

const GooglePlayFeedSchema = z.object({
  author: z.string().optional(),
  description: z.string().optional(),
  explicit: z.union([z.boolean(), z.literal("clean")]).optional(),
  block: z.boolean().optional(),
  image: z
    .object({
      href: z.url(),
    })
    .optional(),
  newFeedUrl: z.url().optional(),
  email: z.email().optional(),
  categories: z.array(z.string()).optional(),
});

const ItunesItemSchema = z.object({
  duration: z.number().optional(),
  image: z.string().optional(),
  explicit: z.boolean().optional(),
  author: z.string().optional(),
  title: z.string().optional(),
  episode: z.number().optional(),
  season: z.number().optional(),
  episodeType: z.string().optional(),
  block: z.boolean().optional(),
  summary: z.string().optional().meta({
    deprecated: true,
    description: "Use standard RSS description instead.",
  }),
  subtitle: z.string().optional().meta({
    deprecated: true,
    description: "No longer used by Apple Podcasts.",
  }),
  keywords: z.array(z.string()).optional().meta({
    deprecated: true,
    description: "No longer used by Apple Podcasts.",
  }),
});

const ItunesFeedSchema = z.object({
  image: z.string().optional(),
  categories: z
    .array(
      z.object({
        text: z.string(),
        categories: z
          .array(
            z.object({
              text: z.string(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
  explicit: z.boolean().optional(),
  author: z.string().optional(),
  title: z.string().optional(),
  type: z.string().optional(),
  newFeedUrl: z.string().optional(),
  block: z.boolean().optional(),
  complete: z.boolean().optional(),
  applePodcastsVerify: z.string().optional(),
  summary: z.string().optional().meta({
    deprecated: true,
    description: "Use standard RSS description instead.",
  }),
  subtitle: z.string().optional().meta({
    deprecated: true,
    description: "No longer used by Apple Podcasts.",
  }),
  keywords: z.array(z.string()).optional().meta({
    deprecated: true,
    description: "No longer used for search in Apple Podcasts.",
  }),
  owner: z
    .object({
      name: z.string().optional(),
      email: z.email().optional(),
    })
    .optional()
    .meta({
      deprecated: true,
      description: "No longer supported by Apple Podcasts.",
    }),
});

const PingbackItemSchema = z.object({
  server: z.string().optional(),
  target: z.string().optional(),
});

const PingbackFeedSchema = z.object({
  to: z.string().optional(),
});

const MediaCommonSchema = z.object({
  ratings: z
    .array(
      z.object({
        value: z.string(),
        scheme: z.string().optional(),
      }),
    )
    .optional(),
  title: z
    .object({
      value: z.string(),
      type: z.string().optional(),
    })
    .optional(),
  description: z
    .object({
      value: z.string(),
      type: z.string().optional(),
    })
    .optional(),
  keywords: z.array(z.string()).optional(),
  thumbnails: z
    .array(
      z.object({
        url: z.url(),
        height: z.number().optional(),
        width: z.number().optional(),
        time: z.string().optional(),
      }),
    )
    .optional(),
  categories: z
    .array(
      z.object({
        name: z.string(),
        scheme: z.string().optional(),
        label: z.string().optional(),
      }),
    )
    .optional(),
  hashes: z
    .array(
      z.object({
        value: z.string(),
        algo: z.string().optional(),
      }),
    )
    .optional(),
  player: z
    .object({
      url: z.url(),
      height: z.number().optional(),
      width: z.number().optional(),
    })
    .optional(),
  credits: z
    .array(
      z.object({
        value: z.string(),
        role: z.string().optional(),
        scheme: z.string().optional(),
      }),
    )
    .optional(),
  copyright: z
    .object({
      value: z.string(),
      url: z.url().optional(),
    })
    .optional(),
  texts: z
    .array(
      z.object({
        value: z.string(),
        type: z.string().optional(),
        lang: z.string().optional(),
        start: z.string().optional(),
        end: z.string().optional(),
      }),
    )
    .optional(),
  restrictions: z
    .array(
      z.object({
        value: z.string(),
        relationship: z.string(),
        type: z.string().optional(),
      }),
    )
    .optional(),
  community: z
    .object({
      starRating: z
        .object({
          average: z.number().optional(),
          count: z.number().optional(),
          min: z.number().optional(),
          max: z.number().optional(),
        })
        .optional(),
      statistics: z
        .object({
          views: z.number().optional(),
          favorites: z.number().optional(),
        })
        .optional(),
      tags: z
        .array(
          z.object({
            name: z.string(),
            weight: z.number().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  comments: z.array(z.string()).optional(),
  embed: z
    .object({
      url: z.url(),
      width: z.number().optional(),
      height: z.number().optional(),
      params: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          }),
        )
        .optional(),
    })
    .optional(),
  responses: z.array(z.string()).optional(),
  backLinks: z.array(z.string()).optional(),
  status: z
    .object({
      state: z.string(),
      reason: z.string().optional(),
    })
    .optional(),
  prices: z
    .array(
      z.object({
        type: z.string().optional(),
        info: z.string().optional(),
        price: z.number().optional(),
        currency: z.string().optional(),
      }),
    )
    .optional(),
  licenses: z
    .array(
      z.union([
        z.object({
          name: z.string(),
          type: z.string().optional(),
          href: z.url().optional(),
        }),
        z.object({
          name: z.string().optional(),
          type: z.string().optional(),
          href: z.url(),
        }),
      ]),
    )
    .optional(),
  subTitles: z
    .array(
      z.object({
        type: z.string().optional(),
        lang: z.string().optional(),
        href: z.url(),
      }),
    )
    .optional(),
  peerLinks: z
    .array(
      z.object({
        type: z.string().optional(),
        href: z.url(),
      }),
    )
    .optional(),
  locations: z
    .array(
      z.object({
        description: z.string().optional(),
        start: z.string().optional(),
        end: z.string().optional(),
        lat: z.number().optional(),
        lng: z.number().optional(),
      }),
    )
    .optional(),
  rights: z
    .object({
      status: z.string().optional(),
    })
    .optional(),
  scenes: z
    .array(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        startTime: z.string().optional(),
        endTime: z.string().optional(),
      }),
    )
    .optional(),
});

const MediaContentSchema = MediaCommonSchema.extend({
  url: z.url().optional(),
  fileSize: z.number().optional(),
  type: z.string().optional(),
  medium: z.string().optional(),
  isDefault: z.boolean().optional(),
  expression: z.string().optional(),
  bitrate: z.number().optional(),
  framerate: z.number().optional(),
  samplingrate: z.number().optional(),
  channels: z.number().optional(),
  duration: z.number().optional(),
  height: z.number().optional(),
  width: z.number().optional(),
  lang: z.string().optional(),
});

const MediaGroupSchema = MediaCommonSchema.extend({
  contents: z.array(MediaContentSchema).optional(),
});

const MediaSchema = MediaCommonSchema.extend({
  groups: z.array(MediaGroupSchema).optional(),
  contents: z.array(MediaContentSchema).optional(),
  group: MediaGroupSchema.optional().meta({
    deprecated: true,
    description: "Use `groups` instead.",
  }),
});

const OpenSearchSchema = z.object({
  totalResults: z.number().optional(),
  startIndex: z.number().optional(),
  itemsPerPage: z.number().optional(),
  queries: z
    .array(
      z.object({
        role: z.string(),
        searchTerms: z.string().optional(),
        count: z.number().optional(),
        startIndex: z.number().optional(),
        startPage: z.number().optional(),
        language: z.string().optional(),
        inputEncoding: z.string().optional(),
        outputEncoding: z.string().optional(),
      }),
    )
    .optional(),
});

const PscSchema = z.object({
  chapters: z.array(
    z.object({
      start: z.string(),
      title: z.string(),
      href: z.url().optional(),
      image: z.string().optional(),
    }),
  ),
});

const SlashSchema = z.object({
  section: z.string().optional(),
  department: z.string().optional(),
  comments: z.number().optional(),
  hitParade: z.array(z.number()).optional(),
});

const SySchema = z.object({
  updatePeriod: z.string().optional(),
  updateFrequency: z.number().optional(),
  updateBase: z.string().optional(),
});

const ThrSchema = z.object({
  total: z.number().optional(),
  InReplyTos: z
    .array(
      z.object({
        ref: z.string(),
        href: z.url().optional(),
        type: z.string().optional(),
        source: z.string().optional(),
      }),
    )
    .optional(),
});

const TrackbackSchema = z.object({
  ping: z.string().optional(),
  abouts: z.array(z.string()).optional(),
});

const WfwSchema = z.object({
  comment: z.string().optional(),
  commentRss: z.string().optional(),
});

const YoutubeItemSchema = z.object({
  videoId: z.string().optional(),
  channelId: z.string().optional(),
});

const YoutubeFeedSchema = z.object({
  channelId: z.string().optional(),
  playlistId: z.string().optional(),
});

// #endregion

// #region INTERNAL

/** Note that this Schema is different from RSS's Source */
const SourceSchema = z.object({
  authors: z
    .array(
      z.object({
        name: z.string(),
        uri: z.url().optional(),
        email: z.email().optional(),
        arxiv: z
          .object({
            affiliation: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  categories: z
    .array(
      z.object({
        term: z.string(),
        scheme: z.string().optional(),
        label: z.string().optional(),
      }),
    )
    .optional(),
  contributors: z
    .array(
      z.object({
        name: z.string(),
        uri: z.url().optional(),
        email: z.email().optional(),
        arxiv: z
          .object({
            affiliation: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  generator: z
    .object({
      text: z.string(),
      uri: z.string().optional(),
      version: z.string(),
    })
    .optional(),
  icon: z.string(),
  id: z.string(),
  links: z
    .array(
      z.object({
        href: z.string(),
        rel: z.enum(["self", "alternate"]).optional(),
        type: z.string().optional(),
        hreflang: z.string().optional(),
        title: z.string().optional(),
        length: z.number().optional(),
        thr: z
          .object({
            count: z.number().optional(),
            updated: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  logo: z.string().optional(),
  rights: z.string().optional(),
  subtitle: z.string().optional(),
  title: z.string().optional(),
  updated: z.string().optional(),
});

// #endregion

// #region PUBLIC

const EntrySchema = z.object({
  authors: z
    .array(
      z.object({
        name: z.string(),
        uri: z.url().optional(),
        email: z.email().optional(),
        arxiv: z
          .object({
            affiliation: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  categories: z
    .array(
      z.object({
        term: z.string(),
        scheme: z.string().optional(),
        label: z.string().optional(),
      }),
    )
    .optional(),
  content: z.string().optional(),
  contributors: z
    .array(
      z.object({
        name: z.string(),
        uri: z.url().optional(),
        email: z.email().optional(),
        arxiv: z
          .object({
            affiliation: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  id: z.string(),
  links: z
    .array(
      z.object({
        href: z.string(),
        rel: z.enum(["self", "alternate"]).optional(),
        type: z.string().optional(),
        hreflang: z.string().optional(),
        title: z.string().optional(),
        length: z.number().optional(),
        thr: z
          .object({
            count: z.number().optional(),
            updated: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  published: z.string().optional(),
  rights: z.string().optional(),
  source: SourceSchema.optional(),
  summary: z.string().optional(),
  title: z.string(),
  updated: z.string(),
  app: AppSchema.optional(),
  arxiv: ARXIVSchema.optional(),
  cc: CreativeCommonsSchema.optional(),
  dc: DublinCoreSchema.optional(),
  slash: SlashSchema.optional(),
  itunes: ItunesItemSchema.optional(),
  googleplay: GooglePlayItemSchema.optional(),
  psc: PscSchema.optional(),
  media: MediaSchema.optional(),
  georss: GeoRssSchema.optional(),
  geo: GeoSchema.optional(),
  thr: ThrSchema.optional(),
  dcterms: DublinCoreTermsSchema.optional(),
  creativeCommons: z
    .object({
      licenses: z.array(z.string()).optional(),
    })
    .optional(),
  wfw: WfwSchema.optional(),
  yt: YoutubeItemSchema.optional(),
  pingback: PingbackItemSchema.optional(),
  trackback: TrackbackSchema.optional(),
}).describe("An Atom entry.");

const FeedSchema = z.object({
  authors: z
    .array(
      z.object({
        name: z.string(),
        uri: z.url().optional(),
        email: z.email().optional(),
        arxiv: z
          .object({
            affiliation: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  categories: z
    .array(
      z.object({
        term: z.string(),
        scheme: z.string().optional(),
        label: z.string().optional(),
      }),
    )
    .optional(),
  contributors: z
    .array(
      z.object({
        name: z.string(),
        uri: z.url().optional(),
        email: z.email().optional(),
        arxiv: z
          .object({
            affiliation: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  generator: z
    .object({
      text: z.string(),
      uri: z.string().optional(),
      version: z.string(),
    })
    .optional(),
  icon: z.string().optional(),
  id: z.string(),
  links: z
    .array(
      z.object({
        href: z.string(),
        rel: z.enum(["self", "alternate"]).optional(),
        type: z.string().optional(),
        hreflang: z.string().optional(),
        title: z.string().optional(),
        length: z.number().optional(),
        thr: z
          .object({
            count: z.number().optional(),
            updated: z.string().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  logo: z.string().optional(),
  rights: z.string().optional(),
  subtitle: z.string().optional(),
  title: z.string(),
  updated: z.string().optional(),
  entries: z.array(EntrySchema).optional(),
  cc: CreativeCommonsSchema.optional(),
  dc: DublinCoreSchema.optional(),
  sy: SySchema.optional(),
  itunes: ItunesFeedSchema.optional(),
  googleplay: GooglePlayFeedSchema.optional(),
  media: MediaSchema.optional(),
  georss: GeoRssSchema.optional(),
  geo: GeoSchema.optional(),
  dcterms: DublinCoreTermsSchema.optional(),
  creativeCommons: z
    .object({
      licenses: z.array(z.string()).optional(),
    })
    .optional(),
  opensearch: OpenSearchSchema.optional(),
  yt: YoutubeFeedSchema.optional(),
  admin: AdminSchema.optional(),
  pingback: PingbackFeedSchema.optional(),
}).describe("An Atom feed.");

// #endregion

const AtomSchemas = {
  Entry: EntrySchema,
  Feed: FeedSchema,
};

type Entry = z.infer<typeof EntrySchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace Atom {
  export type { Entry, Feed };
}

export type { Atom, Entry, Feed };
export { AtomSchemas, EntrySchema, FeedSchema };
export default AtomSchemas;