import { ModuleOptions } from 'shadcn-nuxt';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    shadcn?: ModuleOptions;
  }
}
