<script lang="ts">
	import BlogPostHeader from '$lib/components/BlogPostHeader.svelte';

	import type { BlogMetadata } from '$lib/types';
	import type { Component } from 'svelte';

	type BlogModule = {
		default: Component;
	};

	const modules = import.meta.glob<BlogModule>('/src/content/blog/**/*.{svx,md}', {
		eager: true,
	});

	let { data }: { data: { post: BlogMetadata } } = $props();

	const Content = $derived(getContent(data.post.source_path));

	function getContent(sourcePath: string) {
		const module = modules[sourcePath];
		if (!module) {
			throw new Error(`Missing blog content component for ${sourcePath}`);
		}

		return module.default;
	}
</script>

<svelte:head>
	<title>{data.post.title} · esskayesss.</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<article class="flex flex-col gap-6">
	<BlogPostHeader post={data.post} />
	<div class="blog-prose prose border border-ghost bg-accent-bg p-6">
		<Content />
	</div>
</article>
