<script lang="ts">
	import { currentExperience, previousExperience } from '$lib/experience';
	import ExperienceEntry from './ExperienceEntry.svelte';

	let showPrevious = $state(false);
</script>

<div class="flex flex-col gap-3">
	<ExperienceEntry experience={currentExperience} />

	<button
		type="button"
		class="flex w-fit cursor-pointer items-center gap-1 py-2 text-xs text-fg select-none hover:text-accent-fg"
		aria-expanded={showPrevious}
		onclick={() => (showPrevious = !showPrevious)}
	>
		<span class={showPrevious ? 'text-accent-fg' : 'text-dim-fg'} aria-hidden="true">{showPrevious ? '▴' : '▾'}</span>
		<span>{showPrevious ? 'Hide' : 'Show'} Previous Roles</span>
	</button>

	{#if showPrevious}
		<div class="flex flex-col gap-3">
			{#each previousExperience as experience (experience.position)}
				<ExperienceEntry {experience} />
			{/each}
		</div>
	{/if}
</div>
