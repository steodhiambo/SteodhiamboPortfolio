# Stephen Odhiambo — Portfolio

Personal portfolio website showcasing software engineering work, project case studies, and technical skills. Built with React 18 + Vite.

## Tech Stack

- **React 18** with client-side routing (react-router-dom v6)
- **Vite 6** — fast dev server and optimized builds
- **Plain CSS** with CSS custom properties (light/dark theme)
- **react-helmet-async** — per-page SEO meta tags and JSON-LD structured data
- **EmailJS** — contact form delivery with mailto fallback
- **AOS** — scroll-triggered animations
- **Material UI Icons** — icon set
- **Vitest** — unit testing

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |

## Project Structure

```
src/
├── assets/               # Static images (project screenshots, profile photo)
├── components/           # Reusable UI components (Navbar, Footer, ProjectItem, SEO, ScrollToTop)
├── context/              # React context (ThemeContext for dark/light mode)
├── data/                 # portfolio.json — single source of truth for all content
├── hooks/                # usePortfolioData — reads portfolio.json
├── pages/                # Route pages (Home, Projects, ProjectDisplay, Experience, Contact, NotFound)
├── styles/               # One CSS file per page/component
├── utils/                # imageMap.js — resolves asset paths for Vite
├── App.jsx               # Root component: ThemeProvider > Router > Navbar > Routes > Footer
├── index.jsx             # Entry point
```

## Architecture

- **Static data**: All portfolio content lives in `src/data/portfolio.json` and is imported directly at build time — no API calls.
- **Image resolution**: Vite requires explicit imports for assets in `src/`. `utils/imageMap.js` maps relative paths from `portfolio.json` to Vite-processed asset URLs.
- **Code splitting**: All page components use `React.lazy()` + `<Suspense>` for route-level code splitting.
- **SEO**: Every page sets its own `<title>`, meta description, OG tags, Twitter card, and optional JSON-LD schema via the `<SEO>` component.
- **Theming**: Dark/light mode is persisted in `localStorage` and applied via `data-theme` attribute on `<html>`, switching CSS custom properties.
- **Accessibility**: Skip-to-content link, semantic HTML, `aria-current` on nav links, focus management on route change.

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, metrics, skills |
| `/projects` | Project card grid |
| `/project/:id` | Full project case study |
| `/experience` | Experience timeline |
| `/contact` | Contact form |
| `*` | 404 Not Found |

## Deployment

Build output goes to `dist/`. Deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

Environment variables for contact form (`.env`):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## What It Shows

- **7 project case studies** with narrative structure: problem, architecture decisions, role, challenges, impact, features, and lessons learned
- **Skills & Depth** section organized by category (Front-End, Back-End, Languages, Tools, AI Integration)
- **Experience timeline** covering education, work, and certifications
- **Contact form** with EmailJS integration
- **Dark/light mode** toggle
- **SEO-optimized** with per-page meta tags and structured data
