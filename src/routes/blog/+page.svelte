<script lang="ts">
	import { resolve } from '$app/paths';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import { canonicalUrl } from '$lib/site';
	import type { BlogMetadata } from '$lib/types';

	const description = 'Technical notes, projects, and experiments by Saurabh Sharma.';
	let { data }: { data: { blogPosts: Array<BlogMetadata> } } = $props();
</script>

<svelte:head>
	<title>blog · esskayesss.</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="blog · esskayesss." />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl('/blog')} />
	<link rel="canonical" href={canonicalUrl('/blog')} />
</svelte:head>

<section>
	<div class="heading">
		<h1>blog</h1>
		<div class="flex items-center gap-4">
			<a href={resolve('/blog/search')}>Search</a>
			<a href={resolve('/blog/archive')}>Archive</a>
		</div>
	</div>

	<div class="content">
		{#if data.blogPosts.length > 0}
			{#each data.blogPosts as post (post.slug)}
				<BlogCard {post} />
			{/each}
		{:else}
			<p>No posts published yet.</p>
		{/if}
	</div>
</section>
