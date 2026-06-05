export * from './assets';
export * from './css';
export * from './themes';
export * from './tokens';

import { brand } from './assets';
import { defaultTheme, defaultThemeName, themes } from './themes';
import { tokens } from './tokens';

export const designSystem = {
    tokens,
    themes,
    defaultTheme,
    defaultThemeName,
    brand,
} as const;

export type DesignSystem = typeof designSystem;
