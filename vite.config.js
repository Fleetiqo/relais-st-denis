import { defineConfig } from 'vite'

export default defineConfig({
  base: '/relais-st-denis/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
