import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3dgs-web-viewer/',
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    }
  },
  build: {
    outDir: 'docs',
    target: 'esnext'
  }
});