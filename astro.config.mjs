// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercelServerless from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// Configuración SSR
export default defineConfig({
  output: 'server',
  adapter: vercelServerless(),
  site: 'https://hugoceniceros.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});