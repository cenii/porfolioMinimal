// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite' // Importante: esto evita que Vercel busque una redirección física
    }
  },
  site: 'https://hugoceniceros.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});