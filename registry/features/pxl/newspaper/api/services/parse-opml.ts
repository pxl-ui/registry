import { getLogger } from "@logtape/logtape";
import { parseOpml as parse } from "feedsmith";

import type { DeepPartial } from "@/lib/pxl/types";
import type { Opml } from "@/lib/schemas/pxl/opml";

const logger = getLogger(["newspaper", "parse-opml"]);

async function parseOpml(
  rawContent: string,
): Promise<DeepPartial<Opml.Document>> {
  try {
    const opml = parse(rawContent);

    if (!opml.body?.outlines) {
      throw new Error("OPML has no outlines");
    }

    return opml;
  } catch (err) {
    logger.error(err as Error);
    throw new Error(`Error parsing opml. Reason: ${(err as Error).message}`);
  }
}

export { parseOpml };
