const CDN_BASE =
    'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/reqly';

export const brand = {
    name: 'Reqly',
    tagline: 'API Client',
    description: 'A modern, lightweight HTTP client for developers.',
    repositoryUrl: 'https://github.com/arturbomtempo-dev/reqly',
    assets: {
        mascot: `${CDN_BASE}/mascot.png`,
    },
} as const;

export type Brand = typeof brand;
