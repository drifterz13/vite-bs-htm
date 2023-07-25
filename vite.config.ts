import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pf',
      fileName: 'ps-form',
    },
    outDir: './dist',
  },
  server: {
    port: 5173,
  },
})
