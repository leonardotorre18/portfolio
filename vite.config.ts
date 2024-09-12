/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react({ 
    fastRefresh: false 
  }), Sitemap({ hostname: 'https://leonardotorre.netlify.app' })],
  test:{
    globals: true,
    fastRefresh: false,
    environment: 'jsdom',
  }
}))
