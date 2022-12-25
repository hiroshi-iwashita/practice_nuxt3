import { IbreadCrumbs } from "~~/types/components/IbreadCrumbs";

// /nuxt
export default ({
    nuxt: [
        <IbreadCrumbs>{
            value: 'nuxt',
            link: false,
            path: '/nuxt',
            text: {
              en: 'Nuxt',
              ja: 'Nuxt'
            }
        }
    ],
    nuxtDataFetching: [
        <IbreadCrumbs>{
            value: 'nuxt',
            link: true,
            path: '/nuxt',
            text: {
              en: 'Nuxt',
              ja: 'Nuxt'
            }
        },
        <IbreadCrumbs>{
            value: 'Data Fetching',
            link: false,
            path: '/nuxt/dataFetching',
            text: {
              en: 'Data Fetching',
              ja: 'データフェッチング'
            }
        },
    ],
})