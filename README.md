# Reqly Design System

[![npm version](https://img.shields.io/npm/v/@reqly/design-system?color=0ea5e9&label=npm)](https://www.npmjs.com/package/@reqly/design-system)
[![license](https://img.shields.io/npm/l/@reqly/design-system?color=64748b)](https://www.npmjs.com/package/@reqly/design-system)
[![types](https://img.shields.io/badge/types-TypeScript-3178c6)](https://www.typescriptlang.org/)
[![module](https://img.shields.io/badge/module-ESM%20%2B%20CJS-f59e0b)](./package.json)

Design tokens, themes and brand assets for the open source Reqly ecosystem.

`@reqly/design-system` is the visual foundation shared by Reqly applications. It
keeps color, spacing, typography, radius, shadows, transitions and brand metadata
in one typed package, so every Reqly interface can look and behave consistently
without copying CSS between projects.

## Why This Package Exists

Reqly is built as an open source ecosystem, not as a single isolated app. This
library exists to make that ecosystem easier to maintain:

- One source of truth for Reqly visual decisions.
- Framework-agnostic tokens that work in React, Vite, Next.js, Node scripts or
  any TypeScript project.
- Light and dark themes modeled as typed objects.
- CSS variable helpers for real applications that need runtime theming.
- Stable subpath exports for tree-shakeable usage.

This package currently provides foundations, not ready-made UI components. Build
buttons, inputs and layouts in your app using these tokens as the contract.

## Installation

```bash
npm install @reqly/design-system
```

With other package managers:

```bash
pnpm add @reqly/design-system
yarn add @reqly/design-system
bun add @reqly/design-system
```

## Quick Start

Use the package directly from TypeScript:

```ts
import { brand, dark, tokens } from '@reqly/design-system';

console.log(brand.name); // Reqly
console.log(tokens.radius.base); // 6px
console.log(dark.colors.primary); // oklch(...)
```

Generate CSS variables from the official themes:

```ts
import { createThemeCss, dark, light } from '@reqly/design-system';

const css = createThemeCss(light, dark);
```

The generated CSS follows this shape:

```css
:root {
    --color-bg: ...;
    --color-primary: ...;
    --radius: 6px;
    --font-sans: ...;
}

.dark {
    --color-bg: ...;
    --color-primary: ...;
}
```

## What Is Included

| Area | Exports | Purpose |
| --- | --- | --- |
| Tokens | `tokens`, `radius`, `spacing`, `typography`, `breakpoints`, `transitions` | Shared visual primitives |
| Themes | `light`, `dark`, `themes`, `defaultTheme`, `defaultThemeName`, `getTheme` | Reqly light/dark theme model |
| Assets | `brand` | Brand metadata and public asset URLs |
| CSS helpers | `createThemeCss`, `themeToCss`, `themeCssVariables`, `tokenCssVariables` | CSS variable generation |

## Package Exports

```ts
import { tokens, light, dark, brand } from '@reqly/design-system';
import { radius, spacing } from '@reqly/design-system/tokens';
import { themes, defaultThemeName } from '@reqly/design-system/themes';
import { createThemeCss } from '@reqly/design-system/css';
import { brand as reqlyBrand } from '@reqly/design-system/assets';
```

Use the root export for convenience. Use subpath exports when you want finer
bundle boundaries or clearer ownership in larger projects.

## Applying In A Real App

The most common integration is:

1. Install the package.
2. Generate or inject the CSS variables.
3. Map those variables to your styling system.
4. Toggle `light` / `dark` classes on the document root.

### Runtime Style Injection

This approach works well in Vite and React apps:

```ts
import { createThemeCss, dark, light } from '@reqly/design-system';

const styleId = 'reqly-design-system';

export function injectReqlyTheme() {
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = createThemeCss(light, dark, {
        lightSelector: ':root, html.light',
        darkSelector: 'html.dark',
    });

    document.head.prepend(style);
}
```

Then call it once before rendering your app:

```tsx
import { createRoot } from 'react-dom/client';
import { injectReqlyTheme } from './design-system';
import { App } from './App';

injectReqlyTheme();

createRoot(document.getElementById('root')!).render(<App />);
```

### Theme Toggle

Reqly defaults to the dark theme. A simple theme toggle can be implemented by
changing classes on `document.documentElement`:

```ts
import { defaultThemeName, type ThemeName } from '@reqly/design-system/themes';

let theme: ThemeName = defaultThemeName;

export function applyTheme(nextTheme: ThemeName) {
    theme = nextTheme;

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
}
```

### Tailwind CSS v4 Example

The generated variables are intentionally named to work well with Tailwind v4
`@theme inline` mappings:

```css
@import 'tailwindcss';

@custom-variant dark (&:is(.dark *));

@theme inline {
    --color-background: var(--color-bg);
    --color-foreground: var(--color-text);
    --color-card: var(--color-surface);
    --color-card-foreground: var(--color-text);
    --color-primary: var(--color-primary);
    --color-primary-foreground: var(--color-primary-fg);
    --color-border: var(--color-border);
    --color-muted-foreground: var(--color-text-muted);

    --color-success: var(--color-success);
    --color-warning: var(--color-warning);
    --color-danger: var(--color-danger);
    --color-info: var(--color-info);

    --radius-sm: var(--radius-sm);
    --radius-md: var(--radius-md);
    --radius-lg: var(--radius-lg);

    --font-sans: var(--font-sans);
    --font-mono: var(--font-mono);
}

body {
    background: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
}
```

After that, your app can use normal Tailwind utilities:

```tsx
export function Card() {
    return (
        <section className="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <h2 className="text-sm font-semibold">Reqly workspace</h2>
            <p className="text-sm text-muted-foreground">Powered by shared design tokens.</p>
        </section>
    );
}
```

## CSS Variable Reference

The CSS helpers emit variables for:

- Core colors: `--color-bg`, `--color-surface`, `--color-surface-hover`,
  `--color-surface-raised`, `--color-border`, `--color-border-subtle`
- Text colors: `--color-text`, `--color-text-muted`, `--color-text-subtle`
- Brand and feedback colors: `--color-primary`, `--color-primary-hover`,
  `--color-primary-fg`, `--color-success`, `--color-warning`,
  `--color-danger`, `--color-info`
- HTTP method colors: `--color-method-get`, `--color-method-post`,
  `--color-method-put`, `--color-method-delete`, `--color-method-patch`
- Shape, shadow and motion: `--radius-*`, `--shadow-*`, `--transition-*`
- Typography: `--font-sans`, `--font-mono`

## Development

Clone the repository, install dependencies and run the package scripts:

```bash
npm install
npm run typecheck
npm run build
```

Available scripts:

| Command | Description |
| --- | --- |
| `npm run build` | Bundles ESM, CommonJS and type declarations into `dist/` |
| `npm run dev` | Runs `tsup` in watch mode for package development |
| `npm run typecheck` | Runs TypeScript validation without emitting files |
| `npm run format` | Formats the package with Prettier |
| `npm run prepublishOnly` | Builds the package before publishing |

## Release Checklist

Before publishing a new version:

1. Update tokens, themes or assets in `src/`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Update the package version with `npm version patch`, `minor` or `major`.
5. Publish with `npm publish --access public`.

## Design Principles

- **Consistency first**: shared primitives should prevent visual drift across
  Reqly projects.
- **Typed by default**: tokens and themes are TypeScript values, not loose JSON.
- **Framework-agnostic core**: the package should be useful beyond one frontend
  stack.
- **Runtime-friendly theming**: CSS variable helpers keep theme switching simple.
- **Open source maintainability**: contributors should be able to understand and
  apply the system without private context.

## License

[MIT](./LICENSE.md) © Artur Bomtempo Colen
