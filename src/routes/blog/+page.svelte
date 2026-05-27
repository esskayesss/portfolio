<script lang="ts">
	import { resolve } from '$app/paths';
	import { blogPosts } from '$lib/blogs';
	import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<svelte:head>
	<title>blog · esskayesss.</title>
	<meta name="description" content="Technical notes, projects, and experiments by Saurabh Sharma." />
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
		{#if blogPosts.length > 0}
			{#each blogPosts as post (post.slug)}
				<BlogCard {post} />
			{/each}
		{:else}
			<p>No posts published yet.</p>
		{/if}
	</div>
</section>
