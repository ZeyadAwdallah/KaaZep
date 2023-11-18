import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Secret-Z',
        short_name: 'Secret-Z',
        description: 'Who Is The Imposter',
        theme_color: '#000000',
        icons: [
          {
            src: 'Secret-Z.Svg',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'Secret-Z.Svg',
            type: 'image/svg+xml', // Correct MIME type for SVG
            sizes: '192x192',
          },
          {
            src: 'Secret-Z.Svg',
            type: 'image/svg+xml', // Correct MIME type for SVG
            sizes: '512x512',
          },
        ],
      },
    }) 
  ],
})
