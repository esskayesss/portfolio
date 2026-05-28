<script lang="ts">
	import Icon from '@iconify/svelte';
	import { socials } from './socials';
</script>

<nav class="flex place-content-around border border-ghost p-4 text-2xl" aria-label="Social links">
	{#each socials as social (social.href)}
		<a class={`text-fg no-underline ${social.hoverClass} hover:no-underline`}
			href={social.href}
			target={social.href.startsWith('mailto:') ? undefined : '_blank'}
			rel="external noopener noreferrer"
			aria-label={social.label}
			title={social.label}
		>
			<Icon icon={social.icon} aria-hidden="true" />
		</a>
	{/each}
</nav>
