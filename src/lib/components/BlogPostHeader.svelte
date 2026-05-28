<script lang="ts">
	import type { BlogMetadata } from '$lib/types';

	type Props = {
		post: BlogMetadata;
	};

	let { post }: Props = $props();
</script>

<header class="about flex flex-col gap-4">
	<div class="flex gap-4 font-proto text-sm">
		<span class="tag border-accent-fg bg-dim-bg uppercase text-fg">{post.type}</span>
		{#if post.collection}
			<span class="tag border-yellow-fg bg-blue-bg text-fg">SERIES: {post.collection}</span>
		{/if}
	</div>

	<div class="text-sm text-dim-fg">
		{post.date} · {post.reading_time.minutes} minute read
	</div>

	<div class="flex flex-col">
		<h1 class="font-proto text-xl text-fg">{post.title}</h1>
		<p class="text-base text-dim-fg">{post.description}</p>
	</div>

	{#if post.cover_image}
		<img class="h-auto w-full mix-blend-lighten" src={post.cover_url ?? `/static/blog/${post.slug}/cover.webp`} alt="" />
	{/if}
</header>
