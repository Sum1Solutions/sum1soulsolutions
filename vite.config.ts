import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  base: '/',  // Ensure base is set for proper asset loading
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // For SPA routing, we'll handle the 404 with a Cloudflare Pages Function
  // This will be handled by the _routes.json and _redirects file
})