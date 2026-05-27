<script lang="ts">
	import { asset } from '$app/paths';
	import SupportUpiCard from '$lib/components/SupportUpiCard.svelte';
	import SupportLinks from '$lib/components/SupportLinks.svelte';
</script>

<svelte:head>
	<title>support esskayesss.</title>
	<meta
		name="description"
		content="Support esskayesss by sponsoring him on GitHub or subscribing on X."
	/>
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
		<SupportLinks />
	</div>
</section>

<section>
	<SupportUpiCard />
</section>

<section>
	<div class="heading">
		<h1>Other ways to support me</h1>
	</div>

	<div class="flex flex-col gap-4 border border-ghost bg-accent-bg p-4">
		<div class="aspect-support-banner overflow-hidden bg-dim-bg">
			<img
				class="h-full w-full object-cover"
				src={asset('/support.webp')}
				alt="Support esskayesss"
				width="1200"
				height="240"
			/>
		</div>

		<SupportLinks />
	</div>
</section>
