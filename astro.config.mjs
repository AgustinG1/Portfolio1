// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://AgustinG1.github.io/Portfolio1',
  base: '/Portfolio1',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()]
});