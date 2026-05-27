<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { canonicalUrl } from '$lib/site';

	const isNotFound = $derived(page.status === 404);
	const title = $derived(isNotFound ? 'A+ for trying | esskayesss.' : `${page.status} | esskayesss.`);
	const message = $derived(
		isNotFound
			? 'The page exists in your heart. Just not on this server.'
			: page.error?.message || 'Something went sideways.'
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="robots" content="noindex" />
	<link rel="canonical" href={canonicalUrl('/404')} />
</svelte:head>

<section class="flex flex-col items-center justify-center gap-12 py-24 text-center">
	<div class="flex flex-col items-center gap-2 text-fg">
		<div class="font-headings flex items-baseline gap-4">
			<span class="text-3xl text-accent-fg">{page.status}</span>
			<h1 class="text-lg normal-case">{isNotFound ? 'A+ For effort' : 'Unexpected detour'}</h1>
		</div>
		<p class="max-w-prose text-center text-dim-fg">{message}</p>
	</div>

	<a href={resolve('/')} class="btn">Back to Reality</a>
</section>
