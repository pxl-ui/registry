import { z } from "zod";

import {
  GenreSchema,
  LanguageSchema,
  PaginationParamsSchema,
  ProductionCompanySchema,
  ProductionCountrySchema,
} from "@/schemas/pxl/tmdb/common";
import { ImagesSchema } from "@/schemas/pxl/tmdb/images";
import { VideosSchema } from "@/schemas/pxl/tmdb/videos";

const CreatorSchema = z.object({
  id: z.number().describe("Unique identifier for the creator"),
  credit_id: z.string().describe("Credit ID"),
  name: z.string().describe("Creator name"),
  gender: z.number().describe("Creator gender"),
  profile_path: z
    .string()
    .nullable()
    .describe("Creator profile path (relative URL)"),
});

const NetworkSchema = z.object({
  id: z.number().describe("Unique identifier for the network"),
  name: z.string().describe("Network name"),
  logo_path: z.string().nullable().describe("Logo path (relative URL)"),
  origin_country: z.string().describe("Network origin country"),
});

const SeasonSchema = z.object({
  air_date: z.string().describe("Air date (YYYY-MM-DD format)"),
  episode_count: z.number().describe("Episode count"),
  id: z.number().describe("Unique identifier for the season"),
  name: z.string().describe("Season name"),
  overview: z.string().nullable().describe("Season overview/synopsis"),
  poster_path: z.string().nullable().describe("Poster path (relative URL)"),
  season_number: z.number().describe("Season number"),
});

const EpisodeSchema = z.object({
  id: z.number().describe("Unique identifier for the episode"),
  name: z.string().describe("Episode name"),
  overview: z.string().nullable().describe("Episode overview/synopsis"),
  vote_average: z.number().describe("Average vote rating (0-10)"),
  vote_count: z.number().describe("Total number of votes"),
  air_date: z.string().describe("Air date (YYYY-MM-DD format)"),
  episode_number: z.number().describe("Episode number"),
  production_code: z.string().describe("Production code"),
  runtime: z.number().nullable().describe("Runtime in minutes"),
  season_number: z.number().describe("Season number"),
  show_id: z.number().describe("Show ID"),
  still_path: z.string().nullable().describe("Still path (relative URL)"),
});

const SerieSchema = z.object({
  backdrop_path: z.string().nullable().describe("Backdrop path (relative URL)"),
  first_air_date: z
    .string()
    .nullable()
    .describe("First air date (YYYY-MM-DD format)"),
  genre_ids: z.array(z.number()).describe("Array of genre IDs"),
  id: z.number().describe("Unique identifier for the serie"),
  name: z.string().describe("Serie name"),
  origin_country: z.array(z.string()).describe("Array of origin countries"),
  original_language: z
    .string()
    .describe("Original language code (e.g., 'en', 'es', 'fr')"),
  original_name: z
    .string()
    .describe("Original serie name (in original language)"),
  overview: z.string().nullable().describe("Serie overview/synopsis"),
  popularity: z.number().describe("Popularity score"),
  poster_path: z.string().nullable().describe("Poster path (relative URL)"),
  vote_average: z.number().describe("Average vote rating (0-10)"),
  vote_count: z.number().describe("Total number of votes"),
});

const SeriesSchema = z.object({
  page: z.number().describe("Page number"),
  results: z.array(SerieSchema).describe("Series"),
  total_pages: z.number().describe("Total pages"),
  total_results: z.number().describe("Total results"),
});

const SerieDetailsSchema = SerieSchema.omit({
  genre_ids: true,
}).extend({
  adult: z.boolean().describe("Adult content flag"),
  created_by: z.array(CreatorSchema).describe("Creators of the serie"),
  episode_run_time: z.array(z.number()).describe("Episode runtime in minutes"),
  genres: z.array(GenreSchema).describe("Genres of the serie"),
  homepage: z.string().nullable().describe("Homepage URL"),
  in_production: z.boolean().describe("In production flag"),
  languages: z.array(z.string()).describe("Languages of the serie"),
  last_air_date: z.string().describe("Last air date (YYYY-MM-DD format)"),
  last_episode_to_air: EpisodeSchema.describe("Last episode to air"),
  next_episode_to_air: z.string().describe("Next episode to air"),
  networks: z.array(NetworkSchema).describe("Networks of the serie"),
  number_of_episodes: z.number().describe("Number of episodes"),
  number_of_seasons: z.number().describe("Number of seasons"),
  production_companies: z
    .array(ProductionCompanySchema)
    .describe("Production companies of the serie"),
  production_countries: z
    .array(ProductionCountrySchema)
    .describe("Production countries of the serie"),
  seasons: z.array(SeasonSchema).describe("Seasons of the serie"),
  spoken_languages: z
    .array(LanguageSchema)
    .describe("Spoken languages of the serie"),
  status: z.string().describe("Status of the serie"),
  tagline: z.string().nullable().describe("Tagline of the serie"),
  type: z.string().describe("Type of the serie"),
  images: ImagesSchema.optional(),
  videos: VideosSchema.optional(),
  similar: SeriesSchema.optional(),
});

const SerieDetailsParamsSchema = z.object({
  append_to_response: z.string().optional().describe("Append to response"),
  include_image_language: z
    .string()
    .optional()
    .describe("Include image language"),
  language: z.string().optional().describe("Language"),
});

const SearchSeriesParamsSchema = PaginationParamsSchema.extend({
  query: z.string().describe("Search query"),
  include_adult: z.boolean().optional().describe("Include adult movies"),
  year: z.number().optional().describe("Year"),
});

type Episode = z.infer<typeof EpisodeSchema>;
type Season = z.infer<typeof SeasonSchema>;
type Serie = z.infer<typeof SerieSchema>;
type Series = z.infer<typeof SeriesSchema>;

type SerieDetails = z.infer<typeof SerieDetailsSchema>;
type SerieDetailsParams = z.infer<typeof SerieDetailsParamsSchema>;
type SearchSeriesParams = z.infer<typeof SearchSeriesParamsSchema>;

export type {
  Episode,
  SearchSeriesParams,
  Season,
  Serie,
  SerieDetails,
  SerieDetailsParams,
  Series,
};
export {
  EpisodeSchema,
  SearchSeriesParamsSchema,
  SeasonSchema,
  SerieDetailsParamsSchema,
  SerieDetailsSchema,
  SerieSchema,
  SeriesSchema,
};
