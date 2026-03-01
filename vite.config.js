import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/relais-st-denis/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
