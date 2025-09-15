import bun from 'astro-bun-adapter';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    server: {
      host: true,
      port: 4325,
    },
    prefetch: false,
    adapter: bun(),
    integrations: [
    ],
    devToolbar: {
        enabled: false,
    },
});
