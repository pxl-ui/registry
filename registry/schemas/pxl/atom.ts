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
  coverage: z.array(z.string()).optional(),
  rights: z.array(z.string()).optional(),
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
  accessRights: z.array(z.string()).optional(),
  available: z.array(z.string()).optional(),
  conformsTo: z.array(z.string()).optional(),
  created: z.array(z.string()).optional(),
  dateAccepted: z.array(z.string()).optional(),
  dateCopyrighted: z.array(z.string()).optional(),
  dateSubmitted: z.array(z.string()).optional(),
  isFormatOf: z.array(z.string()).optional(),
  isPartOf: z.array(z.string()).optional(),
  isReferencedBy: z.array(z.string()).optional(),
  isReplacedBy: z.array(z.string()).optional(),
  isRequiredBy: z.array(z.string()).optional(),
  issued: z.array(z.string()).optional(),
  isVersionOf: z.array(z.string()).optional(),
  modified: z.array(z.string()).optional(),
  references: z.array(z.string()).optional(),
  replaces: z.array(z.string()).optional(),
  requires: z.array(z.string()).optional(),
  rights: z.array(z.string()).optional(),
  tableOfContents: z.array(z.string()).optional(),
  valid: z.array(z.string()).optional(),
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
        rel: z.string().optional(),
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

const XMLItem = z.object({
  lang: z.string().optional(),
  base: z.string().optional(),
  space: z.string().optional(),
  id: z.string().optional(),
})

const TextSchema = z.object({
  value: z.string(),
  type: z.string().optional(),
  xml: XMLItem.optional(),
});

const ContentSchema = z.object({
  value: z.string(),
  type: z.string().optional(),
  src: z.string().optional(),
  xml: XMLItem.optional(),
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
  content: ContentSchema.optional(),
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
        rel: z.string().optional(),
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
  rights: TextSchema.optional(),
  source: SourceSchema.optional(),
  summary: TextSchema.optional(),
  title: TextSchema,
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
        rel: z.string().optional(),
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
  rights: TextSchema.optional(),
  subtitle: TextSchema.optional(),
  title: TextSchema,
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