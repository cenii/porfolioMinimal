// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// Configuración SSR
export default defineConfig({
  output: 'server',
  adapter: vercel({
    functionPerRoute: false,
  }),
  site: 'https://hugoceniceros.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});