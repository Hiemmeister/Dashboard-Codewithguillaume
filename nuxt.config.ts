import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [],
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content', // Enables Markdown content support
    '@nuxt/icon',
  ],
  imports: {
    dirs: ['lib/utils'],
  }, // Vergeet de komma hier niet!
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,700;0,900;1,200;1,300;1,400;1,700;1,900&display=swap',
        },
      ],
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws', // WebSocket protocol for HMR
        port: 24678, // Custom port to avoid conflicts
      },
      watch: {
        usePolling: true, // Reliable change detection, especially on Windows
        interval: 100, // Poll every 100ms
      },
    },
  },
});
