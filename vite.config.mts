import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [],
  build: {
    target: 'esnext',
  },
  mode: 'development',
  server: {
    port: 3000,
    watch: {
      usePolling: true,
      interval: 100,
      ignored: ['**/node_modules/**', '**/public/**', '**/assets/**'],
    },
  },
  clearScreen: false,
});
