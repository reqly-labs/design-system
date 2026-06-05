export { dark } from './dark';
export { light } from './light';
export * from './types';

import { dark } from './dark';
import { light } from './light';
import type { Theme, ThemeName } from './types';

export const themes: Record<ThemeName, Theme> = {
    light,
    dark,
};

export const defaultThemeName: ThemeName = 'dark';
export const defaultTheme: Theme = dark;

export function getTheme(name: ThemeName): Theme {
    return themes[name];
}
