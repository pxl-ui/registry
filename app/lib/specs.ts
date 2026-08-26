import iso31661 from "@/specs/iso/3166-1.json" with { type: "json" };
import w3cCursors from "@/specs/pxl/cursors.json" with { type: "json" };
import emoji18 from "@/specs/unicode/emoji-18.0.json" with { type: "json" };

const countries = new Map<
  string,
  {
    id: number;
    title: string;
    alpha2: string;
    alpha3: string;
  }
>(iso31661.entries.map((ct) => [ct.id.toString(), ct]));

const cursors = new Map<
  string,
  {
    id: number;
    mac_os?: string;
    css?: string;
    title: string;
    description: string;
    category: string;
  }
>(w3cCursors.entries.map((cr) => [cr.id.toString(), cr]));

const emojis = new Map<
  string,
  {
    id: number;
    title: string;
    code: string;
    symbol: string;
  }
>(emoji18.entries.map((em) => [em.id.toString(), em]));

export { countries, cursors, emojis };
