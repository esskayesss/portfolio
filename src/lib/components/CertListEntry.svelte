<script lang="ts">
	import type { CertificationMetadata } from '$lib/types';

	type Props = {
		certification: CertificationMetadata;
	};

	let { certification }: Props = $props();

	const issuerIcon: Record<CertificationMetadata['issuer'], string> = {
		Coursera: 'course',
		Kaggle: 'kaggle',
		Contest: 'award'
	};
</script>

<article class="flex flex-col gap-1">
	<div class="flex items-center justify-between gap-4">
		<h2>{certification.title}</h2>
		<span class="bg-dim-bg px-1 text-sm text-accent-fg" aria-label={certification.issuer}>{issuerIcon[certification.issuer]}</span>
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
