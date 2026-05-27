# esskayesss.dev Svelte portfolio

SvelteKit + Tailwind CSS v4 migration of the portfolio in `../main`.

## Stack

- SvelteKit 2 / Svelte 5 runes
- Tailwind CSS v4 with CSS-first theme tokens in `src/routes/layout.css`
- mdsvex for blog content in `src/content/blog`
- Bun for scripts and dependency management

## Routes

- `/` — homepage with intro, socials, projects, experience, latest posts, certifications
- `/projects` — project archive
- `/support` — support links and UPI card
- `/blog` — latest blog posts
- `/blog/archive` — date-sorted blog archive
- `/blog/search` — client-side blog search
- `/blog/[slug]` — mdsvex blog post page
- `/sitemap.xml` — sitemap including static routes and production-visible blog posts
- `/robots.txt` — crawler policy with sitemap link

## Commands

```sh
bun install
bun run dev
bun run check
bun run lint
bun run build
```

## Deployment note

Project still uses `@sveltejs/adapter-auto`. That may warn during build outside supported deployment environments. This looks like a static portfolio, but no static adapter dependency is installed, so adapter was left unchanged until deployment target is known.
