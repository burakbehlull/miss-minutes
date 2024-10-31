// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: { port: 8000 },

  vite: {
  resolve: {
    alias: {
      '@sass': '/src/sass',
      },
	  },
	},

  integrations: [react()]
})