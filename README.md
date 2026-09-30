# Parshuram Kumar · Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **framer-motion**. Deploys to Vercel's free tier with zero configuration.

Live: https://parshuramkumar.vercel.app

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (must pass before deploying)
npm run lint
```

## Edit your content (no code needed)

Everything you see on the site comes from JSON files in `src/data/`. Change a file, save, and the site updates.

| File | What it controls |
|---|---|
| `site.json` | Site URL, page title, SEO description and keywords |
| `profile.json` | Name, headline, tagline, photo, email, phone, location, company, availability badge, bio paragraphs, social links, resume link |
| `roles.json` | Typewriter roles under the headline and the "Hire me for" cards |
| `navigation.json` | The four tabs |
| `highlights.json` | Animated stat counters on About |
| `services.json` | "What I do" cards |
| `impact.json` | "Impact at work" metric cards |
| `process.json` | "How I work" steps |
| `now.json` | "Right now" cards (building / learning / available) |
| `profiles.json` | Coding profiles (LeetCode, GFG, GitHub) |
| `recommendations.json` | Quote cards. Set `"placeholder": false` once you paste a real quote |
| `experience.json` | Work timeline with bullets and skills |
| `education.json` | Education timeline |
| `skills.json` | Tech-stack logos, grouped skills, highlighted skills, proficiency bars |
| `projects.json` | Project cards (categories, image, tags, links) |
| `caseStudies.json` | "From my job" case-study cards |
| `achievements.json` | Achievements and certifications |
| `hiring.json` | Hiring info tiles, freelance note, contact form messages |

Every file is type-checked against `src/types/content.ts`, so a typo in a key fails `npm run build` instead of silently breaking the page.

### Tech-stack logos

`skills.json → logos[]` uses icon ids from [skillicons.dev](https://skillicons.dev) (for example `ts`, `nodejs`, `nestjs`, `postgres`). Add `{ "id": "java", "name": "Java" }` to show a new logo. To use your own image instead, add `"url": "/images/logos/whatever.svg"`.

### Images

- Photo: `public/images/avatar.jpg` (referenced in `profile.json`)
- Project screenshots: `public/images/projects/*.png` (referenced in `projects.json`; leave `"image": ""` for a generated placeholder)
- Resume PDF: put it at `public/resume.pdf` (referenced in `profile.json → resumeUrl`)

## Project structure

```
src/
  app/                 routes: / (About), /resume, /projects, /contact, /api/contact
  components/
    layout/            Shell, Sidebar, TabNav, ThemeToggle, PageTransition, Footer
    ui/                Card, Chip, Button, Icon, Timeline, ProgressBar, Counter, Typewriter, Marquee, SkillLogo, Reveal
    sections/          one folder per tab: about/, resume/, projects/, contact/
  data/                all content as JSON (edit these)
  lib/content.ts       typed access to the JSON data
  types/content.ts     TypeScript types for the JSON files
```

## Contact form

The form posts to `/api/contact`, which forwards to [Web3Forms](https://web3forms.com) (free). Add your key as `WEB3FORMS_ACCESS_KEY` in Vercel → Project → Settings → Environment Variables. Without the key the form falls back to opening the visitor's email app with the message prefilled.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com → New Project → import the repo. Framework is auto-detected as Next.js.
3. (Optional) add `WEB3FORMS_ACCESS_KEY`.
4. Deploy. Every push to `main` redeploys.

Update `site.json → url` to your final domain so the sitemap, Open Graph tags and robots.txt point to the right place.

## Theme

Colors live as CSS variables at the top of `src/app/globals.css`. Change `--accent` (and `--accent-rgb`) to re-theme the whole site. A dark/light toggle is in the sidebar.
