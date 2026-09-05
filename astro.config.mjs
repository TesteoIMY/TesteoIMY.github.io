import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Configuración oficial para repositorio principal TesteoIMY.github.io
  site: 'https://TesteoIMY.github.io',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  build: {
    format: 'file'
  }
});
