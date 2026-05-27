<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PodcastPlayer from '$lib/components/PodcastPlayer.svelte';
	import { siteName } from '$lib/site';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="keywords"
		content="Saurabh, Saurabh Sharma, esskayesss, esskayesss_, SWE, Portfolio, Projects, Technical Blog, Programming"
	/>
	<meta property="og:site_name" content={siteName} />
	<meta name="twitter:card" content="summary" />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-dvh flex-col">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
	<PodcastPlayer />
</div>
