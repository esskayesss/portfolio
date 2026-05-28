<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';

	const links = [
		{ label: 'home', href: resolve('/') },
		{ label: 'projects', href: resolve('/projects') },
		{ label: 'blog', href: resolve('/blog') }
	];

	let isOpen = $state(false);

	const closeMenu = () => {
		isOpen = false;
	};

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	const isActive = (href: string) => {
		const pathname = page.url.pathname;
		return href === resolve('/') ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
	};

	$effect(() => {
		document.documentElement.classList.toggle('scroll-locked', isOpen);

		return () => {
			document.documentElement.classList.remove('scroll-locked');
		};
	});
</script>

<div class="relative print:hidden">
	<button
		type="button"
		class="relative z-50 flex text-3xl hover:text-fg"
		aria-label={isOpen ? 'Close menu' : 'Open menu'}
		aria-expanded={isOpen}
		onclick={toggleMenu}
	>
		<Icon icon={isOpen ? 'ph:x' : 'ph:list'} aria-hidden="true" />
	</button>

	{#if isOpen}
		<button
			type="button"
			class="motion-backdrop fixed inset-0 z-40 cursor-default bg-transparent backdrop-blur-sm"
			aria-label="Close menu backdrop"
			onclick={closeMenu}
		></button>
		<div class="motion-panel absolute top-full right-0 z-50 my-4 border-2 border-accent-fg bg-bg px-8 py-10 shadow-shell">
			<nav class="flex min-w-60 flex-col items-end gap-6 font-proto text-xl" aria-label="Primary navigation">
				{#each links as link (link.href)}
					<a
						class={`flex items-center gap-1 px-2 whitespace-nowrap no-underline hover:bg-blue-bg hover:no-underline ${
							isActive(link.href) ? 'bg-dim-bg text-blue-fg' : 'text-fg'
						}`}
						href={link.href}
						onclick={closeMenu}
					>
						{link.label}
					</a>
				{/each}
				<a
					class="flex items-center gap-1 px-2 whitespace-nowrap text-fg no-underline hover:bg-ghost hover:no-underline"
					href={asset('/resume.pdf')}
					onclick={closeMenu}
				>
					resume <Icon class="text-lg" icon="ph:file-pdf" aria-hidden="true" />
				</a>
				<a
					class="flex items-center gap-1 bg-yellow-bg px-2 whitespace-nowrap text-yellow-fg no-underline hover:text-yellow-fg hover:no-underline"
					href={resolve('/support')}
					onclick={closeMenu}
				>
					support me
				</a>
			</nav>
		</div>
	{/if}
</div>
