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
      prefixDefaultLocale: false, // Si quieres que el español sea tudominio.com/
      fallbackType: 'redirect'    // Esto es clave para evitar el Server Error
    }
  },
  site: 'https://hugoceniceros.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});