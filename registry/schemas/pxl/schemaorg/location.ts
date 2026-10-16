import { z } from "zod";

const ImageObjectSchema = z
  .looseObject({
    contentUrl: z.string().optional(),
    name: z.string().optional(),
    width: z.string().optional(),
    height: z.string().optional(),
  })
  .meta({
    title: "ImageObject",
    description: "An image file.",
  });

const GeoCoordinatesSchema = z
  .looseObject({
    get address() {
      return z
        .union([PostalAddressSchema, z.string()])
        .optional()
        .describe("Physical address of the item.");
    },
    get addressCountry() {
      return z
        .union([CountrySchema, z.string()])
        .optional()
        .describe(
          'The country. Recommended to be in 2-letter ISO 3166-1 alpha-2 format, for example "US". For backward compatibility, a 3-letter ISO 3166-1 alpha-3 country code such as "SGP" or a full country name such as "Singapore" can also be used.',
        );
    },
    elevation: z
      .union([z.string(), z.number()])
      .describe(
        "The elevation of a location (WGS 84). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.",
      ),
    latitude: z
      .union([z.string(), z.number()])
      .describe("The latitude of a location. For example 37.42242 (WGS 84)."),
    longitude: z
      .union([z.string(), z.number()])
      .describe(
        "The longitude of a location. For example -122.08585 (WGS 84).",
      ),
    postalCode: z
      .string()
      .optional()
      .describe("The postal code. For example, 94043."),
  })
  .meta({
    title: "GeoCoordinates",
    description: "The geographic coordinates of a place or event.",
  });

const GeoShapeSchema = z
  .looseObject({
    get address() {
      return z
        .union([PostalAddressSchema, z.string()])
        .optional()
        .describe("Physical address of the item.");
    },
    get addressCountry() {
      return z
        .union([CountrySchema, z.string()])
        .optional()
        .describe(
          'The country. Recommended to be in 2-letter ISO 3166-1 alpha-2 format, for example "US". For backward compatibility, a 3-letter ISO 3166-1 alpha-3 country code such as "SGP" or a full country name such as "Singapore" can also be used.',
        );
    },
    box: z
      .string()
      .optional()
      .describe(
        "A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.",
      ),
    circle: z
      .string()
      .optional()
      .describe(
        "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.",
      ),
    elevation: z
      .union([z.string(), z.number()])
      .describe(
        "The elevation of a location (WGS 84). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.",
      ),
    line: z
      .string()
      .optional()
      .describe(
        "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.",
      ),
    polygon: z
      .string()
      .optional()
      .describe(
        "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.",
      ),
    postalCode: z
      .string()
      .optional()
      .describe("The postal code. For example, 94043."),
  })
  .meta({
    title: "GeoShape",
    description:
      "The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.",
  });

const GeoSpatialGeometrySchema = z
  .looseObject({
    get geoContains() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in DE-9IM.',
        );
    },
    get geoCoveredBy() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in DE-9IM.",
        );
    },
    get geoCovers() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in DE-9IM.',
        );
    },
    get geoCrosses() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in DE-9IM.',
        );
    },
    get geoDisjoint() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: "they have no point in common. They form a set of disconnected geometries." (A symmetric relationship, as defined in DE-9IM.)',
        );
    },
    get geoEquals() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in DE-9IM. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship).',
        );
    },
    get geoIntersects() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in DE-9IM.",
        );
    },
    get geoOverlaps() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in DE-9IM.",
        );
    },
    get geoTouches() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents spatial relations in which two geometries (or the places they represent) touch: "they have at least one boundary point in common, but no interior points." (A symmetric relationship, as defined in DE-9IM.)',
        );
    },
    get geoWithin() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in DE-9IM.",
        );
    },
  })
  .meta({
    title: "GeoSpatialGeometry",
    description:
      "(Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices.",
  });

const MapCategoryType = z
  .union([
    z.literal("ParkingMap").describe("A parking map."),
    z.literal("SeatingMap").describe("A seating map."),
    z.literal("TransitMap").describe("A transit map."),
    z
      .literal("VenueMap")
      .describe("A venue map (e.g. for malls, auditoriums, museums, etc.)."),
  ])
  .meta({
    title: "MapCategoryType",
    description: "An enumeration of several kinds of Map.",
  });

const MapSchema = z
  .object({
    name: z.string().optional(),
    description: z.string().optional(),
    mapType: MapCategoryType.optional().describe(
      "Indicates the kind of Map, from the MapCategoryType Enumeration.",
    ),
    image: z
      .union([
        z.string(),
        ImageObjectSchema,
        z.array(z.union([z.string(), ImageObjectSchema])),
      ])
      .describe(
        "An image of the item. This can be a URL or a fully described ImageObject.",
      ),
    url: z.string().optional().describe("URL of the item."),
  })
  .meta({
    title: "Map",
    description: "",
  });

const PlaceSchema = z
  .looseObject({
    get address() {
      return z.union([PostalAddressSchema, z.string()]).optional();
    },
    branchCode: z
      .string()
      .optional()
      .describe(
        'A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.',
      ),
    geo: z
      .union([GeoCoordinatesSchema, GeoShapeSchema])
      .optional()
      .describe("The geo coordinates of the place."),
    get geoContains() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in DE-9IM.',
        );
    },
    get geoCoveredBy() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in DE-9IM.",
        );
    },
    get geoCovers() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in DE-9IM.',
        );
    },
    get geoCrosses() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in DE-9IM.',
        );
    },
    get geoDisjoint() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: "they have no point in common. They form a set of disconnected geometries." (A symmetric relationship, as defined in DE-9IM.)',
        );
    },
    get geoEquals() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in DE-9IM. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship).',
        );
    },
    get geoIntersects() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in DE-9IM.",
        );
    },
    get geoOverlaps() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in DE-9IM.",
        );
    },
    get geoTouches() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          'Represents spatial relations in which two geometries (or the places they represent) touch: "they have at least one boundary point in common, but no interior points." (A symmetric relationship, as defined in DE-9IM.)',
        );
    },
    get geoWithin() {
      return z
        .array(z.union([GeoSpatialGeometrySchema, PlaceSchema]))
        .optional()
        .describe(
          "Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in DE-9IM.",
        );
    },
    globalLocationNumber: z
      .string()
      .optional()
      .describe(
        "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.",
      ),
    hasMap: z
      .array(z.union([MapSchema, z.string()]))
      .describe("A URL to a map of the place. Supersedes map, maps."),
    latitude: z
      .union([z.string(), z.number()])
      .describe("The latitude of a location. For example 37.42242 (WGS 84)."),
    longitude: z
      .union([z.string(), z.number()])
      .describe(
        "The longitude of a location. For example -122.08585 (WGS 84).",
      ),
  })
  .meta({
    title: "Place",
    description: "Entities that have a somewhat fixed, physical extension.",
  });

const AdministrativeAreaSchema = PlaceSchema.extend({}).meta({
  title: "Administrative Area",
  description:
    "A geographical region, typically under the jurisdiction of a particular government.",
});

const CountrySchema = AdministrativeAreaSchema.extend({}).meta({
  title: "Country",
  description: "A country.",
});

const PostalAddressSchema = z
  .looseObject({
    addressCountry: z
      .union([CountrySchema, z.string()])
      .optional()
      .describe(
        'The country. Recommended to be in 2-letter ISO 3166-1 alpha-2 format, for example "US". For backward compatibility, a 3-letter ISO 3166-1 alpha-3 country code such as "SGP" or a full country name such as "Singapore" can also be used.',
      ),
    addressLocality: z
      .string()
      .optional()
      .describe(
        "The locality in which the street address is, and which is in the region. For example, Mountain View.",
      ),
    addressRegion: z
      .union([AdministrativeAreaSchema, z.string()])
      .optional()
      .describe(
        "The region in which the locality is, and which is in the country. For example, California or another appropriate first-level Administrative division such as the Province in Italy or Region in Germany.",
      ),
    extendedAddress: z
      .string()
      .optional()
      .describe(
        "An address extension such as an apartment number, C/O or alternative name.",
      ),
    postOfficeBoxNumber: z
      .string()
      .optional()
      .describe("The post office box number for PO box addresses."),
    postalCode: z
      .string()
      .optional()
      .describe("The postal code. For example, 94043."),
    streetAddress: z
      .string()
      .optional()
      .describe("The street address. For example, 1600 Amphitheatre Pkwy."),
  })
  .meta({
    title: "PostalAddress",
    description: "The mailing address.",
  });

const VirtualLocationSchema = z.looseObject({}).meta({
  title: "VirtualLocation",
  description:
    "An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.",
});

const LocationSchemas = {
  Place: PlaceSchema,
  PostalAddress: PostalAddressSchema,
  VirtualLocation: VirtualLocationSchema,
};

type Place = z.infer<typeof PlaceSchema>;
type PostalAddress = z.infer<typeof PostalAddressSchema>;
type VirtualLocation = z.infer<typeof VirtualLocationSchema>;

declare namespace Location {
  export type { Place, PostalAddress, VirtualLocation };
}

export type { Location, Place, PostalAddress, VirtualLocation };
export {
  LocationSchemas,
  PlaceSchema,
  PostalAddressSchema,
  VirtualLocationSchema,
};
export default LocationSchemas;
