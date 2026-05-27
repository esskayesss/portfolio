<script lang="ts">
	import { resolve } from '$app/paths';
	import type { BlogMetadata } from '$lib/types';

	type Props = {
		post: BlogMetadata;
	};

	let { post }: Props = $props();
</script>

<header class="flex flex-col gap-4 border border-ghost bg-accent-bg p-6">
	<div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-dim-fg">
		<span>{post.date}</span>
		<span>{post.reading_time.minutes} minute read</span>
		<span>{post.type}</span>
		{#if post.published === false}
			<span class="bg-fg px-2 text-bg">Draft</span>
		{/if}
	</div>

	<div class="flex flex-col gap-2">
		<h1>{post.title}</h1>
		<p>{post.description}</p>
	</div>

	{#if post.cover_image}
		<img class="w-full object-contain mix-blend-lighten" src={post.cover_url ?? `/blog/${post.slug}/cover.webp`} alt="" />
	{/if}

	{#if post.tags.length > 0}
		<ul class="flex flex-wrap gap-2 text-xs" aria-label="Post tags">
			{#each post.tags as tag (tag)}
				<li class="tag">{tag}</li>
			{/each}
		</ul>
	{/if}

	{#if post.prev_slug || post.next_slug}
		<nav class="flex flex-wrap items-center justify-between gap-4 border-t border-ghost pt-4 text-sm" aria-label="Post navigation">
			{#if post.prev_slug}
				<a href={resolve('/blog/[slug]', { slug: post.prev_slug })}>older post</a>
			{/if}
			{#if post.next_slug}
				<a href={resolve('/blog/[slug]', { slug: post.next_slug })}>newer post</a>
			{/if}
		</nav>
	{/if}
</header>
