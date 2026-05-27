<script lang="ts">
	import { resolve } from '$app/paths';
	import type { BlogMetadata } from '$lib/types';

	type Props = {
		post: BlogMetadata;
	};

	let { post }: Props = $props();

	const postHref = $derived(resolve('/blog/[slug]', { slug: post.slug }));
</script>

<article class="flex flex-col gap-2 border border-ghost p-4">
	{#if post.cover_image}
		<img
			class="w-full object-contain mix-blend-lighten"
			src={post.cover_url ?? `/blog/${post.slug}/cover.webp`}
			alt=""
			loading="lazy"
		/>
	{/if}
	<div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-dim-fg">
		<span>{post.date} · {post.reading_time.minutes} minute read</span>
		{#if post.collection}
			<span class="w-fit border border-yellow-fg px-1 text-yellow-fg">{post.collection}</span>
		{/if}
	</div>
	<div class="flex flex-col gap-1">
		<a class="text-lg text-accent-fg no-underline hover:underline" href={postHref}>
			{post.title}
			{#if post.published === false}
				<span class="ml-2 bg-fg px-2 text-sm text-bg">Draft</span>
			{/if}
		</a>
		<p class="text-dim-fg leading-snug">{post.description}</p>
	</div>
</article>
