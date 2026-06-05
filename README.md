# Reqly Design System

Design tokens, themes and brand assets for the Reqly ecosystem.

This package is the single source of truth for Reqly's visual identity. It ships
framework-agnostic design tokens, light/dark themes and brand assets as typed
TypeScript values, plus helpers to emit the exact CSS variables used by the Reqly
applications.

## Installation

```bash
npm install @reqly/design-system
```

## What's inside

- **Tokens** — radius, typography, spacing, breakpoints and transitions.
- **Themes** — `light` and `dark` color and shadow definitions (OKLCH).
- **Assets** — brand metadata and asset URLs (name, description, mascot).
- **CSS helpers** — generate `:root` / `.dark` CSS variables that match the
  Reqly client's conventions.

## Usage

### Tokens and themes as values

```ts
import { tokens, dark, light, brand } from '@reqly/design-system';

tokens.radius.base; // '6px'
dark.colors.primary; // 'oklch(0.76 0.2 154)'
brand.assets.mascot; // mascot image URL
```

Subpath imports are available for finer-grained, tree-shakeable access:

```ts
import { radius } from '@reqly/design-system/tokens';
import { themes } from '@reqly/design-system/themes';
import { brand } from '@reqly/design-system/assets';
import { createThemeCss } from '@reqly/design-system/css';
```

### Generating CSS variables

```ts
import { createThemeCss, light, dark } from '@reqly/design-system';

const css = createThemeCss(light, dark);
// :root { --color-bg: ...; --radius: 6px; ... }
// .dark { --color-bg: ...; ... }
```

Write the result to a `.css` file at build time, or inject it at runtime. The
variable names (`--color-*`, `--shadow`, `--radius`, `--transition`,
`--font-*`) mirror the ones already consumed by the Reqly client, so existing
Tailwind v4 `@theme inline` mappings keep working unchanged.

### Custom selectors

```ts
createThemeCss(light, dark, {
    lightSelector: ':root',
    darkSelector: 'html.dark',
});
```

## Theme model

Reqly defaults to the **dark** theme. Themes are applied by toggling a `dark` /
`light` class on the document root:

```ts
import { defaultThemeName } from '@reqly/design-system';

document.documentElement.classList.toggle('dark', theme === 'dark');
```

## Build

```bash
npm run build      # bundle ESM + CJS + type declarations to dist/
npm run typecheck  # type-only validation
```

## License

MIT
