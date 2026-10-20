# Agent Instructions

- `AGENTS.md` is the single source of truth; `CLAUDE.md` and `README.md` are symlinks to it. Edit `AGENTS.md` only and never replace a symlink with a regular file, or the copies will drift apart.
- `.claude/skills/` is a symlink to `.agents/skills/`. Add or edit skills under `.agents/skills/`, so every agent client reads the same skills.

## Project

- Car-navigation quick-reference list for the Hokkaido road trip (10/25, 10/26, 10/27, 10/31), published as a static site on GitHub Pages from the public repo `yucjtw/hokaido-car`. Svelte 5 + Vite, no SvelteKit.
- Each tool is its own page, added to the phone's home screen as a separate app: `nav.html` (導航清單, map codes), `spots.html` (景點清單), `paypay.html`, `cards.html`. `index.html` only lists them. A new page needs its entry in `vite.config.ts`, its own `public/<name>.webmanifest` (own `start_url`, `scope` set to the page itself, no `id`; a shared scope makes Android Chrome treat the other pages as already installed), icons from `scripts/icon.swift`, `setUpPwa()` in its `main.ts`, and a link in `index.html`.
- Offline: `service-worker.js` is a template; the build writes `dist/sw.js` with every built and public file listed and a version that changes when any file does. Pages load from the network first and fall back to the saved copy after 3 seconds, so deployed data changes reach phones that are online.
- `spots.html` is the source of truth for each area's list of sights, restaurants and sweets; the Notion page keeps only day plans and bookings. Data is in `src/spots/data/`, one file per area (a lodging base or a day trip) with walkable sub-areas inside; its shape is in `src/spots/types.ts`. Write opening hours and closing days in each place's free-text `body`. Set `map` only to a link taken from the user's own Google Maps lists (coordinates, `maps.app.goo.gl` or `cid` links); never write a Google place ID or coordinates yourself. Otherwise leave `map` out so the page searches by name, and add `query` with the town name when the shop name alone could match another place. Area map images go in `src/spots/maps/` as WebP with metadata stripped (`magick in -resize '1600x1600>' -strip out.webp`), because phone photos carry GPS location.
- Car-navigation data for `nav.html` lives in `src/data/days.ts`; its shape is in `src/data/types.ts`. Each day has area sections, each section has spots.
- On load `nav.html` opens the tab named in the URL hash, else the tab for the browser's local date, else the next upcoming day, else the first day.
- The repo is public. Itinerary dates and places are fine to publish, but never commit reservation numbers, booking or payment details, personal names, or private contact information. Phone numbers must be public business numbers.
- When places are within walking distance, list them under one parking spot's `walk` instead of as separate spots; pick the parking spot that is free when one exists.
- Never invent a map code. Take it from an official or published source; leave it `null` when not found, and the page shows the phone number in its place (car navigation accepts either).
- Run `npm run check` and `npm run build` before committing. Pushing to `main` deploys via `.github/workflows/deploy.yml`.
