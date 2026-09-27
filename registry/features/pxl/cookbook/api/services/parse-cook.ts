import { Parser } from "@cooklang/cooklang";
import { getLogger } from "@logtape/logtape";

import type { Cooklang } from "@/lib/schemas/pxl/cooklang";

const logger = getLogger(["cookbook", "parse-cook"]);
const parser = new Parser();

async function parseCook(rawContent: string): Promise<Cooklang.Document> {
  try {
    const recipe = parser.parse(rawContent) as Cooklang.Document;

    return recipe;
  } catch (err) {
    logger.error((err as Error).message);
    throw new Error(`Error parsing cook. Reason: ${(err as Error).message}`);
  }
}

export { parseCook };
