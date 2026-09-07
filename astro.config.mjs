// @ts-check
import {defineConfig, fontProviders} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://sharcan.github.io',
    base: '/Autentica',

    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Cormorant Garamond',
            cssVariable: '--font-display',
            weights: [300, 400, 500, 600],
            styles: ['normal', 'italic'],
            subsets: ['latin', 'latin-ext'],
            fallbacks: ['Georgia', 'serif'],
        },
        {
            provider: fontProviders.google(),
            name: 'Jost',
            cssVariable: '--font-body',
            weights: [300, 400, 500],
            styles: ['normal'],
            subsets: ['latin', 'latin-ext'],
            fallbacks: ['Helvetica Neue', 'sans-serif'],
        },
    ]
});
