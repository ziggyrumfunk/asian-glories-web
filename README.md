# Asian Glories - Next.js rebuild

Modernization of the Asian Glories Rotterdam website, migrated from static Wix/Netlify HTML to Next.js 15 with the App Router.

All images live locally in `public/images/`. Hosting on Supabase Storage and deploying to Vercel are planned next steps.

## Run locally

You need Node.js 18.18 or newer (Node 20+ recommended). Check your version:

```bash
node -v
```

Install dependencies, then start the dev server:

```bash
cd webapp
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Project layout

```
webapp/
  public/
    images/                  All images and videos, served from /images/...
  src/
    app/
      layout.tsx             Root HTML, fonts, metadata, schema.org JSON-LD
      globals.css            Tailwind base + design tokens
      page.tsx               Homepage (Dutch)
      home.css               Homepage-specific styles
      menu/page.tsx          Menu page
      wijnkaart/page.tsx     Wine list page
      boek/page.tsx          Book page
      not-found.tsx          404 page
    components/
      Nav.tsx                Top navigation + mobile menu
      Footer.tsx             Footer
      AwardsStrip.tsx        Michelin / Gault Millau bar
      Reveal.tsx             IntersectionObserver scroll-reveal helper
  tailwind.config.ts         Brand palette and font variables
  next.config.mjs            Redirects ported from Netlify _redirects
```

## Design tokens

Ported from the original CSS variables:

| Token | Hex     | Tailwind class             |
|-------|---------|----------------------------|
| g     | #114032 | `bg-green`, `text-green`   |
| gd    | #0b2d23 | `bg-green-dark`            |
| gm    | #1a5a45 | `bg-green-mid`             |
| gold  | #fced88 | `bg-gold`, `text-gold`     |
| gold2 | #e8d565 | `bg-gold-deep`             |
| cr    | #f5f0e8 | `bg-cream`                 |
| crd   | #ece5d8 | `bg-cream-dark`            |
| tx    | #1c1c1c | `text-ink`                 |
| txm   | #4a4a4a | `text-ink-mid`             |
| txl   | #9a9a9a | `text-ink-light`           |

## Fonts

- Cormorant (serif headings) via `next/font/google`
- DM Sans (body fallback) via `next/font/google`
- Glacial Indifference (primary body) via jsDelivr `@font-face` in `globals.css`

## What still needs porting

- The full wine list content from `wijnkaart.html` (currently a placeholder page)
- The richer book story from `boek.html` (currently minimal)
- Newsletter / contact form, if you want one wired up to Supabase

## Next steps roadmap

1. Polish the stub pages (menu, wijnkaart, boek) with full content
2. Move images to Supabase Storage and switch to `next/image` with a custom loader
3. Push the repo to GitHub, connect it to a Vercel project
4. Point DNS for `asianglories.nl` away from Wix to Vercel
