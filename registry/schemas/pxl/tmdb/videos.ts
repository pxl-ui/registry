import { z } from "zod";

const VideoSchema = z.object({
  iso_639_1: z.string().describe("Spoken language ISO 639-1 code"),
  iso_3166_1: z.string().describe("Production country ISO 3166-1 Alpha-2 code"),
  name: z.string().describe("Video name"),
  key: z.string().describe("Video key"),
  site: z.literal("YouTube").describe("Video site"),
  size: z.number().describe("Video size"),
  type: z.literal("Teaser").describe("Video type"),
  official: z.boolean().describe("Video official"),
  published_at: z.string().describe("Video published at"),
  id: z.string().describe("Video ID"),
});

const VideosSchema = z.object({
  id: z.number().describe("Video ID"),
  results: z.array(VideoSchema).describe("Videos"),
});

type Video = z.infer<typeof VideoSchema>;
type Videos = z.infer<typeof VideosSchema>;

export type { Video, Videos };
export { VideoSchema, VideosSchema };
