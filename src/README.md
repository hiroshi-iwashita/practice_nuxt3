# Nuxt 3 Minimal Starter
---
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

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