<script lang="ts">
	import { resolve } from '$app/paths';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import { canonicalUrl } from '$lib/site';
	import type { BlogMetadata } from '$lib/types';

	const description = 'Search blog posts by title, description, type, or tag.';
	let { data }: { data: { blogPosts: Array<BlogMetadata> } } = $props();
	let query = $state('');
	let results = $derived.by(() => {
		const normalizedQuery = query.trim().toLowerCase();
		if (!normalizedQuery) return data.blogPosts;

		return data.blogPosts.filter((post) => {
			const searchable = [post.title, post.description, post.type, ...post.tags]
				.join(' ')
				.toLowerCase();
			return searchable.includes(normalizedQuery);
		});
	});
</script>

<svelte:head>
	<title>search blog · esskayesss.</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="search blog · esskayesss." />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl('/blog/search')} />
	<link rel="canonical" href={canonicalUrl('/blog/search')} />
</svelte:head>

<section>
	<div class="heading">
		<h1>search blog</h1>
		<a href={resolve('/blog')}>Blog</a>
	</div>

	<div class="content">
		<label class="flex flex-col gap-2 text-sm text-dim-fg">
			Search posts
			<input
				class="border border-ghost bg-dim-bg px-4 py-2 text-base text-fg outline-none focus:border-accent-fg"
				type="search"
				bind:value={query}
				placeholder="websockets, c, project..."
			/>
		</label>

		{#if results.length > 0}
			{#each results as post (post.slug)}
				<BlogCard {post} />
			{/each}
		{:else}
			<p>No posts match “{query}”.</p>
		{/if}
	</div>
</section>
