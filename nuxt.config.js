const router = require("./router/index");
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
//   loading: { 
//     color: "#fff", 
//   },
//   loading: '~/components/Loading.vue',
loading: false,
//   loading: { color: '#3B8070' },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/core/base.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // 'reading-progress'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /**
   * register route
   */
  router: {
    extendRoutes(routes, resolve) {
      let arrayRouter = router.arrayRouter();
      arrayRouter.map(item => routes.push(item));
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
