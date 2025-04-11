// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
<<<<<<< HEAD
  tailwindcss: {
    cssPath: "~/assets/css/tailwin.css",
    configPath: "tailwind.config.js",
    exposeConfig: true,
    viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
=======
>>>>>>> parent of e9f9347 (feat: update nuxtjs workflow to include Tailwind CSS support and enhance build process)
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image", "@nuxt/fonts"],
  css: ["/assets/css/main.css"],
});
