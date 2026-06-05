export interface MethodColors {
    get: string;
    post: string;
    put: string;
    delete: string;
    patch: string;
}

export interface ThemeColors {
    bg: string;
    surface: string;
    surfaceHover: string;
    surfaceRaised: string;
    border: string;
    borderSubtle: string;
    text: string;
    textMuted: string;
    textSubtle: string;
    primary: string;
    primaryHover: string;
    primaryFg: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    method: MethodColors;
}

export interface ThemeShadows {
    sm: string;
    base: string;
    lg: string;
    xl: string;
}

export type ThemeName = 'light' | 'dark';

export interface Theme {
    name: ThemeName;
    colors: ThemeColors;
    shadows: ThemeShadows;
}
