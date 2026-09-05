import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Configuración oficial para GitHub Pages
  site: 'https://TesteoIMY.github.io',
  base: '/revista-anfibias/',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  build: {
    format: 'file'
  }
});
