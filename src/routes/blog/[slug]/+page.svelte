<script lang="ts">
	import BlogPodcastAction from '$lib/components/BlogPodcastAction.svelte';
	import BlogPostHeader from '$lib/components/BlogPostHeader.svelte';
	import { canonicalUrl } from '$lib/site';

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
	<meta name="keywords" content={data.post.tags.join(', ')} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${data.post.title} · esskayesss.`} />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:url" content={canonicalUrl(`/blog/${data.post.slug}`)} />
	<meta property="article:published_time" content={data.post.sort_date} />
	{#each data.post.tags as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}
	<link rel="canonical" href={canonicalUrl(`/blog/${data.post.slug}`)} />
</svelte:head>

<article class="flex flex-col gap-12 pb-24">
	<BlogPostHeader post={data.post} />
	<BlogPodcastAction slug={data.post.slug} title={data.post.title} />
	<div class="blog-prose prose">
		<Content />
	</div>
</article>
