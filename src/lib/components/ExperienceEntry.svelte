<script lang="ts">
	import type { ExperienceMetadata } from '$lib/types';
	import Tag from './Tag.svelte';

	type Props = {
		experience: ExperienceMetadata;
	};

	let { experience }: Props = $props();
</script>

<article class="flex flex-col gap-1">
	<div class="flex items-center justify-between gap-4">
		<h2 class="text-base text-fg">{experience.position}</h2>
		{#if experience.website}
			<Tag href={experience.website} title={experience.org} icon="org" color="magenta" />
		{:else}
			<Tag title={experience.org} icon="org" color="magenta" />
		{/if}
	</div>
	<div class="flex items-center justify-between gap-4 text-xs text-dim-fg">
		<span>{experience.timeline}</span>
		<span>{experience.location}</span>
	</div>
	{#if experience.description}
		<p class="pt-2 text-sm text-subtext">{experience.description}</p>
	{/if}
</article>
