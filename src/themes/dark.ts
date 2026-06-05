import type { Theme } from './types';

export const dark: Theme = {
    name: 'dark',
    colors: {
        bg: 'oklch(0.12 0.02 160)',
        surface: 'oklch(0.16 0.025 160)',
        surfaceHover: 'oklch(0.2 0.03 160)',
        surfaceRaised: 'oklch(0.24 0.036 160)',
        border: 'oklch(0.5 0.07 160 / 0.35)',
        borderSubtle: 'oklch(0.5 0.05 160 / 0.22)',
        text: 'oklch(0.93 0.02 160)',
        textMuted: 'oklch(0.74 0.03 160)',
        textSubtle: 'oklch(0.55 0.03 160)',
        primary: 'oklch(0.76 0.2 154)',
        primaryHover: 'oklch(0.81 0.2 154)',
        primaryFg: 'oklch(0.14 0.02 155)',
        success: 'oklch(0.75 0.18 152)',
        warning: 'oklch(0.76 0.16 75)',
        danger: 'oklch(0.68 0.22 25)',
        info: 'oklch(0.72 0.16 230)',
        method: {
            get: 'oklch(0.72 0.17 152)',
            post: 'oklch(0.76 0.16 75)',
            put: 'oklch(0.72 0.16 230)',
            delete: 'oklch(0.68 0.22 25)',
            patch: 'oklch(0.7 0.2 300)',
        },
    },
    shadows: {
        sm: '0 1px 2px oklch(0 0 0 / 0.4)',
        base: '0 1px 4px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(1 0 0 / 0.04)',
        lg: '0 4px 20px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.04)',
        xl: '0 8px 40px oklch(0 0 0 / 0.7)',
    },
};
