import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages: set BASE_PATH to "/<repo-name>/" in CI.
  // Locally it defaults to "/".
  base: process.env.BASE_PATH ?? '/',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'KaaZep',
        short_name: 'KaaZep',
        description: 'Who Is The KaaZep',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/Kaazep.svg',
            type: 'image/svg+xml',
            sizes: 'any',
          }
        ],
      },
    }),
  ],
})
