import { z } from "zod";

const ProviderSchema = z.object({
  provider_name: z.string(),
  provider_url: z.url(),
  endpoints: z.array(
    z.object({
      schemes: z.array(z.url()),
      url: z.url(),
      discovery: z.boolean().optional(),
      formats: z
        .array(z.union([z.literal("json"), z.literal("xml")]))
        .optional(),
    }),
  ),
}).describe("An oEmbed provider configuration");

const RequestSchema = z
  .object({
    url: z.url().describe("The URL to retrieve embedding information for."),
    maxwidth: z
      .number()
      .optional()
      .describe(
        "The maximum width of the embedded resource. Only applies to some resource types (as specified below). For supported resource types, this parameter must be respected by providers.",
      ),
    maxheight: z
      .number()
      .optional()
      .describe(
        "The maximum height of the embedded resource. Only applies to some resource types (as specified below). For supported resource types, this parameter must be respected by providers.",
      ),
    format: z
      .union([z.literal("json"), z.literal("xml")])
      .optional()
      .describe(
        "The required response format. When not specified, the provider can return any valid response format. When specified, the provider must return data in the request format, else return an error (see below for error codes).",
      ),
  })
  .describe(
    "Requests sent to the API endpoint must be HTTP GET requests, with all arguments sent as query parameters. All arguments must be urlencoded (as per RFC 1738). Providers should ignore all other arguments it doesn't expect. Providers are welcome to support custom additional parameters.",
  );

const BaseResponseSchema = z.object({
  type: z.string().describe("The resource type."),
  version: z
    .literal("1.0")
    .describe("The oEmbed version number. This must be 1.0."),
  title: z
    .string()
    .optional()
    .describe("A text title, describing the resource."),
  author_name: z
    .string()
    .optional()
    .describe("The name of the author/owner of the resource."),
  author_url: z
    .string()
    .optional()
    .describe("A URL for the author/owner of the resource."),
  provider_name: z
    .string()
    .optional()
    .describe("The name of the resource provider."),
  provider_url: z
    .string()
    .optional()
    .describe("The url of the resource provider."),
  cache_age: z
    .number()
    .optional()
    .describe(
      "The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not.",
    ),
  thumbnail_url: z
    .string()
    .optional()
    .describe(
      "A URL to a thumbnail image representing the resource. The thumbnail must respect any maxwidth and maxheight parameters. If this parameter is present, thumbnail_width and thumbnail_height must also be present.",
    ),
  thumbnail_width: z
    .number()
    .optional()
    .describe(
      "The width of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_height must also be present.",
    ),
  thumbnail_height: z
    .number()
    .optional()
    .describe(
      "The height of the optional thumbnail. If this parameter is present, thumbnail_url and thumbnail_width must also be present.",
    ),
});

const PhotoSchema = BaseResponseSchema.extend({
  type: z.literal("photo"),
  url: z
    .url()
    .describe(
      "The source URL of the image. Consumers should be able to insert this URL into an <img> element. Only HTTP and HTTPS URLs are valid.",
    ),
  width: z
    .number()
    .describe(
      "The width in pixels of the image specified in the url parameter.",
    ),
  height: z
    .number()
    .describe(
      "The height in pixels of the image specified in the url parameter.",
    ),
})
  .describe(
    "This type is used for representing static photos. Responses of this type must obey the maxwidth and maxheight request parameters.",
  )
  .meta({
    title: "Photo",
  });

const VideoSchema = BaseResponseSchema.extend({
  type: z.literal("video"),
  html: z
    .string()
    .describe(
      "The HTML required to embed a video player. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities.",
    ),
  width: z
    .number()
    .describe("The width in pixels required to display the HTML."),
  height: z
    .number()
    .describe("The height in pixels required to display the HTML."),
})
  .describe(
    "This type is used for representing playable videos. Responses of this type must obey the maxwidth and maxheight request parameters. If a provider wishes the consumer to just provide a thumbnail, rather than an embeddable player, they should instead return a photo response type.",
  )
  .meta({
    title: "Video",
  });

const LinkSchema = BaseResponseSchema.extend({
  type: z.literal("link"),
})
  .describe(
    "Responses of this type allow a provider to return any generic embed data (such as title and author_name), without providing either the url or html parameters. The consumer may then link to the resource, using the URL specified in the original request.",
  )
  .meta({
    title: "Link",
  });

const RichSchema = BaseResponseSchema.extend({
  type: z.literal("rich"),
  html: z
    .string()
    .describe(
      "The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. The markup should be valid XHTML 1.0 Basic.",
    ),
  width: z
    .number()
    .describe("The width in pixels required to display the HTML."),
  height: z
    .number()
    .describe("The height in pixels required to display the HTML."),
})
  .describe(
    "This type is used for rich HTML content that does not fall under one of the other categories. Responses of this type must obey the maxwidth and maxheight request parameters.",
  )
  .meta({
    title: "Rich",
  });

const ResponseSchema = z
  .union([PhotoSchema, VideoSchema, LinkSchema, RichSchema])
  .describe(
    "Responses can specify a resource type, such as photo or video. Each type has specific parameters associated with it. Providers may optionally include any parameters not specified in this document (so long as they use the same key-value format) and consumers may choose to ignore these. Consumers must ignore parameters they do not understand.",
  );

const oEmbedSchemas = {
  Provider: ProviderSchema,
  Request: RequestSchema,
  Photo: PhotoSchema,
  Video: VideoSchema,
  Link: LinkSchema,
  Rich: RichSchema,
  Response: ResponseSchema,
};

type Provider = z.infer<typeof ProviderSchema>;
type Request = z.infer<typeof RequestSchema>;

type Photo = z.infer<typeof PhotoSchema>;
type Video = z.infer<typeof VideoSchema>;
type Link = z.infer<typeof LinkSchema>;
type Rich = z.infer<typeof RichSchema>;
type Response = z.infer<typeof ResponseSchema>;

declare namespace oEmbed {
  export type { Provider, Photo, Video, Link, Rich, Request, Response };
}

export type { Link, oEmbed, Photo, Provider, Request, Response, Rich, Video };
export {
  LinkSchema,
  oEmbedSchemas,
  PhotoSchema,
  ProviderSchema,
  RequestSchema,
  ResponseSchema,
  RichSchema,
  VideoSchema,
};

export default oEmbedSchemas;
