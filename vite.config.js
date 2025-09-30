import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'ProScan App',
        short_name: 'ProScan',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4CAF50',
        icons: [
          {
            src: '/proscan/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/proscan/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  // GitHub Pages base path to ensure assets and SW register under correct scope
  base: "/proscan/",
});
