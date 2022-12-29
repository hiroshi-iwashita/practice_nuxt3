# Nuxt 3 Minimal Starter
---
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
---

-  [Nuxt 3を使いこなすために基礎から徹底解説(2022.12.2)](https://reffect.co.jp/vue/nuxt3)
-  [Nuxt 3 の useFetch() と useAsyncData() の使い方(2022.11.20)](https://zenn.dev/coedo/articles/cc000738a0f069)
-  [Nuxt3の新しい機能(2022.7.6)](https://zenn.dev/azukiazusa/articles/nuxt3-new-features)
-  [Nuxt3のserver/apiとuseFetchを使用してShopifyへサーバーAPIリクエストを実装(2022.3.15)](https://blog.cloud-acct.com/posts/nuxt3-shopify-server-api-request)
-  [Vue3 setup 記法を理解しつつ、 Nuxt で使うコンポーネントを色々作ってみる(2022.3.30)](https://zenn.dev/mewton/scraps/97941676cb7815)
-  [【React/Vue.js】コンポーネント設計の（個人的）ベストプラクティス | Offers Tech Blog(2022.06.08)](https://zenn.dev/offers/articles/20220523-component-design-best-practice)

## docker install
---
Reference: https://qiita.com/A-Kira/items/5ce3e1bff34e179ebbc2

$ docker-compose up -d
$ docker-compose exec nuxt bash
$ npx nuxi init .
$ yarn install
$ ctrl+p ctrl+q
$ remove comment out command: sh -c "yarn && yarn dev -o"

## Development Server
---
Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production
---
Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## modules
---

### tailwind css
---
1. $ yarn add --dev @nuxtjs/tailwindcss
2. add "modules: ['@nuxtjs/tailwindcss']" in nuxt.config.ts
3. $ npx tailwindcs init to create tailwind.config.js file