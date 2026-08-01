# Shraban — Portfolio (React)

Converted from `portfolio3.html` into a Vite + React + TypeScript app.

## Stack

- **React 19** + TypeScript
- **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`) — same utility approach as the original CDN build
- **Framer Motion** — scroll reveal animations (respects `prefers-reduced-motion`)

## Run

```bash
npm install
npm run dev
```

## Customize content

Edit files in `src/data/`:

| File | What to update |
|------|----------------|
| `site.ts` | Name, email, social links, resume URL |
| `about.ts` | Bio copy |
| `skills.ts` | Skill categories |
| `experience.ts` | Domains + timeline |
| `projects.ts` | Project cards / links |

### Assets to add

1. **Profile photo** → `src/assets/profile.png` (or `.jpg` / `.webp`)
2. **Resume** → `public/resume.pdf`
3. Replace placeholder social / GitHub / email values in `src/data/site.ts`

## Scripts

- `npm run dev` — local server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — oxlint
