import { getLogger } from "@logtape/logtape";
import { parseFeed as parse } from "feedsmith";

import type { DeepPartial } from "@/lib/pxl/types";
import type { Atom } from "@/lib/schemas/pxl/atom";
import type { JsonFeed } from "@/lib/schemas/pxl/json-feed";
import type { Rdf } from "@/lib/schemas/pxl/rdf";
import type { Rss } from "@/lib/schemas/pxl/rss";

const logger = getLogger(["newspaper", "parse-feed"]);

async function parseFeed(
  rawContent: string,
): Promise<
  | { format: "atom"; feed: DeepPartial<Atom.Feed> }
  | { format: "rdf"; feed: DeepPartial<Rdf.Feed> }
  | { format: "rss"; feed: DeepPartial<Rss.Feed> }
  | { format: "json"; feed: DeepPartial<JsonFeed.Feed> }
> {
  try {
    const feed = parse(rawContent);

    return feed;
  } catch (err) {
    logger.error((err as Error).message);
    throw new Error(`Error parsing feed. Reason: ${(err as Error).message}`);
  }
}

export { parseFeed };
