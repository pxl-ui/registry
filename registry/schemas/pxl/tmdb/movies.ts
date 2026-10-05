import { z } from "zod";

import {
  GenreSchema,
  LanguageSchema,
  PaginationParamsSchema,
  ProductionCompanySchema,
  ProductionCountrySchema,
} from "@/lib/schemas/pxl/tmdb/common";
import { ImagesSchema } from "@/schemas/pxl/tmdb/images";
import { VideosSchema } from "@/schemas/pxl/tmdb/videos";

const MovieSchema = z.object({
  id: z.number().describe("Unique identifier for the movie"),
  title: z.string().describe("Movie title"),
  original_title: z
    .string()
    .describe("Original movie title (in original language)"),
  original_language: z
    .string()
    .describe("Original language code (e.g., 'en', 'es', 'fr')"),
  overview: z.string().describe("Movie overview/synopsis"),
  poster_path: z.string().describe("Poster path (relative URL)"),
  backdrop_path: z.string().describe("Backdrop path (relative URL)"),
  release_date: z.string().describe("Release date (YYYY-MM-DD format)"),
  vote_average: z.number().describe("Average vote rating (0-10)"),
  vote_count: z.number().describe("Total number of votes"),
  popularity: z.number().describe("Popularity score"),
  adult: z.boolean().describe("Adult content flag"),
  genre_ids: z.array(z.number()).describe("Array of genre IDs"),
  video: z.boolean().describe("Video flag"),
});

const MoviesSchema = z.object({
  page: z.number().describe("Page number"),
  results: z.array(MovieSchema).describe("Movies"),
  total_pages: z.number().describe("Total pages"),
  total_results: z.number().describe("Total results"),
});

const MovieDetailsSchema = MovieSchema.omit({
  genre_ids: true,
}).extend({
  genres: z.array(GenreSchema).describe("Movie genres"),
  runtime: z.number().nullable().describe("Movie runtime in minutes"),
  budget: z.number().describe("Budget in USD"),
  revenue: z.number().describe("Revenue in USD"),
  homepage: z.string().nullable().describe("Homepage URL"),
  imdb_id: z.string().nullable().describe("IMDB ID"),
  production_companies: z
    .array(ProductionCompanySchema)
    .describe("Production companies"),
  production_countries: z
    .array(ProductionCountrySchema)
    .describe("Production countries"),
  spoken_languages: z.array(LanguageSchema).describe("Spoken languages"),
  status: z
    .string()
    .describe("Current status (Released, Post Production, etc.)"),
  tagline: z.string().nullable().describe("Tagline"),
  images: ImagesSchema.optional(),
  videos: VideosSchema.optional(),
  similar: MoviesSchema.optional(),
});

const MovieDetailsParamsSchema = z.object({
  append_to_response: z.string().optional().describe("Append to response"),
  include_image_language: z
    .string()
    .optional()
    .describe("Include image language"),
  language: z.string().optional().describe("Language"),
});

const SearchMoviesParamsSchema = PaginationParamsSchema.extend({
  query: z.string().describe("Search query"),
  include_adult: z.boolean().optional().describe("Include adult movies"),
  year: z.number().optional().describe("Year"),
});

type Movie = z.infer<typeof MovieSchema>;
type Movies = z.infer<typeof MoviesSchema>;
type MovieDetails = z.infer<typeof MovieDetailsSchema>;
type MovieDetailsParams = z.infer<typeof MovieDetailsParamsSchema>;
type SearchMoviesParams = z.infer<typeof SearchMoviesParamsSchema>;

export type {
  Movie,
  MovieDetails,
  MovieDetailsParams,
  Movies,
  SearchMoviesParams,
};
export {
  MovieDetailsParamsSchema,
  MovieDetailsSchema,
  MovieSchema,
  MoviesSchema,
  SearchMoviesParamsSchema,
};
