# Portfolio Svelte Migration

Source worktree: `../main`  
Target worktree: `.` (`v2-svelte-dev`)

## Checkpoints

1. Foundation, Tailwind v4 theme, layout shell — completed.
2. Data model and homepage parity — completed in this change.
3. Blog/mdsvex content pipeline and blog routes — completed in this change.
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

## Checkpoint 3 status

Implemented the real mdsvex-backed blog pipeline.

- Copied `../main/content/blog/brainfuck-c.mdx` into `src/content/blog/brainfuck-c.svx`.
- Converted malformed React/MDX-only content into mdsvex-safe markdown: the spaced YouTube component became a normal YouTube link, the React `<Table />` became a markdown table, and code fences use standard language markers.
- Added `src/lib/blogs.ts` with eager `import.meta.glob` content loading, metadata normalization, slug extraction, date sorting, draft filtering in production only, previous/next slug linking, latest-post exports, and simple search.
- Updated shared blog types to model raw mdsvex frontmatter separately from normalized blog metadata and rendered blog posts.
- Replaced homepage temporary blog previews with real latest posts from the content pipeline.
- Added blog routes for `/blog`, `/blog/archive`, `/blog/[slug]`, and `/blog/search`.
- Added `BlogPostHeader.svelte` and strengthened blog prose styles in `src/routes/layout.css`.
- Removed `src/lib/blogPreviews.ts`.

Intentional limitations:

- Syntax highlighting remains deferred; code blocks render as styled plain code.
- Source post image paths are preserved even though matching static image assets were not present in the source worktree.
- Build currently emits mdsvex-generated Svelte 5 deprecation warnings for `<script context="module">`. Source `.svx` files do not contain that script; warning appears from mdsvex output, so it remains pending an upstream mdsvex/Svelte compatibility fix.

## Checkpoint 4 status

Implemented support page parity without real payment processing.

- Ported the support route from Next.js into Svelte with page metadata, sponsor/subscription calls to action, static UPI support card, and support banner section.
- Added reusable `SupportCard.svelte` and `SupportLinks.svelte` components.
- Copied `support.webp` and `headshot.webp` into `static/` for SvelteKit asset serving.
- Kept production behavior as rendered static support content rather than a redirect, so sponsor links remain visible.
- Added a Tailwind v4 `--aspect-support-banner` theme token to avoid arbitrary aspect utilities.

## Blog pipeline review fixes

Applied follow-up fixes for blog route correctness and source parity.

- Added a real SvelteKit `/blog/[slug]` load function that returns metadata or throws `error(404)` instead of rendering fake 404 UI with HTTP 200.
- Reworked `src/lib/blogs.ts` into a raw-frontmatter metadata registry using recursive `/src/content/blog/**/*.{svx,md}` globs, so list/search/archive routes no longer eagerly import mdsvex components.
- Kept lazy mdsvex component imports only in the slug detail route and keyed component lookup by source path from load data.
- Added nested collection-aware slug generation: final filename by default, with collection suffix only when duplicate slugs require disambiguation.
- Matched source reading-time/date behavior: 60 WPM, `Math.floor`, display dates like `March 20, 2024`, plus separate sortable ISO date.
- Added `worklog` to accepted blog types.
- Added cover image rendering support for blog cards and post headers when metadata says a cover exists.
- Replaced missing `brainfuck-c.svx` image references with markdown caption placeholders so the browser does not request absent `/static/blog/realtime-chat-app/*.webp` files.
- Removed empty spacer markup from blog post navigation.

## Current verification

Latest checkpoint verification:

```sh
bun run check  # pass
bun run lint   # pass
bun run build  # pass
```
