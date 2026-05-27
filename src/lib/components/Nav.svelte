<script lang="ts">
	import { resolve } from '$app/paths';

	const links = [
		{ label: 'home', href: resolve('/') },
		{ label: 'projects', href: resolve('/projects') },
		{ label: 'blog', href: resolve('/blog') },
		{ label: 'support', href: resolve('/support') }
	];
</script>

<nav class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" aria-label="Primary navigation">
	{#each links as link (link.href)}
		<a href={link.href}>{link.label}</a>
	{/each}
</nav>
