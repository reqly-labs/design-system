import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        tokens: 'src/tokens/index.ts',
        themes: 'src/themes/index.ts',
        assets: 'src/assets/index.ts',
        css: 'src/css.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    treeshake: true,
    sourcemap: false,
    minify: false,
});
