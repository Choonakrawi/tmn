import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { inject } from '@vercel/analytics'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      mode: 'auto'
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this value based on your needs (in kB)
  }
})
