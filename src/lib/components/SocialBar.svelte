<script lang="ts">
	import { socials } from './socials';
</script>

<nav class="grid grid-cols-2 gap-2 border border-ghost p-4 text-sm sm:grid-cols-3" aria-label="Social links">
	{#each socials as social (social.href)}
		<a
			class="text-fg no-underline hover:text-accent-fg hover:no-underline"
			href={social.href}
			target="_blank"
			rel="external noreferrer"
			aria-label={social.label}
		>
			{social.label}
		</a>
	{/each}
</nav>
