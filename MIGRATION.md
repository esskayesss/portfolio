# Portfolio Svelte Migration

Source worktree: `../main`  
Target worktree: `.` (`v2-svelte-dev`)

## Checkpoints

1. Foundation, Tailwind v4 theme, layout shell — completed.
2. Data model and homepage parity — completed in this change.
3. Blog/mdsvex content pipeline and blog routes.
4. Support page migration — completed in this change.
5. Podcast/player parity and polish.
6. Final accessibility, responsive, metadata, and deployment checks.

## Checkpoint 1 status

Implemented foundation only. No projects/blog/support feature migration yet.

- Ported global visual base from Next/Tailwind v3 into `src/routes/layout.css` using Tailwind v4 CSS-first `@theme` tokens.
- Kept Yorumi palette import once in CSS and added aliases matching legacy names (`bg`, `fg`, `accent-fg`, `blue-bg`, etc.).
- Added `Departure Mono` font-face from `src/lib/assets/fonts/departure-mono.woff2`.
- Added base styles for shell, typography, links, sections, `.heading`, `.content`, `.btn`, `.tag`, `.center-row`, prose/code/table/blockquote, and marquee animation.
- Added Svelte layout shell with metadata, favicon, header, footer, and main container.
- Added small header/nav/footer/social components and minimal homepage scaffold.
- Copied static assets expected by shell: `logo.webp`, `india.webp`, `resume.pdf`.

## Checkpoint 2 status

Implemented data model and homepage parity with review fixes. Blog mdsvex pipeline and support route remain pending for later checkpoints.

- Ported shared TypeScript models for blog metadata, projects, experience, and certifications.
- Ported projects data from the Next.js worktree and exposed featured projects for homepage use.
- Replaced `/projects` placeholder with migrated projects data rendered through `ProjectListEntry.svelte`.
- Ported current and previous experience entries into Svelte-friendly data modules.
- Ported certifications and achievements into structured data.
- Added componentized homepage building blocks: `ProjectListEntry.svelte`, `ExperienceSection.svelte`, `ExperienceEntry.svelte`, `CertListEntry.svelte`, `BlogCard.svelte`, and `Tag.svelte`.
- Replaced the homepage scaffold with migrated intro, social links, featured projects, current experience, latest article previews, and certifications/achievements.
- Added temporary `src/lib/blogPreviews.ts` using source frontmatter for `content/blog/brainfuck-c.mdx` so homepage does not claim there are no articles.
- Kept `/blog` route as placeholder/list placeholder for now; full mdsvex content discovery, rendering, archives, and blog routes remain pending in Checkpoint 3.
- Kept `/support` route placeholder for later checkpoint at the time of Checkpoint 2.
- Cleaned URL typing by sharing `ExternalHref` from `src/lib/types.ts` and moving URL formatting into helpers instead of markup casts.

## Checkpoint 4 status

Implemented support page parity without real payment processing.

- Ported the support route from Next.js into Svelte with page metadata, sponsor/subscription calls to action, static UPI support card, and support banner section.
- Added reusable `SupportCard.svelte` and `SupportLinks.svelte` components.
- Copied `support.webp` and `headshot.webp` into `static/` for SvelteKit asset serving.
- Kept production behavior as rendered static support content rather than a redirect, so sponsor links remain visible.
- Added a Tailwind v4 `--aspect-support-banner` theme token to avoid arbitrary aspect utilities.

## Current verification

Latest checkpoint verification:

```sh
bun run check  # pass
bun run lint   # pass
bun run build  # pass
```
