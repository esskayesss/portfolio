<script lang="ts">
	import Icon from '@iconify/svelte';
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

	const iconName: Record<TagIcon, string> = {
		web: 'ph:globe-simple',
		github: 'ph:github-logo',
		org: 'ph:buildings',
		none: ''
	};

	const external = $derived(href !== undefined);
	const classes = $derived(
		`tag-link group inline-flex w-fit items-center gap-1 px-1 text-sm !text-fg no-underline underline-offset-4 hover:!text-fg hover:underline ${colorClass[color]}`
	);
</script>

{#if href}
	<a class={classes} href={href} target="_blank" rel="external noreferrer" aria-label={ariaLabel}>
		{#if icon !== 'none'}
			<Icon icon={iconName[icon]} class="size-[1.8rem] shrink-0" aria-hidden="true" />
		{/if}
		<span>{title}</span>
		{#if external}
			<Icon icon="ph:arrow-up-right" class="size-[1.6rem] shrink-0 text-accent-fg transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
		{/if}
	</a>
{:else}
	<span class={classes} aria-label={ariaLabel}>
		{#if icon !== 'none'}
			<Icon icon={iconName[icon]} class="size-[1.8rem] shrink-0" aria-hidden="true" />
		{/if}
		<span>{title}</span>
	</span>
{/if}
