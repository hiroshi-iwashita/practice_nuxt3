// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt Practice',
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
    routeRules: {
        // Render these routes with SPA
        // '/fetch': { ssr: true },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        app: {
            baseURL: "/",
            buildAssetsDir: "/_nuxt/",
            cdnURL: ""
        },
        public: {
            baseURL: '',
            productName: ''
        },
        apiBaseURL: ''
    },
})
