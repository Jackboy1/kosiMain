# Kosinko Technologies Global Limited — Website

Official marketing website built with React + TypeScript + Vite.

The site showcases Kosinko’s core service offerings (Consulting, Cyber Security, AI, NFT, Crypto, Automation), technical capabilities, delivery framework, and contact flows.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS utilities
- Lucide React icons
- EmailJS for contact form delivery

## Key Features

- Scroll-based section experience with animated reveals
- Service cards with detailed discipline pages
- Updated content blocks for Consulting, Cyber Security, and NFT
- “Learn More” CTAs linked to external forms/pages
- Footer with contact channels and emphasized conversion link
- Floating “scroll to top” action button

## Local Development

### Install

```bash
npm install
```

### Environment Variables

Create `.env` in the project root:

```dotenv
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run preview` — preview production build locally

## Important Files

- `App.tsx` — main layout, routing between home/service detail, scroll-to-top button
- `components/ServiceGrid.tsx` — discipline/service cards
- `components/ServiceDetail.tsx` — full service detail content + learn-more links
- `components/Methodology.tsx` — delivery framework section
- `components/TechStack.tsx` — technology cards with Learn/Copy actions
- `components/footer.tsx` — footer navigation, social links, contact and CTA
- `components/Contact.tsx` — contact form + EmailJS integration

## Deployment Notes

- Build output is generated in `dist/`.
- Any static host (Vercel, Netlify, Cloudflare Pages, Nginx, etc.) can serve the Vite build.
- Ensure `.env` values are configured in your hosting provider.

## Troubleshooting

### Import/Resolver errors (especially on CI/Linux)

Path casing must exactly match filenames. Example: `footer.tsx` and `./components/footer` should use the same case everywhere.

### Contact form issues

- Verify all `VITE_EMAILJS_*` variables are valid
- Check EmailJS template field names match form payload keys
- Inspect browser console/network for EmailJS response errors
