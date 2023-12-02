import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
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
            src: 'Kaazep.svg',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'Kaazep.svg',
            type: 'image/svg+xml', 
            sizes: '192x192',
          },
          {
            src: 'Kaazep.svg',
            type: 'image/svg+xml', 
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
})
