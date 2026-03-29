# The Automated Home — Website

Next.js 14 site for smart home content, free tools, and Gumroad product sales.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** MDX (in `content/blog/`)
- **Hosting:** Vercel
- **Newsletter:** Beehiiv (embedded signup forms)
- **Products:** Gumroad (external links)

## Setup

```bash
cd projects/atlas/website
npm install
npm run dev
```

Open http://localhost:3000

## Build & Deploy

```bash
npm run build
npm start
```

### Vercel

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Framework: Next.js (auto-detected)
4. Deploy

No environment variables required for basic operation. To enable Beehiiv API subscriptions, set:

```
NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID=your_id
```

## Content

Blog posts live in `content/blog/` as MDX files with frontmatter:

```yaml
---
title: "Post Title"
description: "SEO description"
date: "2026-03-28"
slug: "url-slug"
keywords:
  - keyword one
  - keyword two
---
```

### Adding a new post

1. Create `content/blog/your-slug.mdx`
2. Add frontmatter (see above)
3. Write content in MDX
4. Post appears automatically on `/blog` and `/blog/your-slug`

## Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, metadata)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind + custom styles
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Individual post
│   ├── tools/page.tsx      # Free tools page
│   └── newsletter/page.tsx # Newsletter signup
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── NewsletterSignup.tsx
│   └── ProductCard.tsx
├── content/blog/           # MDX articles
├── lib/
│   ├── blog.ts             # MDX file reader
│   └── products.ts         # Product data
└── public/                 # Static assets
```

## TODO

- [ ] Replace Beehiiv `YOUR_PUBLICATION_ID` in NewsletterSignup.tsx
- [ ] Add `next-mdx-remote` for proper MDX rendering in blog posts
- [ ] Add OG images for each blog post
- [ ] Add sitemap.xml generation
- [ ] Add robots.txt
- [ ] Add analytics (Plausible or Umami — no Google)
- [ ] Build the Night Light Automation Generator tool
- [ ] Add RSS feed at /feed.xml
