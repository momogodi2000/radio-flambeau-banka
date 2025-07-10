
// vitest.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    // This is needed for hot module replacement
    fastRefresh: true,
  })],
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: 'dist',
    minify: true
  },
  css: {
    postcss: './postcss.config.js'
  }
});