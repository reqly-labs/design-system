import type { Theme } from './themes/types';
import { radius } from './tokens/radius';
import { transitions } from './tokens/transitions';
import { fontFamily } from './tokens/typography';

export function themeCssVariables(theme: Theme): Record<string, string> {
    const { colors, shadows } = theme;

    return {
        '--color-bg': colors.bg,
        '--color-surface': colors.surface,
        '--color-surface-hover': colors.surfaceHover,
        '--color-surface-raised': colors.surfaceRaised,
        '--color-border': colors.border,
        '--color-border-subtle': colors.borderSubtle,
        '--color-text': colors.text,
        '--color-text-muted': colors.textMuted,
        '--color-text-subtle': colors.textSubtle,
        '--color-primary': colors.primary,
        '--color-primary-hover': colors.primaryHover,
        '--color-primary-fg': colors.primaryFg,
        '--color-danger-fg': colors.dangerFg,
        '--color-success': colors.success,
        '--color-warning': colors.warning,
        '--color-danger': colors.danger,
        '--color-info': colors.info,
        '--color-method-get': colors.method.get,
        '--color-method-post': colors.method.post,
        '--color-method-put': colors.method.put,
        '--color-method-delete': colors.method.delete,
        '--color-method-patch': colors.method.patch,
        '--shadow-sm': shadows.sm,
        '--shadow': shadows.base,
        '--shadow-lg': shadows.lg,
        '--shadow-xl': shadows.xl,
    };
}

export function tokenCssVariables(): Record<string, string> {
    return {
        '--radius-xs': radius.xs,
        '--radius-sm': radius.sm,
        '--radius': radius.base,
        '--radius-md': radius.md,
        '--radius-lg': radius.lg,
        '--radius-xl': radius.xl,
        '--radius-full': radius.full,
        '--transition-fast': transitions.fast,
        '--transition': transitions.base,
        '--transition-slow': transitions.slow,
        '--font-sans': fontFamily.sans,
        '--font-mono': fontFamily.mono,
    };
}

function toBlock(selector: string, variables: Record<string, string>): string {
    const body = Object.entries(variables)
        .map(([key, value]) => `    ${key}: ${value};`)
        .join('\n');

    return `${selector} {\n${body}\n}`;
}

export function themeToCss(theme: Theme, selector: string): string {
    return toBlock(selector, themeCssVariables(theme));
}

export interface CssOptions {
    lightSelector?: string;
    darkSelector?: string;
}

export function createThemeCss(light: Theme, dark: Theme, options: CssOptions = {}): string {
    const lightSelector = options.lightSelector ?? ':root';
    const darkSelector = options.darkSelector ?? '.dark';

    return [
        toBlock(lightSelector, {
            ...tokenCssVariables(),
            ...themeCssVariables(light),
        }),
        themeToCss(dark, darkSelector),
    ].join('\n\n');
}
