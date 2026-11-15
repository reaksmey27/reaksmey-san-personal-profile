# Reaksmey SAN: personal digital profile

React + TypeScript + Vite + Tailwind CSS. No backend.

## Run
    npm install
    npm run dev       # http://localhost:5173
    npm run build     # type-checks, then builds to dist/

## Edit your profile
All content lives in `src/config/profile.ts`. Empty fields are hidden on the live site
and shown as dashed reminders in `npm run dev`.

- Photo: put an image in `public/` (e.g. `profile.jpg`) and set `photo`.
- CV: replace `public/cv.pdf` (same name) or change `cvFile`.
- Project thumbnails: add images to `public/projects/` and set `thumbnail`, `liveUrl`, `repoUrl`.
- QR code and vCard: set `siteUrl` to your deployed URL (otherwise they use the current origin).

## Deploy on Vercel
Push to GitHub, import the repo in Vercel (framework preset: Vite, build `npm run build`, output `dist`).
