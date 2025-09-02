/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve(__dirname, "src/app"),
      lib: resolve(__dirname, "src/lib"),
      api: resolve(__dirname, "src/api"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://lg.dd-ix.net',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.ts',
  },
})
