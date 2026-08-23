import { filter } from "~/lib/registry";


type IconPack = {
  name: string;
  variants: Record<
    string, 
    Record<string, string>
  >;
}

const iconPacks = new Map<string, IconPack>();

Object.entries(
  import.meta.glob<string>("/registry/**/svg/**/*.svg", {
    query: "?raw",
    eager: true,
    import: "default",
  }),
).forEach(([path, icon]) => {
  const match = path.match(
    /^\/registry\/icons\/([^/]+)\/svg\/(.+)$/
  );

  if (!match) {
    throw new Error(`Invalid icon path: ${path}`);
  }

  const [, pack, rest] = match;

  const parts = rest.split('/');
  const filename = parts.pop()!;

  if (!filename.endsWith('.svg')) {
    throw new Error(`Invalid icon path: ${path}`);
  }

  const name = filename.slice(0, -4);
  const variant = parts.length > 0 ? parts.join('/') : 'default';

  if (!iconPacks.has(pack)) {
    iconPacks.set(pack, { name: pack, variants: {} });
  }
  const iconPack = iconPacks.get(pack) as IconPack;

  if (!iconPack.variants[variant]) {
    iconPack.variants[variant] = {};
  }

  iconPack.variants[variant][name] = icon;
});

const lists = {
  cursors: filter({
    categories: ["icons", "cursors"],
  }),
  flags: filter({
    categories: ["icons", "flags"],
  }),
};

export { iconPacks, lists };

export default {
  iconPacks,
  lists,
};
