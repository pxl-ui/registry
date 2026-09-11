import z from "zod";

const AddressSchema = z.object({
  amenity: z.string(),
  house_number: z.string(),
  road: z.string(),
  neighbourhood: z.string(),
  quarter: z.string(),
  suburb: z.string(),
  town: z.string(),
  province: z.string(),
  "ISO3166-2-lvl6": z.string(),
  postcode: z.string(),
  "ISO3166-2-lvl4": z.string(),
  country: z.string(),
  country_code: z.string(),
});

const PlaceSchema = z.object({
  place_id: z.number(),
  license: z.string(),
  osm_type: z.string(),
  osm_id: z.number(),
  lat: z.string(),
  lon: z.string(),
  category: z.string(),
  type: z.string(),
  place_rank: z.number(),
  importance: z.number(),
  addresstype: z.string(),
  name: z.string(),
  display_name: z.string(),
  address: AddressSchema,
  boundingbox: z.array(z.string()),
});

const OpenStreetMapSchemas = {
  Address: AddressSchema,
  Place: PlaceSchema,
};

type Address = z.infer<typeof AddressSchema>;
type Place = z.infer<typeof PlaceSchema>;

declare namespace OpenStreetMap {
  export type { Address, Place };
}

export type { Address, OpenStreetMap, Place };
export { AddressSchema, OpenStreetMapSchemas, PlaceSchema };
