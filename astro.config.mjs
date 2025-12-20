// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// Configuración estática - el i18n funciona perfectamente con static site generation
export default defineConfig({
  output: 'static',
  site: 'https://hugoceniceros.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});