# NextJS Strapi Starter with Next-auth.js

# Versions
* next.js 13.4.12
* next-auth 4.22.1

# Theme
* Darkmode - next-themes

# Installation
* run `npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/jahzlariosa/nextjs-strapi-starter"`
* configure the `.env.local or .env`
* `npm run dev`

### ENV Variable Setup
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
STRAPI_PUBLIC_API_URL=
IMAGE_DOMAIN=
SEO_FRONT_END_URL=
```
### Strapi Setup
* Make sure to setup google provider information.
* Refer to `types/` to see the default fields you must use. 

# Protected Pages
See and edit `middleware.tsx` to add your protected pages.