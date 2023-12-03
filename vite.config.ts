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
            src: './src/assets/icons/manifest-icon-192.maskable.png',
            type: 'image', 
            sizes: '192x192',
          },
          {
            src: './src/assets/icons/manifest-icon-512.maskable.png',
            type: 'image', 
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
})
