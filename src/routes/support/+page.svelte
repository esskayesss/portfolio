<script lang="ts">
	import supportBanner from '$lib/assets/support.webp?enhanced';
	import SupportUpiCard from '$lib/components/SupportUpiCard.svelte';
	import SupportLinks from '$lib/components/SupportLinks.svelte';
	import { canonicalUrl } from '$lib/site';

	const description = 'Support esskayesss by sponsoring him on GitHub or subscribing on X.';
</script>

<svelte:head>
	<title>support esskayesss.</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="support esskayesss." />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl('/support')} />
	<link rel="canonical" href={canonicalUrl('/support')} />
</svelte:head>

<section>
	<div class="heading">
		<h1>support esskayesss.</h1>
	</div>
	<div class="content">
		<p>
			If my writing, open-source work, or projects helped you, you can support future work through
			GitHub Sponsors or X subscriptions.
		</p>
	</div>
</section>

<section>
	<SupportUpiCard />
</section>

<section>
	<div class="heading">
		<h1>Other ways to support me</h1>
	</div>

	<div class="flex flex-col gap-4 border border-ghost">
		<div class="aspect-support-banner overflow-hidden bg-dim-bg">
			<enhanced:img class="h-full w-full object-cover" src={supportBanner} alt="Support esskayesss" sizes="min(72rem, 100vw)" />
		</div>
	</div>
  <SupportLinks />
</section>
