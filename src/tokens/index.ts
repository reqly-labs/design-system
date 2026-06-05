export * from './breakpoints';
export * from './radius';
export * from './spacing';
export * from './transitions';
export * from './typography';

import { breakpoints } from './breakpoints';
import { radius } from './radius';
import { spacing } from './spacing';
import { transitions } from './transitions';
import { typography } from './typography';

export const tokens = {
    radius,
    typography,
    spacing,
    breakpoints,
    transitions,
} as const;

export type Tokens = typeof tokens;
