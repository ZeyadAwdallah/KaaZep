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
        theme_color: '#242424',
        icons: [
          {
            src: 'Secret-Zb.Svg',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'Secret-Zb.Svg',
            type: 'image/svg+xml', 
            sizes: '192x192',
          },
          {
            src: 'Secret-Zb.Svg',
            type: 'image/svg+xml', 
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
})
