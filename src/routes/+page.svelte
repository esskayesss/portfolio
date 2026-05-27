<script lang="ts">
	import { resolve } from '$app/paths';
	import { latestBlogPosts } from '$lib/blogs';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import CertListEntry from '$lib/components/CertListEntry.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import ProjectListEntry from '$lib/components/ProjectListEntry.svelte';
	import SocialBar from '$lib/components/SocialBar.svelte';
	import { certifications } from '$lib/certifications';
	import { featuredProjects } from '$lib/projects';
</script>

<section>
	<div class="heading">
		<h1>Hi! I'm Saurabh Sharma. 👋</h1>
	</div>
	<div class="content">
		<p>
			I’m a final year CS student. I build things from scratch and peek behind abstractions. I'm obsessed with understanding how computers work at their lowest levels – both in silicon and software. You'll find me writing C and Zig, implementing protocols from scratch or tinkering with hardware. I value curiosity, first principles thinking, and getting my hands dirty with fundamentals. When I'm not coding close to the metal, I'm probably exploring new languages or rebuilding tools to figure out how they work.
		</p>
		<SocialBar />
	</div>
</section>

<section>
	<div class="heading">
		<h1>Projects</h1>
		<a href={resolve('/projects')}>See All</a>
	</div>
	<div class="content">
		{#each featuredProjects.slice(0, 3) as project (project.title)}
			<ProjectListEntry {project} />
		{/each}
	</div>
</section>

<section>
	<h1>Currently</h1>
	<ExperienceSection />
</section>

<section>
	<div class="heading">
		<h1>latest articles</h1>
		<a href={resolve('/blog')}>See All</a>
	</div>
	<div class="content">
		{#if latestBlogPosts.length > 0}
			{#each latestBlogPosts as post (post.slug)}
				<BlogCard {post} />
			{/each}
		{:else}
			<p>No posts published yet.</p>
		{/if}
	</div>
</section>

<section>
	<div class="heading">
		<h1>certifications and achievements</h1>
	</div>
	<div class="content">
		{#each certifications as certification (certification.title)}
			<CertListEntry {certification} />
		{/each}
	</div>
</section>
