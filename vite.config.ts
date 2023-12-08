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
        background_color:'#05FF00'
        ,
        icons: [
           {
            src: './icons/Kaazep.svg',
            type: 'image/svg+xml',
            sizes: 'any',
          }
        ],
      },
    }),
  ],
})
