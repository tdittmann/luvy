/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {defineConfig} from 'vite'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
      filename: 'service-worker.js',
      manifest: {
        name: "Lovy",
        short_name: "Lovy",
        icons: [
          {src: '/img/icons/192x192.png', sizes: '192x192', type: 'image/png'},
          {src: '/img/icons/512x512.png', sizes: '512x512', type: 'image/png'},
          {
            src: '/img/icons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "maskable"
          },
          {
            src: '/img/icons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable"
          },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
