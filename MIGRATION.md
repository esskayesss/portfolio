# Portfolio Svelte Migration

Source worktree: `../main`  
Target worktree: `.` (`v2-svelte-dev`)

## Checkpoints

1. Foundation, Tailwind v4 theme, layout shell — in progress/completed in this change.
2. Projects data and projects route migration.
3. Blog/mdsvex content pipeline and blog routes.
4. Support page migration.
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

## Current verification

Run before handoff:

```sh
bun run check
bun run lint
bun run build
```
