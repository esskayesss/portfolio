<script lang="ts">
	import { resolve } from '$app/paths';
	import type { ProjectMetadata } from '$lib/types';
	import { externalHost, githubHref } from '$lib/url';
	import Tag from './Tag.svelte';

	type Props = {
		project: ProjectMetadata;
	};

	let { project }: Props = $props();

	const websiteHost = $derived(project.website ? externalHost(project.website) : undefined);
	const githubUrl = $derived(project.github ? githubHref(project.github) : undefined);
	const blogHref = $derived(project.blog ? resolve('/blog/[slug]', { slug: project.blog }) : undefined);
</script>

<article class="flex flex-col gap-1">
	<div class="flex items-center justify-between gap-4">
		<span class="text-base text-fg">{project.title}</span>
		<div class="flex flex-wrap justify-end gap-1">
			{#if project.website}
				<Tag href={project.website} title={websiteHost} icon="web" color="magenta" />
			{/if}
			{#if project.github && githubUrl}
				{@const githubTitle = project.website ? 'source' : project.github}
				<Tag href={githubUrl} title={githubTitle} icon="github" color="dim" ariaLabel={`${githubTitle} on GitHub`} />
			{/if}
		</div>
	</div>
	<p class="text-dim-fg leading-snug">
		{project.description}
		{#if blogHref}
			<a class="mx-2 text-blue-fg no-underline hover:underline" href={blogHref}>Read the full writeup here.</a>
		{/if}
	</p>
</article>
