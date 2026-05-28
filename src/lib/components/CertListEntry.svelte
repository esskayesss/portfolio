<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { CertificationMetadata } from '$lib/types';

	type Props = {
		certification: CertificationMetadata;
	};

	let { certification }: Props = $props();

	const issuerIcon: Record<CertificationMetadata['issuer'], string> = {
		Coursera: 'ph:certificate',
		Kaggle: 'ph:chart-line-up',
		Contest: 'ph:trophy'
	};
</script>

<article class="flex flex-col gap-1">
	<div class="flex items-center justify-between gap-4">
		<h2 class="text-fg">{certification.title}</h2>
		<span class="inline-flex text-xl text-accent-fg" aria-label={certification.issuer}>
			<Icon icon={issuerIcon[certification.issuer]} aria-hidden="true" />
		</span>
	</div>
	<p class="text-dim-fg">
		<span>{certification.description}</span>
		{#if certification.link}
			<a href={certification.link.href} target="_blank" rel="external noreferrer">{certification.link.label}</a>
		{/if}
		{#if certification.suffix}
			<span>{certification.suffix}</span>
		{/if}
	</p>
</article>
