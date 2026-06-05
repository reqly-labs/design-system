export const fontFamily = {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    mono: "ui-monospace, 'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace",
} as const;

export const fontSize = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
} as const;

export const fontWeight = {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
} as const;

export const lineHeight = {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.625',
} as const;

export const typography = {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
} as const;

export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type LineHeight = typeof lineHeight;
export type Typography = typeof typography;
