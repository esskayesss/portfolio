<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PodcastPlayer from '$lib/components/PodcastPlayer.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>esskayesss.</title>
	<meta name="description" content="saurabh sharma's personal website." />
	<meta
		name="keywords"
		content="Saurabh, Saurabh Sharma, esskayesss, esskayesss_, SWE, Portfolio, Projects, Technical Blog, Programming"
	/>
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
