// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// Configuración SSR
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://hugoceniceros.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});