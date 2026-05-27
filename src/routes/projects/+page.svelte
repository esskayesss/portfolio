<script lang="ts">
	import ProjectListEntry from '$lib/components/ProjectListEntry.svelte';
	import { projects } from '$lib/projects';
</script>

<section>
	<div class="heading">
		<h1>Projects</h1>
	</div>

	<div class="content">
		{#each projects as project (project.title)}
			<div class="border border-ghost p-4">
				<ProjectListEntry {project} />
			</div>
		{/each}
	</div>
</section>
