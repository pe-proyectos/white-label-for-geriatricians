import bun from 'astro-bun-adapter';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    server: {
      host: true,
      port: 4322,
    },
    prefetch: false,
    adapter: bun(),
    integrations: [
        tailwind(),
    ],
    devToolbar: {
        enabled: false,
    },
});
