# AGENTS.md

## Overview

PXL UI is a shadcn component registry with a pixel/retro aesthetic, intended for
widgets and small screens. It includes React components, styles, fonts, icons,
data schemas, and feature compositions. Documentation and demos are published
as a static website built with Astro and Starlight.

## Repository Structure

```
app/            # Starlight/Astro documentation website
  components/   # Documentation components
  content/      # Documentation pages
examples/       # Usage examples files
registry.json   # Shadcn registry root
registry/       # Shadcn registry files
  backgrounds/  # Background components
  colors/       # Color palettes
  displays/     # Screen resolutions and device mocks
  features/     # omain compositions such as calendar, conversation, cookbook, library, and magazine.
  fonts/        # Font families
  hooks/        # React hooks
  icons/        # Icon packs
  lib/          # Typescript utilities
  schemas/      # Zod schemas for different feature implementations
  specs/        # Standard vocabularies
  styles/       # Tailwind CSS utilities
  ui/           # Generic UI components
  widgets/      # Small sized components for widget based interfaces
```

## Development

```bash
pnpm install
pnpm dev          # Start docs site
pnpm build        # Build all packages
```

## Component Principles

- Components use Base UI primitives for accessibility.
- Tailwind CSS for styling — `cn()` utility for class merging.
- Each component should be fully self-contained when copied.
- `data-slot` attributes for targeting child elements.
- Support `className` prop for easy customization.

## Adding a New Component

1. Create in its corresponding `registry/` folder.
2. Expose it in its corresponding `registry.json`.
3. Write examples in `examples/`.
4. Add docs page in `app/content/docs/`.

Use the provided skills for up-to-date accessibility, theming and code style rules.