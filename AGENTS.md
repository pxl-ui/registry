# AGENTS.md

## Project overview

PXL UI is a shadcn component registry with a pixel/retro aesthetic, intended for
widgets and small screens. It includes React components, styles, fonts, icons,
data schemas, and feature compositions. Documentation and demos are published
as a static website built with Astro and Starlight.

Keep two surfaces consistent: the source installed in consumer projects
(`registry/`) and the website documenting it (`app/`, `examples/`). 

## Before making changes

- Check `git status --short` and preserve existing user changes, including
  untracked files. If Git's filesystem monitor fails, use
  `git -c core.fsmonitor=false status --short` without changing Git configuration.
- Read the relevant manifest and neighboring files before choosing names,
  categories, paths, or APIs.
- Keep changes scoped to the requested task. Avoid unnecessary repository-wide
  formatting, asset regeneration, or dependency updates.
- Local skills live in `.agents/skills/`. Consult the relevant skills for shadcn,
  React, composition, design, or transitions when applicable.

## Environment and commands

Use Node.js `>=22.12.0` and `pnpm@10.33.0`, as specified in `package.json`.
The project uses ES modules and strict TypeScript.

| Command | Purpose |
| --- | --- |
| `pnpm install --frozen-lockfile` | Install dependencies from the existing lockfile. |
| `pnpm dev` | Start the Astro development server. |
| `pnpm build` | Generate the static website in `dist/`. |
| `pnpm preview` | Serve the built website. |
| `pnpm typecheck` | Check typescript types |
| `pnpm lint` | Lint the code using biome |
| `pnpm format` | Format the code using biome |
| `pnpm astro --help` | Inspect commands supported by the local Astro version. |
| `pnpm validate` | Run `pnpm dlx shadcn@latest registry validate pxl-ui/registry`. Requires network access and targets the remote registry. It does not establish that local changes are correct. |

## Repository map

| Path | Responsibility |
| --- | --- |
| `registry.json` | Root registry: includes manifests and defines the `base` item. |
| `registry/ui/pxl/` | Reusable React components and UI manifest; the rich text editor has an additional manifest. |
| `registry/features/pxl/<feature>/` | Domain compositions such as calendar, conversation, cookbook, library, and magazine. |
| `registry/widgets/pxl/` | Composable widgets. |
| `registry/backgrounds/pxl/`, `registry/displays/pxl/` | Backgrounds and screen/device representations. |
| `registry/styles/pxl/` | Distributed CSS for pixels, animations, sprites, cursors, and typography. |
| `registry/fonts/pxl/`, `registry/colors/pxl/`, `registry/icons/pxl/` | Registry fonts, palettes, and icons. |
| `registry/hooks/pxl/`, `registry/lib/` | Hooks and utilities; `registry/lib/utils.ts` exports `cn()`. |
| `registry/schemas/pxl/` | Zod schemas and format/protocol utilities. Some are split into directories. |
| `examples/` | React `.tsx` demos grouped by component or feature. |
| `app/content/docs/` | MDX documentation grouped by category. |
| `app/components/` | Website components and preview/installation tools. |
| `app/components/starlight/` | Starlight UI overrides. |
| `app/lib/` | Registry loading, example loading, classification, and website routes. |
| `app/lib/starlight/` | Local loaders and schemas used by content collections. |
| `app/styles/global.css` | Website CSS entry point: Tailwind, fonts, PXL styles, and tokens. |
| `app/styles/starlight.css` | Documentation styling overrides. |
| `app/public/` | Static assets: font binaries, sprites, cursors, and images. |
| `astro.config.mjs` | Integrations, navigation, overrides, base URL, and Vite configuration. |
| `tests/schemas/` | Schema tests using `node:test` and `node:assert/strict`; check their Git status. |

`dist/`, `.astro/`, and `node_modules/` are ignored outputs/dependencies. Edit
source files rather than these directories.

## How the registry works

`app/lib/registry.ts` imports `registry.json`, discovers manifests using
`import.meta.glob`, and loads those listed in `include`. Items are stored in a
`Map` keyed by `name`: names must be unique across the registry.

- Each `files[].path` resolves relative to its manifest directory.
- `files[].target` describes the destination in the consumer project, using
  conventions such as `@ui/pxl/button.tsx`. It is not a repository path.
- `dependencies` declares external packages; `registryDependencies` references
  other items using identifiers such as `pxl-ui/registry/button`.
- `categories` drives listings, classification, and routing. Follow the relevant
  family's convention and review `kind()`, `toRouteId()`, and `fromRouteId()`
  when introducing categories or families.
- `app/lib/files.ts` loads source files as text. `app/components/Install.astro`
  uses this source and metadata to show CLI and manual installation instructions.

The configured build is `astro build`. There is no separate
`shadcn registry build` script or registry JSON endpoint in `app/pages/`. The registry follows the github registry spec, so there is no need to build anything on that side.

## Imports and conventions

Use `tsconfig.json` as the reference for local aliases:

- `~/*` → `app/*`; `~/examples/*` → `examples/*`.
- `@/components/ui/*` → `registry/ui/*`; equivalent mappings exist for
  backgrounds, displays, features, colors, fonts, icons, styles, and widgets.
- `@/hooks/*` → `registry/hooks/*`.
- `@/lib/schemas/*` → `registry/schemas/*`; `@/lib/*` → `registry/lib/*`.
- `@/*` → `registry/*`.

For example, `@/components/ui/pxl/button` imports
`registry/ui/pxl/button.tsx`. `components.json` configures aliases for the shadcn
CLI and does not reproduce every TypeScript mapping; check both files before
installing or moving code.

- The stack is Astro, React 19, Tailwind CSS 4, Base UI, and Zod 4. Do not apply
  Next.js conventions or assume Radix APIs; `rsc` is `false`.
- Follow neighboring component patterns: typed props, named exports,
  `data-slot`, `cva` for variants, and `cn()` for class composition where relevant.
- Preserve the PXL aesthetic through `pixel-*` utilities, fonts, and semantic
  tokens. Reuse existing components, variants, and styles.
- Maintain accessibility, keyboard navigation, visible focus, and disabled/invalid
  states. Check Base UI trigger and overlay composition.
- Distributed code should not depend on `~/...` or `examples/`: those sources
  belong to the website and are not installed with the component.
- Match the surrounding file's formatting; Biome specifies spaces and double
  quotes for JavaScript. Avoid unrelated formatting changes.
- Keep repository documentation, agent instructions, and examples in English
  unless explicitly requested otherwise.

## Adding or changing functionality

1. Locate the source, its manifest entry, demos, and MDX documentation.
2. Implement in `registry/<family>/pxl/`, following neighboring APIs and styles.
3. Update the manifest: unique name, files, targets, dependencies, and categories.
   Add any new manifest to the root `registry.json` `include` array.
4. Add or adjust demos in `examples/<name>/`. Every discovered `.tsx` file is
   treated as a demo and must default-export a component; avoid placing `.tsx`
   helpers without default exports in this tree.
5. Update MDX in `app/content/docs/`. Use the website components:
   `<ComponentPreview src="button/preview" />` maps to
   `examples/button/preview.tsx`; `<Install item="button" />` uses the registry
   item name. Review navigation in `astro.config.mjs` when adding pages, as it
   combines explicit links with autogenerated sections.
6. When changing schemas, preserve public exports and check valid and invalid
   inputs as well as compatibility with previously supported formats.

## Rendering, routes, and validation

- `app/lib/examples.ts` discovers demos using `import.meta.glob`;
  `ComponentRenderer.tsx` loads them with `React.lazy` and `Suspense`.
- `app/pages/examples/[...path].astro` generates static demo routes and uses
  `client:load`, with `client:only` exceptions listed in `clientOnlyPaths`.
  Guard browser APIs during SSR; review these exceptions when a demo requires
  client-only execution.
- Development has no base prefix; production uses `/registry`, with
  `https://pxl-ui.github.io` configured as the site. Reuse `url()` from
  `app/lib/utils.ts` for website links and check assets and previews under the
  production prefix.
- For code, manifest, MDX, or configuration changes, run `pnpm build` when the
  environment permits. A successful build does not replace type checking or
  behavioral tests.
- For UI changes, inspect the demo and its documentation page, including light
  and dark themes, small screens, and keyboard interaction as relevant.
- Schema tests use TypeScript and extensionless imports. No test runner is
  configured in `package.json`: verify how to execute them in the available
  environment before assuming a direct `node --test` command works.
- For documentation-only changes such as this file, checking paths, commands,
  and `git diff --check` is sufficient; rebuilding the website is unnecessary.
- Report completed checks and any failures or limitations. Distinguish existing
  problems from those introduced by the change.

## Publishing

`.github/workflows/deploy.yml` builds with `withastro/action` and deploys to
GitHub Pages on pushes to `main` or manual runs. Account for this behavior when
proposing publication changes. Update this file when scripts, aliases,
structure, or the distribution process change.
