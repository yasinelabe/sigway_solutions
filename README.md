# SigWay Solutions — Marketing site

Next.js App Router site for **SigWay Solutions** (mobile, web, telecom, AI). Server-rendered by default, optimized for [Vercel](https://vercel.com).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Import the project in Vercel → **Root Directory** = repo root.
3. Framework preset: **Next.js** (auto-detected).
4. Set `site.url` in `lib/site.ts` to your production domain after first deploy.

Optional environment variables: none required for static marketing content.

## Customize

- Copy and branding: `lib/site.ts`
- Partners: `public/partners/` and `partners` in `lib/site.ts`
- Logo: `public/logo.jpg`
