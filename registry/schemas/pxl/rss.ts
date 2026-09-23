import z from "zod";

import { AtomSchemas } from "./atom";

// #region MODULES

const ACastItemSchema = z.object({
  episodeId: z.string().optional(),
  showId: z.string().optional(),
  episodeUrl: z.string().optional(),
  settings: z.string().optional(),
});

const ACastFeedSchema = z.object({
  showId: z.string().optional(),
  showUrl: z.string().optional(),
  signature: z
    .object({
      key: z.string().optional(),
      algorithm: z.string().optional(),
      value: z.string().optional(),
    })
    .optional(),
  settings: z.string().optional(),
  network: z
    .object({
      id: z.string().optional(),
      slug: z.string().optional(),
      value: z.string().optional(),
    })
    .optional(),
  importedFeed: z.string().optional(),
});

const AdminSchema = z.object({
  errorReportsTo: z.string().optional(),
  generatorAgent: z.string().optional(),
});

const BlogChannelSchema = z.object({
  blogRoll: z.string().optional(),
  blink: z.string().optional(),
  mySubscriptions: z.string().optional(),
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

const FeedpressSchema = z.object({
  link: z.string().optional(),
  newsletterId: z.string().optional(),
  locale: z.string().optional(),
  podcastId: z.string().optional(),
  cssFile: z.string().optional(),
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

const PodcastItemSchema = z.object({
  transcripts: z
    .array(
      z.object({
        url: z.url(),
        type: z.string(),
        language: z.string().optional(),
        rel: z.string().optional(),
      }),
    )
    .optional(),
  chapters: z
    .object({
      url: z.url(),
      type: z.string(),
    })
    .optional(),
  soundbites: z
    .array(
      z.object({
        startTime: z.number(),
        duration: z.number(),
        display: z.string().optional(),
      }),
    )
    .optional(),
  persons: z
    .array(
      z.object({
        display: z.string(),
        role: z.string().optional(),
        group: z.string().optional(),
        img: z.string().optional(),
        href: z.url().optional(),
      }),
    )
    .optional(),
  locations: z
    .array(
      z.object({
        display: z.string(),
        rel: z.string().optional(),
        geo: z.string().optional(),
        osm: z.string().optional(),
        country: z.string().optional(),
      }),
    )
    .optional(),
  season: z
    .object({
      number: z.number(),
      name: z.string().optional(),
    })
    .optional(),
  episode: z
    .object({
      number: z.number(),
      display: z.string().optional(),
    })
    .optional(),
  license: z
    .object({
      display: z.string(),
      url: z.url().optional(),
    })
    .optional(),
  alternateEnclosures: z
    .array(
      z.object({
        type: z.string(),
        length: z.number().optional(),
        bitrate: z.number().optional(),
        height: z.number().optional(),
        lang: z.string().optional(),
        title: z.string().optional(),
        rel: z.string().optional(),
        codecs: z.string().optional(),
        default: z.boolean().optional(),
        sources: z
          .array(
            z.object({
              uri: z.url(),
              contentType: z.string().optional(),
            }),
          )
          .optional(),
        integrity: z
          .object({
            type: z.string(),
            value: z.string(),
          })
          .optional(),
      }),
    )
    .optional(),
  values: z
    .array(
      z.object({
        type: z.string(),
        method: z.string(),
        suggested: z.number().optional(),
        valueRecipients: z
          .array(
            z.object({
              name: z.string().optional(),
              customKey: z.string().optional(),
              customValue: z.string().optional(),
              type: z.string(),
              address: z.string(),
              split: z.number(),
              fee: z.boolean().optional(),
            }),
          )
          .optional(),
        valueTimeSplits: z
          .array(
            z.object({
              startTime: z.number(),
              duration: z.number(),
              remoteStartTime: z.number().optional(),
              remotePercentage: z.number().optional(),
              remoteItem: z
                .object({
                  feedGuid: z.string(),
                  feedUrl: z.string().optional(),
                  itemGuid: z.string().optional(),
                  medium: z.string().optional(),
                  title: z.string().optional(),
                })
                .optional(),
              valueRecipients: z
                .array(
                  z.object({
                    name: z.string().optional(),
                    customKey: z.string().optional(),
                    customValue: z.string().optional(),
                    type: z.string(),
                    address: z.string(),
                    split: z.number(),
                    fee: z.boolean().optional(),
                  }),
                )
                .optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
  images: z
    .array(
      z.object({
        href: z.url(),
        alt: z.string().optional(),
        aspectRatio: z.string().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        type: z.string().optional(),
        purpose: z.string().optional(),
      }),
    )
    .optional(),
  socialInteracts: z
    .array(
      z.object({
        uri: z.url().optional(),
        protocol: z.string(),
        accountId: z.string().optional(),
        accountUrl: z.string().optional(),
        priority: z.number().optional(),
      }),
    )
    .optional(),
  txts: z
    .array(
      z.object({
        display: z.string(),
        purpose: z.string().optional(),
      }),
    )
    .optional(),
  chat: z
    .object({
      server: z.string(),
      protocol: z.string(),
      accountId: z.string().optional(),
      space: z.string().optional(),
    })
    .optional(),
  location: z
    .object({
      display: z.string(),
      rel: z.string().optional(),
      geo: z.string().optional(),
      osm: z.string().optional(),
      country: z.string().optional(),
    })
    .optional()
    .meta({
      deprecated: true,
      description:
        "Use `locations` (array) instead. Multiple podcast:location elements are allowed per specification.",
    }),
  value: z
    .object({
      type: z.string(),
      method: z.string(),
      suggested: z.number().optional(),
      valueRecipients: z
        .array(
          z.object({
            name: z.string().optional(),
            customKey: z.string().optional(),
            customValue: z.string().optional(),
            type: z.string(),
            address: z.string(),
            split: z.number(),
            fee: z.boolean().optional(),
          }),
        )
        .optional(),
      valueTimeSplits: z
        .array(
          z.object({
            startTime: z.number(),
            duration: z.number(),
            remoteStartTime: z.number().optional(),
            remotePercentage: z.number().optional(),
            remoteItem: z
              .object({
                feedGuid: z.string(),
                feedUrl: z.string().optional(),
                itemGuid: z.string().optional(),
                medium: z.string().optional(),
                title: z.string().optional(),
              })
              .optional(),
            valueRecipients: z
              .array(
                z.object({
                  name: z.string().optional(),
                  customKey: z.string().optional(),
                  customValue: z.string().optional(),
                  type: z.string(),
                  address: z.string(),
                  split: z.number(),
                  fee: z.boolean().optional(),
                }),
              )
              .optional(),
          }),
        )
        .optional(),
    })
    .optional()
    .meta({
      deprecated: true,
      description:
        "Use `values` (array) instead. Multiple podcast:value elements are allowed per specification.",
    }),
  chats: z
    .array(
      z.object({
        server: z.string(),
        protocol: z.string(),
        accountId: z.string().optional(),
        space: z.string().optional(),
      }),
    )
    .optional()
    .meta({
      deprecated: true,
      description:
        "Use `chat` (singular) instead. Only one podcast:chat element is allowed per specification.",
    }),
});

const PodcastFeedSchema = z.object({
  locked: z
    .object({
      value: z.boolean(),
      owner: z.string().optional(),
    })
    .optional(),
  fundings: z
    .array(
      z.object({
        url: z.url(),
        display: z.string().optional(),
      }),
    )
    .optional(),
  persons: z
    .array(
      z.object({
        display: z.string(),
        role: z.string().optional(),
        group: z.string().optional(),
        img: z.string().optional(),
        href: z.url().optional(),
      }),
    )
    .optional(),
  locations: z
    .array(
      z.object({
        display: z.string(),
        rel: z.string().optional(),
        geo: z.string().optional(),
        osm: z.string().optional(),
        country: z.string().optional(),
      }),
    )
    .optional(),
  trailers: z
    .array(
      z.object({
        display: z.string(),
        url: z.url(),
        pubDate: z.string(),
        length: z.number().optional(),
        type: z.string().optional(),
        season: z.number().optional(),
      }),
    )
    .optional(),
  license: z
    .object({
      display: z.string(),
      url: z.url().optional(),
    })
    .optional(),
  guid: z.string().optional(),
  values: z
    .array(
      z.object({
        type: z.string(),
        method: z.string(),
        suggested: z.number().optional(),
        valueRecipients: z
          .array(
            z.object({
              name: z.string().optional(),
              customKey: z.string().optional(),
              customValue: z.string().optional(),
              type: z.string(),
              address: z.string(),
              split: z.number(),
              fee: z.boolean().optional(),
            }),
          )
          .optional(),
        valueTimeSplits: z
          .array(
            z.object({
              startTime: z.number(),
              duration: z.number(),
              remoteStartTime: z.number().optional(),
              remotePercentage: z.number().optional(),
              remoteItem: z
                .object({
                  feedGuid: z.string(),
                  feedUrl: z.string().optional(),
                  itemGuid: z.string().optional(),
                  medium: z.string().optional(),
                  title: z.string().optional(),
                })
                .optional(),
              valueRecipients: z
                .array(
                  z.object({
                    name: z.string().optional(),
                    customKey: z.string().optional(),
                    customValue: z.string().optional(),
                    type: z.string(),
                    address: z.string(),
                    split: z.number(),
                    fee: z.boolean().optional(),
                  }),
                )
                .optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
  medium: z.string().optional(),
  images: z
    .array(
      z.object({
        href: z.url(),
        alt: z.string().optional(),
        aspectRatio: z.string().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        type: z.string().optional(),
        purpose: z.string().optional(),
      }),
    )
    .optional(),
  liveItems: z
    .array(
      PodcastItemSchema.extend({
        status: z.string(),
        start: z.string(),
        end: z.string().optional(),
        contentLinks: z
          .array(
            z.object({
              href: z.url(),
              display: z.string().optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
  blocks: z
    .array(
      z.object({
        value: z.boolean(),
        id: z.string().optional(),
      }),
    )
    .optional(),
  txts: z
    .array(
      z.object({
        display: z.string(),
        purpose: z.string().optional(),
      }),
    )
    .optional(),
  remoteItems: z
    .array(
      z.object({
        feedGuid: z.string(),
        feedUrl: z.string().optional(),
        itemGuid: z.string().optional(),
        medium: z.string().optional(),
        title: z.string().optional(),
      }),
    )
    .optional(),
  podroll: z
    .object({
      remoteItems: z
        .array(
          z.object({
            feedGuid: z.string(),
            feedUrl: z.string().optional(),
            itemGuid: z.string().optional(),
            medium: z.string().optional(),
            title: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  updateFrequency: z
    .object({
      display: z.string(),
      complete: z.boolean().optional(),
      dtstart: z.string().optional(),
      rrule: z.string().optional(),
    })
    .optional(),
  podping: z
    .object({
      usesPodping: z.boolean().optional(),
    })
    .optional(),
  chat: z
    .object({
      server: z.string(),
      protocol: z.string(),
      accountId: z.string().optional(),
      space: z.string().optional(),
    })
    .optional(),
  publisher: z
    .object({
      remoteItem: z
        .object({
          feedGuid: z.string(),
          feedUrl: z.string().optional(),
          itemGuid: z.string().optional(),
          medium: z.string().optional(),
          title: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
  location: z
    .object({
      display: z.string(),
      rel: z.string().optional(),
      geo: z.string().optional(),
      osm: z.string().optional(),
      country: z.string().optional(),
    })
    .optional()
    .meta({
      deprecated: true,
      description:
        "Use `locations` (array) instead. Multiple podcast:location elements are allowed per specification.",
    }),
  value: z
    .object({
      type: z.string(),
      method: z.string(),
      suggested: z.number().optional(),
      valueRecipients: z
        .array(
          z.object({
            name: z.string().optional(),
            customKey: z.string().optional(),
            customValue: z.string().optional(),
            type: z.string(),
            address: z.string(),
            split: z.number(),
            fee: z.boolean().optional(),
          }),
        )
        .optional(),
      valueTimeSplits: z
        .array(
          z.object({
            startTime: z.number(),
            duration: z.number(),
            remoteStartTime: z.number().optional(),
            remotePercentage: z.number().optional(),
            remoteItem: z
              .object({
                feedGuid: z.string(),
                feedUrl: z.string().optional(),
                itemGuid: z.string().optional(),
                medium: z.string().optional(),
                title: z.string().optional(),
              })
              .optional(),
            valueRecipients: z
              .array(
                z.object({
                  name: z.string().optional(),
                  customKey: z.string().optional(),
                  customValue: z.string().optional(),
                  type: z.string(),
                  address: z.string(),
                  split: z.number(),
                  fee: z.boolean().optional(),
                }),
              )
              .optional(),
          }),
        )
        .optional(),
    })
    .optional()
    .meta({
      deprecated: true,
      description:
        "Use `values` (array) instead. Multiple podcast:value elements are allowed per specification.",
    }),
  chats: z
    .array(
      z.object({
        server: z.string(),
        protocol: z.string(),
        accountId: z.string().optional(),
        space: z.string().optional(),
      }),
    )
    .optional()
    .meta({
      deprecated: true,
      description:
        "Use `chat` (singular) instead. Only one podcast:chat element is allowed per specification.",
    }),
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

const PrismItemSchema = z.object({
  publicationName: z.string().optional(),
  issn: z.string().optional(),
  eIssn: z.string().optional(),
  doi: z.string().optional(),
  urls: z.array(z.string()).optional(),
  volume: z.string().optional(),
  number: z.string().optional(),
  edition: z.string().optional(),
  section: z.string().optional(),
  startingPage: z.string().optional(),
  endingPage: z.string().optional(),
  pageRange: z.string().optional(),
  pageCount: z.number().optional(),
  pageProgressionDirection: z.string().optional(),
  samplePageRange: z.string().optional(),
  publicationDates: z.array(z.string()).optional(),
  publicationDisplayDates: z.array(z.string()).optional(),
  creationDate: z.string().optional(),
  modificationDate: z.string().optional(),
  dateReceived: z.string().optional(),
  killDate: z.string().optional(),
  copyrightYears: z.array(z.string()).optional(),
  contentType: z.string().optional(),
  genres: z.array(z.string()).optional(),
  alternateTitles: z.array(z.string()).optional(),
  subtitles: z.array(z.string()).optional(),
  teasers: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
  corporateEntities: z.array(z.string()).optional(),
  organizations: z.array(z.string()).optional(),
  persons: z.array(z.string()).optional(),
  platforms: z.array(z.string()).optional(),
  device: z.string().optional(),
  academicFields: z.array(z.string()).optional(),
  events: z.array(z.string()).optional(),
  industries: z.array(z.string()).optional(),
  locations: z.array(z.string()).optional(),
  objects: z.array(z.string()).optional(),
  profession: z.string().optional(),
  sport: z.string().optional(),
  hasAlternatives: z.array(z.string()).optional(),
  hasCorrections: z.array(z.string()).optional(),
  hasTranslations: z.array(z.string()).optional(),
  isAlternativeOf: z.array(z.string()).optional(),
  isCorrectionOf: z.array(z.string()).optional(),
  isTranslationOf: z.string().optional(),
  supplementTitles: z.array(z.string()).optional(),
  supplementDisplayID: z.string().optional(),
  supplementStartingPage: z.string().optional(),
  links: z.array(z.string()).optional(),
  wordCount: z.number().optional(),
  byteCount: z.number().optional(),
  ratings: z.array(z.string()).optional(),
  timePeriod: z.string().optional(),
  versionIdentifier: z.string().optional(),
  tickers: z.array(z.string()).optional(),
  embargoDate: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:embargoDate instead.",
  }),
  copyright: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:copyrightDate instead.",
  }),
  expirationDate: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:expirationDate instead.",
  }),
  rightsAgent: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:rightsAgent instead.",
  }),
});

const PrismFeedSchema = z.object({
  publicationName: z.string().optional(),
  issn: z.string().optional(),
  eIssn: z.string().optional(),
  isbns: z.array(z.string()).optional(),
  issueIdentifier: z.string().optional(),
  issueName: z.string().optional(),
  issueTeaser: z.string().optional(),
  issueType: z.string().optional(),
  volume: z.string().optional(),
  number: z.string().optional(),
  edition: z.string().optional(),
  aggregateIssueNumber: z.number().optional(),
  aggregationType: z.string().optional(),
  coverDate: z.string().optional(),
  coverDisplayDate: z.string().optional(),
  publicationDates: z.array(z.string()).optional(),
  publicationDisplayDates: z.array(z.string()).optional(),
  creationDate: z.string().optional(),
  modificationDate: z.string().optional(),
  dateReceived: z.string().optional(),
  onSaleDates: z.array(z.string()).optional(),
  onSaleDays: z.array(z.string()).optional(),
  offSaleDates: z.array(z.string()).optional(),
  killDate: z.string().optional(),
  copyrightYears: z.array(z.string()).optional(),
  contentType: z.string().optional(),
  alternateTitles: z.array(z.string()).optional(),
  subtitles: z.array(z.string()).optional(),
  teasers: z.array(z.string()).optional(),
  keywords: z.array(z.string()).optional(),
  seriesTitle: z.string().optional(),
  seriesNumber: z.number().optional(),
  bookEditions: z.array(z.string()).optional(),
  nationalCatalogNumber: z.string().optional(),
  productCodes: z.array(z.string()).optional(),
  uspsNumber: z.string().optional(),
  publishingFrequency: z.string().optional(),
  channels: z.array(z.string()).optional(),
  subchannel1: z.string().optional(),
  subchannel2: z.string().optional(),
  subchannel3: z.string().optional(),
  subchannel4: z.string().optional(),
  section: z.string().optional(),
  subsection1: z.string().optional(),
  subsection2: z.string().optional(),
  subsection3: z.string().optional(),
  subsection4: z.string().optional(),
  corporateEntities: z.array(z.string()).optional(),
  distributor: z.string().optional(),
  sellingAgencies: z.array(z.string()).optional(),
  organizations: z.array(z.string()).optional(),
  persons: z.array(z.string()).optional(),
  platforms: z.array(z.string()).optional(),
  originPlatforms: z.array(z.string()).optional(),
  device: z.string().optional(),
  complianceProfile: z.string().optional(),
  blogTitle: z.string().optional(),
  blogURL: z.string().optional(),
  links: z.array(z.string()).optional(),
  urls: z.array(z.string()).optional(),
  byteCount: z.number().optional(),
  ratings: z.array(z.string()).optional(),
  timePeriod: z.string().optional(),
  versionIdentifier: z.string().optional(),
  tickers: z.array(z.string()).optional(),
  academicFields: z.array(z.string()).optional(),
  events: z.array(z.string()).optional(),
  genres: z.array(z.string()).optional(),
  industries: z.array(z.string()).optional(),
  locations: z.array(z.string()).optional(),
  objects: z.array(z.string()).optional(),
  profession: z.string().optional(),
  sport: z.string().optional(),
  embargoDate: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:embargoDate instead.",
  }),
  copyright: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:copyrightDate instead.",
  }),
  expirationDate: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:expirationDate instead.",
  }),
  rightsAgent: z.string().optional().meta({
    deprecated: true,
    description: "Since PRISM 3.0. Use pur:rightsAgent instead.",
  }),
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

const RawVoiceItemSchema = z.object({
  poster: z
    .object({
      url: z.string().optional(),
    })
    .optional(),
  isHd: z.boolean().optional(),
  embed: z.string().optional(),
  webm: z
    .object({
      src: z.string().optional(),
      type: z.string().optional(),
      length: z.number().optional(),
    })
    .optional(),
  mp4: z
    .object({
      src: z.string().optional(),
      type: z.string().optional(),
      length: z.number().optional(),
    })
    .optional(),
  metamarks: z
    .array(
      z.object({
        type: z.string().optional(),
        link: z.string().optional(),
        position: z.number().optional(),
        duration: z.number().optional(),
        value: z.string().optional(),
      }),
    )
    .optional(),
});

const RawVoiceFeedSchema = z.object({
  rating: z
    .object({
      value: z.string().optional(),
      tv: z.string().optional(),
      movie: z.string().optional(),
    })
    .optional(),
  liveEmbed: z.string().optional(),
  flashLiveStream: z
    .object({
      url: z.string().optional(),
      schedule: z.string().optional(),
      duration: z.string().optional(),
      type: z.string().optional(),
    })
    .optional(),
  httpLiveStream: z
    .object({
      url: z.string().optional(),
      schedule: z.string().optional(),
      duration: z.string().optional(),
      type: z.string().optional(),
    })
    .optional(),
  shoutcastLiveStream: z
    .object({
      url: z.string().optional(),
      schedule: z.string().optional(),
      duration: z.string().optional(),
      type: z.string().optional(),
    })
    .optional(),
  liveStream: z
    .object({
      url: z.string().optional(),
      schedule: z.string().optional(),
      duration: z.string().optional(),
      type: z.string().optional(),
    })
    .optional(),
  location: z.string(),
  frequency: z.string(),
  mycast: z.boolean(),
  subscribe: z.record(z.string(), z.string()),
  donate: z
    .object({
      href: z.url(),
      value: z.string().optional(),
    })
    .optional(),
});

const SlashSchema = z.object({
  section: z.string().optional(),
  department: z.string().optional(),
  comments: z.number().optional(),
  hitParade: z.array(z.number()).optional(),
});

const SpotifyItemSchema = z.object({
  access: z
    .object({
      entitlement: z
        .object({
          name: z.string(),
        })
        .optional(),
    })
    .optional(),
});

const SpotifyFeedSchema = z.object({
  limit: z
    .object({
      recentCount: z.number().optional(),
    })
    .optional(),
  countryOfOrigin: z.string().optional(),
  access: z
    .object({
      partner: z
        .object({
          id: z.string(),
        })
        .optional(),
      sandbox: z
        .object({
          enabled: z.boolean(),
        })
        .optional(),
    })
    .optional(),
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

const SourceNsItemSchema = z.object({
  markdown: z.string().optional(),
  outlines: z.array(z.string()).optional(),
  linkFull: z.string().optional(),
  inReplyTo: z.object({
    value: z.string(),
    isPermaLink: z.boolean().optional(),
  }).optional(),
})

const SourceNsFeedSchema = z.object({
  accounts: z
    .array(
      z.object({
        service: z.string(),
        value: z.string().optional(),
      }),
    )
    .optional(),
  likes: z
    .object({
      server: z.string(),
    })
    .optional(),
  archive: z
    .object({
      url: z.string(),
      startDay: z.string(),
      endDay: z.string().optional(),
      filename: z.string().optional(),
    })
    .optional(),
  subscriptionLists: z
    .array(
      z.object({
        url: z.url(),
        value: z.string().optional(),
      }),
    )
    .optional(),
  cloud: z.string().optional(),
  blogroll: z.string().optional(),
  self: z.string().optional(),
  localTime: z.string().optional(),
});

// #endregion

// #region PUBLIC

const ItemSchema = z.object({
  title: z.string().optional(),
  link: z.string().optional(),
  description: z.string().optional(),
  authors: z
    .array(
      z.union([
        z.string(),
        z.object({
          name: z.string().optional(),
          email: z.email().optional(),
        }),
      ]),
    )
    .optional(),
  categories: z
    .array(
      z.object({
        name: z.string(),
        domain: z.string().optional(),
      }),
    )
    .optional(),
  comments: z.string().optional(),
  enclosures: z
    .array(
      z.object({
        url: z.string(),
        length: z.number(),
        type: z.string(),
      }),
    )
    .optional(),
  guid: z
    .object({
      value: z.string(),
      isPermaLink: z.boolean().optional(),
    })
    .optional(),
  pubDate: z.string().optional(),
  source: z
    .object({
      title: z.string(),
      url: z.string().optional(),
    })
    .optional(),
  atom: AtomSchemas.Entry.optional(),
  cc: CreativeCommonsSchema.optional(),
  dc: DublinCoreSchema.optional(),
  content: z.object({
    encoded: z.string().optional(),
  }),
  creativeCommons: z
    .object({
      licenses: z.array(z.string()).optional(),
    })
    .optional(),
  slash: SlashSchema.optional(),
  itunes: ItunesItemSchema.optional(),
  podcast: PodcastItemSchema.optional(),
  psc: PscSchema.optional(),
  googleplay: GooglePlayItemSchema.optional(),
  media: MediaSchema.optional(),
  georss: GeoRssSchema.optional(),
  geo: GeoSchema.optional(),
  thr: ThrSchema.optional(),
  dcterms: DublinCoreTermsSchema.optional(),
  prism: PrismItemSchema.optional(),
  wfw: WfwSchema.optional(),
  sourceNs: SourceNsItemSchema.optional(),
  rawvoice: RawVoiceItemSchema.optional(),
  spotify: SpotifyItemSchema.optional(),
  pingback: PingbackItemSchema.optional(),
  trackback: TrackbackSchema.optional(),
  acast: ACastItemSchema.optional(),
}).describe("An Rss item.");

const FeedSchema = z.object({
  title: z.string(),
  link: z.string().optional(),
  description: z.string(),
  language: z.string().optional(),
  copyright: z.string().optional(),
  managingEditor: z
    .union([
      z.string(),
      z.object({
        name: z.string().optional(),
        email: z.email().optional(),
      }),
    ])
    .optional(),
  webMaster: z
    .union([
      z.string(),
      z.object({
        name: z.string().optional(),
        email: z.email().optional(),
      }),
    ])
    .optional(),
  pubDate: z.string().optional(),
  lastBuildDate: z.string().optional(),
  categories: z
    .array(
      z.object({
        name: z.string(),
        domain: z.string().optional(),
      }),
    )
    .optional(),
  generator: z.string().optional(),
  docs: z.string().optional(),
  cloud: z
    .object({
      domain: z.string(),
      port: z.number(),
      path: z.string(),
      registerProcedure: z.string(),
      protocol: z.string(),
    })
    .optional(),
  ttl: z.number().optional(),
  image: z
    .object({
      url: z.string(),
      title: z.string(),
      link: z.string(),
      description: z.string().optional(),
      height: z.number().optional(),
      width: z.number().optional(),
    })
    .optional(),
  rating: z.string().optional(),
  textInput: z
    .object({
      title: z.string(),
      description: z.string(),
      name: z.string(),
      link: z.string(),
    })
    .optional(),
  skipHours: z.array(z.number()).optional(),
  skipDays: z.array(z.string()).optional(),
  items: z.array(ItemSchema).optional(),
  atom: AtomSchemas.Feed.optional(),
  cc: CreativeCommonsSchema.optional(),
  dc: DublinCoreSchema.optional(),
  sy: SySchema.optional(),
  itunes: ItunesFeedSchema.optional(),
  podcast: PodcastFeedSchema.optional(),
  googleplay: GooglePlayFeedSchema.optional(),
  media: MediaSchema.optional(),
  georss: GeoRssSchema.optional(),
  geo: GeoSchema.optional(),
  dcterms: DublinCoreTermsSchema.optional(),
  prism: PrismFeedSchema.optional(),
  creativeCommons: z
    .object({
      licenses: z.array(z.string()).optional(),
    })
    .optional(),
  feedpress: FeedpressSchema.optional(),
  opensearch: OpenSearchSchema.optional(),
  admin: AdminSchema.optional(),
  sourceNs: SourceNsFeedSchema.optional(),
  blogChannel: BlogChannelSchema.optional(),
  rawvoice: RawVoiceFeedSchema.optional(),
  spotify: SpotifyFeedSchema.optional(),
  pingback: PingbackFeedSchema.optional(),
  acast: ACastFeedSchema.optional(),
}).describe("An Rss feed.");

// #endregion

const RssSchemas = {
  Feed: FeedSchema,
  Item: ItemSchema,
};

type Feed = z.infer<typeof FeedSchema>;
type Item = z.infer<typeof ItemSchema>;

declare namespace Rss {
  export type { Item, Feed };
}

export type { Feed, Item, Rss };
export { FeedSchema, ItemSchema, RssSchemas };
export default RssSchemas;
