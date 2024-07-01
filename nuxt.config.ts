import { repositoryName, apiEndpoint } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: false,

  runtimeConfig: {
    public: {
      brevoApiKey: process.env.BREVO_API_KEY,
    },
  },

  app: {
    head: {
      title: "Prismic + Nuxt Minimal Starter",
      htmlAttrs: {
        lang: "pl",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],

      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    // "nuxt-security",
    // "@nuxtjs/sitemap",
    "@nuxt/image",
    "nuxt-gtag",
  ],

  css: ["~/assets/css/tailwind.css"],
  tailwindcss: {
    config: {
      content: [
        "./app/**/*.{js,ts,vue}",
        "./slices/**/*.{js,ts,vue}",
        "./blog/**/*.{js,ts,vue}",
      ],
      theme: {
        fontFamily: {
          sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          serif:
            '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        },
      },
    },
  },
  gtag: {
    id: "G-LBLL16W6BE",
    initCommands: [
      // Setup up consent mode
      [
        "consent",
        "default",
        {
          ad_user_data: "granted",
          ad_personalization: "granted",
          ad_storage: "granted",
          analytics_storage: "granted",
          wait_for_update: 500,
        },
      ],
    ],
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: "/api/preview",
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "article",
          path: "/blog/:uid",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
      ],
    },
  },
});
