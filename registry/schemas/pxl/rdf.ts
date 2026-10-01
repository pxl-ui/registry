import z from "zod";

import { AtomSchemas } from "./atom";

// #region MODULES

const AdminSchema = z.object({
  errorReportsTo: z.string().optional(),
  generatorAgent: z.string().optional(),
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

const WfwSchema = z.object({
  comment: z.string().optional(),
  commentRss: z.string().optional(),
});

// #endregion

const ItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  description: z.string().optional(),
  rdf: z.object({
    about: z.string().optional(),
  }),
  atom: AtomSchemas.Entry.optional(),
  dc: DublinCoreSchema.optional(),
  content: z
    .object({
      encoded: z.string().optional(),
    })
    .optional(),
  slash: SlashSchema.optional(),
  media: MediaSchema.optional(),
  georss: GeoRssSchema.optional(),
  dcterms: DublinCoreTermsSchema.optional(),
  wfw: WfwSchema.optional(),
}).describe("An Rdf item.");

const FeedSchema = z.object({
  title: z.string(),
  link: z.string(),
  description: z.string(),
  image: z.object({
    title: z.string(),
    link: z.string(),
    url: z.url().optional(),
    rdf: z.object({
      about: z.string().optional(),
    }),
  }),
  items: z.array(ItemSchema).optional(),
  textInput: z
    .object({
      title: z.string(),
      description: z.string(),
      name: z.string(),
      link: z.string(),
      rdf: z.object({
        about: z.string().optional(),
      }),
    })
    .optional(),
  rdf: z.object({
    about: z.string().optional(),
  }),
  atom: AtomSchemas.Feed.optional(),
  dc: DublinCoreSchema.optional(),
  sy: SySchema.optional(),
  media: MediaSchema.optional(),
  georss: GeoRssSchema.optional(),
  dcterms: DublinCoreTermsSchema.optional(),
  admin: AdminSchema.optional(),
}).describe("An Rdf feed.");

const RdfSchemas = {
  Item: ItemSchema,
  Feed: FeedSchema,
};

type Item = z.infer<typeof ItemSchema>;
type Feed = z.infer<typeof FeedSchema>;

declare namespace Rdf {
  export type { Item, Feed };
}

export type { Feed, Item, Rdf };
export { FeedSchema, ItemSchema, RdfSchemas };
export default RdfSchemas;