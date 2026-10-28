import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://pdftoscan.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          pt: 'pt-BR',
          de: 'de-DE',
          fr: 'fr-FR',
          ja: 'ja-JP',
          zh: 'zh-CN',
          ru: 'ru-RU',
        },
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'og-image.svg', 'robots.txt', 'pdf.worker.min.js'],
      manifest: {
        name: 'PDFtoScan - Make PDF Look Scanned Online Free',
        short_name: 'PDFtoScan',
        description: 'Convert clean digital PDFs into realistic scanned documents 100% locally in your browser with 1.5° page tilt, paper grain, and photocopier effects.',
        theme_color: '#15370D',
        background_color: '#FFFDF5',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,txt,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    }),
  ],
});
