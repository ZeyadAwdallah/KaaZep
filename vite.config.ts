import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages is served from /KaaZep/
  base: '/KaaZep/',
  build: {
    // So we can deploy from the docs folder on main
    outDir: 'docs',
  },
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
