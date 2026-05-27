<script lang="ts">
	import { resolve } from '$app/paths';
	import { blogPosts } from '$lib/blogs';
</script>

<svelte:head>
	<title>blog archive · esskayesss.</title>
	<meta name="description" content="Date-sorted archive of all blog posts." />
</svelte:head>

<section>
	<div class="heading">
		<h1>blog archive</h1>
		<a href={resolve('/blog')}>Latest</a>
	</div>

	<div class="content">
		{#if blogPosts.length > 0}
			<ul class="flex flex-col gap-3">
				{#each blogPosts as post (post.slug)}
					<li class="flex flex-col gap-1 border-b border-ghost pb-3 sm:flex-row sm:items-baseline sm:gap-4">
						<time class="text-xs text-dim-fg" datetime={post.sort_date}>{post.date}</time>
						<a class="text-accent-fg no-underline hover:underline" href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a>
						{#if post.published === false}
							<span class="w-fit bg-fg px-2 text-xs text-bg">Draft</span>
						{/if}
					</li>
				{/each}
			</ul>
		{:else}
			<p>No posts published yet.</p>
		{/if}
	</div>
</section>
