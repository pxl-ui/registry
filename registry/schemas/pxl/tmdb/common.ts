import { z } from "zod";

const GenreSchema = z.object({
  id: z.number().describe("Unique identifier for the genre"),
  name: z.string().describe("Genre name"),
});

const LanguageSchema = z.object({
  iso_639_1: z.string().describe("Spoken language ISO 639-1 code"),
  name: z.string().describe("Spoken language name"),
  english_name: z.string().describe("Spoken language English name"),
});

const PaginationParamsSchema = z
  .object({
    page: z.number().optional().describe("Page number"),
    language: z.string().optional().describe("Language code"),
  })
  .describe("Pagination parameters");

const ProductionCompanySchema = z.object({
  id: z.number().describe('Unique identifier for the production company'),
  name: z.string().describe('Production company name'),
  logo_path: z.string().nullable().describe('Logo path (relative URL)'),
  origin_country: z.string().describe('Production company origin country'),
})

const ProductionCountrySchema = z.object({
  iso_3166_1: z.string().describe('Production country ISO 3166-1 Alpha-2 code'),
  name: z.string().describe('Production country name'),
});


type Genre = z.infer<typeof GenreSchema>;
type Language = z.infer<typeof LanguageSchema>;
type PaginationParams = z.infer<typeof PaginationParamsSchema>;
type ProductionCompany = z.infer<typeof ProductionCompanySchema>;
type ProductionCountry = z.infer<typeof ProductionCountrySchema>;


export type {
  Genre,
  Language,
  PaginationParams,
  ProductionCompany,
  ProductionCountry,
};
export {
  GenreSchema,
  LanguageSchema,
  PaginationParamsSchema,
  ProductionCompanySchema,
  ProductionCountrySchema,
};
