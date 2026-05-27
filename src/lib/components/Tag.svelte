<script lang="ts">
	import type { ExternalHref } from '$lib/types';

	type TagColor = 'magenta' | 'green' | 'blue' | 'dim';
	type TagIcon = 'web' | 'github' | 'org' | 'none';

	type Props = {
		title?: string;
		href?: ExternalHref;
		icon?: TagIcon;
		color?: TagColor;
		ariaLabel?: string;
	};

	let { title, href, icon = 'none', color = 'magenta', ariaLabel }: Props = $props();

	const colorClass: Record<TagColor, string> = {
		magenta: 'bg-magenta-bg text-fg',
		green: 'bg-green-bg text-fg',
		blue: 'bg-blue-bg text-fg',
		dim: 'bg-dim-bg text-fg'
	};

	const iconLabel: Record<TagIcon, string> = {
		web: 'web',
		github: 'github',
		org: 'org',
		none: ''
	};

	const external = $derived(href !== undefined);
	const classes = $derived(
		`inline-flex w-fit items-center gap-1 px-1 text-sm no-underline hover:underline ${colorClass[color]}`
	);
</script>

{#if href}
	<a class={classes} href={href} target="_blank" rel="external noreferrer" aria-label={ariaLabel}>
		{#if icon !== 'none'}
			<span class="text-sm text-accent-fg" aria-hidden="true">{iconLabel[icon]}</span>
		{/if}
		<span>{title}</span>
		{#if external}
			<span class="text-accent-fg" aria-hidden="true">↗</span>
		{/if}
	</a>
{:else}
	<span class={classes} aria-label={ariaLabel}>
		{#if icon !== 'none'}
			<span class="text-sm text-accent-fg" aria-hidden="true">{iconLabel[icon]}</span>
		{/if}
		<span>{title}</span>
	</span>
{/if}
