import type { Theme } from './types';

export const light: Theme = {
    name: 'light',
    colors: {
        bg: 'oklch(0.96 0.02 155)',
        surface: 'oklch(0.99 0.01 155)',
        surfaceHover: 'oklch(0.96 0.02 155)',
        surfaceRaised: 'oklch(0.94 0.025 155)',
        border: 'oklch(0 0 0 / 0.09)',
        borderSubtle: 'oklch(0 0 0 / 0.05)',
        text: 'oklch(0.14 0 0)',
        textMuted: 'oklch(0.48 0 0)',
        textSubtle: 'oklch(0.62 0 0)',
        primary: 'oklch(0.71 0.2 154)',
        primaryHover: 'oklch(0.66 0.2 154)',
        primaryFg: 'oklch(0.14 0.02 155)',
        dangerFg: 'oklch(0.98 0 0)',
        success: 'oklch(0.55 0.17 152)',
        warning: 'oklch(0.6 0.16 75)',
        danger: 'oklch(0.55 0.22 25)',
        info: 'oklch(0.55 0.16 230)',
        method: {
            get: 'oklch(0.52 0.17 152)',
            post: 'oklch(0.56 0.16 75)',
            put: 'oklch(0.52 0.16 230)',
            delete: 'oklch(0.52 0.22 25)',
            patch: 'oklch(0.52 0.2 300)',
        },
    },
    shadows: {
        sm: '0 1px 2px oklch(0 0 0 / 0.07)',
        base: '0 1px 4px oklch(0 0 0 / 0.1), 0 0 0 1px oklch(0 0 0 / 0.05)',
        lg: '0 4px 20px oklch(0 0 0 / 0.13), 0 0 0 1px oklch(0 0 0 / 0.05)',
        xl: '0 8px 40px oklch(0 0 0 / 0.18)',
    },
};
