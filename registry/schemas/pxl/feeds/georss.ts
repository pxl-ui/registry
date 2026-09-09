import z from "zod";

const PointSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});
const LineSchema = z.object({
  points: z.array(PointSchema),
});
const PolygonSchema = z.object({
  points: z.array(PointSchema),
});
const BoxSchema = z.object({
  lowerCorner: PointSchema,
  upperCorner: PointSchema,
});
const ItemOrFeedSchema = z.object({
  point: PointSchema.optional(),
  line: LineSchema.optional(),
  polygon: PolygonSchema.optional(),
  box: BoxSchema.optional(),
  featureTypeTag: z.string().optional(),
  relationshipTag: z.string().optional(),
  featureName: z.string().optional(),
  elev: z.number().optional(),
  floor: z.number().optional(),
  radius: z.number().optional(),
});

const GeoRssSchemas = {
  ItemOrFeed: ItemOrFeedSchema,
};

type Point = z.infer<typeof PointSchema>;
type Line = z.infer<typeof LineSchema>;
type Polygon = z.infer<typeof PolygonSchema>;
type Box = z.infer<typeof BoxSchema>;
type ItemOrFeed = z.infer<typeof ItemOrFeedSchema>;

declare namespace GeoRss {
  export type { ItemOrFeed };
}

export type { Box, GeoRss, ItemOrFeed, Line, Point, Polygon };
export {
  BoxSchema,
  GeoRssSchemas,
  ItemOrFeedSchema,
  LineSchema,
  PointSchema,
  PolygonSchema,
};
