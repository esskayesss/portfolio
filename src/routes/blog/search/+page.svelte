<script lang="ts">
	import { resolve } from '$app/paths';
	import { searchBlogPosts } from '$lib/blogs';
	import BlogCard from '$lib/components/BlogCard.svelte';

	let query = $state('');
	let results = $derived(searchBlogPosts(query));
</script>

<svelte:head>
	<title>search blog · esskayesss.</title>
	<meta name="description" content="Search blog posts by title, description, type, or tag." />
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
