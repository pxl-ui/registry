import {
  type Movie,
  type MovieDetails,
  type MovieDetailsParams,
  MovieDetailsParamsSchema,
  MovieDetailsSchema,
  MovieSchema,
  type Movies,
  MoviesSchema,
  type SearchMoviesParams,
  SearchMoviesParamsSchema,
} from "@/schemas/pxl/tmdb/movies";

import {
  type Episode,
  EpisodeSchema,
  type SearchSeriesParams,
  SearchSeriesParamsSchema,
  type Season,
  SeasonSchema,
  type Serie,
  type SerieDetails,
  type SerieDetailsParams,
  SerieDetailsParamsSchema,
  SerieDetailsSchema,
  SerieSchema,
  type Series,
  SeriesSchema,
} from "./tv-series";

const TMDBSchemas = {
  Episode: EpisodeSchema,
  Season: SeasonSchema,
  Serie: SerieSchema,
  SerieDetails: SerieDetailsSchema,
  SerieDetailsParams: SerieDetailsParamsSchema,
  Series: SeriesSchema,
  Movie: MovieSchema,
  MovieDetails: MovieDetailsSchema,
  MovieDetailsParams: MovieDetailsParamsSchema,
  Movies: MoviesSchema,
  SearchSeriesParams: SearchSeriesParamsSchema,
  SearchMoviesParams: SearchMoviesParamsSchema,
};

declare namespace TMDB {
  export type {
    Episode,
    Season,
    Serie,
    SerieDetails,
    SerieDetailsParams,
    Series,
    Movie,
    Movies,
    MovieDetails,
    MovieDetailsParams,
    SearchSeriesParams,
    SearchMoviesParams,
  };
}

export type {
  Episode,
  Movie,
  MovieDetails,
  MovieDetailsParams,
  Movies,
  SearchMoviesParams,
  SearchSeriesParams,
  Season,
  Serie,
  SerieDetails,
  SerieDetailsParams,
  Series,
  TMDB,
};
export {
  EpisodeSchema,
  MovieDetailsParamsSchema,
  MovieDetailsSchema,
  MovieSchema,
  MoviesSchema,
  SearchMoviesParamsSchema,
  SearchSeriesParamsSchema,
  SeasonSchema,
  SerieDetailsParamsSchema,
  SerieDetailsSchema,
  SerieSchema,
  SeriesSchema,
  TMDBSchemas,
};

export default TMDBSchemas;
