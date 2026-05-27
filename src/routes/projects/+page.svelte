<script lang="ts">
	import ProjectListEntry from '$lib/components/ProjectListEntry.svelte';
	import { projects } from '$lib/projects';
	import { canonicalUrl } from '$lib/site';

	const description = 'Projects and experiments by Saurabh Sharma.';
</script>

<svelte:head>
	<title>projects · esskayesss.</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="projects · esskayesss." />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl('/projects')} />
	<link rel="canonical" href={canonicalUrl('/projects')} />
</svelte:head>

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
