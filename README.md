# shubhanshugupta.com — Next.js Rebuild

Personal portfolio and thought leadership platform. Built with Next.js 14, Tailwind CSS, deployed on Vercel.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Playfair Display + Plus Jakarta Sans + JetBrains Mono (via `next/font/google`)
- **Deployment**: Vercel

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will auto-detect Next.js.

### Option 2: GitHub → Vercel (recommended for ongoing workflow)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-configures Next.js
4. Hit Deploy

### Option 3: Drag & Drop

```bash
npm run build
```

Then drag the `.next` folder + repo to [vercel.com](https://vercel.com).

---

## Pointing shubhanshugupta.com to Vercel

1. In Vercel → your project → Settings → Domains
2. Add `shubhanshugupta.com` and `www.shubhanshugupta.com`
3. In your DNS provider (wherever the domain is registered), update:
   - `A` record → `76.76.21.21` (Vercel's IP)
   - `CNAME` for `www` → `cname.vercel-dns.com`
4. Vercel auto-provisions SSL. Done.

---

## Site Structure

```
app/
  layout.tsx       — Root layout, fonts, metadata
  page.tsx         — Home page (all sections assembled)
  globals.css      — Tailwind + custom animations + utilities

components/
  Nav.tsx          — Fixed nav, scroll-aware, mobile responsive
  Hero.tsx         — Dark full-viewport hero, UVP, CTAs
  Work.tsx         — Citi VP PM section, focus areas, Payment Concierge
  Build.tsx        — Stablecoin Atlas + Feelfit with PRD depth callouts
  Research.tsx     — Patent, 2 publications, talks
  Writing.tsx      — Blog categories + recent posts
  Personal.tsx     — Teaching, mentoring, books, food
  CtaAndFooter.tsx — Open CTA + footer
  AnimateIn.tsx    — Scroll-triggered fade-in wrapper
```

---

## Updating Content

All content is directly in the component files as TypeScript arrays/objects — no CMS needed at this stage.

- **Add a blog post**: Edit `RECENT` array in `Writing.tsx`
- **Update Citi role**: Edit `Work.tsx`
- **Update project status**: Edit `Build.tsx`
- **Add a publication**: Edit `RESEARCH_ITEMS` in `Research.tsx`

---

## Migrating Existing Blog Posts

Existing WordPress posts can be migrated to MDX using:

```bash
npx wordpress-to-next-mdx
```

Or kept on WordPress and linked externally — the Writing section already links out to `shubhanshugupta.com/blog/`.

---

## Future additions

- [ ] Individual project pages: `/build/stablecoin-atlas`, `/build/feelfit`
- [ ] MDX blog at `/writing/[slug]`
- [ ] Mentoring page with embedded Setmore calendar
- [ ] OG image generation with `next/og`
- [ ] Analytics with Vercel Analytics (zero-config)
