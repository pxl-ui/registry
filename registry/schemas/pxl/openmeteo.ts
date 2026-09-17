import z from "zod";

const ForecastSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),
  daily: z.object({
    time: z.array(z.string()),
    temperature_2m_max: z.array(z.number()),
    temperature_2m_mean: z.array(z.number()),
    temperature_2m_min: z.array(z.number()),
    weather_code: z.array(z.number()),
  }),
  daily_units: z.object( {
    temperature_2m_max: z.string(),
    temperature_2m_mean: z.string(),
    temperature_2m_min: z.string(),
  }),
  hourly: z.object({
    is_day: z.array(z.union([z.literal(0), z.literal(1)])),
    temperature_2m: z.array(z.number()),
    time: z.array(z.string()),
    weather_code: z.array(z.number()),
  }),
  hourly_units: z.object({
    temperature_2m: z.string(),
  }),
});

const OpenMeteoSchemas = {
  Forecast: ForecastSchema,
}

type Forecast = z.infer<typeof ForecastSchema>;

declare namespace OpenMeteo {
  export type { Forecast };
}


export type { Forecast, OpenMeteo };
export { ForecastSchema, OpenMeteoSchemas };
export default OpenMeteoSchemas;