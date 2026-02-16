import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
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