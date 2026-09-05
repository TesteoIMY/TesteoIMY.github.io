import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Placeholder para despliegue estático en GitHub Pages
  // Reemplazar 'https://usuario.github.io' y '/nombre-repositorio/' según tu configuración final
  site: 'https://usuario.github.io',
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
