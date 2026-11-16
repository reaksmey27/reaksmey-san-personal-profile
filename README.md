# Reaksmey SAN – social profile

A one-page, Linktree-style profile. React + TypeScript + Vite + Tailwind CSS. No backend.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript only
npm run build      # type-check, then build to dist/
npm run preview    # serve the production build
```

## Edit the page

Everything you change lives in **`src/config/profile.ts`**:

- name, title, city and country
- `photo`: an image in `public/` (for example `/profile.webp`) or a full URL
- `km`: Khmer title, city and country (shown when the visitor taps the language button)
- `email` and `phone` (optional): added to the **Save contact** (.vcf) button
- `siteUrl`: your deployed URL (used by the QR code, copy and share)
- `social`: one URL per platform. Leave `''` to hide a platform.

Platform order, labels, icons and brand colors are in `src/config/social.ts`.
To add a platform, add its id to `SocialId` in `src/types.ts`, a URL in `profile.ts`
and an entry in `PLATFORMS`.

## Structure

```
public/            favicon.svg, profile.webp, og-image.png (share preview, 1200x630),
                   apple-touch-icon.png, icon-192/512.png, site.webmanifest, robots.txt
src/
  components/      Header, ActionBar, ActionButton, SocialLinks, SocialLink,
                   QrCodeSection, ThemeToggle
  config/          profile.ts (your data), social.ts (platform styling)
  hooks/           useTheme.ts
  i18n/            strings.ts (all English + Khmer UI text), LangContext.tsx
  lib/             links.ts (site URL helper), vcard.ts (Save contact)
  types.ts
  App.tsx, main.tsx, index.css
```

## Deploy on Vercel

Push to GitHub and import the repo (framework preset: Vite, build `npm run build`, output `dist`).
After you have your final domain, update `siteUrl` in `profile.ts` and the `og:url` / `og:image`
URLs, plus the `canonical` link, in `index.html`.
