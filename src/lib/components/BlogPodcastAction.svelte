<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Icon from '@iconify/svelte';
	import { playPodcast } from '$lib/podcast/player.svelte';

	type TocEntry = {
		id: string;
		text: string;
		level: number;
	};

	type Props = {
		slug: string;
		title: string;
	};

	const FONT_SIZE_LIMITS = { min: 13, max: 18 };
	const LEGACY_FONT_SIZE_MULTIPLIER = 1.4;
	const fontClasses = ['font-sans', 'font-mono', 'font-proto'] as const;
	const fontVarMap = {
		'font-sans': '--font-sans',
		'font-mono': '--font-mono',
		'font-proto': '--font-proto'
	} as const;

	let { slug, title }: Props = $props();

	let mounted = $state(false);
	let copied = $state(false);
	let tocOpen = $state(false);
	let formatOpen = $state(false);
	let blogFontSize = $state(14);
	let fontStyle = $state(1);
	let tocEntries = $state<TocEntry[]>([]);

	const postUrl = $derived(`https://esskayesss.dev/blog/${slug}`);
	const xSearchUrl = $derived(`https://x.com/search?q=${encodeURIComponent(`"${postUrl}"`)}`);

	function slugifyHeading(text: string) {
		return text
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
	}

	function collectTocEntries() {
		const headings = Array.from(document.querySelectorAll<HTMLElement>('.blog-prose h1, .blog-prose h2, .blog-prose h3'));
		const seen: Record<string, number> = {};

		tocEntries = headings
			.map((heading) => {
				const text = heading.textContent?.trim() ?? '';
				if (!text) return null;

				const baseId = heading.id || slugifyHeading(text) || 'section';
				const count = seen[baseId] ?? 0;
				seen[baseId] = count + 1;
				const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

				if (!heading.id || count > 0) heading.id = id;

				return { id: heading.id, text, level: Number(heading.tagName.slice(1)) };
			})
			.filter((entry): entry is TocEntry => entry !== null);
	}

	function setBodyScroll(locked: boolean) {
		document.documentElement.classList.toggle('scroll-locked', locked);
	}

	function openToc() {
		formatOpen = false;
		tocOpen = true;
		setBodyScroll(true);
	}

	function closeToc() {
		tocOpen = false;
		setBodyScroll(false);
	}

	function openFormat() {
		tocOpen = false;
		formatOpen = true;
		setBodyScroll(true);
	}

	function closeFormat() {
		formatOpen = false;
		setBodyScroll(false);
	}

	function activateOnKey(event: KeyboardEvent, action: () => void) {
		if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
			event.preventDefault();
			action();
		}
	}

	function clampFontSize(size: number) {
		return Math.min(Math.max(size, FONT_SIZE_LIMITS.min), FONT_SIZE_LIMITS.max);
	}

	function normalizeStoredFontSize(size: number) {
		if (!Number.isFinite(size)) return blogFontSize;
		if (size < FONT_SIZE_LIMITS.min) return Math.round(size * LEGACY_FONT_SIZE_MULTIPLIER);
		return size;
	}

	function setFontSize(size: number) {
		blogFontSize = clampFontSize(size);
		document.querySelector<HTMLElement>('.blog-prose')?.style.setProperty('font-size', `${blogFontSize}px`);
		localStorage.setItem('blog-font-size', blogFontSize.toString());
	}

	function setFontStyle(index: number) {
		fontStyle = index;
		const fontClass = fontClasses[index];
		const fontVar = fontVarMap[fontClass];
		document.querySelector<HTMLElement>('.blog-prose')?.style.setProperty('font-family', `var(${fontVar})`);
		localStorage.setItem('blog-font-style', index.toString());
	}

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(postUrl);
		} catch {
			const field = document.createElement('textarea');
			field.value = postUrl;
			field.style.position = 'fixed';
			field.style.opacity = '0';
			document.body.appendChild(field);
			field.select();
			document.execCommand('copy');
			field.remove();
		}

		copied = true;
		window.setTimeout(() => {
			copied = false;
		}, 1500);
	}

	onMount(() => {
		mounted = true;
		const storedSize = normalizeStoredFontSize(Number(localStorage.getItem('blog-font-size') ?? blogFontSize));
		const storedStyle = Number(localStorage.getItem('blog-font-style') ?? fontStyle);
		setFontSize(storedSize);
		setFontStyle(storedStyle);
		tick().then(collectTocEntries);
		return () => setBodyScroll(false);
	});
</script>

{#if mounted}
	<div class="print:hidden fixed bottom-0 left-0 z-20 flex h-14 w-screen items-center justify-between border-t border-ghost bg-bg px-12 py-12">
		<div class="relative mx-auto flex w-full max-w-6xl justify-between">
			<div class="left flex items-center gap-8 *:cursor-pointer *:text-3xl">
				<button type="button" class="animate" onclick={() => playPodcast({ slug, title })} aria-label={`Play podcast for ${title}`}>
					<Icon icon="ph:waveform-duotone" aria-hidden="true" />
				</button>

				<button type="button" class="animate" onclick={() => window.open(xSearchUrl, '_blank', 'noopener,noreferrer')} aria-label="Search comments on X">
					<Icon icon="ph:chat-teardrop-dots" aria-hidden="true" />
				</button>

				<button type="button" class="animate" onclick={copyLink} aria-label="Copy blog post link">
					<Icon icon={copied ? 'ph:check-circle' : 'ph:link'} aria-hidden="true" />
				</button>

				<span class="relative cursor-pointer animate">
					<div
						class:visible={formatOpen}
						class:invisible={!formatOpen}
						class="overlay fixed bottom-[6.1rem] left-0 z-40 h-screen w-screen backdrop-blur-sm"
						onclick={closeFormat}
						onkeydown={(event) => activateOnKey(event, closeFormat)}
						role="button"
						tabindex="0"
						aria-label="Close reading format"
					></div>
					<div
						class:visible={formatOpen}
						class:invisible={!formatOpen}
						class="toc absolute bottom-full -left-5 z-50 mb-12 flex max-h-[85dvh] w-[356px] max-w-[90vw] flex-col gap-2 overflow-y-auto border border-accent-fg bg-bg pb-4 font-proto text-2xl *:px-4 *:py-2"
					>
						<span class="sticky mb-4 border-b bg-dim-bg py-4 text-lg">READING FORMAT</span>
						<div class="flex flex-col gap-4">
							<div class="flex items-center gap-4">
								<span class="flex cursor-pointer gap-2 text-base">Font Size: </span>
								<span class="flex items-center border border-ghost *:w-fit *:px-4">
									<Icon class={blogFontSize <= FONT_SIZE_LIMITS.min ? 'disabled' : ''} icon="ph:minus" onclick={() => setFontSize(blogFontSize - 1)} />
									<span class="border-x border-ghost px-8 text-lg">{blogFontSize}</span>
									<Icon class={blogFontSize >= FONT_SIZE_LIMITS.max ? 'disabled' : ''} icon="ph:plus" onclick={() => setFontSize(blogFontSize + 1)} />
								</span>
							</div>
							<div class="flex items-center gap-4">
								<span class="flex cursor-pointer gap-2 text-base">Font Style: </span>
								<span class="flex items-center border border-ghost *:w-fit *:px-4">
									{#each fontClasses as fontClass, index (fontClass)}
										<span
											class={`border text-base ${fontClass} ${index === fontStyle ? 'border-fg bg-dim-bg' : 'border-ghost'}`}
											onclick={() => setFontStyle(index)}
											onkeydown={(event) => activateOnKey(event, () => setFontStyle(index))}
											role="button"
											tabindex="0"
										> Aa </span>
									{/each}
								</span>
							</div>
						</div>
					</div>
					{#if formatOpen}
						<Icon icon="ph:x" onclick={closeFormat} />
					{:else}
						<Icon icon="ph:book-open-text" onclick={openFormat} />
					{/if}
				</span>
			</div>

			<div class="right flex items-center gap-8 *:text-3xl">
				<a
					target="_blank"
					href="https://github.com/sponsors/esskayesss"
					class="flex items-center gap-2 border border-yellow-fg px-2 py-1 font-proto !text-base text-yellow-fg no-underline"
					rel="noreferrer"
					aria-label="Sponsor esskayesss"
				>
					<Icon class="text-xl" icon="ph:coin" aria-hidden="true" />
				</a>

				<span class="relative cursor-pointer animate">
					<div
						class:visible={tocOpen}
						class:invisible={!tocOpen}
						class="overlay fixed bottom-[6.1rem] left-0 z-40 h-screen w-screen backdrop-blur-sm"
						onclick={closeToc}
						onkeydown={(event) => activateOnKey(event, closeToc)}
						role="button"
						tabindex="0"
						aria-label="Close table of contents"
					></div>
					<div
						class:visible={tocOpen}
						class:invisible={!tocOpen}
						class="toc absolute right-[-1.25rem] bottom-full z-50 mb-12 flex max-h-[85dvh] w-[356px] max-w-[90vw] flex-col overflow-y-auto border border-accent-fg bg-bg pb-4 font-proto text-2xl *:px-4 *:py-2"
					>
						{#each tocEntries as entry (entry.id)}
							<a class="w-full text-base no-underline hover:bg-dim-bg" href={`#${entry.id}`} onclick={closeToc}>{entry.text}</a>
						{/each}
					</div>
					{#if tocOpen}
						<Icon icon="ph:x" onclick={closeToc} />
					{:else}
						<Icon icon="ph:list-bullets" onclick={openToc} />
					{/if}
				</span>
			</div>
		</div>
	</div>
{/if}
