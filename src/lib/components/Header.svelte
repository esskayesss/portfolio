<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import logo from '$lib/assets/logo.webp?enhanced';
	import Icon from '@iconify/svelte';
	import Nav from './Nav.svelte';

	const isBlog = $derived(page.url.pathname.startsWith('/blog'));
</script>

<header
	class="sticky top-0 left-0 z-10 mx-auto flex w-full max-w-6xl justify-between bg-bg py-4 pt-8 shadow-bg shadow-lg print:static print:mt-8 print:shadow-none"
>
	<div class="flex items-center gap-2 no-underline">
		<a class="flex items-center gap-2 font-proto text-xl no-underline" href={resolve('/')}>
			<enhanced:img class="size-7 opacity-90" src={logo} alt="" aria-hidden="true" />
			<span class="font-proto text-xl leading-none">esskayesss</span>
		</a>
		{#if isBlog}
			<a
				class="h-fit rounded-full border border-accent-fg bg-dim-bg px-4 py-0.5 text-xs leading-none text-fg no-underline"
				href={resolve('/blog')}
			>
				BLOG
			</a>
		{/if}
	</div>
	<div class="flex items-center gap-4 text-3xl print:hidden">
		{#if isBlog}
			<a class="cursor-pointer text-fg no-underline" href={resolve('/blog/search')} aria-label="Search blog">
				<Icon icon="ph:magnifying-glass" aria-hidden="true" />
			</a>
		{/if}
		<Nav />
	</div>
</header>
