export const radius = {
    xs: '3px',
    sm: '4px',
    base: '6px',
    md: '8px',
    lg: '10px',
    xl: '14px',
    full: '9999px',
} as const;

export type Radius = typeof radius;
export type RadiusToken = keyof Radius;
