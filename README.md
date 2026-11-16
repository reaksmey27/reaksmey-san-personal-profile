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
- `photo`: an image in `public/` (for example `/profile.png`) or a full URL
- `siteUrl`: your deployed URL (used by the QR code, copy and share)
- `social`: one URL per platform. Leave `''` to hide a platform.

Platform order, labels, icons and brand colors are in `src/config/social.ts`.
To add a platform, add its id to `SocialId` in `src/types.ts`, a URL in `profile.ts`
and an entry in `PLATFORMS`.

## Structure

```
public/            favicon.svg, profile.png (also used for the share preview)
src/
  components/      Header, ActionBar, ActionButton, SocialLinks, SocialLink,
                   QrCodeSection, ThemeToggle
  config/          profile.ts (your data), social.ts (platform styling)
  hooks/           useTheme.ts
  lib/             links.ts (site URL helper)
  types.ts
  App.tsx, main.tsx, index.css
```

## Deploy on Vercel

Push to GitHub and import the repo (framework preset: Vite, build `npm run build`, output `dist`).
After you have your final domain, update `siteUrl` in `profile.ts` and the `og:url` / `og:image`
URLs in `index.html`.
